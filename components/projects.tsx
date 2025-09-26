"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code, Server, Globe, Database } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con panel de administración, carrito de compras y sistema de pagos.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
    category: "Full Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
    category: "Full Stack",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Financial Dashboard",
    description: "Dashboard financiero con visualización de datos, reportes y análisis de tendencias.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Vue.js", "TypeScript", "Chart.js", "D3.js", "Tailwind CSS"],
    category: "Frontend",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Social Media API",
    description: "API RESTful para red social con autenticación JWT, sistema de posts y mensajería.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Spring Boot", "Java", "JWT", "Redis", "PostgreSQL"],
    category: "Backend",
    githubUrl: "https://github.com",
    liveUrl: null,
  },
  {
    title: "Real-time Chat Interface",
    description: "Interfaz de usuario moderna para chat en tiempo real con diseño responsive y animaciones.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: "Frontend",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Microservices Architecture",
    description:
      "Arquitectura de microservicios para e-commerce con API Gateway, autenticación y base de datos distribuida.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    category: "Backend",
    githubUrl: "https://github.com",
    liveUrl: null,
  },
  {
    title: "Data Analytics API",
    description: "API para análisis de datos con endpoints para reportes, métricas y visualizaciones en tiempo real.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["FastAPI", "Python", "PostgreSQL", "Redis", "Docker"],
    category: "API",
    githubUrl: "https://github.com",
    liveUrl: null,
  },
  {
    title: "Portfolio Website",
    description: "Sitio web personal con diseño moderno, animaciones y optimización SEO.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

const categories = [
  {
    name: "All",
    icon: Globe,
    color: "from-slate-600 to-slate-700",
    description: "Todos los proyectos",
  },
  {
    name: "Full Stack",
    icon: Code,
    color: "from-slate-600 to-slate-700",
    description: "Proyectos completos frontend + backend",
  },
  {
    name: "Frontend",
    icon: Globe,
    color: "from-slate-600 to-slate-700",
    description: "Interfaces de usuario y experiencias web",
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-slate-600 to-slate-700",
    description: "APIs, servicios y lógica de servidor",
  },
  {
    name: "API",
    icon: Database,
    color: "from-slate-600 to-slate-700",
    description: "APIs especializadas y microservicios",
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { t } = useLanguage()

  // Filtrar proyectos basado en la categoría seleccionada
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  // Obtener información de la categoría seleccionada
  const selectedCategoryInfo = categories.find((cat) => cat.name === selectedCategory)

  return (
    <section id="projects" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">{t("projects.subtitle")}</p>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const projectCount =
                category.name === "All"
                  ? projects.length
                  : projects.filter((project) => project.category === category.name).length

              const Icon = category.icon
              const isSelected = selectedCategory === category.name

              return (
                <Button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  variant="outline"
                  className={`transition-all duration-300 transform hover:scale-105 flex items-center gap-2 px-4 py-2 border-2 ${isSelected
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg hover:shadow-xl hover:!border-slate-700`
                    : ` !border-slate-700 text-slate-700 !bg-transparent hover:bg-gradient-to-r hover:${category.color} hover:text-white hover:border-transparent hover:shadow-md`
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  {t(`projects.categories.${category.name.toLowerCase().replace(" ", "")}`)}
                  <Badge
                    variant="secondary"
                    className={`ml-1 ${isSelected ? "bg-white/20 text-white border-white/30" : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    {projectCount}
                  </Badge>
                </Button>
              )
            })}
          </div>

          {/* Descripción de la categoría seleccionada */}
          {selectedCategoryInfo && selectedCategory !== "All" && (
            <div className={`bg-gradient-to-r ${selectedCategoryInfo.color} text-white rounded-xl p-4 max-w-md mx-auto mb-8 shadow-md`}>
              <p className="text-sm text-white/90">{selectedCategoryInfo.description}</p>
            </div>
          )}

          {/* Contador de resultados */}
          <div className="text-sm text-slate-500 mb-4">
            {selectedCategory === "All"
              ? `${t("projects.showingAll")} ${projects.length} ${t("projects.projects")}`
              : `${t("projects.showing")} ${filteredProjects.length} ${filteredProjects.length !== 1 ? t("projects.projects") : t("projects.project")
              } ${t("projects.projectsOf")} ${selectedCategory}`}
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const categoryInfo = categories.find((cat) => cat.name === project.category)
            const CategoryIcon = categoryInfo?.icon || Code

            return (
              <Card
                key={`${project.title}-${index}`}
                className="overflow-hidden hover:shadow-xl transition-all duration-500 transform bg-slate-900/70 border border-slate-700 group backdrop-blur-md rounded-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center">
<div className="relative h-48 w-[90%] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoryInfo?.color || "from-purple-500/30 to-indigo-500/30"} z-10`}></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Badge de categoría */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge
                      className={`bg-gradient-to-r ${categoryInfo?.color || "from-purple-500 to-indigo-500"} text-white border-0 shadow-lg flex items-center gap-1`}
                    >
                      <CategoryIcon className="h-3 w-3" />
                      {project.category}
                    </Badge>
                  </div>
                </div>
                </div>
                
                <CardHeader className="bg-transparent">
                  <CardTitle className="text-slate-200">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="bg-transparent">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-slate-800 text-slate-200 border border-slate-700 text-xs hover:bg-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 bg-transparent">
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-secondary-500 to-accent-500 hover:from-secondary-600 hover:to-accent-600 flex-1 text-white"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {t("projects.code")}
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-secondary-500 to-accent-500 hover:from-secondary-600 hover:to-accent-600 flex-1 text-white"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("projects.demo")}
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>

            )
          })}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-slate-700 mb-2">{t("projects.noResults")}</h3>
              <p className="text-slate-500 mb-4">
                {t("projects.noResultsDesc")} <span className="font-semibold text-primary-600">{selectedCategory}</span>
              </p>
              <Button
                onClick={() => setSelectedCategory("All")}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
              >
                {t("projects.viewAll")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
