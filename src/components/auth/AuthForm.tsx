"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Mail, Lock, Eye, EyeOff, Loader2, Sparkles, Github } from "lucide-react"
import { Language, translations } from "@/lib/i18n/translations"

type AuthFormProps = {
  mode: "login" | "signup"
  onSuccess: () => void
  onToggleMode: () => void
  language: Language
}

export function AuthForm({ mode, onSuccess, onToggleMode, language }: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (mode === "signup") {
        if (password !== confirmPassword) {
          setError(t.auth.passwordMismatch)
          setLoading(false)
          return
        }

        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              preferred_language: language
            }
          }
        })

        if (signUpError) throw signUpError

        // Save quiz responses if any exist in localStorage
        const savedQuizData = localStorage.getItem('lunna_quiz_data')
        if (savedQuizData) {
          const quizData = JSON.parse(savedQuizData)
          const { data: { user } } = await supabase.auth.getUser()
          
          if (user) {
            await supabase.from('quiz_responses').insert({
              user_id: user.id,
              theme_id: quizData.theme_id,
              theme_title: quizData.theme_title,
              answers: quizData.answers,
              email: email,
              language: language
            })
            localStorage.removeItem('lunna_quiz_data')
          }
        }

        alert(t.auth.signupSuccess)
        onSuccess()
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        })

        if (signInError) throw signInError

        alert(t.auth.loginSuccess)
        onSuccess()
      }
    } catch (err: any) {
      setError(mode === "login" ? t.auth.loginError : t.auth.signupError)
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) throw error
    } catch (err: any) {
      setError(`Erro ao fazer login com ${provider === 'google' ? 'Google' : 'GitHub'}`)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      <div className="w-full max-w-md">
        {/* Header with Lunna Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-6 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {mode === "login" ? t.auth.loginTitle : "Cria a tua conta"}
          </h1>
          <p className="text-gray-400">
            {mode === "login" 
              ? "Bem-vindo de volta à Lunna" 
              : "Junta-te à comunidade Lunna"}
          </p>
        </div>

        {/* Form Card with Blur Effect */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleOAuthLogin('google')}
              disabled={loading}
              className="w-full py-3.5 px-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 border border-gray-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar com Google
            </button>

            <button
              onClick={() => handleOAuthLogin('github')}
              disabled={loading}
              className="w-full py-3.5 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 border border-gray-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Github className="w-5 h-5" />
              Continuar com GitHub
            </button>
          </div>

          {/* Divider "ou" */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-800/50 text-gray-400 font-medium">ou</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t.common.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu email"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-white placeholder-gray-500 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t.common.password}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Sua senha"
                  required
                  minLength={6}
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-white placeholder-gray-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password (signup only) */}
            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.common.confirmPassword}
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repita a sua senha"
                    required
                    minLength={6}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-white placeholder-gray-500 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl">
                <p className="text-sm text-red-400 text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.common.loading}
                </>
              ) : (
                mode === "login" ? t.auth.loginButton : t.auth.signupButton
              )}
            </button>

            {/* Forgot Password (login only) */}
            {mode === "login" && (
              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Esqueceste-te da palavra-passe?
                </button>
              </div>
            )}
          </form>

          {/* Divider "ou" */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-800/50 text-gray-400 font-medium">ou</span>
            </div>
          </div>

          {/* Toggle Mode */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              {mode === "login" ? t.auth.noAccount : t.auth.hasAccount}
            </p>
            <button
              onClick={onToggleMode}
              className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
            >
              {mode === "login" ? t.auth.signupButton : t.auth.loginButton}
            </button>
          </div>
        </div>

        {/* Footer with Terms and Privacy */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-gray-500">
            Ao continuar, concordas com os nossos{" "}
            <button className="text-purple-400 hover:text-purple-300 transition-colors underline">
              Termos de Serviço
            </button>
            {" "}
            e{" "}
            <button className="text-purple-400 hover:text-purple-300 transition-colors underline">
              Política de Privacidade
            </button>
          </p>
          <p className="text-xs text-gray-600">
            © 2025 Lunna. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
