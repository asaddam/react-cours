import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://uvksxrolsnsygtrwdbin.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2a3N4cm9sc25zeWd0cndkYmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNDI4OTUsImV4cCI6MjAyODkxODg5NX0.BkamSaAvSgytAlozYs0Tvde4ap7c4qCO-HUI30dDaQg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
