import { createClient } from "@supabase/supabase-js";

let SUPABASE_URL = process.env.SUPABASE_URL!;
let SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

supabase.auth.onAuthStateChange((event, session) => {
  if (session) {
    localStorage.setItem("sb_session", JSON.stringify(session));
  } else {
    localStorage.removeItem("sb_session");
  }
});
