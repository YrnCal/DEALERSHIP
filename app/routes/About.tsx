import React from "react";
import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div className="container bg-gray-300 p-8">
      <section className="text-center mb-8 w-full h-full">
        <div className="bg-blue-950">
          <h1 className="text-6xl font-extrabold md:text-4xl text-white p-4 rounded-lg">
            About Us
          </h1>
        </div>

        <div className="flex flex-col  items-center justify-center font-medium mx-auto w-3/4">
          <p className="mt-4 text-black font-medium text-center ">
            AutoVero is a car dealership that incorporated in Kenya that deals
            with the importation and sale of new and second-hand vehicles. We
            pride ourselves in offering quality, and carefully sourced vehicles
            guided by our integral values, and an insatiable desire to satsify
            customer specifications. Vehicles in our dealership are sourced from
            Japan, South Africa, the United Kingdom, Australia, Thailand and
            Germany to ensure variety of units to meet customer demand. At
            AutoVero Motors,we are more than just a car dealership. We are your
            trusted partner in finding the perfect vehicle. Our ethos is built
            on a foundation of core values that guide everything we do.
          </p>
        </div>

        <div>
          <h2 className="text-3xl text-blue-500 text-center mt-8 font-bold mb-3">
            {" "}
            Core Values
          </h2>
        </div>

        <ol className="w-full grid sm:grid-cols-1 md:grid-cols-3  gap-6 align-middle ">
          <li className="bg-white rounded-md shadow-md p-8">
            <h3 className="text-4xl font-semibold text-blue-500">
              Quality Above all
            </h3>
            <p className="mt-2 leading-relaxed text-black">
              We are committed to offering only the highest-quality vehicles.
              Every car in our inventory undergoes rigorous inspections to
              ensure it meets our strict standards for performance, safety, and
              reliability.
            </p>
          </li>

          <li className="bg-white rounded-md shadow-md p-8">
            <h3 className="text-4xl font-semibold text-blue-500">
              Trust and Transparency
            </h3>
            <p className="mt-2 leading-relaxed text-black">
              We believe in building lasting relationships with our customers.
              That's why we prioritize honesty and transparency in every
              interaction, from pricing to vehicle history. You can trust us to
              provide clear, straightforward information.
            </p>
          </li>

          <li className="bg-white rounded-md shadow-md p-8">
            <h3 className="text-4xl font-semibold text-blue-500">
              Affordability for Everyone
            </h3>
            <p className="mt-2 leading-relaxed text-black">
              Everyone deserves access to a great car. We work tirelessly to
              provide competitive pricing, flexible financing options, and
              value-packed deals to fit your budget without compromising on
              quality.
            </p>
          </li>

          <li className="bg-white rounded-md shadow-md p-8">
            <h3 className="text-4xl font-semibold text-blue-500">
              Customer-centered Approach
            </h3>
            <p className="mt-2 leading-relaxed text-black">
              Your needs come first. Our team takes the time to understand your
              lifestyle, preferences, and budget to help you find the perfect
              vehicle that matches your unique requirements.
            </p>
          </li>

          <li className="bg-white rounded-md shadow-md p-8">
            <h3 className="text-4xl font-semibold text-blue-500">
              Community and Sustainability
            </h3>
            <p className="mt-2 leading-relaxed text-black">
              We care about the communities we serve and the planet we share.
              That is why we are dedicated to offering eco-friendly vehicle
              options and supporting local initiatives that make a difference.
            </p>
          </li>

          <li className="bg-white rounded-md shadow-md p-8">
            <h3 className="text-4xl font-semibold text-blue-500">
              Innovation and Excellence
            </h3>
            <p className="mt-2 leading-relaxed text-black">
              We stay ahead of the curve by embracing the latest automotive
              technologies and trends. Our goal is to provide you with
              cutting-edge vehicles and a seamless buying experience.
            </p>
          </li>
        </ol>
      </section>

      {/* {Company Story} */}
      <section className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/2025-audi-rs-q8-147-6679bc6c90da8.jpg?crop=0.609xw:0.457xh;0.123xw,0.271xh&resize=1200:*"
          alt="audi-rsq8"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-500 text-center">
            Our Story
          </h2>
          <p className="leading-relaxed text-gray-950">
            Founded in 2023 AutoVero Motors began with the idea to make motor
            vehicle purchases easier, transparent and stress-free for everyone.
            Our founder Mr Kodak grew up as an ardent car-lover, attending car
            eventsall through childhood with his father and fixing his
            father'car as a teenager.
          </p>
          <p className="leading-relaxed text-gray-950 mt-1">
            After years of seeing people across the country end up as victims of
            fraudulent dealers and overpricing, Mr Kodak decided to begin an
            enterprise based on tranparency, affordability, and genuine love for
            quality cars. <br />
            Whether you are a first-time buyer or a seasoned enthusiast the team
            at AutoVero will always make sure that your purchase experience
            simpleand enjoyable. Not forgetting we have the most competitive
            prices in the market right now.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="py-12">
        <h2 className="text-3xl text-center font-bold text-blue-500 mb-8 ">
          What we do
        </h2>
        {
          <div className="flex flex-wrap justify-center gap-8">
            {whatWeDo.map((whatWeDo, index) => (
              <div
                key={index}
                className="border bg-white flex flex-col items-center justify-center hover:bg-amber-400 transition-colors duration-300 gap-2 w-72 p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-800 mb-2 text-center font-bold ">
                  {whatWeDo.work}
                </p>
                <h4 className="font-medium mt-3 text-gray-950">
                  {whatWeDo.description}
                </h4>
              </div>
            ))}
          </div>
        }
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-950 text-center">
          Come Discover Your Dream Car Today
        </h2>
        <p>Check out our inventory and find the perfect ride to drive home</p>
        <Link
          to="/Inventory"
          className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View Inventory
        </Link>
      </section>

      <section>
        <footer className="bg-gray-900 text-white mt-6 py-8">
          <div className="container grid grid-cols-1 md:grid-cols-3 px-4 gap-6 mx-auto text-center md:text-right ">
            {/* {Company information} */}
            <div>
              <h2 className="text-3xl font-bold text-yellow-300">
                AutoVero Motors
              </h2>
              <p className="text-xl font-medium text-yellow-300">
                Delivering quality vehicles one client at a time.
              </p>
            </div>

            {/* {Quick Links} */}
            <div>
              <ul>
                <li>
                  <Link to="/" className="hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Inventory" className="hover:text-blue-500">
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="hover:text-blue-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" className="hover:text-blue-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* {Contact Information} */}
            <div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p>
                <a href="+254791907848" className="hover:text-yellow-200">
                  +254791907848
                </a>
              </p>
            </div>

            <div>
              <p className="text-white font-bold text-xl">
                AutoVero Motors. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

let whatWeDo = [
  {
    work: "Vehicle Inspection",
    description:
      "At AutoVero we find the best units available for our customers. Our customers give us their budgets and preferences with which we work around to ensure they get value fortheir money and are satisfied.",
  },
  {
    work: "Assistance with Transfers",
    description:
      "Ensuring smooth vehicle transfers with ease for our buyers and our suppliers. Our staff and systems ensure satisfaction and efficiency in all operations concerning your car purchases.",
  },
  {
    work: "Vehicle Inspection",
    description:
      "Offering comprehensive vehicle inspection services to ensure car health and integrity. At Autovero we inspect all units we source for our clients using a special 15-point checklist. Reach out to us for our comprehensive inspection services.",
  },
  {
    work: "Consultation on vehicle issues",
    description:
      "We offer consultancy services that are custom-made for car dealers, customers, and agents to ensure that you overcome some of the challenges and complexities of the ever-changing automotive industry.",
  },
];
