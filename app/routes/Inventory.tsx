import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { client } from "~/utils/connection";
import { cars as dummyCars } from "~/CarData/cars"; // Using the dummy data as fallback

export interface CarType {
  _id: number;
  image: string;
  model: string;
  price: string;
  description: string;
  yom: number;
  fuelType: string;
  mileage: string;
  engine: string;
  transmission: string;
  color: string;
  condition: string;
  location: string;
  additionalImages: string[];
}

// Loader function with fallback to dummy data
export const loader: LoaderFunction = async () => {
  let client;
  try {
    client = await client();
    const db = client.db("AUTOVERO");
    const cars = await db.collection("cars").find().toArray();
    console.log("AUTOVERO db cars:", cars);

    if (!cars || cars.length === 0) {
      console.log("No cars in DB, falling back to dummy data");
      return json(dummyCars); // Fallback to dummy data if DB is empty
    }

    const formattedCars = cars.map((cars: any) => ({
      ...cars,
      _id: cars._id.toString(),
    }));

    return json(formattedCars);
  } catch (error) {
    console.error("Failed to fetch cars from MongoDB:", error);
    console.log("Using dummy data due to error");
    return json(dummyCars); // Fallback to dummy data on error
  }
};

export default function Inventory() {
  const data = useLoaderData<CarType[] | { error: string }>();
  console.log("Loader data:", data);

  if ("error" in data) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Car Inventory</h1>
        <p className="text-red-500">Error loading cars: {data.error}</p>
      </div>
    );
  }

  const cars = data as CarType[];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Car Inventory</h1>
      {cars.length === 0 ? (
        <p>No cars found in inventory</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cars.map((car) => (
            <div key={car._id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-40 object-cover rounded-lg"
                onError={(e) => {
                  console.log(`Failed to load image for ${car.model}`);
                  e.currentTarget.src = "/placeholder-image.jpg"; // Fallback image
                }}
              />
              <h2 className="text-xl font-semibold mt-2">{car.model}</h2>
              <p>{car.description}</p>
              <p className="text-gray-600">Year: {car.yom}</p>
              <p className="text-gray-600">Mileage: {car.mileage}</p>
              <p className="text-green-600 font-bold">{car.price}</p>
              <Link to={`/Inventory/${car._id}`} prefetch="intent">
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:shadow-md hover:bg-amber-500">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
