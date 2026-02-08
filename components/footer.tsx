import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div>
      <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      {/* Contenido */}
      <div className="relative z-10 py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Nombre y rol */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Emerson Edward Villata Quispe
              </h3>
              <p className="text-slate-400 mt-1">Full Stack Developer</p>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <a href="https://github.com/blacksavior24" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <a href="https://www.linkedin.com/in/emerson-villata-1b09a01aa/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <a href="mailto:emersonevillataq@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-slate-800 mt-10 pt-6 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Emerson Edward Villata Quispe. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
