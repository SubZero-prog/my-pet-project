// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rehxexwccgzuzhfbpfek.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlaHhleHdjY2d6dXpoZmJwZmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMjc3MDcsImV4cCI6MjA1NzcwMzcwN30.fOg6uaTAVN2d7ClwICgwbNA8F8kPhnVDza6cxj7hpSk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);