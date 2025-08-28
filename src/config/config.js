
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fettqobvjitlyyflypop.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldHRxb2J2aml0bHl5Zmx5cG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0OTQzMzUsImV4cCI6MjA3MTA3MDMzNX0.QLoC4-m4cP9N7Uw7PGQbvirOh4PDtxM7kiR-cnw0gKA"
export const supabase = createClient(supabaseUrl, supabaseKey)