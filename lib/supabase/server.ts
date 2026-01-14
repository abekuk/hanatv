import { createClient } from "@supabase/supabase-js";

export function supabaseServer() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

  console.log("URL:", url);
  console.log("ANON PRESENT:", !!anon);
  console.log("SERVICE PRESENT:", !!service);
  console.log(
    "SERVICE PREFIX:",
    service ? service.slice(0, 10) : "NONE"
  );

  if (!url || !service) {
    throw new Error("Server env vars missing");
  }

  return createClient(url, service, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
