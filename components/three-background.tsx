"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    let scene: any, camera: any, renderer: any, particles: any
    let animationId: number

    const init = async () => {
      // Dynamic import to avoid SSR issues
      const THREE = await import("three")

      if (!mountRef.current) return

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)
      mountRef.current.appendChild(renderer.domElement)

      // Particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 800
      const posArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: theme === "dark" ? 0xffffff : 0x000000,
        transparent: true,
        opacity: 0.8,
      })

      particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      camera.position.z = 3

      // Animation
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        particles.rotation.x += 0.0005
        particles.rotation.y += 0.0005

        renderer.render(scene, camera)
      }
      animate()

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }

    init()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [theme])

  return <div ref={mountRef} className="fixed inset-0 -z-10 pointer-events-none" style={{ zIndex: -1 }} />
}
