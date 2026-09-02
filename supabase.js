const SUPABASE_URL = "https://tfzzzchrbntvzutfskyn.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_R7E5xXV611vFqkWWY5qwcg_wtW3ERZO";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
