"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Sparkles, Heart, Moon, CheckCircle2, Play, ArrowLeft, Flame, Scale, Activity, Baby, Users, Salad, Bed, Target, LogOut, User, BarChart3, Plus, Trash2, Save } from "lucide-react"
import { Language, translations } from "@/lib/i18n/translations"
import { themeQuizzes, QuizQuestion } from "@/lib/i18n/questions"
import { LanguageSelector } from "@/components/LanguageSelector"
import { AuthForm } from "@/components/auth/AuthForm"
import { Dashboard } from "@/components/Dashboard"
import { TutorialOverlay } from "@/components/TutorialOverlay"
import { PaymentModal } from "@/components/PaymentModal"
import { supabase } from "@/lib/supabase"
import { IntroVideo } from "@/components/teste2.mp4"

type Theme = {
  id: string
  icon: any
  color: string
}

type QuizAnswers = {
  [key: string]: string | string[]
}

type TableRow = {
  id: string
  question: string
  answer: string
}

const themes: Theme[] = [
  { id: "vida-sexual", icon: Flame, color: "from-red-500 to-pink-500" },
  { id: "emagrecer", icon: Scale, color: "from-green-500 to-teal-500" },
  { id: "entenda-corpo", icon: Activity, color: "from-purple-500 to-indigo-500" },
  { id: "acompanhar-gravidez", icon: Baby, color: "from-pink-500 to-rose-500" },
  { id: "engravide", icon: Heart, color: "from-rose-500 to-pink-500" },
  { id: "relacionamento", icon: Users, color: "from-blue-500 to-cyan-500" },
  { id: "alimentacao-gravidez", icon: Salad, color: "from-emerald-500 to-green-500" },
  { id: "melhorar-sono", icon: Bed, color: "from-indigo-500 to-purple-500" }
]

export default function LunnaApp() {
  const [language, setLanguage] = useState<Language>('pt-BR')
  const [currentScreen, setCurrentScreen] = useState<"video" | "intro" | "themes" | "quiz" | "auth" | "payment" | "result" | "dashboard">("video")
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup")
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({})
  const [tableRows, setTableRows] = useState<TableRow[]>([])
  const [email, setEmail] = useState("")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [showTutorial, setShowTutorial] = useState(false)
  const [currentQuizResponseId, setCurrentQuizResponseId] = useState<string | null>(null)
  const [motivationalPhrase, setMotivationalPhrase] = useState("")
  const [pendingQuizData, setPendingQuizData] = useState<any>(null)

  const t = translations[language]

  // Check authentication status
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Load language preference
  useEffect(() => {
    const savedLang = localStorage.getItem('lunna_language')
    if (savedLang) {
      setLanguage(savedLang as Language)
    }
  }, [])

  // Check if user has seen intro video
  useEffect(() => {
    const hasSeenVideo = localStorage.getItem('lunna_seen_intro_video')
    if (hasSeenVideo === 'true') {
      setCurrentScreen('intro')
    }
  }, [])

  // Check if user needs to see tutorial
  useEffect(() => {
    if (user && currentScreen === 'themes') {
      checkTutorialStatus()
    }
  }, [user, currentScreen])

  const checkTutorialStatus = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('user_onboarding')
        .select('has_seen_tutorial')
        .eq('user_id', user.id)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking tutorial status:', error)
        return
      }

      if (!data || !data.has_seen_tutorial) {
        setShowTutorial(true)
      }
    } catch (error) {
      console.error('Error checking tutorial status:', error)
    }
  }

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('lunna_language', lang)
  }

  const handleVideoComplete = () => {
    localStorage.setItem('lunna_seen_intro_video', 'true')
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen("intro")
      setIsTransitioning(false)
    }, 300)
  }

  const handleStartQuiz = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen("themes")
      setIsTransitioning(false)
    }, 300)
  }

  const handleAuthSuccess = async () => {
    // Após autenticação bem-sucedida, salvar quiz pendente se existir
    if (pendingQuizData && user) {
      try {
        const { data, error } = await supabase.from('quiz_responses').insert({
          user_id: user.id,
          theme_id: pendingQuizData.theme_id,
          theme_title: pendingQuizData.theme_title,
          answers: pendingQuizData.answers,
          email: user.email,
          language: language
        }).select().single()

        if (error) throw error
        
        if (data) {
          setCurrentQuizResponseId(data.id)
        }
        
        setPendingQuizData(null)
      } catch (error) {
        console.error('Error saving quiz response:', error)
      }
    }

    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen("payment")
      setIsTransitioning(false)
    }, 300)
  }

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme)
    setQuizAnswers({})
    
    // Inicializar tabela com perguntas do quiz
    const currentQuiz = themeQuizzes[theme.id]
    const initialRows: TableRow[] = currentQuiz.map((question, index) => ({
      id: `row-${index}`,
      question: question.question[language],
      answer: ""
    }))
    setTableRows(initialRows)
    
    // Set motivational phrase for the theme
    const themeTranslation = t.themes.themes[theme.id as keyof typeof t.themes.themes]
    setMotivationalPhrase(themeTranslation.motivationalPhrase || "")
    
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen("quiz")
      setIsTransitioning(false)
    }, 300)
  }

  const handleAddRow = () => {
    const newRow: TableRow = {
      id: `row-${Date.now()}`,
      question: "",
      answer: ""
    }
    setTableRows([...tableRows, newRow])
  }

  const handleRemoveRow = (id: string) => {
    setTableRows(tableRows.filter(row => row.id !== id))
  }

  const handleRowChange = (id: string, field: 'question' | 'answer', value: string) => {
    setTableRows(tableRows.map(row => 
      row.id === id ? { ...row, [field]: value } : row
    ))
  }

  const handleSaveTable = async () => {
    // Converter tabela em formato de respostas
    const answers: QuizAnswers = {}
    tableRows.forEach((row, index) => {
      if (row.question && row.answer) {
        answers[`custom-${index}`] = row.answer
      }
    })

    setQuizAnswers(answers)

    // Verificar se usuário está logado
    if (user) {
      // Usuário logado - salvar quiz e ir para pagamento
      try {
        const { data, error } = await supabase.from('quiz_responses').insert({
          user_id: user.id,
          theme_id: selectedTheme!.id,
          theme_title: t.themes.themes[selectedTheme!.id as keyof typeof t.themes.themes].title,
          answers: { tableData: tableRows },
          email: user.email,
          language: language
        }).select().single()

        if (error) throw error
        
        if (data) {
          setCurrentQuizResponseId(data.id)
        }
      } catch (error) {
        console.error('Error saving quiz response:', error)
      }

      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentScreen("payment")
        setIsTransitioning(false)
      }, 300)
    } else {
      // Usuário não logado - salvar dados temporariamente e ir para auth
      setPendingQuizData({
        theme_id: selectedTheme!.id,
        theme_title: t.themes.themes[selectedTheme!.id as keyof typeof t.themes.themes].title,
        answers: { tableData: tableRows }
      })

      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentScreen("auth")
        setIsTransitioning(false)
      }, 300)
    }
  }

  const handlePaymentSuccess = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen("result")
      setIsTransitioning(false)
    }, 300)
  }

  const handleBackToThemes = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen("themes")
      setSelectedTheme(null)
      setIsTransitioning(false)
    }, 300)
  }

  const handleViewDashboard = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScreen("dashboard")
      setIsTransitioning(false)
    }, 300)
  }

  const handleRestart = () => {
    setCurrentScreen("intro")
    setSelectedTheme(null)
    setQuizAnswers({})
    setTableRows([])
    setEmail("")
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setCurrentScreen("intro")
  }

  const handleTutorialComplete = () => {
    setShowTutorial(false)
  }

  const isTableValid = tableRows.length > 0 && tableRows.every(row => row.question.trim() && row.answer.trim())

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950">
      {currentScreen !== "video" && currentScreen !== "dashboard" && (
        <LanguageSelector currentLanguage={language} onLanguageChange={handleLanguageChange} />
      )}

      {/* User Menu */}
      {user && currentScreen !== "intro" && currentScreen !== "video" && currentScreen !== "auth" && (
        <div className="fixed top-4 left-4 z-50">
          <div className="flex items-center gap-3 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-full shadow-lg border border-purple-200 dark:border-purple-800">
            <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {user.email?.split('@')[0]}
            </span>
            {currentScreen !== "dashboard" && (
              <button
                onClick={handleViewDashboard}
                className="ml-2 p-1 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-full transition-colors"
                title={t.dashboard?.viewDashboard || 'Ver Dashboard'}
              >
                <BarChart3 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </button>
            )}
            <button
              onClick={handleLogout}
              className="ml-2 p-1 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-full transition-colors"
              title={t.common.logout}
            >
              <LogOut className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      )}

      {/* Tutorial Overlay */}
      {showTutorial && user && (
        <TutorialOverlay
          language={language}
          userId={user.id}
          onComplete={handleTutorialComplete}
        />
      )}
      
      {/* Intro Video Screen */}
      {currentScreen === "video" && (
        <IntroVideo onComplete={handleVideoComplete} language={language} />
      )}

      {/* Dashboard Screen */}
      {currentScreen === "dashboard" && user && (
        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="fixed top-4 left-4 z-50">
            <button
              onClick={handleBackToThemes}
              className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-full shadow-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t.quiz.backToThemes}
              </span>
            </button>
          </div>
          <Dashboard language={language} userId={user.id} />
        </div>
      )}

      {/* Intro Screen - ALTERADO PARA VÍDEO INFORMATIVO */}
      {currentScreen === "intro" && (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="w-full max-w-4xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Moon className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t.intro.title}
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light">
                {t.intro.subtitle}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-purple-100 dark:border-purple-900">
              {/* Vídeo Informativo sobre o App */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                    <Play className="relative w-24 h-24 opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer drop-shadow-2xl" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
                    Descubra Como o Lunna Funciona
                  </h2>
                  <p className="text-lg md:text-xl opacity-95 text-center max-w-2xl">
                    Veja como nosso aplicativo transforma sua jornada de autoconhecimento com resultados personalizados
                  </p>
                </div>
              </div>

              {/* Seção de Resultados Após Cadastro */}
              <div className="p-8 md:p-12 space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    O Que Você Recebe Após o Cadastro
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    Após completar seu quiz e criar sua conta, você terá acesso imediato a um plano totalmente personalizado
                  </p>
                </div>

                {/* Cards de Benefícios */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          Plano Personalizado
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Receba um plano único baseado nas suas respostas, com orientações específicas para seus objetivos
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 rounded-2xl p-6 border-2 border-pink-200 dark:border-pink-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          Dashboard Completo
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Acompanhe seu progresso com gráficos, estatísticas e insights sobre sua jornada
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/30 dark:to-rose-800/30 rounded-2xl p-6 border-2 border-rose-200 dark:border-rose-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          Conteúdo Exclusivo
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Acesse artigos, dicas e recursos personalizados para cada etapa do seu desenvolvimento
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-2xl p-6 border-2 border-indigo-200 dark:border-indigo-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                          Suporte Contínuo
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Receba notificações, lembretes e suporte para manter você motivada em sua jornada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Depoimento Visual */}
                <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-rose-900/30 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Resultados Reais
                    </h4>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                    "Após completar meu quiz, recebi um plano incrível que realmente entende minhas necessidades. Em apenas 2 semanas, já vi mudanças significativas!"
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    — Maria S., usuária Lunna há 3 meses
                  </p>
                </div>

                <button
                  onClick={handleStartQuiz}
                  className="w-full py-5 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {t.intro.startButton}
                  <ChevronRight className="inline-block ml-2 w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Screen - Agora aparece APÓS o quiz */}
      {currentScreen === "auth" && (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="w-full max-w-md">
            {/* Mensagem explicativa */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {t.auth?.almostThere || "Quase lá!"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t.auth?.createAccountMessage || "Crie sua conta para ver os resultados personalizados do seu quiz"}
              </p>
            </div>
            
            <AuthForm
              mode={authMode}
              onSuccess={handleAuthSuccess}
              onToggleMode={() => setAuthMode(authMode === "login" ? "signup" : "login")}
              language={language}
            />
          </div>
        </div>
      )}

      {/* Theme Selection Screen */}
      {currentScreen === "themes" && (
        <div className={`min-h-screen p-4 py-12 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 mt-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Moon className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t.intro.title}
                </h1>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {t.themes.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t.themes.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {themes.map((theme) => {
                const IconComponent = theme.icon
                const themeTranslation = t.themes.themes[theme.id as keyof typeof t.themes.themes]
                return (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeSelect(theme)}
                    className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-left"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${theme.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {themeTranslation.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {themeTranslation.description}
                    </p>
                    <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold">
                      {t.themes.startQuiz}
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Quiz Screen - TABELA DE PREENCHIMENTO */}
      {currentScreen === "quiz" && selectedTheme && (
        <div className={`min-h-screen flex items-center justify-center p-4 py-12 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="w-full max-w-5xl">
            <div className="mb-8">
              <button
                onClick={handleBackToThemes}
                className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                {t.quiz.backToThemes}
              </button>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {(() => {
                    const IconComponent = selectedTheme.icon
                    return <IconComponent className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  })()}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {t.themes.themes[selectedTheme.id as keyof typeof t.themes.themes].title}
                  </h2>
                </div>
              </div>

              {/* Motivational Phrase */}
              {motivationalPhrase && (
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl border border-purple-200 dark:border-purple-800">
                  <p className="text-center text-lg font-semibold text-purple-600 dark:text-purple-400">
                    {motivationalPhrase}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-100 dark:border-purple-900">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Preencha suas informações
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Complete a tabela abaixo com suas respostas. Você pode editar as perguntas e adicionar novas linhas conforme necessário.
                </p>
              </div>

              {/* Tabela de Preenchimento */}
              <div className="space-y-4 mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-purple-200 dark:border-purple-800">
                        <th className="text-left py-3 px-4 text-gray-900 dark:text-gray-100 font-bold">
                          Pergunta
                        </th>
                        <th className="text-left py-3 px-4 text-gray-900 dark:text-gray-100 font-bold">
                          Sua Resposta
                        </th>
                        <th className="w-16 py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableRows.map((row) => (
                        <tr key={row.id} className="border-b border-purple-100 dark:border-purple-900/50">
                          <td className="py-3 px-4">
                            <input
                              type="text"
                              value={row.question}
                              onChange={(e) => handleRowChange(row.id, 'question', e.target.value)}
                              placeholder="Digite a pergunta..."
                              className="w-full px-4 py-2 rounded-xl border-2 border-purple-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input
                              type="text"
                              value={row.answer}
                              onChange={(e) => handleRowChange(row.id, 'answer', e.target.value)}
                              placeholder="Digite sua resposta..."
                              className="w-full px-4 py-2 rounded-xl border-2 border-purple-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-purple-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => handleRemoveRow(row.id)}
                              className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                              title="Remover linha"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <button
                  onClick={handleAddRow}
                  className="flex items-center gap-2 px-4 py-2 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-xl transition-colors font-semibold"
                >
                  <Plus className="w-5 h-5" />
                  Adicionar nova linha
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSaveTable}
                  disabled={!isTableValid}
                  className={`flex-1 py-5 px-8 bg-gradient-to-r ${selectedTheme.color} text-white rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                    isTableValid
                      ? 'hover:shadow-2xl hover:scale-105 cursor-pointer'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  <Save className="w-6 h-6" />
                  Salvar e Continuar
                </button>
              </div>

              {!isTableValid && (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Preencha todas as perguntas e respostas para continuar
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Payment Screen */}
      {currentScreen === "payment" && selectedTheme && user && currentQuizResponseId && (
        <PaymentModal
          language={language}
          userId={user.id}
          quizResponseId={currentQuizResponseId}
          themeTitle={t.themes.themes[selectedTheme.id as keyof typeof t.themes.themes].title}
          onClose={handleBackToThemes}
          onSuccess={handlePaymentSuccess}
        />
      )}

      {/* Result Screen */}
      {currentScreen === "result" && selectedTheme && (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="w-full max-w-3xl">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-100 dark:border-purple-900 space-y-8">
              <div className="text-center space-y-6">
                <div className={`w-24 h-24 mx-auto bg-gradient-to-r ${selectedTheme.color} rounded-full flex items-center justify-center animate-bounce`}>
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                  {t.result.completed}
                </h2>
                
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t.result.thankYou} <span className="font-semibold text-purple-600 dark:text-purple-400">{t.themes.themes[selectedTheme.id as keyof typeof t.themes.themes].title}</span>
                </p>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {t.result.personalizedPlan}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {t.result.planDescription}
                  </p>
                  
                  <ul className="space-y-3 text-left max-w-md mx-auto mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {t.result.benefit1}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {t.result.benefit2}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {t.result.benefit3}
                      </span>
                    </li>
                  </ul>

                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    {t.result.dataSecure}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={handleViewDashboard}
                  className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <BarChart3 className="w-5 h-5" />
                  {t.dashboard?.viewDashboard || 'Ver Dashboard'}
                </button>
                <button
                  onClick={handleBackToThemes}
                  className="flex-1 py-4 px-6 border-2 border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 rounded-2xl font-bold hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300"
                >
                  {t.result.exploreOthers}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
