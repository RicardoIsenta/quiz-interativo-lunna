"use client"

import { Globe } from "lucide-react"
import { Language } from "@/lib/i18n/translations"

type LanguageSelectorProps = {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'pt-BR', name: 'Português (BR)', flag: '🇧🇷' },
  { code: 'pt-PT', name: 'Português (PT)', flag: '🇵🇹' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' }
]

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-full shadow-lg border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300">
          <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {languages.find(l => l.code === currentLanguage)?.flag}
          </span>
        </button>

        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-purple-200 dark:border-purple-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors ${
                currentLanguage === lang.code ? 'bg-purple-100 dark:bg-purple-900/50' : ''
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className={`text-sm font-medium ${
                currentLanguage === lang.code 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
