import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://kzhrobuqcrihkmwejpnx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6aHJvYnVxY3JpaGttd2VqcG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3MjI4NDIsImV4cCI6MTk5MzI5ODg0Mn0.4ZQTHm-S5GQsJxCFgTSS7L_xreDg06JY9dCi0kz1SwQ"
export const supabase = createClient(supabaseUrl, supabaseKey)
