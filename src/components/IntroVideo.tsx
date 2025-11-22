"use client"

import { useEffect, useState } from "react"
import { Moon, Sparkles, Heart, Activity, Baby, Scale } from "lucide-react"
import { Language, translations } from "@/lib/i18n/translations"

interface IntroVideoProps {
  onComplete: () => void
  language: Language
}

export function IntroVideo({ onComplete, language }: IntroVideoProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const t = translations[language]

  const slides = [
    {
      icon: Moon,
      gradient: "from-purple-600 to-pink-600",
      title: t.intro.title,
      subtitle: t.intro.subtitle,
      description: "Sua jornada de bem-estar começa aqui"
    },
    {
      icon: Sparkles,
      gradient: "from-pink-500 to-rose-500",
      title: "Personalizado para Você",
      subtitle: "Conteúdo adaptado às suas necessidades",
      description: "Cada mulher é única, e seu plano também será"
    },
    {
      icon: Heart,
      gradient: "from-rose-500 to-red-500",
      title: "Saúde Feminina",
      subtitle: "Cuide do seu corpo e mente",
      description: "Informações confiáveis baseadas em ciência"
    },
    {
      icon: Activity,
      gradient: "from-purple-500 to-indigo-500",
      title: "Acompanhamento Completo",
      subtitle: "Monitore seu progresso",
      description: "Ferramentas para entender melhor seu corpo"
    },
    {
      icon: Baby,
      gradient: "from-pink-400 to-purple-500",
      title: "Maternidade",
      subtitle: "Suporte em cada fase",
      description: "Da concepção ao pós-parto, estamos com você"
    },
    {
      icon: Scale,
      gradient: "from-green-500 to-teal-500",
      title: "Bem-Estar Total",
      subtitle: "Corpo, mente e alma em harmonia",
      description: "Alcance seus objetivos de forma saudável"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev < slides.length - 1) {
          return prev + 1
        } else {
          clearInterval(timer)
          setTimeout(() => {
            onComplete()
          }, 2000)
          return prev
        }
      })
    }, 2500)

    return () => clearInterval(timer)
  }, [onComplete, slides.length])

  const currentSlideData = slides[currentSlide]
  const IconComponent = currentSlideData.icon

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 10 + 10 + "s"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          key={currentSlide}
          className="animate-fade-in-up"
        >
          {/* Icon */}
          <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r ${currentSlideData.gradient} flex items-center justify-center shadow-2xl animate-pulse-slow`}>
            <IconComponent className="w-16 h-16 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {currentSlideData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light animate-fade-in-delay-1">
            {currentSlideData.subtitle}
          </p>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/70 animate-fade-in-delay-2">
            {currentSlideData.description}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 bg-white"
                  : index < currentSlide
                  ? "w-8 bg-white/50"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Skip button */}
        <button
          onClick={onComplete}
          className="mt-8 px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
        >
          Pular introdução
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(30px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
