"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Languages } from "lucide-react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
        className="text-slate-200 hover:text-purple-400 transition-all duration-300 hover:scale-105 font-medium flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === "es" ? "EN" : "ES"}</span>
    </Button>
  )
}
