"use client"

import { useState, useEffect } from "react"
import Logo from "./logo"

export default function Preloader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="animate-pulse">
          <Logo className="w-16 h-16 text-[#6D5DD3] mx-auto" />
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">valentine.dev</h2>
          <p className="text-gray-400 text-sm">Initializing...</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 bg-gray-800 rounded-full h-1 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#6D5DD3] to-[#8B7ED8] h-full rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percentage */}
        <p className="text-[#6D5DD3] text-sm font-mono">{progress}%</p>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#6D5DD3] rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
