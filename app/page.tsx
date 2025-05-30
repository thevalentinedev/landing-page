"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin } from "lucide-react"
import Logo from "@/components/logo"
import Preloader from "@/components/preloader"
import ParticleSystem from "@/components/particle-system"

export default function ComingSoonPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Preloader timing
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 2,
        y: (clientY / innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-950 text-white flex flex-col overflow-hidden relative">
      {/* WebGL Particle System */}
      <ParticleSystem mousePosition={mousePosition} />

      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid with parallax */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(109,93,211,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(109,93,211,0.03)_1px,transparent_1px)] bg-[size:50px_50px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        />

        {/* Floating code snippets with parallax */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[
            { text: "const future = await valentine.dev()", x: 10, y: 20 },
            { text: 'import { innovation } from "valentine"', x: 70, y: 30 },
            { text: "export default function Code() {}", x: 20, y: 70 },
            { text: "<Valentine />", x: 80, y: 60 },
            { text: 'git commit -m "launch soon"', x: 50, y: 80 },
          ].map((code, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-[#6D5DD3] animate-float transition-transform duration-500 ease-out"
              style={{
                left: `${code.x}%`,
                top: `${code.y}%`,
                transform: `translate(${mousePosition.x * (15 + i * 5)}px, ${mousePosition.y * (15 + i * 5)}px)`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {code.text}
            </div>
          ))}
        </div>

        {/* Gradient blobs with parallax */}
        <div
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#6D5DD3]/10 to-[#8B7ED8]/5 rounded-full blur-[100px] animate-blob transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-[#6D5DD3]/5 to-[#8B7ED8]/10 rounded-full blur-[80px] animate-blob animation-delay-2000 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          }}
        />
      </div>

      {/* Header */}
      <header className="pt-8 pb-4 animate-slide-in-top relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Logo className="w-12 h-12 text-[#6D5DD3]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-center mt-4">
            <span className="text-white">valentine</span>
            <span className="text-[#6D5DD3]">.dev</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <div className="text-center space-y-16 max-w-2xl mx-auto">
          {/* Coming Soon Headline - Fixed Layout */}
          <div className="animate-fade-in-scale">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              <div className="text-white animate-fade-in-up">Coming</div>
              <div className="bg-gradient-to-r from-[#6D5DD3] to-[#8B7ED8] bg-clip-text text-transparent animate-fade-in-up-delay">
                Soon
              </div>
            </h2>
          </div>

          {/* Launch Progress */}
          <div className="space-y-6 animate-fade-in-up-2">
            <div className="space-y-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">Launch Progress</p>

              {/* Progress Bar Container */}
              <div className="w-full max-w-md mx-auto">
                <div className="bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-[#6D5DD3] to-[#8B7ED8] h-full rounded-full relative overflow-hidden animate-progress-fill">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>

                {/* Progress Text - Only 75% */}
                <div className="flex justify-center items-center mt-3">
                  <span className="text-[#6D5DD3] text-lg font-bold animate-count-up">75%</span>
                </div>
              </div>

              {/* Status Text */}
              <p className="text-gray-300 text-sm animate-fade-in-delayed">Almost ready to launch...</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 pt-4 animate-slide-in-bottom relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm animate-fade-in-footer">© 2025 valentine.dev</p>
            <div className="flex space-x-6 animate-fade-in-footer-delayed">
              <a
                href="https://github.com/codebyvalentine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#6D5DD3] transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/valentine-ohalebo-51bb37221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#6D5DD3] transition-all duration-300 transform hover:scale-125 hover:-rotate-12"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
