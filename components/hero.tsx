"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(from_var(--primary)_l_c_h_/_0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,oklch(from_var(--primary)_l_c_h_/_0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(from_var(--primary)_l_c_h_/_0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,oklch(from_var(--primary)_l_c_h_/_0.08)_0%,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-8 animate-slide-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-foreground text-sm font-medium mb-8 animate-glow">
                <div className="relative">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-30"></div>
                </div>
                <span className="gradient-text font-semibold">Available for opportunities</span>
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Hi, I'm <span className="gradient-text animate-shimmer">Viraj</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance font-medium">
                Software Developer & Tech Enthusiast
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                Passionate about creating innovative solutions through full-stack development, mobile applications, and
                emerging technologies. Currently pursuing Software Engineering at NIBM Sri Lanka with a focus on modern
                web technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10 animate-fade-in-scale">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="modern-button min-w-[180px] h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                View My Work
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="modern-button min-w-[180px] h-12 text-base font-medium border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 bg-transparent"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start items-center gap-6 animate-fade-in-scale">
              <a
                href="https://github.com/virajwathsalag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/viraj-gunasinghe-56562031a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:virajwgunasinghe@gmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <Mail className="h-5 w-5" />
              </a>
              <div className="w-px h-8 bg-border mx-2"></div>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:bg-primary/5"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div
                  className="absolute inset-0 rounded-3xl transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={isHovered ? "#8b5cf6" : "#374151"} stopOpacity="0" />
                        <stop offset="50%" stopColor={isHovered ? "#8b5cf6" : "#374151"} stopOpacity="1" />
                        <stop offset="100%" stopColor={isHovered ? "#8b5cf6" : "#374151"} stopOpacity="0" />
                        {isHovered && (
                          <animateTransform
                            attributeName="gradientTransform"
                            type="translate"
                            values="-100 0;400 0;-100 0"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        )}
                      </linearGradient>
                      <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={isHovered ? "#8b5cf6" : "#374151"} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={isHovered ? "#8b5cf6" : "#374151"} stopOpacity="0" />
                        {isHovered && (
                          <animate attributeName="r" values="30%;70%;30%" dur="3s" repeatCount="indefinite" />
                        )}
                      </radialGradient>
                    </defs>

                    {isHovered && <circle cx="200" cy="200" r="150" fill="url(#pulseGradient)" opacity="0.3" />}

                    {/* Main circuit grid */}
                    <g
                      stroke={isHovered ? "#8b5cf6" : "#374151"}
                      strokeWidth="2"
                      fill="none"
                      className="transition-all duration-500"
                    >
                      {/* Horizontal lines with flowing animation */}
                      <line x1="0" y1="80" x2="400" y2="80" stroke="url(#circuitGradient)" strokeDasharray="20,10" />
                      <line x1="0" y1="160" x2="400" y2="160" stroke="url(#circuitGradient)" strokeDasharray="15,8" />
                      <line x1="0" y1="240" x2="400" y2="240" stroke="url(#circuitGradient)" strokeDasharray="25,5" />
                      <line x1="0" y1="320" x2="400" y2="320" stroke="url(#circuitGradient)" strokeDasharray="18,12" />

                      {/* Vertical lines */}
                      <line x1="80" y1="0" x2="80" y2="400" stroke="url(#circuitGradient)" strokeDasharray="20,10" />
                      <line x1="160" y1="0" x2="160" y2="400" stroke="url(#circuitGradient)" strokeDasharray="15,8" />
                      <line x1="240" y1="0" x2="240" y2="400" stroke="url(#circuitGradient)" strokeDasharray="25,5" />
                      <line x1="320" y1="0" x2="320" y2="400" stroke="url(#circuitGradient)" strokeDasharray="18,12" />
                    </g>

                    {/* Circuit nodes with pulsing animation */}
                    {[
                      [80, 80],
                      [160, 80],
                      [240, 80],
                      [320, 80],
                      [80, 160],
                      [160, 160],
                      [240, 160],
                      [320, 160],
                      [80, 240],
                      [160, 240],
                      [240, 240],
                      [320, 240],
                      [80, 320],
                      [160, 320],
                      [240, 320],
                      [320, 320],
                    ].map(([x, y], i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="3"
                        fill={isHovered ? "#8b5cf6" : "#6b7280"}
                        className="transition-all duration-500"
                      >
                        {isHovered && (
                          <>
                            <animate
                              attributeName="r"
                              values="3;6;3"
                              dur={`${2 + (i % 3)}s`}
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="fill-opacity"
                              values="1;0.3;1"
                              dur={`${1.5 + (i % 2)}s`}
                              repeatCount="indefinite"
                            />
                          </>
                        )}
                      </circle>
                    ))}

                    <rect
                      x="75"
                      y="75"
                      width="10"
                      height="10"
                      fill={isHovered ? "#8b5cf6" : "#6b7280"}
                      rx="2"
                      className="transition-all duration-500"
                    >
                      {isHovered && (
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 80 80;360 80 80"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      )}
                    </rect>
                    <rect
                      x="315"
                      y="75"
                      width="10"
                      height="10"
                      fill={isHovered ? "#8b5cf6" : "#6b7280"}
                      rx="2"
                      className="transition-all duration-500"
                    >
                      {isHovered && (
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 320 80;360 320 80"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      )}
                    </rect>
                    <rect
                      x="75"
                      y="315"
                      width="10"
                      height="10"
                      fill={isHovered ? "#8b5cf6" : "#6b7280"}
                      rx="2"
                      className="transition-all duration-500"
                    >
                      {isHovered && (
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 80 320;360 80 320"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      )}
                    </rect>
                    <rect
                      x="315"
                      y="315"
                      width="10"
                      height="10"
                      fill={isHovered ? "#8b5cf6" : "#6b7280"}
                      rx="2"
                      className="transition-all duration-500"
                    >
                      {isHovered && (
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 320 320;360 320 320"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      )}
                    </rect>
                  </svg>

                  {isHovered && (
                    <>
                      <div className="absolute inset-0 rounded-3xl bg-primary/10 animate-pulse"></div>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 via-primary/15 to-primary/5 animate-pulse"></div>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-500/5 via-purple-500/10 to-pink-500/5 animate-pulse delay-500"></div>
                    </>
                  )}
                </div>

                {/* Background gradient that blends with the image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-background/40 via-transparent to-background/20 rounded-3xl"></div>

                {/* Main image container with soft edges */}
                <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl z-10">
                  <Image
                    src="/images/viraj-profile.png"
                    alt="Viraj Gunasinghe"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center scale-110"
                    priority
                  />
                  {/* Gradient overlays for seamless blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/20"></div>
                </div>
              </div>

              {/* Static decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary/20 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 border-2 border-primary/30 rounded-2xl backdrop-blur-sm bg-card/30"></div>
              <div className="absolute top-1/2 -left-6 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
              <div className="absolute bottom-1/4 -right-4 w-2 h-2 bg-primary/60 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
