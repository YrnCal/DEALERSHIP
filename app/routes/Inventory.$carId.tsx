import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { cars as dummyCars, CarType } from "~/CarData/cars";
import { Key } from "react";

export const loader: LoaderFunction = async ({ params }) => {
  const carId = params.carId;
  const car = dummyCars.find((c) => c._id.toString() === carId?.toString());
  console.log("Car Found:", car);
  if (!car) {
    throw new Response("Car not found", { status: 400 });
  }
  return json(car);
};
export default function CarDetails() {
  const car = useLoaderData<CarType>();
  console.log("Car data in component:", car);
  console.log("Additional images:", car.additionalImages);

  return (
    <div className="max-w-6xl p-6 mx-auto">
      <h1 className="text-4xl font-extrabold text-blue-600">{car.model}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* {Main car image} */}
        <div>
          <img
            src={car.image}
            alt={car.model}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        {/* {Additional car images} */}
        <div className="flex mt-5 gap-3">
          {car.additionalImages && Array.isArray(car.additionalImages) ? (
            car.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${car.model} view ${index}`}
                className="w-32 h-32 object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-image.jpg";
                }}
              />
            ))
          ) : (
            <p>No additional images available</p>
          )}
        </div>
      </div>

      {/* { Car Details} */}
      <div>
        <p className="text-2xl text-teal-950 font-medium mb-3">
          {car.description}
        </p>
        <p className=" text-teal-950 font-medium mb-3">{car.price}</p>
        <ul className="mt-3 space-y-3">
          <li>
            <strong>Year:</strong>
            {car.yom}
          </li>
          <li>
            <strong>Mileage:</strong>
            {car.mileage}
          </li>
          <li>
            <strong>Fuel Type:</strong>
            {car.fuelType}
          </li>
          <li>
            <strong>Engine:</strong>
            {car.engine}
          </li>
          <li>
            <strong>Transmission:</strong>
            {car.transmission}
          </li>
          <li>
            <strong>Color:</strong>
            {car.color}
          </li>
          <li>
            <strong>Condition:</strong>
            {car.condition}
          </li>
          <li>
            <strong>Location:</strong>
            {car.location}
          </li>
        </ul>
      </div>

      <button
        className="px-6 py-3 bg-blue-500 hover:bg-amber-500 rounded-md text-white mt-3"
        onClick={() => window.history.back()}
      >
        Back to Inventory
      </button>
    </div>
  );
}

export function ErrorBoundary() {
  <div className="p-10">
    <h3 className="font-medium text-2xl text-teal-400">Car not found</h3>
    <p className="font-semibold text-black">
      The car you are looking for doesn't exist
    </p>
    <Link to="/Inventory" className="underline text-blue-600">
      Back to Inventory
    </Link>
  </div>;
}
