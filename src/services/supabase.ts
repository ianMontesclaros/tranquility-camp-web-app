import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const imageBucketName = "cabin-images";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
