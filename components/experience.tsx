"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Building2, Award, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

const workExperience = [
  {
    title: "Community Developer - Dev1",
    company: "Open Medical Recording System (OpenMRS)",
    period: "2024 – Present",
    description: [
      "Contributed to OpenMRS 3.x by resolving frontend issues, improving user experience, and having the fixes released to production.",
      "Contributed to QA by adding Playwright tests",
    ],
  },
]

const education = [
  {
    degree: "Higher National Diploma in Software Engineering",
    institution: "National Institute of Business Management, Sri Lanka",
    period: "2024 – Present",
    status: "In Progress",
  },
  {
    degree: "Diploma in Software Engineering",
    institution: "National Institute of Business Management, Sri Lanka",
    period: "2023 – 2024",
    status: "GPA: 3.95 / 4.0",
  },
  {
    degree: "Certificate in Software Engineering",
    institution: "National Institute of Business Management, Sri Lanka",
    period: "2022 – 2023",
    status: "Passed with Distinction",
  },
  {
    degree: "GCE Ordinary Level",
    institution: "Royal International School",
    period: "2021 – 2023",
    status: "Qualified in Mathematics, Science, ICT, English",
  },
]

export function Experience() {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null)
  const [hoveredEdu, setHoveredEdu] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-shimmer">
            Experience & Education
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                <Briefcase className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Work Experience
              </h3>
            </div>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card
                  key={job.title}
                  className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 border-border/50 hover:border-blue-500/50"
                  onMouseEnter={() => setHoveredWork(index)}
                  onMouseLeave={() => setHoveredWork(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-600/5 to-purple-500/5 transition-opacity duration-500 ${hoveredWork === index ? "opacity-100" : "opacity-0"}`}
                  ></div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                        <Building2 className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-balance group-hover:text-blue-600 transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <div className="text-blue-600 font-medium flex items-center gap-2 mt-1">
                          <span>{job.company}</span>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <Calendar className="h-4 w-4" />
                          {job.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {job.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-muted-foreground text-sm flex items-start space-x-2 group-hover:text-foreground transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-400 transition-colors duration-300"></div>
                          <span className="text-pretty">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                <GraduationCap className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={edu.degree}
                  className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 border-border/50 hover:border-purple-500/50"
                  onMouseEnter={() => setHoveredEdu(index)}
                  onMouseLeave={() => setHoveredEdu(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-purple-500/5 via-purple-600/5 to-pink-500/5 transition-opacity duration-500 ${hoveredEdu === index ? "opacity-100" : "opacity-0"}`}
                  ></div>

                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-300">
                        <Award className="h-5 w-5 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-balance group-hover:text-purple-600 transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <p className="text-purple-600 text-sm font-medium flex items-center gap-2 mt-1">
                          <MapPin className="h-4 w-4" />
                          {edu.institution}
                        </p>
                        <p className="text-xs text-muted-foreground mb-2 flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </p>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 hover:from-purple-500/20 hover:to-purple-600/20 transition-all duration-300"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
