import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Asistente Programador de Software",
    company: "Operadora Surperu",
    period: "01-03-2024 - 16-04-2025",
    description:
      "Desarrollo de proyectos fullstack con React.js, Material-UI y Express en el backend. Desarrollo móvil con React Native Paper y Zustand. Uso de Next.js y Tailwind CSS, integración con NestJS para APIs. Automatización de tareas y análisis de datos con Python.",
    technologies: ["React.js", "Material-UI", "Express", "React Native", "Zustand", "Tailwind CSS", "Next.js", "NestJS", "Python", "Prisma", "ORM"],
  },
  {
    title: "Desarrollador de Aplicaciones Web",
    company: "Digisolutions",
    period: "01-06-2023 - 15-10-2023",
    description:
      "Participación en un proyecto fullstack con Next.js y Material-UI. Gestión de datos con AWS DynamoDB y S3. Desarrollo de API RESTful usando AWS API Gateway para comunicación segura entre frontend y backend.",
    technologies: ["Next.js", "Material-UI", "AWS DynamoDB", "Amazon S3", "AWS API Gateway", "Serverless"],
  },
  {
    title: "Desarrollador de Software",
    company: "Isos Group S.A.C.",
    period: "01-03-2023 - 01-06-2023",
    description:
      "Desarrollo de APIs con enfoque en rendimiento, escalabilidad y seguridad. Diseño y mantenimiento de bases de datos. Implementación de CI/CD para DevOps de las APIs.",
    technologies: ["API REST", "CI/CD", "Bases de datos", "DevOps", "ORM", "Sequelize"],
  },
  {
    title: "Desarrollo, Programación y Soporte",
    company: "Grupo Sistemas S.A.C.",
    period: "11-04-2022 - 10-08-2022",
    description:
      "Desarrollo de sistemas y herramientas con énfasis en rendimiento y escalabilidad. Soporte y mantenimiento de bases de datos y análisis de requerimientos.",
    technologies: ["Bases de datos", "Soporte técnico", "Análisis de requerimientos"],
  },
  {
    title: "Full Stack Web Developer",
    company: "Escuela Profesional De Arte – Universidad Nacional",
    period: "20-11-2021 - 22-02-2022",
    description:
      "Diseño y desarrollo de sistemas para la Escuela Profesional de Arte. Gestión del servidor web, asistencia en reuniones y propuestas para mejora de sistemas.",
    technologies: ["Full Stack", "Servidor Web", "Sistemas de gestión"],
  },
];


export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-accent-300/20 to-primary-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
            Experiencia
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software, desde mis inicios hasta mi rol actual.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Colorful timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-400 rounded-full"></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Colorful timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
<Card className="bg-slate-900/70 border border-slate-700 backdrop-blur-md rounded-2xl hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300">
                    <CardHeader className="bg-transparent">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-lg text-slate-200">{experience.title}</CardTitle>
                        <Badge className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-0 shadow-md">
                          {experience.period}
                        </Badge>
                      </div>
                      <CardDescription className="font-semibold text-slate-400">{experience.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="bg-transparent">
                      <p className="text-slate-300 mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className="bg-slate-800 text-slate-200 border border-slate-700 text-xs hover:bg-slate-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
