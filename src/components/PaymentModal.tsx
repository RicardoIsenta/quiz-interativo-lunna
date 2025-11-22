"use client"

import { useState } from "react"
import { X, CreditCard, Lock, Check } from "lucide-react"
import { Language, translations } from "@/lib/i18n/translations"
import { supabase } from "@/lib/supabase"

interface PaymentModalProps {
  language: Language
  userId: string
  quizResponseId: string
  themeTitle: string
  onClose: () => void
  onSuccess: () => void
}

export function PaymentModal({ language, userId, quizResponseId, themeTitle, onClose, onSuccess }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const t = translations[language]

  const handlePayment = async () => {
    setIsProcessing(true)

    try {
      // Simular processamento de pagamento
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Salvar pagamento no Supabase
      const { error } = await supabase.from('payments').insert({
        user_id: userId,
        quiz_response_id: quizResponseId,
        amount: 9.90,
        currency: 'BRL',
        status: 'completed',
        payment_method: 'credit_card',
        stripe_payment_id: `sim_${Date.now()}`
      })

      if (error) throw error

      setPaymentSuccess(true)
      
      setTimeout(() => {
        onSuccess()
      }, 2000)
    } catch (error) {
      console.error('Error processing payment:', error)
      alert(t.payment?.error || 'Erro ao processar pagamento. Tente novamente.')
    } finally {
      setIsProcessing(false)
    }
  }

  if (paymentSuccess) {
    return (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-8 border-2 border-green-200 dark:border-green-800 animate-scale-in text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
            <Check className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.payment?.successTitle || "Pagamento Confirmado!"}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400">
            {t.payment?.successMessage || "Você já pode visualizar seus resultados personalizados!"}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-8 border-2 border-purple-200 dark:border-purple-800 animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          disabled={isProcessing}
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {t.payment?.title || "Desbloqueie seus Resultados"}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400">
            {themeTitle}
          </p>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 mb-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">R$ 9,90</span>
            <span className="text-gray-600 dark:text-gray-400">{t.payment?.perQuiz || "por quiz"}</span>
          </div>
          
          <ul className="space-y-3 text-left">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">
                {t.payment?.benefit1 || "Análise personalizada completa"}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">
                {t.payment?.benefit2 || "Recomendações baseadas em ciência"}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">
                {t.payment?.benefit3 || "Acesso ilimitado aos resultados"}
              </span>
            </li>
          </ul>
        </div>

        {/* Payment button */}
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
            isProcessing
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:shadow-2xl hover:scale-105'
          }`}
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              {t.payment?.processing || "Processando..."}
            </>
          ) : (
            <>
              <Lock className="w-5 h-5" />
              {t.payment?.payButton || "Pagar com Cartão"}
            </>
          )}
        </button>

        {/* Security note */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
          <Lock className="w-3 h-3 inline mr-1" />
          {t.payment?.secureNote || "Pagamento 100% seguro e criptografado"}
        </p>
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
