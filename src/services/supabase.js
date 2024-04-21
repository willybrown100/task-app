import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://waretgndgxfapofyvqjh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhcmV0Z25kZ3hmYXBvZnl2cWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1MjI1MjYsImV4cCI6MjAyOTA5ODUyNn0.W6c0HZb4RX8nm20s2klwFOo72P7pmUJMdCjNQoFO4V0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;