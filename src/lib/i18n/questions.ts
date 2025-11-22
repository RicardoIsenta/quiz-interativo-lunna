import { Language } from './translations'

export type QuizQuestion = {
  id: string
  question: Record<Language, string>
  type: "single" | "multiple" | "text"
  options?: Record<Language, string[]>
}

export type ThemeQuiz = {
  [key: string]: QuizQuestion[]
}

export const themeQuizzes: ThemeQuiz = {
  "vida-sexual": [
    {
      id: "q1",
      type: "single",
      question: {
        'pt-BR': "Como você avalia sua satisfação sexual atualmente?",
        'pt-PT': "Como avalias a tua satisfação sexual atualmente?",
        'en': "How do you rate your current sexual satisfaction?",
        'es': "¿Cómo evalúas tu satisfacción sexual actualmente?",
        'fr': "Comment évaluez-vous votre satisfaction sexuelle actuelle?",
        'it': "Come valuti la tua soddisfazione sessuale attuale?"
      },
      options: {
        'pt-BR': ["Muito satisfeita", "Satisfeita", "Pouco satisfeita", "Insatisfeita"],
        'pt-PT': ["Muito satisfeita", "Satisfeita", "Pouco satisfeita", "Insatisfeita"],
        'en': ["Very satisfied", "Satisfied", "Somewhat satisfied", "Unsatisfied"],
        'es': ["Muy satisfecha", "Satisfecha", "Poco satisfecha", "Insatisfecha"],
        'fr': ["Très satisfaite", "Satisfaite", "Peu satisfaite", "Insatisfaite"],
        'it': ["Molto soddisfatta", "Soddisfatta", "Poco soddisfatta", "Insoddisfatta"]
      }
    },
    {
      id: "q2",
      type: "multiple",
      question: {
        'pt-BR': "Quais aspectos você gostaria de melhorar? (Selecione todos que se aplicam)",
        'pt-PT': "Que aspectos gostarias de melhorar? (Seleciona todos os que se aplicam)",
        'en': "Which aspects would you like to improve? (Select all that apply)",
        'es': "¿Qué aspectos te gustaría mejorar? (Selecciona todos los que apliquen)",
        'fr': "Quels aspects aimeriez-vous améliorer? (Sélectionnez tous ceux qui s'appliquent)",
        'it': "Quali aspetti vorresti migliorare? (Seleziona tutti quelli applicabili)"
      },
      options: {
        'pt-BR': ["Libido", "Comunicação com parceiro", "Autoconhecimento", "Confiança", "Prazer", "Intimidade emocional"],
        'pt-PT': ["Libido", "Comunicação com parceiro", "Autoconhecimento", "Confiança", "Prazer", "Intimidade emocional"],
        'en': ["Libido", "Communication with partner", "Self-knowledge", "Confidence", "Pleasure", "Emotional intimacy"],
        'es': ["Libido", "Comunicación con pareja", "Autoconocimiento", "Confianza", "Placer", "Intimidad emocional"],
        'fr': ["Libido", "Communication avec partenaire", "Connaissance de soi", "Confiance", "Plaisir", "Intimité émotionnelle"],
        'it': ["Libido", "Comunicazione con partner", "Autoconoscenza", "Fiducia", "Piacere", "Intimità emotiva"]
      }
    },
    {
      id: "q3",
      type: "single",
      question: {
        'pt-BR': "Com que frequência você se sente conectada com seu corpo durante a intimidade?",
        'pt-PT': "Com que frequência te sentes conectada com o teu corpo durante a intimidade?",
        'en': "How often do you feel connected with your body during intimacy?",
        'es': "¿Con qué frecuencia te sientes conectada con tu cuerpo durante la intimidad?",
        'fr': "À quelle fréquence vous sentez-vous connectée avec votre corps pendant l'intimité?",
        'it': "Con quale frequenza ti senti connessa con il tuo corpo durante l'intimità?"
      },
      options: {
        'pt-BR': ["Sempre", "Frequentemente", "Às vezes", "Raramente", "Nunca"],
        'pt-PT': ["Sempre", "Frequentemente", "Às vezes", "Raramente", "Nunca"],
        'en': ["Always", "Frequently", "Sometimes", "Rarely", "Never"],
        'es': ["Siempre", "Frecuentemente", "A veces", "Raramente", "Nunca"],
        'fr': ["Toujours", "Fréquemment", "Parfois", "Rarement", "Jamais"],
        'it': ["Sempre", "Frequentemente", "A volte", "Raramente", "Mai"]
      }
    },
    {
      id: "q4",
      type: "text",
      question: {
        'pt-BR': "Descreva brevemente o que você considera uma vida sexual ideal:",
        'pt-PT': "Descreve brevemente o que consideras uma vida sexual ideal:",
        'en': "Briefly describe what you consider an ideal sex life:",
        'es': "Describe brevemente lo que consideras una vida sexual ideal:",
        'fr': "Décrivez brièvement ce que vous considérez comme une vie sexuelle idéale:",
        'it': "Descrivi brevemente cosa consideri una vita sessuale ideale:"
      }
    }
  ],
  
  "emagrecer": [
    {
      id: "q1",
      type: "single",
      question: {
        'pt-BR': "Qual é sua principal motivação para emagrecer?",
        'pt-PT': "Qual é a tua principal motivação para emagrecer?",
        'en': "What is your main motivation to lose weight?",
        'es': "¿Cuál es tu principal motivación para adelgazar?",
        'fr': "Quelle est votre principale motivation pour perdre du poids?",
        'it': "Qual è la tua principale motivazione per perdere peso?"
      },
      options: {
        'pt-BR': ["Saúde", "Autoestima", "Bem-estar físico", "Recomendação médica", "Estética"],
        'pt-PT': ["Saúde", "Autoestima", "Bem-estar físico", "Recomendação médica", "Estética"],
        'en': ["Health", "Self-esteem", "Physical well-being", "Medical recommendation", "Aesthetics"],
        'es': ["Salud", "Autoestima", "Bienestar físico", "Recomendación médica", "Estética"],
        'fr': ["Santé", "Estime de soi", "Bien-être physique", "Recommandation médicale", "Esthétique"],
        'it': ["Salute", "Autostima", "Benessere fisico", "Raccomandazione medica", "Estetica"]
      }
    },
    {
      id: "q2",
      type: "multiple",
      question: {
        'pt-BR': "Quais são seus maiores desafios? (Selecione todos que se aplicam)",
        'pt-PT': "Quais são os teus maiores desafios? (Seleciona todos os que se aplicam)",
        'en': "What are your biggest challenges? (Select all that apply)",
        'es': "¿Cuáles son tus mayores desafíos? (Selecciona todos los que apliquen)",
        'fr': "Quels sont vos plus grands défis? (Sélectionnez tous ceux qui s'appliquent)",
        'it': "Quali sono le tue sfide più grandi? (Seleziona tutti quelli applicabili)"
      },
      options: {
        'pt-BR': ["Ansiedade", "Compulsão alimentar", "Falta de tempo", "Sedentarismo", "Metabolismo lento", "Falta de motivação"],
        'pt-PT': ["Ansiedade", "Compulsão alimentar", "Falta de tempo", "Sedentarismo", "Metabolismo lento", "Falta de motivação"],
        'en': ["Anxiety", "Binge eating", "Lack of time", "Sedentary lifestyle", "Slow metabolism", "Lack of motivation"],
        'es': ["Ansiedad", "Compulsión alimentaria", "Falta de tiempo", "Sedentarismo", "Metabolismo lento", "Falta de motivación"],
        'fr': ["Anxiété", "Compulsion alimentaire", "Manque de temps", "Sédentarité", "Métabolisme lent", "Manque de motivation"],
        'it': ["Ansia", "Compulsione alimentare", "Mancanza di tempo", "Sedentarietà", "Metabolismo lento", "Mancanza di motivazione"]
      }
    },
    {
      id: "q3",
      type: "text",
      question: {
        'pt-BR': "Descreva sua rotina alimentar típica (horários, refeições principais):",
        'pt-PT': "Descreve a tua rotina alimentar típica (horários, refeições principais):",
        'en': "Describe your typical eating routine (times, main meals):",
        'es': "Describe tu rutina alimentaria típica (horarios, comidas principales):",
        'fr': "Décrivez votre routine alimentaire typique (horaires, repas principaux):",
        'it': "Descrivi la tua routine alimentare tipica (orari, pasti principali):"
      }
    }
  ],
  
  "entenda-corpo": [
    {
      id: "q1",
      type: "single",
      question: {
        'pt-BR': "Como você descreveria seu conhecimento sobre seu corpo?",
        'pt-PT': "Como descreveria o teu conhecimento sobre o teu corpo?",
        'en': "How would you describe your knowledge about your body?",
        'es': "¿Cómo describirías tu conocimiento sobre tu cuerpo?",
        'fr': "Comment décririez-vous votre connaissance de votre corps?",
        'it': "Come descriveresti la tua conoscenza del tuo corpo?"
      },
      options: {
        'pt-BR': ["Muito bom", "Bom", "Razoável", "Limitado", "Muito limitado"],
        'pt-PT': ["Muito bom", "Bom", "Razoável", "Limitado", "Muito limitado"],
        'en': ["Very good", "Good", "Fair", "Limited", "Very limited"],
        'es': ["Muy bueno", "Bueno", "Razonable", "Limitado", "Muy limitado"],
        'fr': ["Très bon", "Bon", "Raisonnable", "Limité", "Très limité"],
        'it': ["Molto buono", "Buono", "Ragionevole", "Limitato", "Molto limitato"]
      }
    },
    {
      id: "q2",
      type: "multiple",
      question: {
        'pt-BR': "Quais sinais do seu corpo você gostaria de entender melhor? (Selecione todos)",
        'pt-PT': "Que sinais do teu corpo gostarias de entender melhor? (Seleciona todos)",
        'en': "Which signs of your body would you like to understand better? (Select all)",
        'es': "¿Qué señales de tu cuerpo te gustaría entender mejor? (Selecciona todas)",
        'fr': "Quels signes de votre corps aimeriez-vous mieux comprendre? (Sélectionnez tous)",
        'it': "Quali segnali del tuo corpo vorresti capire meglio? (Seleziona tutti)"
      },
      options: {
        'pt-BR': ["Ciclo menstrual", "Sintomas de TPM", "Ovulação", "Alterações de humor", "Energia e fadiga", "Sono", "Digestão", "Libido"],
        'pt-PT': ["Ciclo menstrual", "Sintomas de TPM", "Ovulação", "Alterações de humor", "Energia e fadiga", "Sono", "Digestão", "Libido"],
        'en': ["Menstrual cycle", "PMS symptoms", "Ovulation", "Mood changes", "Energy and fatigue", "Sleep", "Digestion", "Libido"],
        'es': ["Ciclo menstrual", "Síntomas de SPM", "Ovulación", "Cambios de humor", "Energía y fatiga", "Sueño", "Digestión", "Libido"],
        'fr': ["Cycle menstruel", "Symptômes du SPM", "Ovulation", "Changements d'humeur", "Énergie et fatigue", "Sommeil", "Digestion", "Libido"],
        'it': ["Ciclo mestruale", "Sintomi della SPM", "Ovulazione", "Cambiamenti d'umore", "Energia e affaticamento", "Sonno", "Digestione", "Libido"]
      }
    },
    {
      id: "q3",
      type: "text",
      question: {
        'pt-BR': "Descreva um sintoma ou padrão que você gostaria de entender melhor:",
        'pt-PT': "Descreve um sintoma ou padrão que gostarias de entender melhor:",
        'en': "Describe a symptom or pattern you would like to understand better:",
        'es': "Describe un síntoma o patrón que te gustaría entender mejor:",
        'fr': "Décrivez un symptôme ou un schéma que vous aimeriez mieux comprendre:",
        'it': "Descrivi un sintomo o schema che vorresti capire meglio:"
      }
    }
  ],
  
  "acompanhar-gravidez": [
    {
      id: "q1",
      type: "single",
      question: {
        'pt-BR': "Em qual trimestre da gravidez você está?",
        'pt-PT': "Em que trimestre da gravidez estás?",
        'en': "Which trimester of pregnancy are you in?",
        'es': "¿En qué trimestre del embarazo estás?",
        'fr': "Dans quel trimestre de grossesse êtes-vous?",
        'it': "In quale trimestre di gravidanza sei?"
      },
      options: {
        'pt-BR': ["Primeiro trimestre (1-12 semanas)", "Segundo trimestre (13-26 semanas)", "Terceiro trimestre (27-40 semanas)", "Ainda não estou grávida"],
        'pt-PT': ["Primeiro trimestre (1-12 semanas)", "Segundo trimestre (13-26 semanas)", "Terceiro trimestre (27-40 semanas)", "Ainda não estou grávida"],
        'en': ["First trimester (1-12 weeks)", "Second trimester (13-26 weeks)", "Third trimester (27-40 weeks)", "Not pregnant yet"],
        'es': ["Primer trimestre (1-12 semanas)", "Segundo trimestre (13-26 semanas)", "Tercer trimestre (27-40 semanas)", "Aún no estoy embarazada"],
        'fr': ["Premier trimestre (1-12 semaines)", "Deuxième trimestre (13-26 semaines)", "Troisième trimestre (27-40 semaines)", "Pas encore enceinte"],
        'it': ["Primo trimestre (1-12 settimane)", "Secondo trimestre (13-26 settimane)", "Terzo trimestre (27-40 settimane)", "Non ancora incinta"]
      }
    },
    {
      id: "q2",
      type: "multiple",
      question: {
        'pt-BR': "Quais informações são mais importantes para você? (Selecione todas)",
        'pt-PT': "Que informações são mais importantes para ti? (Seleciona todas)",
        'en': "Which information is most important to you? (Select all)",
        'es': "¿Qué información es más importante para ti? (Selecciona todas)",
        'fr': "Quelles informations sont les plus importantes pour vous? (Sélectionnez toutes)",
        'it': "Quali informazioni sono più importanti per te? (Seleziona tutte)"
      },
      options: {
        'pt-BR': ["Desenvolvimento do bebê", "Sintomas semana a semana", "Alimentação adequada", "Exercícios seguros", "Exames e consultas", "Preparação para o parto", "Saúde emocional"],
        'pt-PT': ["Desenvolvimento do bebé", "Sintomas semana a semana", "Alimentação adequada", "Exercícios seguros", "Exames e consultas", "Preparação para o parto", "Saúde emocional"],
        'en': ["Baby development", "Week by week symptoms", "Proper nutrition", "Safe exercises", "Tests and appointments", "Birth preparation", "Emotional health"],
        'es': ["Desarrollo del bebé", "Síntomas semana a semana", "Alimentación adecuada", "Ejercicios seguros", "Exámenes y consultas", "Preparación para el parto", "Salud emocional"],
        'fr': ["Développement du bébé", "Symptômes semaine par semaine", "Nutrition appropriée", "Exercices sûrs", "Tests et rendez-vous", "Préparation à l'accouchement", "Santé émotionnelle"],
        'it': ["Sviluppo del bambino", "Sintomi settimana per settimana", "Nutrizione adeguata", "Esercizi sicuri", "Esami e visite", "Preparazione al parto", "Salute emotiva"]
      }
    },
    {
      id: "q3",
      type: "text",
      question: {
        'pt-BR': "Compartilhe suas principais dúvidas ou preocupações sobre a gravidez:",
        'pt-PT': "Partilha as tuas principais dúvidas ou preocupações sobre a gravidez:",
        'en': "Share your main doubts or concerns about pregnancy:",
        'es': "Comparte tus principales dudas o preocupaciones sobre el embarazo:",
        'fr': "Partagez vos principaux doutes ou préoccupations concernant la grossesse:",
        'it': "Condividi i tuoi principali dubbi o preoccupazioni sulla gravidanza:"
      }
    }
  ],
  
  "engravide": [
    {
      id: "q1",
      type: "single",
      question: {
        'pt-BR': "Há quanto tempo você está tentando engravidar?",
        'pt-PT': "Há quanto tempo estás a tentar engravidar?",
        'en': "How long have you been trying to get pregnant?",
        'es': "¿Cuánto tiempo llevas intentando quedar embarazada?",
        'fr': "Depuis combien de temps essayez-vous de tomber enceinte?",
        'it': "Da quanto tempo stai cercando di rimanere incinta?"
      },
      options: {
        'pt-BR': ["Menos de 3 meses", "3-6 meses", "6-12 meses", "Mais de 1 ano", "Ainda vou começar"],
        'pt-PT': ["Menos de 3 meses", "3-6 meses", "6-12 meses", "Mais de 1 ano", "Ainda vou começar"],
        'en': ["Less than 3 months", "3-6 months", "6-12 months", "More than 1 year", "Haven't started yet"],
        'es': ["Menos de 3 meses", "3-6 meses", "6-12 meses", "Más de 1 año", "Aún voy a empezar"],
        'fr': ["Moins de 3 mois", "3-6 mois", "6-12 mois", "Plus d'1 an", "Pas encore commencé"],
        'it': ["Meno di 3 mesi", "3-6 mesi", "6-12 mesi", "Più di 1 anno", "Non ho ancora iniziato"]
      }
    },
    {
      id: "q2",
      type: "multiple",
      question: {
        'pt-BR': "Quais métodos você usa ou gostaria de usar? (Selecione todos)",
        'pt-PT': "Que métodos usas ou gostarias de usar? (Seleciona todos)",
        'en': "Which methods do you use or would like to use? (Select all)",
        'es': "¿Qué métodos usas o te gustaría usar? (Selecciona todos)",
        'fr': "Quelles méthodes utilisez-vous ou aimeriez-vous utiliser? (Sélectionnez toutes)",
        'it': "Quali metodi usi o vorresti usare? (Seleziona tutti)"
      },
      options: {
        'pt-BR': ["Calendário menstrual", "Temperatura basal", "Teste de ovulação", "Muco cervical", "Aplicativos", "Acompanhamento médico"],
        'pt-PT': ["Calendário menstrual", "Temperatura basal", "Teste de ovulação", "Muco cervical", "Aplicações", "Acompanhamento médico"],
        'en': ["Menstrual calendar", "Basal temperature", "Ovulation test", "Cervical mucus", "Apps", "Medical monitoring"],
        'es': ["Calendario menstrual", "Temperatura basal", "Test de ovulación", "Moco cervical", "Aplicaciones", "Seguimiento médico"],
        'fr': ["Calendrier menstruel", "Température basale", "Test d'ovulation", "Glaire cervicale", "Applications", "Suivi médical"],
        'it': ["Calendario mestruale", "Temperatura basale", "Test di ovulazione", "Muco cervicale", "App", "Monitoraggio medico"]
      }
    },
    {
      id: "q3",
      type: "text",
      question: {
        'pt-BR': "Descreva suas principais dúvidas sobre fertilidade e concepção:",
        'pt-PT': "Descreve as tuas principais dúvidas sobre fertilidade e conceção:",
        'en': "Describe your main doubts about fertility and conception:",
        'es': "Describe tus principales dudas sobre fertilidad y concepción:",
        'fr': "Décrivez vos principaux doutes sur la fertilité et la conception:",
        'it': "Descrivi i tuoi principali dubbi sulla fertilità e il concepimento:"
      }
    }
  ],
  
  "relacionamento": [
    {
      id: "q1",
      type: "single",
      question: {
        'pt-BR': "Como você avalia a confiança no seu relacionamento atualmente?",
        'pt-PT': "Como avalias a confiança no teu relacionamento atualmente?",
        'en': "How do you rate trust in your relationship currently?",
        'es': "¿Cómo evalúas la confianza en tu relación actualmente?",
        'fr': "Comment évaluez-vous la confiance dans votre relation actuellement?",
        'it': "Come valuti la fiducia nella tua relazione attualmente?"
      },
      options: {
        'pt-BR': ["Total confiança", "Boa confiança", "Confiança moderada", "Pouca confiança", "Sem confiança"],
        'pt-PT': ["Total confiança", "Boa confiança", "Confiança moderada", "Pouca confiança", "Sem confiança"],
        'en': ["Total trust", "Good trust", "Moderate trust", "Little trust", "No trust"],
        'es': ["Confianza total", "Buena confianza", "Confianza moderada", "Poca confianza", "Sin confianza"],
        'fr': ["Confiance totale", "Bonne confiance", "Confiance modérée", "Peu de confiance", "Aucune confiance"],
        'it': ["Fiducia totale", "Buona fiducia", "Fiducia moderata", "Poca fiducia", "Nessuna fiducia"]
      }
    },
    {
      id: "q2",
      type: "multiple",
      question: {
        'pt-BR': "O que te levou a buscar este tema? (Selecione todos que se aplicam)",
        'pt-PT': "O que te levou a procurar este tema? (Seleciona todos os que se aplicam)",
        'en': "What led you to seek this topic? (Select all that apply)",
        'es': "¿Qué te llevó a buscar este tema? (Selecciona todos los que apliquen)",
        'fr': "Qu'est-ce qui vous a amené à rechercher ce sujet? (Sélectionnez tous ceux qui s'appliquent)",
        'it': "Cosa ti ha portato a cercare questo argomento? (Seleziona tutti quelli applicabili)"
      },
      options: {
        'pt-BR': ["Comportamento suspeito", "Mudanças no relacionamento", "Insegurança pessoal", "Experiências passadas", "Falta de comunicação", "Intuição"],
        'pt-PT': ["Comportamento suspeito", "Mudanças no relacionamento", "Insegurança pessoal", "Experiências passadas", "Falta de comunicação", "Intuição"],
        'en': ["Suspicious behavior", "Changes in relationship", "Personal insecurity", "Past experiences", "Lack of communication", "Intuition"],
        'es': ["Comportamiento sospechoso", "Cambios en la relación", "Inseguridad personal", "Experiencias pasadas", "Falta de comunicación", "Intuición"],
        'fr': ["Comportement suspect", "Changements dans la relation", "Insécurité personnelle", "Expériences passées", "Manque de communication", "Intuition"],
        'it': ["Comportamento sospetto", "Cambiamenti nella relazione", "Insicurezza personale", "Esperienze passate", "Mancanza di comunicazione", "Intuizione"]
      }
    },
    {
      id: "q3",
      type: "text",
      question: {
        'pt-BR': "Descreva o que você gostaria de melhorar ou entender no seu relacionamento:",
        'pt-PT': "Descreve o que gostarias de melhorar ou entender no teu relacionamento:",
        'en': "Describe what you would like to improve or understand in your relationship:",
        'es': "Describe lo que te gustaría mejorar o entender en tu relación:",
        'fr': "Décrivez ce que vous aimeriez améliorer ou comprendre dans votre relation:",
        'it': "Descrivi cosa vorresti migliorare o capire nella tua relazione:"
      }
    }
  ],
  
  "alimentacao-gravidez": [
    {
      id: "q1",
      type: "single",
      question: {
        'pt-BR': "Em qual fase da gestação você está?",
        'pt-PT': "Em que fase da gestação estás?",
        'en': "Which phase of pregnancy are you in?",
        'es': "¿En qué fase del embarazo estás?",
        'fr': "Dans quelle phase de grossesse êtes-vous?",
        'it': "In quale fase della gravidanza sei?"
      },
      options: {
        'pt-BR': ["Planejando engravidar", "Primeiro trimestre", "Segundo trimestre", "Terceiro trimestre"],
        'pt-PT': ["A planear engravidar", "Primeiro trimestre", "Segundo trimestre", "Terceiro trimestre"],
        'en': ["Planning to get pregnant", "First trimester", "Second trimester", "Third trimester"],
        'es': ["Planeando quedar embarazada", "Primer trimestre", "Segundo trimestre", "Tercer trimestre"],
        'fr': ["Planification de grossesse", "Premier trimestre", "Deuxième trimestre", "Troisième trimestre"],
        'it': ["Pianificando gravidanza", "Primo trimestre", "Secondo trimestre", "Terzo trimestre"]
      }
    },
    {
      id: "q2",
      type: "multiple",
      question: {
        'pt-BR': "Quais são suas maiores dificuldades? (Selecione todas)",
        'pt-PT': "Quais são as tuas maiores dificuldades? (Seleciona todas)",
        'en': "What are your biggest difficulties? (Select all)",
        'es': "¿Cuáles son tus mayores dificultades? (Selecciona todas)",
        'fr': "Quelles sont vos plus grandes difficultés? (Sélectionnez toutes)",
        'it': "Quali sono le tue maggiori difficoltà? (Seleziona tutte)"
      },
      options: {
        'pt-BR': ["Enjoos e náuseas", "Falta de apetite", "Compulsão por certos alimentos", "Azia e má digestão", "Falta de tempo para cozinhar", "Dúvidas sobre o que comer"],
        'pt-PT': ["Enjoos e náuseas", "Falta de apetite", "Compulsão por certos alimentos", "Azia e má digestão", "Falta de tempo para cozinhar", "Dúvidas sobre o que comer"],
        'en': ["Nausea and vomiting", "Lack of appetite", "Cravings for certain foods", "Heartburn and indigestion", "Lack of time to cook", "Doubts about what to eat"],
        'es': ["Náuseas y vómitos", "Falta de apetito", "Antojos de ciertos alimentos", "Acidez e indigestión", "Falta de tiempo para cocinar", "Dudas sobre qué comer"],
        'fr': ["Nausées et vomissements", "Manque d'appétit", "Envies de certains aliments", "Brûlures d'estomac et indigestion", "Manque de temps pour cuisiner", "Doutes sur quoi manger"],
        'it': ["Nausea e vomito", "Mancanza di appetito", "Voglie di certi alimenti", "Bruciore di stomaco e indigestione", "Mancanza di tempo per cucinare", "Dubbi su cosa mangiare"]
      }
    },
    {
      id: "q3",
      type: "text",
      question: {
        'pt-BR': "Descreva suas principais dúvidas sobre alimentação na gravidez:",
        'pt-PT': "Descreve as tuas principais dúvidas sobre alimentação na gravidez:",
        'en': "Describe your main doubts about nutrition during pregnancy:",
        'es': "Describe tus principales dudas sobre alimentación en el embarazo:",
        'fr': "Décrivez vos principaux doutes sur la nutrition pendant la grossesse:",
        'it': "Descrivi i tuoi principali dubbi sulla nutrizione in gravidanza:"
      }
    }
  ],
  
  "melhorar-sono": [
    {
      id: "q1",
      type: "single",
      question: {
        'pt-BR': "Como você avalia a qualidade do seu sono?",
        'pt-PT': "Como avalias a qualidade do teu sono?",
        'en': "How do you rate the quality of your sleep?",
        'es': "¿Cómo evalúas la calidad de tu sueño?",
        'fr': "Comment évaluez-vous la qualité de votre sommeil?",
        'it': "Come valuti la qualità del tuo sonno?"
      },
      options: {
        'pt-BR': ["Excelente", "Boa", "Razoável", "Ruim", "Muito ruim"],
        'pt-PT': ["Excelente", "Boa", "Razoável", "Má", "Muito má"],
        'en': ["Excellent", "Good", "Fair", "Poor", "Very poor"],
        'es': ["Excelente", "Buena", "Razonable", "Mala", "Muy mala"],
        'fr': ["Excellente", "Bonne", "Raisonnable", "Mauvaise", "Très mauvaise"],
        'it': ["Eccellente", "Buona", "Ragionevole", "Scarsa", "Molto scarsa"]
      }
    },
    {
      id: "q2",
      type: "multiple",
      question: {
        'pt-BR': "Quais são suas principais dificuldades? (Selecione todas)",
        'pt-PT': "Quais são as tuas principais dificuldades? (Seleciona todas)",
        'en': "What are your main difficulties? (Select all)",
        'es': "¿Cuáles son tus principales dificultades? (Selecciona todas)",
        'fr': "Quelles sont vos principales difficultés? (Sélectionnez toutes)",
        'it': "Quali sono le tue principali difficoltà? (Seleziona tutte)"
      },
      options: {
        'pt-BR': ["Dificuldade para adormecer", "Acordar durante a noite", "Acordar muito cedo", "Sono agitado", "Pesadelos", "Insônia", "Ronco ou apneia"],
        'pt-PT': ["Dificuldade para adormecer", "Acordar durante a noite", "Acordar muito cedo", "Sono agitado", "Pesadelos", "Insónia", "Ronco ou apneia"],
        'en': ["Difficulty falling asleep", "Waking up during the night", "Waking up too early", "Restless sleep", "Nightmares", "Insomnia", "Snoring or apnea"],
        'es': ["Dificultad para dormir", "Despertar durante la noche", "Despertar muy temprano", "Sueño agitado", "Pesadillas", "Insomnio", "Ronquidos o apnea"],
        'fr': ["Difficulté à s'endormir", "Se réveiller pendant la nuit", "Se réveiller trop tôt", "Sommeil agité", "Cauchemars", "Insomnie", "Ronflement ou apnée"],
        'it': ["Difficoltà ad addormentarsi", "Svegliarsi durante la notte", "Svegliarsi troppo presto", "Sonno agitato", "Incubi", "Insonnia", "Russare o apnea"]
      }
    },
    {
      id: "q3",
      type: "text",
      question: {
        'pt-BR': "O que mais te impede de ter uma boa noite de sono?",
        'pt-PT': "O que mais te impede de ter uma boa noite de sono?",
        'en': "What most prevents you from having a good night's sleep?",
        'es': "¿Qué te impide más tener una buena noche de sueño?",
        'fr': "Qu'est-ce qui vous empêche le plus d'avoir une bonne nuit de sommeil?",
        'it': "Cosa ti impedisce di più di avere una buona notte di sonno?"
      }
    }
  ]
}
