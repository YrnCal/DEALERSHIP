import { useState } from "react";
import { Form } from "@remix-run/react";
import { Input } from "postcss";

export default function login() {
  let [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-4xl font-bold text-blue-400">Login</h1>
      {errorMessage && <p className="text-green-200">{errorMessage}</p>}
      <Form method="post" action="/auth">
        <input
          type="email"
          name="email"
          placeholder="email"
          className="w-full border border-black p-3 mb-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="w-full border border-black p-3 mb-2"
          required
        />
        <button
          type="submit"
          className=" border border-blue-500 px-4 py-2 hover:bg-green-400 text-white hidden md:inline-block md:right-2"
        >
          LOGIN
        </button>
      </Form>
    </div>
  );
}
