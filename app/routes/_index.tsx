import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Featured from "~/components/featured-cars";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-gray-300">
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
}
