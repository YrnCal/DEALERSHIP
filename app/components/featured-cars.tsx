import { Link } from "@remix-run/react";

export default function Featured() {
  let cars = [
    {
      id: 1,
      model: "Mazda CX-5",
      image:
        "https://media.ed.edmunds-media.com/mazda/cx-5/2025/oem/2025_mazda_cx-5_4dr-suv_25-carbon-turbo_fq_oem_1_1280.jpg",
      price: "KSH 3.5M",
    },
    {
      id: 2,
      model: "Mercedes Benz S550",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuulznKrXCSBkfdqKldWCvZTHPVjo79Ondg&s",
      price: "KSH 15M",
    },
    {
      id: 3,
      model: "VW Touareg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2018_Volkswagen_Touareg_V6_R-Line_TDi_Automatic_3.0_Front.jpg/640px-2018_Volkswagen_Touareg_V6_R-Line_TDi_Automatic_3.0_Front.jpg",
      price: "KSH 6.4M",
    },
    {
      id: 4,
      model: "Nissan Patrol Y62",
      image: "https://i.ytimg.com/vi/pGe1PSETGWU/maxresdefault.jpg",
      price: "KSH 22M",
    },
    {
      id: 5,
      model: "BMW M5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXn3bKVlRkbOtGBGDtMxOK4emC9RDZ6nU6g&s",
      price: "KSH 19M",
    },
  ];
  return (
    <section className=" py-12  px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl md:text-3xl text-amber-500 font-bold mb-4">
          Featured Cars.
        </h2>
        <div className="grid md:grid-cols-5 gap-3">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={car.image}
                alt={car.model}
                className="w-full object-cover h-72"
              />
              <div className="p-2">
                <h3 className="font-bold text-xl md:text-2xl text-blue-900">
                  {car.model}
                </h3>
                <p className="font-semibold text-gray-700 mb-2">{car.price}</p>
                <Link
                  className="bg-green-300 hover:bg-blue-400 px-4 py-1 rounded-md mb-2 font-medium"
                  to={`/Inventory/${car.id}`}
                >
                  {" "}
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
