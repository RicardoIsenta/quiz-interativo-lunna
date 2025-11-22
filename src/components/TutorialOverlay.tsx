"use client"

import { useState, useEffect } from "react"
import { X, ChevronRight, ChevronLeft, Check } from "lucide-react"
import { Language, translations } from "@/lib/i18n/translations"
import { supabase } from "@/lib/supabase"

interface TutorialOverlayProps {
  language: Language
  userId: string
  onComplete: () => void
}

export function TutorialOverlay({ language, userId, onComplete }: TutorialOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const t = translations[language]

  const tutorialSteps = [
    {
      title: t.tutorial?.step1Title || "Bem-vinda à Lunna!",
      description: t.tutorial?.step1Description || "Vamos fazer um tour rápido para você conhecer todas as funcionalidades.",
      motivationalPhrase: "✨ Sua jornada de autoconhecimento começa aqui!",
      position: "center"
    },
    {
      title: t.tutorial?.step2Title || "Escolha seu Tema",
      description: t.tutorial?.step2Description || "Selecione entre 8 temas diferentes sobre saúde feminina, relacionamentos e bem-estar.",
      motivationalPhrase: "💜 Cada tema foi cuidadosamente criado para você!",
      position: "center"
    },
    {
      title: t.tutorial?.step3Title || "Responda o Quiz",
      description: t.tutorial?.step3Description || "Perguntas personalizadas que nos ajudam a entender melhor suas necessidades.",
      motivationalPhrase: "🌟 Não existem respostas certas ou erradas!",
      position: "center"
    },
    {
      title: t.tutorial?.step4Title || "Veja seus Resultados",
      description: t.tutorial?.step4Description || "Receba insights personalizados e acompanhe seu progresso no dashboard.",
      motivationalPhrase: "📊 Conhecimento é poder!",
      position: "center"
    },
    {
      title: t.tutorial?.step5Title || "Continue sua Jornada",
      description: t.tutorial?.step5Description || "Explore quantos temas quiser e construa seu caminho único de bem-estar.",
      motivationalPhrase: "🚀 Você está no controle!",
      position: "center"
    }
  ]

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleComplete = async () => {
    try {
      await supabase.from('user_onboarding').upsert({
        user_id: userId,
        has_seen_tutorial: true,
        tutorial_step: tutorialSteps.length,
        completed_at: new Date().toISOString()
      }, {
        onConflict: 'user_id'
      })
    } catch (error) {
      console.error('Error saving tutorial completion:', error)
    }
    
    setIsVisible(false)
    setTimeout(() => {
      onComplete()
    }, 300)
  }

  const handleSkip = () => {
    handleComplete()
  }

  if (!isVisible) return null

  const currentStepData = tutorialSteps[currentStep]

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 border-2 border-purple-200 dark:border-purple-800 animate-scale-in">
        {/* Close button */}
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Step indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {tutorialSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "w-12 bg-gradient-to-r from-purple-500 to-pink-500"
                    : index < currentStep
                    ? "w-8 bg-purple-300 dark:bg-purple-700"
                    : "w-2 bg-gray-300 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {currentStepData.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {currentStepData.description}
          </p>

          {/* Motivational phrase */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
            <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">
              {currentStepData.motivationalPhrase}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-4 pt-6">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 py-4 px-6 border-2 border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 rounded-2xl font-bold hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" />
                {t.tutorial?.previous || "Anterior"}
              </button>
            )}
            
            <button
              onClick={handleNext}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {currentStep < tutorialSteps.length - 1 ? (
                <>
                  {t.tutorial?.next || "Próximo"}
                  <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  {t.tutorial?.start || "Começar"}
                  <Check className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            {t.tutorial?.skip || "Pular tutorial"}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
