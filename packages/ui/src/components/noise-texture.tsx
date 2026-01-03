"use client"

import { useEffect, useRef } from "react"
import { cn } from "@workspace/ui/lib/utils"

interface NoiseTextureProps {
  className?: string
  opacity?: number
  speed?: number
  grain?: "fine" | "medium" | "coarse"
  blend?: "overlay" | "soft-light" | "multiply" | "screen" | "normal"
  animate?: boolean
}

export function NoiseTexture({
  className,
  opacity = 0.4,
  speed = 10,
  grain = "medium",
  blend = "normal",
  animate = true,
}: NoiseTextureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | NodeJS.Timeout>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const grainSizes: Record<string, number> = {
      fine: 1,
      medium: 2,
      coarse: 3,
    }
    const grainSize = grainSizes[grain] ?? 2

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.ceil(rect.width / grainSize) * dpr
      canvas.height = Math.ceil(rect.height / grainSize) * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resize()
    window.addEventListener("resize", resize)

    const renderNoise = () => {
      const { width, height } = canvas
      if (width === 0 || height === 0) return
      
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = 255
      }

      ctx.putImageData(imageData, 0, 0)
    }

    renderNoise()

    if (animate) {
      const animateNoise = () => {
        renderNoise()
        animationRef.current = setTimeout(() => {
          requestAnimationFrame(animateNoise)
        }, 1000 / speed)
      }
      animateNoise()
    }

    return () => {
      window.removeEventListener("resize", resize)
      if (animationRef.current) {
        clearTimeout(animationRef.current as NodeJS.Timeout)
      }
    }
  }, [grain, speed, animate])

  const grainSizes: Record<string, number> = {
    fine: 1,
    medium: 2,
    coarse: 3,
  }

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        opacity,
        mixBlendMode: blend,
        imageRendering: "pixelated",
        width: "100%",
        height: "100%",
        transform: `scale(${grainSizes[grain] ?? 2})`,
        transformOrigin: "top left",
      }}
    />
  )
}
