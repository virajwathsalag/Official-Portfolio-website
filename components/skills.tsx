"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef } from "react"
import { Code2, Briefcase, Sparkles } from "lucide-react"

const technicalSkills = [
  { category: "Programming Languages", skills: ["Java", "C", "C++", "Kotlin", "Python"] },
  { category: "Frameworks & Platforms", skills: ["Spring Boot", ".NET", ".NET Core", "Android", "Firebase"] },
  { category: "Databases", skills: ["MySQL", "PostgreSQL", "MSSQL", "Oracle", "MongoDB"] },
  {
    category: "Tools & IDEs",
    skills: ["Git", "GitHub", "Postman", "Android Studio", "Visual Studio", "IntelliJ IDEA", "PyCharm"],
  },
  { category: "Project Management", skills: ["JIRA", "Agile", "Scrum", "Kanban"] },
]

const professionalSkills = [
  "Project Management & Leadership",
  "Effective Communication & Critical Thinking",
  "Time Management & Working Under Pressure",
  "Quick Learning & Adaptability",
  "Team Collaboration",
]

export function Skills() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
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
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,oklch(from_var(--primary)_l_c_h_/_0.05)_0%,transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  className={`transform transition-all duration-1000 ${
                    visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse"></div>
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="relative overflow-hidden bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group/badge border border-border/30 hover:border-primary/40"
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            style={{
                              animationDelay: `${skillIndex * 100}ms`,
                            }}
                          >
                            <div
                              className={`absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -skew-x-12 transition-all duration-700 ${
                                hoveredSkill === skill ? "translate-x-full" : "-translate-x-full"
                              }`}
                            ></div>
                            <span className="relative z-10">{skill}</span>
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Professional Skills</h3>
            </div>
            <div
              ref={(el) => {
                cardRefs.current[technicalSkills.length] = el
              }}
              className={`transform transition-all duration-1000 ${
                visibleCards.includes(technicalSkills.length) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${technicalSkills.length * 150}ms` }}
            >
              <Card className="h-full group hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {professionalSkills.map((skill, index) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-4 group/item cursor-pointer p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-primary/60 rounded-full group-hover/item:bg-primary transition-all duration-300"></div>
                          <div
                            className={`absolute inset-0 w-3 h-3 bg-primary rounded-full transition-all duration-500 ${
                              hoveredSkill === skill ? "animate-ping opacity-30" : "opacity-0"
                            }`}
                          ></div>
                        </div>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 font-medium">
                          {skill}
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent group-hover/item:from-primary/30 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
