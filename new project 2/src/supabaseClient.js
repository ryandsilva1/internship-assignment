import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://jcbbvnpichqzipnktswb.supabase.co"  
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjYmJ2bnBpY2hxemlwbmt0c3diIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTM3MDQ1MCwiZXhwIjoyMDk2OTQ2NDUwfQ.Hiy2I1lTehQrUwisn8wktDhT7qnfk62Xai0qVCiFw74"                  

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)