import { useLoaderData, useNavigate, Form } from "@remix-run/react";
import { loader, action } from "~/routes/auth/authentication";
import { supabase } from "~/utils/supabase";

export { loader, action };

export default function Authentication() {
  const { user } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };
  return (
    <div className="p-8">
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-red-600">You are not logged in.</p>
          <Form method="post" className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border p-2 mb-2 w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="border p-2 mb-2 w-full"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 w-full"
            >
              Login
            </button>
          </Form>
        </div>
      )}
    </div>
  );
}
