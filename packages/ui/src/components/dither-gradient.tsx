"use client"

import { useEffect, useRef } from "react"
import { cn } from "@workspace/ui/lib/utils"

interface DitherGradientProps {
  className?: string
  colorFrom?: string
  colorTo?: string
  colorMid?: string
  intensity?: number
  speed?: number
  angle?: number
}

export function DitherGradient({
  className,
  colorFrom = "#4f46e5",
  colorTo = "#ec4899",
  colorMid = "#a855f7",
  intensity = 0.15,
  speed = 3,
  angle = 45,
}: DitherGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resize()
    window.addEventListener("resize", resize)

    let time = 0
    const bayerMatrix = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5],
    ]

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      if (!result) return { r: 0, g: 0, b: 0 }
      return {
        r: parseInt(result[1]!, 16),
        g: parseInt(result[2]!, 16),
        b: parseInt(result[3]!, 16),
      }
    }

    const smoothstep = (t: number) => t * t * (3 - 2 * t)

    const animate = () => {
      const { width, height } = canvas
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      const from = hexToRgb(colorFrom)
      const mid = hexToRgb(colorMid)
      const to = hexToRgb(colorTo)
      const rad = (angle * Math.PI) / 180

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const normalizedX = x / width
          const normalizedY = y / height
          
          const gradientPos = 
            (normalizedX * Math.cos(rad) + normalizedY * Math.sin(rad)) * 0.8 + 
            0.1 + 
            Math.sin(time * speed * 0.0008) * 0.1

          const clampedPos = Math.max(0, Math.min(1, gradientPos))

          let r: number, g: number, b: number
          if (clampedPos < 0.5) {
            const t = smoothstep(clampedPos * 2)
            r = from.r + (mid.r - from.r) * t
            g = from.g + (mid.g - from.g) * t
            b = from.b + (mid.b - from.b) * t
          } else {
            const t = smoothstep((clampedPos - 0.5) * 2)
            r = mid.r + (to.r - mid.r) * t
            g = mid.g + (to.g - mid.g) * t
            b = mid.b + (to.b - mid.b) * t
          }

          const threshold = (bayerMatrix[y % 4]![x % 4]! / 16 - 0.5) * intensity * 180
          const noise = (Math.random() - 0.5) * intensity * 60

          const idx = (y * width + x) * 4
          data[idx] = Math.min(255, Math.max(0, r + threshold + noise))
          data[idx + 1] = Math.min(255, Math.max(0, g + threshold + noise))
          data[idx + 2] = Math.min(255, Math.max(0, b + threshold + noise))
          data[idx + 3] = 255
        }
      }

      ctx.putImageData(imageData, 0, 0)
      time += 16
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [colorFrom, colorTo, colorMid, intensity, speed, angle])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full", className)}
    />
  )
}
