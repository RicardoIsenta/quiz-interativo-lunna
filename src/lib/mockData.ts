// Dados mockados para demonstração quando Supabase não está configurado
export const mockQuizResponses = [
  {
    id: '1',
    user_id: 'demo-user',
    theme_id: 'vida-sexual',
    theme_title: 'Melhorar Vida Sexual',
    answers: {
      tableData: [
        { id: 'row-1', question: 'Qual é sua principal preocupação?', answer: 'Falta de libido' },
        { id: 'row-2', question: 'Com que frequência você pratica atividade física?', answer: '2-3 vezes por semana' },
        { id: 'row-3', question: 'Como está seu nível de estresse?', answer: 'Moderado a alto' },
        { id: 'row-4', question: 'Você tem alguma condição médica?', answer: 'Não' }
      ]
    },
    email: 'demo@lunna.app',
    language: 'pt-BR',
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    user_id: 'demo-user',
    theme_id: 'emagrecer',
    theme_title: 'Emagrecer com Saúde',
    answers: {
      tableData: [
        { id: 'row-1', question: 'Qual é seu objetivo de peso?', answer: 'Perder 8kg' },
        { id: 'row-2', question: 'Qual é sua alimentação atual?', answer: 'Desregulada, muitos carboidratos' },
        { id: 'row-3', question: 'Você pratica exercícios?', answer: 'Raramente' },
        { id: 'row-4', question: 'Tem restrições alimentares?', answer: 'Intolerância à lactose' }
      ]
    },
    email: 'demo@lunna.app',
    language: 'pt-BR',
    created_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    user_id: 'demo-user',
    theme_id: 'melhorar-sono',
    theme_title: 'Melhorar Qualidade do Sono',
    answers: {
      tableData: [
        { id: 'row-1', question: 'Quantas horas você dorme por noite?', answer: '5-6 horas' },
        { id: 'row-2', question: 'Você tem dificuldade para dormir?', answer: 'Sim, demoro muito para pegar no sono' },
        { id: 'row-3', question: 'Usa eletrônicos antes de dormir?', answer: 'Sim, sempre' },
        { id: 'row-4', question: 'Acorda durante a noite?', answer: 'Sim, várias vezes' }
      ]
    },
    email: 'demo@lunna.app',
    language: 'pt-BR',
    created_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString()
  }
]

export const mockPayments = [
  {
    id: '1',
    user_id: 'demo-user',
    quiz_response_id: '1',
    amount: 97.00,
    currency: 'BRL',
    status: 'completed',
    payment_method: 'credit_card',
    transaction_id: 'txn_demo_001',
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    user_id: 'demo-user',
    quiz_response_id: '2',
    amount: 97.00,
    currency: 'BRL',
    status: 'completed',
    payment_method: 'pix',
    transaction_id: 'txn_demo_002',
    created_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    user_id: 'demo-user',
    quiz_response_id: '3',
    amount: 97.00,
    currency: 'BRL',
    status: 'pending',
    payment_method: 'boleto',
    transaction_id: 'txn_demo_003',
    created_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString()
  }
]

export const mockUserOnboarding = {
  id: '1',
  user_id: 'demo-user',
  has_seen_tutorial: true,
  completed_themes: ['vida-sexual', 'emagrecer', 'melhorar-sono'],
  preferred_language: 'pt-BR',
  created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
}

// Dados de progresso para gráficos
export const mockProgressData = [
  { date: '2024-01-01', weight: 75, mood: 6, energy: 5, sleep: 6 },
  { date: '2024-01-08', weight: 74.5, mood: 7, energy: 6, sleep: 7 },
  { date: '2024-01-15', weight: 74, mood: 7, energy: 7, sleep: 7 },
  { date: '2024-01-22', weight: 73.5, mood: 8, energy: 7, sleep: 8 },
  { date: '2024-01-29', weight: 73, mood: 8, energy: 8, sleep: 8 },
  { date: '2024-02-05', weight: 72.5, mood: 9, energy: 8, sleep: 9 },
  { date: '2024-02-12', weight: 72, mood: 9, energy: 9, sleep: 9 }
]

// Estatísticas gerais
export const mockStats = {
  totalQuizzes: 3,
  completedThemes: 3,
  averageMood: 8.2,
  averageEnergy: 7.8,
  averageSleep: 8.1,
  weightLost: 3.0,
  daysActive: 45,
  streakDays: 12
}

// Recomendações personalizadas
export const mockRecommendations = [
  {
    id: '1',
    theme: 'vida-sexual',
    title: 'Pratique exercícios regularmente',
    description: 'Atividade física melhora a circulação e aumenta a libido naturalmente',
    priority: 'high',
    completed: false
  },
  {
    id: '2',
    theme: 'emagrecer',
    title: 'Reduza carboidratos refinados',
    description: 'Substitua pães brancos por integrais e aumente o consumo de proteínas',
    priority: 'high',
    completed: true
  },
  {
    id: '3',
    theme: 'melhorar-sono',
    title: 'Evite telas 1h antes de dormir',
    description: 'A luz azul dos dispositivos prejudica a produção de melatonina',
    priority: 'medium',
    completed: false
  },
  {
    id: '4',
    theme: 'vida-sexual',
    title: 'Gerencie o estresse',
    description: 'Pratique meditação ou yoga para reduzir ansiedade e melhorar intimidade',
    priority: 'medium',
    completed: false
  },
  {
    id: '5',
    theme: 'emagrecer',
    title: 'Beba mais água',
    description: 'Mantenha-se hidratada com pelo menos 2L de água por dia',
    priority: 'low',
    completed: true
  }
]

// Artigos e conteúdo educacional
export const mockArticles = [
  {
    id: '1',
    theme: 'vida-sexual',
    title: 'Como o estresse afeta sua libido',
    excerpt: 'Entenda a relação entre cortisol e desejo sexual',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    theme: 'emagrecer',
    title: 'Guia completo de alimentação saudável',
    excerpt: 'Aprenda a montar pratos equilibrados e nutritivos',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    theme: 'melhorar-sono',
    title: 'Higiene do sono: práticas essenciais',
    excerpt: 'Descubra hábitos que transformam sua qualidade de sono',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop'
  }
]
