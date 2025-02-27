import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";
import { client } from "~/utils/connection";
import { Key } from "react";
import { error } from "node:console";
import { cars } from "~/CarData/cars";

interface CarType {
  _id: string;
  image: string;
  model: string;
  price: string;
  description: string;
  yom: number;
  fuelType: string;
  mileage: string;
}

export const loader: LoaderFunction = async () => {
  try {
    await client.connect();
    const db = client.db("AUTOVERO");
    const cars = await db.collection("cars").find().toArray();

    const formattedCars = cars.map((car) => ({
      ...car,
      _id: car._id.toString(),
    }));

    return json(formattedCars);
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return json({ error: "Failed to fetch cars" }, { status: 500 });
  } finally {
    await client.close();
  }
};

export default function Inventory() {
  const cars = useLoaderData<CarType[]>();
  console.log("cars data:", cars);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Car Inventory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {cars.map((cars: CarType) => (
          <div key={cars._id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={cars.image}
              alt={cars.model}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{cars.model}</h2>
            <p>{cars.description}</p>
            <p className="text-gray-600">Year: {cars.yom}</p>
            <p className="text-gray-600">Mileage: {cars.mileage} km</p>
            <p className="text-green-600 font-bold">Ksh {cars.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
// function connection() {
//   throw new Error("Function not implemented.");
// }
