import { Links, Meta, Outlet } from "@remix-run/react";
import tailwindStyles from "./styles/tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: tailwindStyles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-100 text-gray-900">
        {/* <header className="bg-white shadow p-4">AutoVero Motors</header> */}
        <main className="p-4">
          <Outlet />
        </main>
        {/* <footer className="bg-gray-800 text-white p-4 text-center">
          © 2025 AutoVero Motors
        </footer> */}
      </body>
    </html>
  );
}
