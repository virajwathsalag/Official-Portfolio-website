"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Zap, Code2 } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Saliya Auto Care Digital Platform",
    period: "Mar 2024 – Feb 2025",
    description:
      "Built full-stack platform including admin software, cashier POS system, mobile app, and promotional website.",
    technologies: ["C#", "Dart", "HTML", "PHP", "CSS", "MySQL"],
    type: "Full-Stack Development",
    image: "/images/projects/saliya-auto-care.png",
  },
  {
    title: "EduStack",
    period: "July 2025",
    description: "Developed Android app for tuition centers with roles for Admin, Teacher, and Student.",
    technologies: ["Kotlin", "Firebase"],
    type: "Mobile App Development",
    image: "/images/projects/edustack.png",
  },
  {
    title: "SuperMarket Robot",
    period: "Feb 2025 – Present",
    description: "Prototyped autonomous supermarket robot with mobile app control and Java-based POS integration.",
    technologies: ["C++", "Dart", "Java", "Firebase"],
    type: "R&D & Mobile App",
    image: "/images/projects/supermarket-robot.png",
  },
  {
    title: "Disaster Management System",
    period: "Jul 2025 – Aug 2025",
    description: "Created IoT-based disaster pre-warning system with mobile app and command center desktop software.",
    technologies: ["JavaScript", "Kotlin", "Firebase", "MySQL"],
    type: "IoT, Mobile App & Electron App",
    image: "/images/projects/disaster-management.png",
  },
]

export function Projects() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(from_var(--primary)_l_c_h_/_0.03)_0%,transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Code2 className="h-4 w-4" />
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance animate-slide-in-up">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A collection of projects showcasing my expertise in full-stack development, mobile applications, and
            innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`transform transition-all duration-1000 ${
                visibleCards.includes(index) ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className="relative h-[400px] perspective-1000"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Main project card */}
                <Card
                  className={`absolute inset-0 h-full overflow-hidden cursor-pointer transition-all duration-700 transform-gpu preserve-3d ${
                    hoveredCard === index ? "rotate-x-[-90deg]" : "rotate-x-0"
                  }`}
                  style={{ transformOrigin: "center bottom" }}
                >
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-balance flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs border-primary/20 text-primary bg-primary/5">
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.period}</p>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="flex items-center space-x-2 bg-transparent">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center space-x-2 bg-transparent">
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Preview card with project image */}
                <Card
                  className={`absolute inset-0 h-full overflow-hidden transition-all duration-700 transform-gpu preserve-3d ${
                    hoveredCard === index ? "rotate-x-0 opacity-100" : "rotate-x-[90deg] opacity-0"
                  }`}
                  style={{ transformOrigin: "center top" }}
                >
                  <div className="relative h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <Badge className="bg-primary/90 text-primary-foreground border-0 shadow-lg mb-4">
                        Live Preview
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>

                      <div className="flex space-x-3">
                        <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
