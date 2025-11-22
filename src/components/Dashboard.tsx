"use client"

import { useState, useEffect } from "react"
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { TrendingUp, Activity, Target, Award, Calendar, Zap } from "lucide-react"
import { Language, translations } from "@/lib/i18n/translations"
import { supabase } from "@/lib/supabase"

interface DashboardProps {
  language: Language
  userId: string
}

const COLORS = ['#8b5cf6', '#ec4899', '#f43f5e', '#06b6d4', '#10b981', '#f59e0b']

export function Dashboard({ language, userId }: DashboardProps) {
  const [quizData, setQuizData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const t = translations[language]

  useEffect(() => {
    loadDashboardData()
  }, [userId])

  const loadDashboardData = async () => {
    try {
      const { data, error } = await supabase
        .from('quiz_responses')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error
      setQuizData(data || [])
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
      </div>
    )
  }

  // Preparar dados para gráficos
  const themeDistribution = quizData.reduce((acc: any, quiz) => {
    const theme = quiz.theme_title
    acc[theme] = (acc[theme] || 0) + 1
    return acc
  }, {})

  const pieData = Object.entries(themeDistribution).map(([name, value]) => ({
    name,
    value
  }))

  const weeklyActivity = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - i))
    const dayName = date.toLocaleDateString(language, { weekday: 'short' })
    const count = quizData.filter(q => {
      const qDate = new Date(q.created_at)
      return qDate.toDateString() === date.toDateString()
    }).length
    return { day: dayName, quizzes: count }
  })

  const monthlyProgress = Array.from({ length: 6 }, (_, i) => {
    const date = new Date()
    date.setMonth(date.getMonth() - (5 - i))
    const monthName = date.toLocaleDateString(language, { month: 'short' })
    const count = quizData.filter(q => {
      const qDate = new Date(q.created_at)
      return qDate.getMonth() === date.getMonth() && qDate.getFullYear() === date.getFullYear()
    }).length
    return { month: monthName, completed: count }
  })

  const radarData = [
    { subject: t.dashboard?.wellness || 'Bem-estar', score: Math.min(quizData.length * 15, 100) },
    { subject: t.dashboard?.knowledge || 'Conhecimento', score: Math.min(quizData.length * 12, 100) },
    { subject: t.dashboard?.engagement || 'Engajamento', score: Math.min(quizData.length * 18, 100) },
    { subject: t.dashboard?.consistency || 'Consistência', score: Math.min(weeklyActivity.filter(d => d.quizzes > 0).length * 20, 100) },
    { subject: t.dashboard?.diversity || 'Diversidade', score: Math.min(pieData.length * 16, 100) }
  ]

  const stats = [
    {
      icon: Target,
      label: t.dashboard?.totalQuizzes || 'Quizzes Completados',
      value: quizData.length,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      label: t.dashboard?.themes || 'Temas Explorados',
      value: pieData.length,
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      label: t.dashboard?.thisWeek || 'Esta Semana',
      value: weeklyActivity.reduce((sum, d) => sum + d.quizzes, 0),
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      label: t.dashboard?.streak || 'Sequência',
      value: `${weeklyActivity.filter(d => d.quizzes > 0).length}d`,
      color: 'from-emerald-500 to-teal-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950 p-4 py-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {t.dashboard?.title || 'Seu Painel de Progresso'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.dashboard?.subtitle || 'Acompanhe sua jornada de autoconhecimento'}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-100 dark:border-purple-900 shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly Activity */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-100 dark:border-purple-900 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {t.dashboard?.weeklyActivity || 'Atividade Semanal'}
              </h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
                <Bar dataKey="quizzes" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Theme Distribution */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-100 dark:border-purple-900 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {t.dashboard?.themeDistribution || 'Distribuição por Tema'}
              </h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Progress */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-100 dark:border-purple-900 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {t.dashboard?.monthlyProgress || 'Progresso Mensal'}
              </h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="completed"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Radar Chart - Overall Performance */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-100 dark:border-purple-900 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {t.dashboard?.overallPerformance || 'Desempenho Geral'}
              </h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" stroke="#6b7280" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#6b7280" />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.6}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        {quizData.length > 0 && (
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-purple-100 dark:border-purple-900 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {t.dashboard?.recentActivity || 'Atividade Recente'}
            </h3>
            <div className="space-y-4">
              {quizData.slice(0, 5).map((quiz, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl border border-purple-200 dark:border-purple-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {quiz.theme_title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(quiz.created_at).toLocaleDateString(language, {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">{t.dashboard?.completed || 'Completo'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {quizData.length === 0 && (
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-12 border border-purple-100 dark:border-purple-900 shadow-xl text-center">
            <Activity className="w-16 h-16 mx-auto mb-4 text-purple-600 dark:text-purple-400 opacity-50" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t.dashboard?.noData || 'Nenhum dado ainda'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t.dashboard?.startQuizzes || 'Complete alguns quizzes para ver suas estatísticas aqui!'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
