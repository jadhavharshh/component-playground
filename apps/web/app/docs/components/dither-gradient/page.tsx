import type React from "react"
import type { Metadata } from "next"
import { DitherGradient } from "@workspace/ui/components/dither-gradient"
import { InstallCommand } from "@/components/install-command"
import { CodeBlock } from "@/components/code-block"
import { ComponentLayout, Section } from "@/components/component-layout"

export const metadata: Metadata = {
  title: "Dither Gradient Component",
  description: "Animated dithered gradient background effect using canvas with Bayer matrix dithering. Beautiful retro-style gradients for React with Tailwind CSS by Harsh Jadhav.",
  alternates: {
    canonical: "https://componentry.fun/docs/components/dither-gradient",
  },
}

const defaultCode = `import { DitherGradient } from "@/components/ui/dither-gradient"

<div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-background">
  <DitherGradient />
  <div className="relative z-10 flex h-full items-center justify-center">
    <h3 className="text-2xl font-bold text-white">Dither Gradient</h3>
  </div>
</div>`

const customColorsCode = `import { DitherGradient } from "@/components/ui/dither-gradient"

<div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-background">
  <DitherGradient 
    colorFrom="#06b6d4"
    colorMid="#10b981"
    colorTo="#84cc16"
  />
  <div className="relative z-10 flex h-full items-center justify-center">
    <h3 className="text-2xl font-bold text-white">Ocean to Forest</h3>
  </div>
</div>`

const highIntensityCode = `import { DitherGradient } from "@/components/ui/dither-gradient"

<div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-background">
  <DitherGradient 
    colorFrom="#f97316"
    colorMid="#ef4444"
    colorTo="#be185d"
    intensity={0.2}
    speed={4}
    angle={120}
  />
  <div className="relative z-10 flex h-full items-center justify-center">
    <h3 className="text-2xl font-bold text-white">Sunset Fire</h3>
  </div>
</div>`

export default function DitherGradientPage(): React.JSX.Element {
  return (
    <ComponentLayout
      title="Dither Gradient"
      description="An animated dithered gradient background effect using canvas with Bayer matrix dithering. Creates a beautiful retro-style aesthetic with customizable colors and animation."

    >
      <Section title="Install">
        <InstallCommand component="dither-gradient" />
      </Section>

      <Section title="Examples">
        <div className="space-y-12">

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Default</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl rounded-b-none border border-border bg-background shadow-sm">
              <DitherGradient />
              <div className="relative z-10 flex h-full items-center justify-center">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">Dither Gradient</h3>
              </div>
            </div>
            <CodeBlock code={defaultCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Ocean to Forest</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl rounded-b-none border border-border bg-background shadow-sm">
              <DitherGradient 
                colorFrom="#06b6d4"
                colorMid="#10b981"
                colorTo="#84cc16"
              />
              <div className="relative z-10 flex h-full items-center justify-center">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">Ocean to Forest</h3>
              </div>
            </div>
            <CodeBlock code={customColorsCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Sunset Fire</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl rounded-b-none border border-border bg-background shadow-sm">
              <DitherGradient 
                colorFrom="#f97316"
                colorMid="#ef4444"
                colorTo="#be185d"
                intensity={0.2}
                speed={4}
                angle={120}
              />
              <div className="relative z-10 flex h-full items-center justify-center">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">Sunset Fire</h3>
              </div>
            </div>
            <CodeBlock code={highIntensityCode} lang="tsx" className="rounded-t-none" />
          </div>

        </div>
      </Section>

      <Section title="Props">
        <div className="grid grid-cols-1 divide-y border rounded-xl bg-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">colorFrom</div>
            <div className="text-sm text-muted-foreground">
              Start color of the gradient (default: #6366f1)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">colorMid</div>
            <div className="text-sm text-muted-foreground">
              Middle color of the gradient (default: #8b5cf6)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">colorTo</div>
            <div className="text-sm text-muted-foreground">
              End color of the gradient (default: #ec4899)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">intensity</div>
            <div className="text-sm text-muted-foreground">
              Dithering intensity from 0 to 1 (default: 0.15)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">speed</div>
            <div className="text-sm text-muted-foreground">
              Animation speed multiplier (default: 3)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">angle</div>
            <div className="text-sm text-muted-foreground">
              Gradient angle in degrees (default: 45)
            </div>
          </div>
        </div>
      </Section>
    </ComponentLayout>
  )
}
