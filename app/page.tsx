import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Stack from "@/components/stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-curves-hero">
      <div className="bg-curves-pattern">
        <Header />
        <Hero />
        <Projects />
        <Experience />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
