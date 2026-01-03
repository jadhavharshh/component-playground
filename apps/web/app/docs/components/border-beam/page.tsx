import type React from "react"
import type { Metadata } from "next"
import { BorderBeam } from "@workspace/ui/components/border-beam"
import { InstallCommand } from "@/components/install-command"
import { CodeBlock } from "@/components/code-block"
import { ComponentLayout, Section } from "@/components/component-layout"

export const metadata: Metadata = {
  title: "Border Beam Component",
  description: "Animated border beam effect that follows the border path. Beautiful glowing animation for React with Tailwind CSS by Harsh Jadhav.",
  alternates: {
    canonical: "https://componentry.fun/docs/components/border-beam",
  },
}

const defaultBeamCode = `import { BorderBeam } from "@/components/ui/border-beam"

<div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border bg-background">
  <div className="z-10 text-center">
    <h3 className="text-2xl font-bold tracking-tight">Border Beam</h3>
    <p className="text-muted-foreground">The beam follows the border path</p>
  </div>
  <BorderBeam />
</div>`

const customColorsCode = `import { BorderBeam } from "@/components/ui/border-beam"

<div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border bg-background">
  <div className="z-10 text-center">
    <h3 className="text-2xl font-bold tracking-tight">Customized</h3>
    <p className="text-muted-foreground">Slower, larger, custom colors</p>
  </div>
  <BorderBeam 
    size={500}
    duration={20}
    borderWidth={2}
    colorFrom="#10b981"
    colorTo="#3b82f6"
  />
</div>`

const fastBeamCode = `import { BorderBeam } from "@/components/ui/border-beam"

<div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border bg-background">
  <div className="z-10 text-center">
    <h3 className="text-2xl font-bold tracking-tight">Fast Beam</h3>
    <p className="text-muted-foreground">Quick animation with warm colors</p>
  </div>
  <BorderBeam 
    size={150}
    duration={5}
    colorFrom="#f97316"
    colorTo="#eab308"
  />
</div>`

const delayedBeamCode = `import { BorderBeam } from "@/components/ui/border-beam"

<div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border bg-background">
  <div className="z-10 text-center">
    <h3 className="text-2xl font-bold tracking-tight">Delayed Start</h3>
    <p className="text-muted-foreground">Beam starts after a 3 second delay</p>
  </div>
  <BorderBeam 
    size={250}
    duration={12}
    delay={3}
    colorFrom="#ec4899"
    colorTo="#8b5cf6"
  />
</div>`

export default function BorderBeamPage(): React.JSX.Element {
  return (
    <ComponentLayout
      title="Border Beam"
      description="A moving gradient beam that travels along the border of its container. Perfect for highlighting active states, new features, or premium content."

    >
      <Section title="Install">
        <InstallCommand component="border-beam" />
      </Section>

      <Section title="Examples">
        <div className="space-y-12">

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Default</h3>
            <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-t-xl rounded-b-none border border-border bg-background shadow-sm">
              <div className="z-10 text-center">
                <h3 className="text-2xl font-bold tracking-tight">Border Beam</h3>
                <p className="text-muted-foreground">The beam follows the border path</p>
              </div>
              <BorderBeam />
            </div>
            <CodeBlock code={defaultBeamCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Custom Colors</h3>
            <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-t-xl rounded-b-none border border-border bg-background shadow-sm">
              <div className="z-10 text-center">
                <h3 className="text-2xl font-bold tracking-tight">Customized</h3>
                <p className="text-muted-foreground">Slower, larger, custom colors</p>
              </div>
              <BorderBeam 
                size={500}
                duration={20}
                borderWidth={2}
                colorFrom="#10b981"
                colorTo="#3b82f6"
              />
            </div>
            <CodeBlock code={customColorsCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Fast Animation</h3>
            <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-t-xl rounded-b-none border border-border bg-background shadow-sm">
              <div className="z-10 text-center">
                <h3 className="text-2xl font-bold tracking-tight">Fast Beam</h3>
                <p className="text-muted-foreground">Quick animation with warm colors</p>
              </div>
              <BorderBeam 
                size={150}
                duration={5}
                colorFrom="#f97316"
                colorTo="#eab308"
              />
            </div>
            <CodeBlock code={fastBeamCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Delayed Start</h3>
            <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-t-xl rounded-b-none border border-border bg-background shadow-sm">
              <div className="z-10 text-center">
                <h3 className="text-2xl font-bold tracking-tight">Delayed Start</h3>
                <p className="text-muted-foreground">Beam starts after a 3 second delay</p>
              </div>
              <BorderBeam 
                size={250}
                duration={12}
                delay={3}
                colorFrom="#ec4899"
                colorTo="#8b5cf6"
              />
            </div>
            <CodeBlock code={delayedBeamCode} lang="tsx" className="rounded-t-none" />
          </div>

        </div>
      </Section>

      <Section title="Props">
        <div className="grid grid-cols-1 divide-y border rounded-xl bg-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">size</div>
            <div className="text-sm text-muted-foreground">
              Length of the beam in pixels (default: 200)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">duration</div>
            <div className="text-sm text-muted-foreground">
              Animation duration in seconds (default: 15)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">borderWidth</div>
            <div className="text-sm text-muted-foreground">
              Width of the border/beam in pixels (default: 1.5)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">colorFrom</div>
            <div className="text-sm text-muted-foreground">
              Start color of the gradient (default: #ffaa40)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">colorTo</div>
            <div className="text-sm text-muted-foreground">
              End color of the gradient (default: #9c40ff)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">delay</div>
            <div className="text-sm text-muted-foreground">
              Animation delay in seconds (default: 0)
            </div>
          </div>
        </div>
      </Section>
    </ComponentLayout>
  )
}
