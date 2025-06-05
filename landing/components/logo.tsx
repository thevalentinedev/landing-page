import type React from "react"

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Base hexagon shape */}
        <path
          d="M50 5L87.5 25V75L50 95L12.5 75V25L50 5Z"
          fill="url(#gradient-fill)"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse-slow"
        />

        {/* V shape */}
        <path
          d="M35 30L50 70L65 30"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
        />

        {/* Code bracket */}
        <path
          d="M30 45L20 50L30 55"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw animation-delay-500"
        />

        {/* Code bracket */}
        <path
          d="M70 45L80 50L70 55"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw animation-delay-500"
        />

        {/* Dot */}
        <circle cx="50" cy="50" r="3" fill="white" className="animate-ping-slow" />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient-fill" x1="12.5" y1="5" x2="87.5" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6D5DD3" />
            <stop offset="1" stopColor="#8B7ED8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#6D5DD3]/20 blur-xl rounded-full scale-75 animate-glow"></div>
    </div>
  )
}

export default Logo
