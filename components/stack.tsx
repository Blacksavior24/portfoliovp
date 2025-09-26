import Image from "next/image"

const technologies = [
  // Languages
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Language",
    color: "text-accent-500",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Language",
    color: "text-primary-500",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Language",
    color: "text-secondary-600",
  },
  {
    name: "C#",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    category: "Language",
    color: "text-purple-600",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Language",
    color: "text-blue-500",
  },

  // Frontend
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
    color: "text-pokemon-darkGray",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
    color: "text-pokemon-blue",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    category: "Frontend",
    color: "text-red-600",
  },
  {
    name: "Astro",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
    category: "Frontend",
    color: "text-purple-500",
  },

  // Backend
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend",
    color: "text-gray-500",
  },
  {
    name: "NestJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    category: "Backend",
    color: "text-red-500",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    category: "Backend",
    color: "text-pokemon-grassGreen",
  },
  {
    name: ".NET",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    category: "Backend",
    color: "text-purple-600",
  },
  {
    name: "Flask",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    category: "Backend",
    color: "text-gray-300",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    category: "Backend",
    color: "text-green-800",
  },

  // Cloud/Infra
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "Cloud",
    color: "text-pokemon-fireOrange",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "Cloud",
    color: "text-yellow-500",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", // Supabase usa PostgreSQL
    category: "Cloud",
    color: "text-green-500",
  },

  // Databases
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
    color: "text-pokemon-blue",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
    color: "text-blue-600",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
    color: "text-pokemon-grassGreen",
  },
  {
    name: "SQL Server",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    category: "Database",
    color: "text-red-500",
  },
  {
    name: "DynamoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg", // No hay logo específico, usamos AWS
    category: "Database",
    color: "text-blue-500",
  }
];

const categories = ["Language", "Frontend", "Backend", "Database", "Cloud"]

export default function Stack() {
  return (
    <section id="stack" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-accent-300/20 to-primary-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Las tecnologías y herramientas que domino para crear soluciones completas y eficientes.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span
                className={`${
                  categoryIndex % 3 === 0
                    ? "text-primary-400"
                    : categoryIndex % 3 === 1
                      ? "text-secondary-400"
                      : "text-accent-400"
                } bg-gradient-to-r ${
                  categoryIndex % 3 === 0
                    ? "from-primary-400 to-primary-300"
                    : categoryIndex % 3 === 1
                      ? "from-secondary-400 to-secondary-300"
                      : "from-accent-400 to-accent-300"
                } bg-clip-text text-transparent`}
              >
                {category}
              </span>
            </h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl">
                {technologies
                  .filter((tech) => tech.category === category)
                  .map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-6 bg-slate-900/70 border border-slate-700 backdrop-blur-md rounded-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-primary-500/20"
                    >
                      <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div
                          className={`absolute inset-0 ${
                            categoryIndex % 3 === 0
                              ? "bg-gradient-to-br from-primary-500/30 to-primary-600/50"
                              : categoryIndex % 3 === 1
                                ? "bg-gradient-to-br from-secondary-500/30 to-secondary-600/50"
                                : "bg-gradient-to-br from-accent-500/30 to-accent-600/50"
                          } rounded-xl blur-lg group-hover:blur-xl transition-all duration-300`}
                        ></div>
                        <Image
                          src={tech.logo || "/placeholder.svg"}
                          alt={tech.name}
                          fill
                          className="object-contain relative z-10 filter brightness-110"
                        />
                      </div>
                      <span className="text-sm font-semibold text-center text-slate-200 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
