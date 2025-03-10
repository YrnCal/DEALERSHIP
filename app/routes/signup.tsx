import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with safety check
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL and Anon Key must be provided in environment variables."
  );
}
const supabase = createClient(supabaseUrl, supabaseKey);

// Type the action return value for clarity
export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return json({ error: "Email and password are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (password.length < 6) {
    return json(
      { error: "Password must be at least 6 characters long." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    // Map Supabase errors to user-friendly messages
    const errorMessage = error.message.includes("already registered")
      ? "This email is already registered."
      : "Signup failed. Please try again.";
    return json({ error: errorMessage }, { status: 400 });
  }

  // If email confirmation is required, inform the user
  if (!data.session) {
    return json({
      success: "Please check your email to confirm your account.",
    });
  }

  // If auto-login is enabled, redirect to a protected route
  return redirect("/dashboard");
};

export default function Signup() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <Form method="post" className="space-y-4 w-80">
        {actionData?.error && (
          <p className="text-red-500">{actionData.error}</p>
        )}
        {actionData?.success && (
          <p className="text-green-500">{actionData.success}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Sign Up
        </button>
      </Form>
      <p className="mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600">
          Login
        </a>
      </p>
    </div>
  );
}
