// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xnfuadnvnjvbplkiswap.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZnVhZG52bmp2YnBsa2lzd2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTE1MzIsImV4cCI6MjA2MDgyNzUzMn0.kBBD2zLp3XQ28-420dmhGD37bRX5394FHtfBcLu6XrQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);