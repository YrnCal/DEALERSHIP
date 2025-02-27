import { Link } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <p className="text-6xl font-bold text-blue-900 ml-2">AutoVero Motors</p>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:text-right ">
          <Link to="/" className="hover:text-blue-500 ">
            Home
          </Link>
          <Link to="/Inventory" className="hover:text-blue-500">
            Inventory
          </Link>
          <Link to="/About" className="hover:text-blue-500">
            About Us
          </Link>
          <Link to="/contacts" className="hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* {Login button} */}

        <Link
          to="/login"
          className=" border  border-blue-500 px-4 py-2 hover:bg-green-400 text-white hidden md:inline-block md:right-2"
        >
          Login
        </Link>

        {/* {Mobile menu toggle} */}
        <button className="md:hidden p-3" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        {/* {Mobile menu} */}

        <div className="md:hidden bg-slate-950 text-white text-center py-4">
          <Link
            to="/"
            className="hover:block text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Inventory"
            className="hover:block text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Inventory
          </Link>
          <Link
            to="/About"
            className="hover:block text-green-500"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contacts"
            className="hover:block text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="hover:block text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
