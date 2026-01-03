"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@workspace/ui/lib/utils"

interface LiquidBlobProps {
  className?: string
  color?: string
  secondaryColor?: string
  size?: number
  blur?: number
  speed?: number
  opacity?: number
  interactive?: boolean
}

export function LiquidBlob({
  className,
  color = "#8b5cf6",
  secondaryColor = "#ec4899",
  size = 300,
  blur = 60,
  speed = 8,
  opacity = 0.7,
  interactive = true,
}: LiquidBlobProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (!interactive) return
    
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x * 0.15)
      mouseY.set(y * 0.15)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [interactive, mouseX, mouseY])

  return (
    <div 
      ref={containerRef}
      className={cn("pointer-events-auto absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, ${secondaryColor} 100%)`,
          filter: `blur(${blur}px)`,
          opacity,
          left: "20%",
          top: "20%",
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 60% 40% / 70% 30% 50% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.8,
          height: size * 0.8,
          background: `radial-gradient(circle, ${secondaryColor} 0%, ${color} 100%)`,
          filter: `blur(${blur}px)`,
          opacity: opacity * 0.8,
          right: "20%",
          bottom: "20%",
          x: useSpring(mouseX, { damping: 30, stiffness: 120 }),
          y: useSpring(mouseY, { damping: 30, stiffness: 120 }),
        }}
        animate={{
          scale: [1, 0.9, 1.2, 1, 1],
          borderRadius: [
            "40% 60% 60% 40% / 70% 30% 50% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 60% 40% / 70% 30% 50% 60%",
          ],
        }}
        transition={{
          duration: speed * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          background: `radial-gradient(circle, ${color} 30%, transparent 100%)`,
          filter: `blur(${blur * 0.8}px)`,
          opacity: opacity * 0.6,
          left: "50%",
          top: "50%",
          marginLeft: -size * 0.3,
          marginTop: -size * 0.3,
          x: useSpring(mouseX, { damping: 20, stiffness: 100 }),
          y: useSpring(mouseY, { damping: 20, stiffness: 100 }),
        }}
        animate={{
          scale: [1, 1.3, 0.8, 1.1, 1],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 60% 40% / 70% 30% 50% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: speed * 0.9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
