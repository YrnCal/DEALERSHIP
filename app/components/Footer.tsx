import { Link } from "@remix-run/react";

export default function Footer() {
  return (
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
              <Link to="/home" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/inventory" className="hover:text-blue-500">
                Inventory
              </Link>
            </li>
            <li>
              <Link to="/about us" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
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
  );
}
