export type Language = 'pt-BR' | 'pt-PT' | 'en' | 'es' | 'fr' | 'it'

export const translations = {
  'pt-BR': {
    common: {
      logout: 'Sair'
    },
    intro: {
      title: 'Lunna',
      subtitle: 'Sua jornada de autoconhecimento começa aqui',
      videoTitle: 'Bem-vinda à Lunna',
      videoDescription: 'Descubra um mundo de possibilidades',
      welcomeTitle: 'Bem-vinda à Lunna!',
      welcomeDescription: 'Estamos aqui para te acompanhar em cada fase da sua vida. Responda nossos quizzes personalizados e receba orientações feitas especialmente para você.',
      personalizedTitle: 'Personalizado',
      personalizedDescription: 'Conteúdo adaptado às suas necessidades',
      reliableTitle: 'Confiável',
      reliableDescription: 'Informações baseadas em ciência',
      completeTitle: 'Completo',
      completeDescription: 'Tudo em um só lugar',
      startButton: 'Começar Agora'
    },
    auth: {
      login: 'Entrar',
      signup: 'Criar Conta',
      email: 'E-mail',
      password: 'Senha',
      confirmPassword: 'Confirmar Senha',
      loginButton: 'Entrar',
      signupButton: 'Criar Conta',
      noAccount: 'Não tem uma conta?',
      hasAccount: 'Já tem uma conta?',
      signupLink: 'Criar uma',
      loginLink: 'Entrar',
      passwordMismatch: 'As senhas não coincidem',
      error: 'Erro ao autenticar. Verifique suas credenciais.',
      signupTitle: 'Cria a tua conta na Lunna',
      loginTitle: 'Bem-vinda de volta!'
    },
    tutorial: {
      step1Title: 'Bem-vinda à Lunna!',
      step1Description: 'Vamos fazer um tour rápido para você conhecer todas as funcionalidades.',
      step2Title: 'Escolha seu Tema',
      step2Description: 'Selecione entre 8 temas diferentes sobre saúde feminina, relacionamentos e bem-estar.',
      step3Title: 'Responda o Quiz',
      step3Description: 'Perguntas personalizadas que nos ajudam a entender melhor suas necessidades.',
      step4Title: 'Veja seus Resultados',
      step4Description: 'Receba insights personalizados e acompanhe seu progresso no dashboard.',
      step5Title: 'Continue sua Jornada',
      step5Description: 'Explore quantos temas quiser e construa seu caminho único de bem-estar.',
      next: 'Próximo',
      previous: 'Anterior',
      start: 'Começar',
      skip: 'Pular tutorial'
    },
    payment: {
      title: 'Desbloqueie seus Resultados',
      perQuiz: 'por quiz',
      benefit1: 'Análise personalizada completa',
      benefit2: 'Recomendações baseadas em ciência',
      benefit3: 'Acesso ilimitado aos resultados',
      payButton: 'Pagar com Cartão',
      processing: 'Processando...',
      secureNote: 'Pagamento 100% seguro e criptografado',
      successTitle: 'Pagamento Confirmado!',
      successMessage: 'Você já pode visualizar seus resultados personalizados!',
      error: 'Erro ao processar pagamento. Tente novamente.'
    },
    themes: {
      title: 'Escolha seu tema',
      subtitle: 'Selecione a área que você quer explorar hoje',
      startQuiz: 'Começar Quiz',
      themes: {
        'vida-sexual': {
          title: 'Vida Sexual',
          description: 'Explore sua intimidade e bem-estar sexual',
          motivationalPhrase: '💕 Sua saúde sexual é importante!'
        },
        'emagrecer': {
          title: 'Emagrecer',
          description: 'Alcance seus objetivos de forma saudável',
          motivationalPhrase: '🌟 Você é capaz de alcançar seus objetivos!'
        },
        'entenda-corpo': {
          title: 'Entenda seu Corpo',
          description: 'Conheça melhor seu ciclo e saúde',
          motivationalPhrase: '🌸 Conhecer seu corpo é empoderamento!'
        },
        'acompanhar-gravidez': {
          title: 'Acompanhar Gravidez',
          description: 'Monitore cada fase da gestação',
          motivationalPhrase: '👶 Cada momento é especial!'
        },
        'engravide': {
          title: 'Engravidar',
          description: 'Prepare-se para a maternidade',
          motivationalPhrase: '💖 Sua jornada para a maternidade começa aqui!'
        },
        'relacionamento': {
          title: 'Relacionamento',
          description: 'Fortaleça seus vínculos afetivos',
          motivationalPhrase: '💑 Relacionamentos saudáveis transformam vidas!'
        },
        'alimentacao-gravidez': {
          title: 'Alimentação na Gravidez',
          description: 'Nutrição adequada para você e seu bebê',
          motivationalPhrase: '🥗 Nutrição é amor!'
        },
        'melhorar-sono': {
          title: 'Melhorar o Sono',
          description: 'Descanse melhor e acorde renovada',
          motivationalPhrase: '😴 Um bom sono transforma seu dia!'
        }
      }
    },
    quiz: {
      backToThemes: 'Voltar aos temas',
      of: 'de',
      nextQuestion: 'Próxima Pergunta',
      finishQuiz: 'Finalizar Quiz',
      selectMultiple: 'Você pode selecionar múltiplas opções',
      textPlaceholder: 'Digite sua resposta aqui...',
      textHelper: 'Compartilhe seus pensamentos e experiências'
    },
    result: {
      completed: 'Quiz Concluído!',
      thankYou: 'Obrigada por completar o quiz sobre',
      personalizedPlan: 'Seu Plano Personalizado',
      planDescription: 'Com base nas suas respostas, preparamos recomendações especiais para você:',
      benefit1: 'Conteúdo personalizado baseado no seu perfil',
      benefit2: 'Dicas práticas para o seu dia a dia',
      benefit3: 'Acompanhamento contínuo da sua jornada',
      dataSecure: 'Seus dados estão seguros e protegidos conosco',
      exploreOthers: 'Explorar Outros Temas',
      backToStart: 'Voltar ao Início'
    },
    dashboard: {
      title: 'Seu Painel de Progresso',
      subtitle: 'Acompanhe sua jornada de autoconhecimento',
      totalQuizzes: 'Quizzes Completados',
      themes: 'Temas Explorados',
      thisWeek: 'Esta Semana',
      streak: 'Sequência',
      weeklyActivity: 'Atividade Semanal',
      themeDistribution: 'Distribuição por Tema',
      monthlyProgress: 'Progresso Mensal',
      overallPerformance: 'Desempenho Geral',
      recentActivity: 'Atividade Recente',
      completed: 'Completo',
      noData: 'Nenhum dado ainda',
      startQuizzes: 'Complete alguns quizzes para ver suas estatísticas aqui!',
      wellness: 'Bem-estar',
      knowledge: 'Conhecimento',
      engagement: 'Engajamento',
      consistency: 'Consistência',
      diversity: 'Diversidade',
      viewDashboard: 'Ver Dashboard'
    },
    introVideo: {
      skip: 'Pular introdução',
      slide1: {
        title: 'Bem-vinda à Lunna',
        description: 'Sua companheira em todas as fases da vida'
      },
      slide2: {
        title: 'Conteúdo Personalizado',
        description: 'Orientações feitas especialmente para você'
      },
      slide3: {
        title: 'Baseado em Ciência',
        description: 'Informações confiáveis e atualizadas'
      },
      slide4: {
        title: 'Acompanhamento Completo',
        description: 'Desde o planejamento até a maternidade'
      },
      slide5: {
        title: 'Sua Privacidade em Primeiro Lugar',
        description: 'Seus dados seguros e protegidos'
      },
      slide6: {
        title: 'Comece Agora',
        description: 'Sua jornada de autoconhecimento te espera'
      }
    }
  },
  'pt-PT': {
    common: {
      logout: 'Sair'
    },
    intro: {
      title: 'Lunna',
      subtitle: 'A tua jornada de autoconhecimento começa aqui',
      videoTitle: 'Bem-vinda à Lunna',
      videoDescription: 'Descobre um mundo de possibilidades',
      welcomeTitle: 'Bem-vinda à Lunna!',
      welcomeDescription: 'Estamos aqui para te acompanhar em cada fase da tua vida. Responde aos nossos questionários personalizados e recebe orientações feitas especialmente para ti.',
      personalizedTitle: 'Personalizado',
      personalizedDescription: 'Conteúdo adaptado às tuas necessidades',
      reliableTitle: 'Confiável',
      reliableDescription: 'Informações baseadas em ciência',
      completeTitle: 'Completo',
      completeDescription: 'Tudo num só lugar',
      startButton: 'Começar Agora'
    },
    auth: {
      login: 'Entrar',
      signup: 'Criar Conta',
      email: 'E-mail',
      password: 'Palavra-passe',
      confirmPassword: 'Confirmar Palavra-passe',
      loginButton: 'Entrar',
      signupButton: 'Criar Conta',
      noAccount: 'Não tens uma conta?',
      hasAccount: 'Já tens uma conta?',
      signupLink: 'Criar uma',
      loginLink: 'Entrar',
      passwordMismatch: 'As palavras-passe não coincidem',
      error: 'Erro ao autenticar. Verifica as tuas credenciais.',
      signupTitle: 'Cria a tua conta na Lunna',
      loginTitle: 'Bem-vinda de volta!'
    },
    tutorial: {
      step1Title: 'Bem-vinda à Lunna!',
      step1Description: 'Vamos fazer um tour rápido para conheceres todas as funcionalidades.',
      step2Title: 'Escolhe o teu Tema',
      step2Description: 'Seleciona entre 8 temas diferentes sobre saúde feminina, relacionamentos e bem-estar.',
      step3Title: 'Responde ao Questionário',
      step3Description: 'Perguntas personalizadas que nos ajudam a entender melhor as tuas necessidades.',
      step4Title: 'Vê os teus Resultados',
      step4Description: 'Recebe insights personalizados e acompanha o teu progresso no dashboard.',
      step5Title: 'Continua a tua Jornada',
      step5Description: 'Explora quantos temas quiseres e constrói o teu caminho único de bem-estar.',
      next: 'Próximo',
      previous: 'Anterior',
      start: 'Começar',
      skip: 'Saltar tutorial'
    },
    payment: {
      title: 'Desbloqueia os teus Resultados',
      perQuiz: 'por questionário',
      benefit1: 'Análise personalizada completa',
      benefit2: 'Recomendações baseadas em ciência',
      benefit3: 'Acesso ilimitado aos resultados',
      payButton: 'Pagar com Cartão',
      processing: 'A processar...',
      secureNote: 'Pagamento 100% seguro e encriptado',
      successTitle: 'Pagamento Confirmado!',
      successMessage: 'Já podes visualizar os teus resultados personalizados!',
      error: 'Erro ao processar pagamento. Tenta novamente.'
    },
    themes: {
      title: 'Escolhe o teu tema',
      subtitle: 'Seleciona a área que queres explorar hoje',
      startQuiz: 'Começar Questionário',
      themes: {
        'vida-sexual': {
          title: 'Vida Sexual',
          description: 'Explora a tua intimidade e bem-estar sexual',
          motivationalPhrase: '💕 A tua saúde sexual é importante!'
        },
        'emagrecer': {
          title: 'Emagrecer',
          description: 'Alcança os teus objetivos de forma saudável',
          motivationalPhrase: '🌟 És capaz de alcançar os teus objetivos!'
        },
        'entenda-corpo': {
          title: 'Entende o teu Corpo',
          description: 'Conhece melhor o teu ciclo e saúde',
          motivationalPhrase: '🌸 Conhecer o teu corpo é empoderamento!'
        },
        'acompanhar-gravidez': {
          title: 'Acompanhar Gravidez',
          description: 'Monitoriza cada fase da gestação',
          motivationalPhrase: '👶 Cada momento é especial!'
        },
        'engravide': {
          title: 'Engravidar',
          description: 'Prepara-te para a maternidade',
          motivationalPhrase: '💖 A tua jornada para a maternidade começa aqui!'
        },
        'relacionamento': {
          title: 'Relacionamento',
          description: 'Fortalece os teus vínculos afetivos',
          motivationalPhrase: '💑 Relacionamentos saudáveis transformam vidas!'
        },
        'alimentacao-gravidez': {
          title: 'Alimentação na Gravidez',
          description: 'Nutrição adequada para ti e o teu bebé',
          motivationalPhrase: '🥗 Nutrição é amor!'
        },
        'melhorar-sono': {
          title: 'Melhorar o Sono',
          description: 'Descansa melhor e acorda renovada',
          motivationalPhrase: '😴 Um bom sono transforma o teu dia!'
        }
      }
    },
    quiz: {
      backToThemes: 'Voltar aos temas',
      of: 'de',
      nextQuestion: 'Próxima Pergunta',
      finishQuiz: 'Finalizar Questionário',
      selectMultiple: 'Podes selecionar múltiplas opções',
      textPlaceholder: 'Escreve a tua resposta aqui...',
      textHelper: 'Partilha os teus pensamentos e experiências'
    },
    result: {
      completed: 'Questionário Concluído!',
      thankYou: 'Obrigada por completares o questionário sobre',
      personalizedPlan: 'O teu Plano Personalizado',
      planDescription: 'Com base nas tuas respostas, preparámos recomendações especiais para ti:',
      benefit1: 'Conteúdo personalizado baseado no teu perfil',
      benefit2: 'Dicas práticas para o teu dia a dia',
      benefit3: 'Acompanhamento contínuo da tua jornada',
      dataSecure: 'Os teus dados estão seguros e protegidos connosco',
      exploreOthers: 'Explorar Outros Temas',
      backToStart: 'Voltar ao Início'
    },
    dashboard: {
      title: 'O teu Painel de Progresso',
      subtitle: 'Acompanha a tua jornada de autoconhecimento',
      totalQuizzes: 'Questionários Completados',
      themes: 'Temas Explorados',
      thisWeek: 'Esta Semana',
      streak: 'Sequência',
      weeklyActivity: 'Atividade Semanal',
      themeDistribution: 'Distribuição por Tema',
      monthlyProgress: 'Progresso Mensal',
      overallPerformance: 'Desempenho Geral',
      recentActivity: 'Atividade Recente',
      completed: 'Completo',
      noData: 'Nenhum dado ainda',
      startQuizzes: 'Completa alguns questionários para veres as tuas estatísticas aqui!',
      wellness: 'Bem-estar',
      knowledge: 'Conhecimento',
      engagement: 'Envolvimento',
      consistency: 'Consistência',
      diversity: 'Diversidade',
      viewDashboard: 'Ver Dashboard'
    },
    introVideo: {
      skip: 'Saltar introdução',
      slide1: {
        title: 'Bem-vinda à Lunna',
        description: 'A tua companheira em todas as fases da vida'
      },
      slide2: {
        title: 'Conteúdo Personalizado',
        description: 'Orientações feitas especialmente para ti'
      },
      slide3: {
        title: 'Baseado em Ciência',
        description: 'Informações confiáveis e atualizadas'
      },
      slide4: {
        title: 'Acompanhamento Completo',
        description: 'Desde o planeamento até à maternidade'
      },
      slide5: {
        title: 'A tua Privacidade em Primeiro Lugar',
        description: 'Os teus dados seguros e protegidos'
      },
      slide6: {
        title: 'Começa Agora',
        description: 'A tua jornada de autoconhecimento espera por ti'
      }
    }
  },
  'en': {
    common: {
      logout: 'Logout'
    },
    intro: {
      title: 'Lunna',
      subtitle: 'Your self-discovery journey starts here',
      videoTitle: 'Welcome to Lunna',
      videoDescription: 'Discover a world of possibilities',
      welcomeTitle: 'Welcome to Lunna!',
      welcomeDescription: 'We are here to accompany you through every phase of your life. Answer our personalized quizzes and receive guidance made especially for you.',
      personalizedTitle: 'Personalized',
      personalizedDescription: 'Content adapted to your needs',
      reliableTitle: 'Reliable',
      reliableDescription: 'Science-based information',
      completeTitle: 'Complete',
      completeDescription: 'Everything in one place',
      startButton: 'Start Now'
    },
    auth: {
      login: 'Login',
      signup: 'Sign Up',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      loginButton: 'Login',
      signupButton: 'Create Account',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      signupLink: 'Create one',
      loginLink: 'Login',
      passwordMismatch: 'Passwords do not match',
      error: 'Authentication error. Please check your credentials.',
      signupTitle: 'Create your Lunna account',
      loginTitle: 'Welcome back!'
    },
    tutorial: {
      step1Title: 'Welcome to Lunna!',
      step1Description: "Let's take a quick tour to get you familiar with all the features.",
      step2Title: 'Choose your Theme',
      step2Description: 'Select from 8 different themes about women\'s health, relationships, and wellness.',
      step3Title: 'Answer the Quiz',
      step3Description: 'Personalized questions that help us better understand your needs.',
      step4Title: 'See your Results',
      step4Description: 'Receive personalized insights and track your progress on the dashboard.',
      step5Title: 'Continue your Journey',
      step5Description: 'Explore as many themes as you want and build your unique wellness path.',
      next: 'Next',
      previous: 'Previous',
      start: 'Start',
      skip: 'Skip tutorial'
    },
    payment: {
      title: 'Unlock your Results',
      perQuiz: 'per quiz',
      benefit1: 'Complete personalized analysis',
      benefit2: 'Science-based recommendations',
      benefit3: 'Unlimited access to results',
      payButton: 'Pay with Card',
      processing: 'Processing...',
      secureNote: '100% secure and encrypted payment',
      successTitle: 'Payment Confirmed!',
      successMessage: 'You can now view your personalized results!',
      error: 'Error processing payment. Please try again.'
    },
    themes: {
      title: 'Choose your theme',
      subtitle: 'Select the area you want to explore today',
      startQuiz: 'Start Quiz',
      themes: {
        'vida-sexual': {
          title: 'Sexual Life',
          description: 'Explore your intimacy and sexual wellness',
          motivationalPhrase: '💕 Your sexual health matters!'
        },
        'emagrecer': {
          title: 'Lose Weight',
          description: 'Achieve your goals in a healthy way',
          motivationalPhrase: '🌟 You can achieve your goals!'
        },
        'entenda-corpo': {
          title: 'Understand Your Body',
          description: 'Learn more about your cycle and health',
          motivationalPhrase: '🌸 Knowing your body is empowerment!'
        },
        'acompanhar-gravidez': {
          title: 'Track Pregnancy',
          description: 'Monitor every stage of pregnancy',
          motivationalPhrase: '👶 Every moment is special!'
        },
        'engravide': {
          title: 'Get Pregnant',
          description: 'Prepare for motherhood',
          motivationalPhrase: '💖 Your journey to motherhood starts here!'
        },
        'relacionamento': {
          title: 'Relationship',
          description: 'Strengthen your emotional bonds',
          motivationalPhrase: '💑 Healthy relationships transform lives!'
        },
        'alimentacao-gravidez': {
          title: 'Pregnancy Nutrition',
          description: 'Proper nutrition for you and your baby',
          motivationalPhrase: '🥗 Nutrition is love!'
        },
        'melhorar-sono': {
          title: 'Improve Sleep',
          description: 'Rest better and wake up refreshed',
          motivationalPhrase: '😴 Good sleep transforms your day!'
        }
      }
    },
    quiz: {
      backToThemes: 'Back to themes',
      of: 'of',
      nextQuestion: 'Next Question',
      finishQuiz: 'Finish Quiz',
      selectMultiple: 'You can select multiple options',
      textPlaceholder: 'Type your answer here...',
      textHelper: 'Share your thoughts and experiences'
    },
    result: {
      completed: 'Quiz Completed!',
      thankYou: 'Thank you for completing the quiz about',
      personalizedPlan: 'Your Personalized Plan',
      planDescription: 'Based on your answers, we have prepared special recommendations for you:',
      benefit1: 'Personalized content based on your profile',
      benefit2: 'Practical tips for your daily life',
      benefit3: 'Continuous monitoring of your journey',
      dataSecure: 'Your data is safe and protected with us',
      exploreOthers: 'Explore Other Themes',
      backToStart: 'Back to Start'
    },
    dashboard: {
      title: 'Your Progress Dashboard',
      subtitle: 'Track your self-discovery journey',
      totalQuizzes: 'Quizzes Completed',
      themes: 'Themes Explored',
      thisWeek: 'This Week',
      streak: 'Streak',
      weeklyActivity: 'Weekly Activity',
      themeDistribution: 'Theme Distribution',
      monthlyProgress: 'Monthly Progress',
      overallPerformance: 'Overall Performance',
      recentActivity: 'Recent Activity',
      completed: 'Completed',
      noData: 'No data yet',
      startQuizzes: 'Complete some quizzes to see your statistics here!',
      wellness: 'Wellness',
      knowledge: 'Knowledge',
      engagement: 'Engagement',
      consistency: 'Consistency',
      diversity: 'Diversity',
      viewDashboard: 'View Dashboard'
    },
    introVideo: {
      skip: 'Skip introduction',
      slide1: {
        title: 'Welcome to Lunna',
        description: 'Your companion through all life stages'
      },
      slide2: {
        title: 'Personalized Content',
        description: 'Guidance made especially for you'
      },
      slide3: {
        title: 'Science-Based',
        description: 'Reliable and up-to-date information'
      },
      slide4: {
        title: 'Complete Monitoring',
        description: 'From planning to motherhood'
      },
      slide5: {
        title: 'Your Privacy First',
        description: 'Your data safe and protected'
      },
      slide6: {
        title: 'Start Now',
        description: 'Your self-discovery journey awaits'
      }
    }
  },
  'es': {
    common: {
      logout: 'Cerrar sesión'
    },
    intro: {
      title: 'Lunna',
      subtitle: 'Tu viaje de autoconocimiento comienza aquí',
      videoTitle: 'Bienvenida a Lunna',
      videoDescription: 'Descubre un mundo de posibilidades',
      welcomeTitle: '¡Bienvenida a Lunna!',
      welcomeDescription: 'Estamos aquí para acompañarte en cada fase de tu vida. Responde nuestros cuestionarios personalizados y recibe orientación hecha especialmente para ti.',
      personalizedTitle: 'Personalizado',
      personalizedDescription: 'Contenido adaptado a tus necesidades',
      reliableTitle: 'Confiable',
      reliableDescription: 'Información basada en ciencia',
      completeTitle: 'Completo',
      completeDescription: 'Todo en un solo lugar',
      startButton: 'Comenzar Ahora'
    },
    auth: {
      login: 'Iniciar sesión',
      signup: 'Crear Cuenta',
      email: 'Correo electrónico',
      password: 'Contraseña',
      confirmPassword: 'Confirmar Contraseña',
      loginButton: 'Iniciar sesión',
      signupButton: 'Crear Cuenta',
      noAccount: '¿No tienes una cuenta?',
      hasAccount: '¿Ya tienes una cuenta?',
      signupLink: 'Crear una',
      loginLink: 'Iniciar sesión',
      passwordMismatch: 'Las contraseñas no coinciden',
      error: 'Error al autenticar. Verifica tus credenciales.',
      signupTitle: 'Crea tu cuenta en Lunna',
      loginTitle: '¡Bienvenida de vuelta!'
    },
    tutorial: {
      step1Title: '¡Bienvenida a Lunna!',
      step1Description: 'Hagamos un recorrido rápido para que conozcas todas las funcionalidades.',
      step2Title: 'Elige tu Tema',
      step2Description: 'Selecciona entre 8 temas diferentes sobre salud femenina, relaciones y bienestar.',
      step3Title: 'Responde el Cuestionario',
      step3Description: 'Preguntas personalizadas que nos ayudan a entender mejor tus necesidades.',
      step4Title: 'Ve tus Resultados',
      step4Description: 'Recibe insights personalizados y sigue tu progreso en el dashboard.',
      step5Title: 'Continúa tu Viaje',
      step5Description: 'Explora tantos temas como quieras y construye tu camino único de bienestar.',
      next: 'Siguiente',
      previous: 'Anterior',
      start: 'Comenzar',
      skip: 'Saltar tutorial'
    },
    payment: {
      title: 'Desbloquea tus Resultados',
      perQuiz: 'por cuestionario',
      benefit1: 'Análisis personalizado completo',
      benefit2: 'Recomendaciones basadas en ciencia',
      benefit3: 'Acceso ilimitado a los resultados',
      payButton: 'Pagar con Tarjeta',
      processing: 'Procesando...',
      secureNote: 'Pago 100% seguro y encriptado',
      successTitle: '¡Pago Confirmado!',
      successMessage: '¡Ya puedes visualizar tus resultados personalizados!',
      error: 'Error al procesar el pago. Inténtalo de nuevo.'
    },
    themes: {
      title: 'Elige tu tema',
      subtitle: 'Selecciona el área que quieres explorar hoy',
      startQuiz: 'Comenzar Cuestionario',
      themes: {
        'vida-sexual': {
          title: 'Vida Sexual',
          description: 'Explora tu intimidad y bienestar sexual',
          motivationalPhrase: '💕 ¡Tu salud sexual es importante!'
        },
        'emagrecer': {
          title: 'Adelgazar',
          description: 'Alcanza tus objetivos de forma saludable',
          motivationalPhrase: '🌟 ¡Puedes alcanzar tus objetivos!'
        },
        'entenda-corpo': {
          title: 'Entiende tu Cuerpo',
          description: 'Conoce mejor tu ciclo y salud',
          motivationalPhrase: '🌸 ¡Conocer tu cuerpo es empoderamiento!'
        },
        'acompanhar-gravidez': {
          title: 'Seguimiento del Embarazo',
          description: 'Monitorea cada fase de la gestación',
          motivationalPhrase: '👶 ¡Cada momento es especial!'
        },
        'engravide': {
          title: 'Quedar Embarazada',
          description: 'Prepárate para la maternidad',
          motivationalPhrase: '💖 ¡Tu viaje hacia la maternidad comienza aquí!'
        },
        'relacionamento': {
          title: 'Relación',
          description: 'Fortalece tus vínculos afectivos',
          motivationalPhrase: '💑 ¡Las relaciones saludables transforman vidas!'
        },
        'alimentacao-gravidez': {
          title: 'Alimentación en el Embarazo',
          description: 'Nutrición adecuada para ti y tu bebé',
          motivationalPhrase: '🥗 ¡La nutrición es amor!'
        },
        'melhorar-sono': {
          title: 'Mejorar el Sueño',
          description: 'Descansa mejor y despierta renovada',
          motivationalPhrase: '😴 ¡Un buen sueño transforma tu día!'
        }
      }
    },
    quiz: {
      backToThemes: 'Volver a los temas',
      of: 'de',
      nextQuestion: 'Siguiente Pregunta',
      finishQuiz: 'Finalizar Cuestionario',
      selectMultiple: 'Puedes seleccionar múltiples opciones',
      textPlaceholder: 'Escribe tu respuesta aquí...',
      textHelper: 'Comparte tus pensamientos y experiencias'
    },
    result: {
      completed: '¡Cuestionario Completado!',
      thankYou: 'Gracias por completar el cuestionario sobre',
      personalizedPlan: 'Tu Plan Personalizado',
      planDescription: 'Basándonos en tus respuestas, hemos preparado recomendaciones especiales para ti:',
      benefit1: 'Contenido personalizado basado en tu perfil',
      benefit2: 'Consejos prácticos para tu día a día',
      benefit3: 'Seguimiento continuo de tu viaje',
      dataSecure: 'Tus datos están seguros y protegidos con nosotros',
      exploreOthers: 'Explorar Otros Temas',
      backToStart: 'Volver al Inicio'
    },
    dashboard: {
      title: 'Tu Panel de Progreso',
      subtitle: 'Sigue tu viaje de autoconocimiento',
      totalQuizzes: 'Cuestionarios Completados',
      themes: 'Temas Explorados',
      thisWeek: 'Esta Semana',
      streak: 'Racha',
      weeklyActivity: 'Actividad Semanal',
      themeDistribution: 'Distribución por Tema',
      monthlyProgress: 'Progreso Mensual',
      overallPerformance: 'Rendimiento General',
      recentActivity: 'Actividad Reciente',
      completed: 'Completado',
      noData: 'Aún no hay datos',
      startQuizzes: '¡Completa algunos cuestionarios para ver tus estadísticas aquí!',
      wellness: 'Bienestar',
      knowledge: 'Conocimiento',
      engagement: 'Compromiso',
      consistency: 'Consistencia',
      diversity: 'Diversidad',
      viewDashboard: 'Ver Dashboard'
    },
    introVideo: {
      skip: 'Saltar introducción',
      slide1: {
        title: 'Bienvenida a Lunna',
        description: 'Tu compañera en todas las etapas de la vida'
      },
      slide2: {
        title: 'Contenido Personalizado',
        description: 'Orientación hecha especialmente para ti'
      },
      slide3: {
        title: 'Basado en Ciencia',
        description: 'Información confiable y actualizada'
      },
      slide4: {
        title: 'Seguimiento Completo',
        description: 'Desde la planificación hasta la maternidad'
      },
      slide5: {
        title: 'Tu Privacidad Primero',
        description: 'Tus datos seguros y protegidos'
      },
      slide6: {
        title: 'Comienza Ahora',
        description: 'Tu viaje de autoconocimiento te espera'
      }
    }
  },
  'fr': {
    common: {
      logout: 'Se déconnecter'
    },
    intro: {
      title: 'Lunna',
      subtitle: 'Votre voyage de découverte de soi commence ici',
      videoTitle: 'Bienvenue chez Lunna',
      videoDescription: 'Découvrez un monde de possibilités',
      welcomeTitle: 'Bienvenue chez Lunna!',
      welcomeDescription: 'Nous sommes là pour vous accompagner à chaque étape de votre vie. Répondez à nos questionnaires personnalisés et recevez des conseils faits spécialement pour vous.',
      personalizedTitle: 'Personnalisé',
      personalizedDescription: 'Contenu adapté à vos besoins',
      reliableTitle: 'Fiable',
      reliableDescription: 'Informations basées sur la science',
      completeTitle: 'Complet',
      completeDescription: 'Tout en un seul endroit',
      startButton: 'Commencer Maintenant'
    },
    auth: {
      login: 'Se connecter',
      signup: 'Créer un Compte',
      email: 'E-mail',
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le Mot de passe',
      loginButton: 'Se connecter',
      signupButton: 'Créer un Compte',
      noAccount: "Vous n'avez pas de compte?",
      hasAccount: 'Vous avez déjà un compte?',
      signupLink: 'En créer un',
      loginLink: 'Se connecter',
      passwordMismatch: 'Les mots de passe ne correspondent pas',
      error: "Erreur d'authentification. Vérifiez vos identifiants.",
      signupTitle: 'Créez votre compte Lunna',
      loginTitle: 'Bon retour!'
    },
    tutorial: {
      step1Title: 'Bienvenue chez Lunna!',
      step1Description: 'Faisons un tour rapide pour vous familiariser avec toutes les fonctionnalités.',
      step2Title: 'Choisissez votre Thème',
      step2Description: 'Sélectionnez parmi 8 thèmes différents sur la santé féminine, les relations et le bien-être.',
      step3Title: 'Répondez au Questionnaire',
      step3Description: 'Questions personnalisées qui nous aident à mieux comprendre vos besoins.',
      step4Title: 'Voyez vos Résultats',
      step4Description: 'Recevez des insights personnalisés et suivez votre progression sur le tableau de bord.',
      step5Title: 'Continuez votre Voyage',
      step5Description: 'Explorez autant de thèmes que vous le souhaitez et construisez votre chemin unique de bien-être.',
      next: 'Suivant',
      previous: 'Précédent',
      start: 'Commencer',
      skip: 'Passer le tutoriel'
    },
    payment: {
      title: 'Débloquez vos Résultats',
      perQuiz: 'par questionnaire',
      benefit1: 'Analyse personnalisée complète',
      benefit2: 'Recommandations basées sur la science',
      benefit3: 'Accès illimité aux résultats',
      payButton: 'Payer par Carte',
      processing: 'Traitement...',
      secureNote: 'Paiement 100% sécurisé et crypté',
      successTitle: 'Paiement Confirmé!',
      successMessage: 'Vous pouvez maintenant visualiser vos résultats personnalisés!',
      error: 'Erreur lors du traitement du paiement. Veuillez réessayer.'
    },
    themes: {
      title: 'Choisissez votre thème',
      subtitle: "Sélectionnez le domaine que vous souhaitez explorer aujourd'hui",
      startQuiz: 'Commencer le Questionnaire',
      themes: {
        'vida-sexual': {
          title: 'Vie Sexuelle',
          description: 'Explorez votre intimité et bien-être sexuel',
          motivationalPhrase: '💕 Votre santé sexuelle compte!'
        },
        'emagrecer': {
          title: 'Perdre du Poids',
          description: 'Atteignez vos objectifs de manière saine',
          motivationalPhrase: '🌟 Vous pouvez atteindre vos objectifs!'
        },
        'entenda-corpo': {
          title: 'Comprenez Votre Corps',
          description: 'Apprenez-en plus sur votre cycle et votre santé',
          motivationalPhrase: '🌸 Connaître votre corps, c\'est s\'autonomiser!'
        },
        'acompanhar-gravidez': {
          title: 'Suivi de Grossesse',
          description: 'Surveillez chaque étape de la gestation',
          motivationalPhrase: '👶 Chaque moment est spécial!'
        },
        'engravide': {
          title: 'Tomber Enceinte',
          description: 'Préparez-vous à la maternité',
          motivationalPhrase: '💖 Votre voyage vers la maternité commence ici!'
        },
        'relacionamento': {
          title: 'Relations',
          description: 'Renforcez vos liens affectifs',
          motivationalPhrase: '💑 Les relations saines transforment les vies!'
        },
        'alimentacao-gravidez': {
          title: 'Alimentation Pendant la Grossesse',
          description: 'Nutrition adéquate pour vous et votre bébé',
          motivationalPhrase: '🥗 La nutrition, c\'est de l\'amour!'
        },
        'melhorar-sono': {
          title: 'Améliorer le Sommeil',
          description: 'Reposez-vous mieux et réveillez-vous rafraîchie',
          motivationalPhrase: '😴 Un bon sommeil transforme votre journée!'
        }
      }
    },
    quiz: {
      backToThemes: 'Retour aux thèmes',
      of: 'de',
      nextQuestion: 'Question Suivante',
      finishQuiz: 'Terminer le Questionnaire',
      selectMultiple: 'Vous pouvez sélectionner plusieurs options',
      textPlaceholder: 'Tapez votre réponse ici...',
      textHelper: 'Partagez vos pensées et expériences'
    },
    result: {
      completed: 'Questionnaire Terminé!',
      thankYou: "Merci d'avoir complété le questionnaire sur",
      personalizedPlan: 'Votre Plan Personnalisé',
      planDescription: 'Sur la base de vos réponses, nous avons préparé des recommandations spéciales pour vous:',
      benefit1: 'Contenu personnalisé basé sur votre profil',
      benefit2: 'Conseils pratiques pour votre quotidien',
      benefit3: 'Suivi continu de votre parcours',
      dataSecure: 'Vos données sont en sécurité et protégées avec nous',
      exploreOthers: "Explorer d'Autres Thèmes",
      backToStart: 'Retour au Début'
    },
    dashboard: {
      title: 'Votre Tableau de Bord de Progrès',
      subtitle: 'Suivez votre voyage de découverte de soi',
      totalQuizzes: 'Questionnaires Complétés',
      themes: 'Thèmes Explorés',
      thisWeek: 'Cette Semaine',
      streak: 'Série',
      weeklyActivity: 'Activité Hebdomadaire',
      themeDistribution: 'Distribution par Thème',
      monthlyProgress: 'Progrès Mensuel',
      overallPerformance: 'Performance Globale',
      recentActivity: 'Activité Récente',
      completed: 'Terminé',
      noData: 'Pas encore de données',
      startQuizzes: 'Complétez quelques questionnaires pour voir vos statistiques ici!',
      wellness: 'Bien-être',
      knowledge: 'Connaissance',
      engagement: 'Engagement',
      consistency: 'Cohérence',
      diversity: 'Diversité',
      viewDashboard: 'Voir le Dashboard'
    },
    introVideo: {
      skip: "Passer l'introduction",
      slide1: {
        title: 'Bienvenue chez Lunna',
        description: 'Votre compagne à travers toutes les étapes de la vie'
      },
      slide2: {
        title: 'Contenu Personnalisé',
        description: 'Conseils faits spécialement pour vous'
      },
      slide3: {
        title: 'Basé sur la Science',
        description: 'Informations fiables et à jour'
      },
      slide4: {
        title: 'Suivi Complet',
        description: 'De la planification à la maternité'
      },
      slide5: {
        title: "Votre Vie Privée d'Abord",
        description: 'Vos données en sécurité et protégées'
      },
      slide6: {
        title: 'Commencez Maintenant',
        description: 'Votre voyage de découverte de soi vous attend'
      }
    }
  },
  'it': {
    common: {
      logout: 'Disconnetti'
    },
    intro: {
      title: 'Lunna',
      subtitle: 'Il tuo viaggio di auto-scoperta inizia qui',
      videoTitle: 'Benvenuta su Lunna',
      videoDescription: 'Scopri un mondo di possibilità',
      welcomeTitle: 'Benvenuta su Lunna!',
      welcomeDescription: 'Siamo qui per accompagnarti in ogni fase della tua vita. Rispondi ai nostri questionari personalizzati e ricevi orientamenti fatti appositamente per te.',
      personalizedTitle: 'Personalizzato',
      personalizedDescription: 'Contenuto adattato alle tue esigenze',
      reliableTitle: 'Affidabile',
      reliableDescription: 'Informazioni basate sulla scienza',
      completeTitle: 'Completo',
      completeDescription: 'Tutto in un unico posto',
      startButton: 'Inizia Ora'
    },
    auth: {
      login: 'Accedi',
      signup: 'Crea Account',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Conferma Password',
      loginButton: 'Accedi',
      signupButton: 'Crea Account',
      noAccount: 'Non hai un account?',
      hasAccount: 'Hai già un account?',
      signupLink: 'Creane uno',
      loginLink: 'Accedi',
      passwordMismatch: 'Le password non corrispondono',
      error: 'Errore di autenticazione. Verifica le tue credenziali.',
      signupTitle: 'Crea il tuo account Lunna',
      loginTitle: 'Bentornata!'
    },
    tutorial: {
      step1Title: 'Benvenuta su Lunna!',
      step1Description: 'Facciamo un tour veloce per farti conoscere tutte le funzionalità.',
      step2Title: 'Scegli il tuo Tema',
      step2Description: 'Seleziona tra 8 temi diversi sulla salute femminile, relazioni e benessere.',
      step3Title: 'Rispondi al Questionario',
      step3Description: 'Domande personalizzate che ci aiutano a comprendere meglio le tue esigenze.',
      step4Title: 'Vedi i tuoi Risultati',
      step4Description: 'Ricevi insights personalizzati e monitora i tuoi progressi sulla dashboard.',
      step5Title: 'Continua il tuo Viaggio',
      step5Description: 'Esplora tutti i temi che vuoi e costruisci il tuo percorso unico di benessere.',
      next: 'Avanti',
      previous: 'Indietro',
      start: 'Inizia',
      skip: 'Salta tutorial'
    },
    payment: {
      title: 'Sblocca i tuoi Risultati',
      perQuiz: 'per questionario',
      benefit1: 'Analisi personalizzata completa',
      benefit2: 'Raccomandazioni basate sulla scienza',
      benefit3: 'Accesso illimitato ai risultati',
      payButton: 'Paga con Carta',
      processing: 'Elaborazione...',
      secureNote: 'Pagamento 100% sicuro e crittografato',
      successTitle: 'Pagamento Confermato!',
      successMessage: 'Ora puoi visualizzare i tuoi risultati personalizzati!',
      error: 'Errore nell\'elaborazione del pagamento. Riprova.'
    },
    themes: {
      title: 'Scegli il tuo tema',
      subtitle: "Seleziona l'area che vuoi esplorare oggi",
      startQuiz: 'Inizia Questionario',
      themes: {
        'vida-sexual': {
          title: 'Vita Sessuale',
          description: 'Esplora la tua intimità e benessere sessuale',
          motivationalPhrase: '💕 La tua salute sessuale conta!'
        },
        'emagrecer': {
          title: 'Perdere Peso',
          description: 'Raggiungi i tuoi obiettivi in modo sano',
          motivationalPhrase: '🌟 Puoi raggiungere i tuoi obiettivi!'
        },
        'entenda-corpo': {
          title: 'Comprendi il Tuo Corpo',
          description: 'Scopri di più sul tuo ciclo e sulla tua salute',
          motivationalPhrase: '🌸 Conoscere il tuo corpo è empowerment!'
        },
        'acompanhar-gravidez': {
          title: 'Monitoraggio Gravidanza',
          description: 'Monitora ogni fase della gestazione',
          motivationalPhrase: '👶 Ogni momento è speciale!'
        },
        'engravide': {
          title: 'Rimanere Incinta',
          description: 'Preparati alla maternità',
          motivationalPhrase: '💖 Il tuo viaggio verso la maternità inizia qui!'
        },
        'relacionamento': {
          title: 'Relazione',
          description: 'Rafforza i tuoi legami affettivi',
          motivationalPhrase: '💑 Le relazioni sane trasformano le vite!'
        },
        'alimentacao-gravidez': {
          title: 'Alimentazione in Gravidanza',
          description: 'Nutrizione adeguata per te e il tuo bambino',
          motivationalPhrase: '🥗 La nutrizione è amore!'
        },
        'melhorar-sono': {
          title: 'Migliorare il Sonno',
          description: 'Riposa meglio e svegliati rinnovata',
          motivationalPhrase: '😴 Un buon sonno trasforma la tua giornata!'
        }
      }
    },
    quiz: {
      backToThemes: 'Torna ai temi',
      of: 'di',
      nextQuestion: 'Prossima Domanda',
      finishQuiz: 'Termina Questionario',
      selectMultiple: 'Puoi selezionare più opzioni',
      textPlaceholder: 'Scrivi la tua risposta qui...',
      textHelper: 'Condividi i tuoi pensieri ed esperienze'
    },
    result: {
      completed: 'Questionario Completato!',
      thankYou: 'Grazie per aver completato il questionario su',
      personalizedPlan: 'Il Tuo Piano Personalizzato',
      planDescription: 'In base alle tue risposte, abbiamo preparato raccomandazioni speciali per te:',
      benefit1: 'Contenuto personalizzato basato sul tuo profilo',
      benefit2: 'Consigli pratici per la tua vita quotidiana',
      benefit3: 'Monitoraggio continuo del tuo percorso',
      dataSecure: 'I tuoi dati sono al sicuro e protetti con noi',
      exploreOthers: 'Esplora Altri Temi',
      backToStart: "Torna all'Inizio"
    },
    dashboard: {
      title: 'Il Tuo Pannello di Progresso',
      subtitle: 'Segui il tuo viaggio di auto-scoperta',
      totalQuizzes: 'Questionari Completati',
      themes: 'Temi Esplorati',
      thisWeek: 'Questa Settimana',
      streak: 'Serie',
      weeklyActivity: 'Attività Settimanale',
      themeDistribution: 'Distribuzione per Tema',
      monthlyProgress: 'Progresso Mensile',
      overallPerformance: 'Prestazione Generale',
      recentActivity: 'Attività Recente',
      completed: 'Completato',
      noData: 'Nessun dato ancora',
      startQuizzes: 'Completa alcuni questionari per vedere le tue statistiche qui!',
      wellness: 'Benessere',
      knowledge: 'Conoscenza',
      engagement: 'Coinvolgimento',
      consistency: 'Coerenza',
      diversity: 'Diversità',
      viewDashboard: 'Visualizza Dashboard'
    },
    introVideo: {
      skip: "Salta l'introduzione",
      slide1: {
        title: 'Benvenuta su Lunna',
        description: 'La tua compagna in tutte le fasi della vita'
      },
      slide2: {
        title: 'Contenuto Personalizzato',
        description: 'Orientamenti fatti appositamente per te'
      },
      slide3: {
        title: 'Basato sulla Scienza',
        description: 'Informazioni affidabili e aggiornate'
      },
      slide4: {
        title: 'Monitoraggio Completo',
        description: 'Dalla pianificazione alla maternità'
      },
      slide5: {
        title: 'La Tua Privacy Prima di Tutto',
        description: 'I tuoi dati al sicuro e protetti'
      },
      slide6: {
        title: 'Inizia Ora',
        description: 'Il tuo viaggio di auto-scoperta ti aspetta'
      }
    }
  }
}
