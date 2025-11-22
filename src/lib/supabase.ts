import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database
export type QuizResponse = {
  id?: string
  user_id?: string
  theme_id: string
  theme_title: string
  answers: Record<string, string | string[]>
  email?: string
  created_at?: string
  language: string
}

export type UserProfile = {
  id: string
  email: string
  created_at?: string
  preferred_language?: string
}
