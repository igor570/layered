import { createClient } from '@supabase/supabase-js';

export const db = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_API_KEY')!);
