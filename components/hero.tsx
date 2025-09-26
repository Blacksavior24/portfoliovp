"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import dynamic from "next/dynamic"

// Importar el componente 3D dinámicamente para evitar problemas de SSR
const DeveloperSetup3D = dynamic(() => import("./developer-setup-3d"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full glass rounded-2xl flex items-center justify-center bg-slate-900/80">
      <div className="text-slate-300 animate-pulse">Cargando escena 3D...</div>
    </div>
  ),
})

export default function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/dark-curves-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"></div>

      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/15 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/15 to-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white drop-shadow-lg">{t("hero.greeting")}</span>{" "}
                <span className="text-purple-400 animate-pulse inline-block drop-shadow-lg">{t("hero.name")}</span>
                <br />
                <span className="text-blue-400 drop-shadow-lg">{t("hero.lastName")}</span>
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl text-slate-100 mb-6 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                Full Stack Developer
              </p>

              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0 drop-shadow-sm">
                Especializado en TypeScript, React, Next.js y Spring Boot. Creando soluciones web modernas y escalables
                con las mejores prácticas de desarrollo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 max-w-md mx-auto lg:mx-0">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white transition-all duration-300 transform hover:scale-105 px-8 py-3 shadow-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t("hero.contactButton")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 !border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:scale-105 px-8 py-3 backdrop-blur-sm bg-transparent shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t("hero.downloadCV")}
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 w-12 h-12 border-2 border-purple-400/40 hover:border-purple-400 text-white rounded-full backdrop-blur-sm shadow-lg"
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 w-12 h-12 border-2 border-blue-400/40 hover:border-blue-400 text-white rounded-full backdrop-blur-sm shadow-lg"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110 w-12 h-12 border-2 border-emerald-400/40 hover:border-emerald-400 text-white rounded-full backdrop-blur-sm shadow-lg"
                >
                  <a href="mailto:emerson@example.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-2xl h-[400px] lg:h-[600px] relative">
                <div className="border-purple-400/20 rounded-2xl p-4 h-full bg-slate-900/70 backdrop-blur-md shadow-2xl">
                  <DeveloperSetup3D />
                </div>

                {/* Professional floating tech badges */}
                <div className="absolute top-4 right-4 border-purple-400/20 rounded-lg px-4 py-2 animate-float bg-slate-900/90 backdrop-blur-sm shadow-lg">
                  <span className="text-sm font-bold text-purple-400">TypeScript</span>
                </div>
                <div
                  className="absolute bottom-4 left-4 border-purple-400/20 rounded-lg px-4 py-2 animate-float bg-slate-900/90 backdrop-blur-sm shadow-lg"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-sm font-bold text-blue-400">Spring Boot</span>
                </div>
                <div
                  className="absolute top-1/2 left-4 border-purple-400/20 rounded-lg px-4 py-2 animate-float bg-slate-900/90 backdrop-blur-sm shadow-lg"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-sm font-bold text-emerald-400">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
