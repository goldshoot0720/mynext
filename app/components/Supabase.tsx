import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://lgztvgybalhvppkfpwdc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenR2Z3liYWxodnBwa2Zwd2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDkwMTQsImV4cCI6MjA1OTkyNTAxNH0.JfB6J38LmdlvUwIgkdRmQcBDnv6OzFaA-D27S0ylVnA"
);

export async function SupabaseSelect(tableName: string) {
    const { data, error } = await supabase.from(tableName).select();
    return { data, error };
  }
