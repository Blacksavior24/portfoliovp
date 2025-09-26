"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageToggle from "./language-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-slate-900/80 border-b border-purple-500/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Emerson Villata
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-200 hover:text-purple-400 transition-all duration-300 hover:scale-105 font-medium"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-200 hover:text-purple-400 transition-all duration-300 hover:scale-105 font-medium"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-200 hover:text-purple-400 transition-all duration-300 hover:scale-105 font-medium"
            >
              {t("nav.experience")}
            </button>
            <button
              onClick={() => scrollToSection("stack")}
              className="text-slate-200 hover:text-purple-400 transition-all duration-300 hover:scale-105 font-medium"
            >
              {t("nav.stack")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-200 hover:text-purple-400 transition-all duration-300 hover:scale-105 font-medium"
            >
              {t("nav.contact")}
            </button>

            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-purple-400 hover:bg-purple-500/10"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 border-t border-purple-500/20 pt-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block text-slate-200 hover:text-purple-400 transition-colors font-medium"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block text-slate-200 hover:text-purple-400 transition-colors font-medium"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block text-slate-200 hover:text-purple-400 transition-colors font-medium"
            >
              {t("nav.experience")}
            </button>
            <button
              onClick={() => scrollToSection("stack")}
              className="block text-slate-200 hover:text-purple-400 transition-colors font-medium"
            >
              {t("nav.stack")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-slate-200 hover:text-purple-400 transition-colors font-medium"
            >
              {t("nav.contact")}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
