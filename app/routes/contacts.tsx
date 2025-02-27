import { Link } from "@remix-run/react";

export default function Contacts() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('/contact-https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqSvbUaVOi89Gyk2cysuzw6WCyLM7klVYaQ&s')",
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
        <p className="text-lg text-gray-300 max-w-lg text-center mb-8">
          Have questions or inquiries? Fill out the form below, and we'll get
          back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center mt-16">
        <h2 className="text-2xl font-bold">Need immediate assistance?</h2>
        <p className="text-gray-300 mt-2">
          Call us at{" "}
          <span className="text-blue-400 font-bold">+254 791 907 848</span>
        </p>
      </div>

      {/* Footer */}
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
    </div>
  );
}
