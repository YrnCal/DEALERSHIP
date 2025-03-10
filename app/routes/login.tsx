import { useState } from "react";
import { Form, useActionData } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import { createClient } from "@supabase/supabase-js";
// import { action } from "./auth/authentication";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return json({ error: "All fields are required!" }, { status: 400 });
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return json({ error: error.message }, { status: 400 });
  }

  return redirect("/login");
};

export default function login() {
  let actionData = useActionData<typeof action>();
  let [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-4xl font-bold text-blue-400">Login</h1>
      {actionData?.error && (
        <p className="text-blue-700">{actionData?.error}</p>
      )}
      {errorMessage && <p className="text-green-500">{errorMessage}</p>}
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

      <p className="mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600">
          Sign Up
        </a>
      </p>
    </div>
  );
}
