import { json, LoaderFunction, ActionFunction } from "@remix-run/node";
import { supabase } from "~/utils/supabase";
import { useLoaderData, useNavigate, useActionData } from "@remix-run/react";

// Handle login form submission
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return json({ error: error.message }, { status: 400 });
  }

  return json({ user: data.user });
};

// Load user session
export const loader: LoaderFunction = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return json({ user: user || null }); // Ensure `user` is never undefined
};

export default function Authentication() {
  const { user } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };
}
