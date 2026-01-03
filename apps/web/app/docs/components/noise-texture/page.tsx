import type React from "react"
import type { Metadata } from "next"
import { NoiseTexture } from "@workspace/ui/components/noise-texture"
import { InstallCommand } from "@/components/install-command"
import { CodeBlock } from "@/components/code-block"
import { ComponentLayout, Section } from "@/components/component-layout"

export const metadata: Metadata = {
  title: "Noise Texture Component",
  description: "Animated noise/grain texture overlay effect with customizable grain size and blend modes. Film grain effect for React with Tailwind CSS by Harsh Jadhav.",
  alternates: {
    canonical: "https://componentry.fun/docs/components/noise-texture",
  },
}

const defaultCode = `import { NoiseTexture } from "@/components/ui/noise-texture"

<div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-gradient-to-br from-violet-500 to-pink-500">
  <NoiseTexture />
  <div className="relative z-10 flex h-full items-center justify-center">
    <h3 className="text-2xl font-bold text-white">Noise Texture</h3>
  </div>
</div>`

const coarseGrainCode = `import { NoiseTexture } from "@/components/ui/noise-texture"

<div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-gradient-to-br from-emerald-500 to-cyan-500">
  <NoiseTexture 
    grain="coarse"
    opacity={0.2}
  />
  <div className="relative z-10 flex h-full items-center justify-center">
    <h3 className="text-2xl font-bold text-white">Coarse Grain</h3>
  </div>
</div>`

const staticNoiseCode = `import { NoiseTexture } from "@/components/ui/noise-texture"

<div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-gradient-to-br from-orange-500 to-red-500">
  <NoiseTexture 
    grain="fine"
    opacity={0.25}
    animate={false}
  />
  <div className="relative z-10 flex h-full items-center justify-center">
    <h3 className="text-2xl font-bold text-white">Static Noise</h3>
  </div>
</div>`

export default function NoiseTexturePage(): React.JSX.Element {
  return (
    <ComponentLayout
      title="Noise Texture"
      description="An animated noise/grain texture overlay effect. Adds a film grain aesthetic to any background with customizable grain size, animation speed, and blend modes."

    >
      <Section title="Install">
        <InstallCommand component="noise-texture" />
      </Section>

      <Section title="Examples">
        <div className="space-y-12">

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Default</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl rounded-b-none border border-border bg-gradient-to-br from-violet-500 to-pink-500 shadow-sm">
              <NoiseTexture />
              <div className="relative z-10 flex h-full items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Noise Texture</h3>
              </div>
            </div>
            <CodeBlock code={defaultCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Coarse Grain</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl rounded-b-none border border-border bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-sm">
              <NoiseTexture 
                grain="coarse"
                opacity={0.2}
              />
              <div className="relative z-10 flex h-full items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Coarse Grain</h3>
              </div>
            </div>
            <CodeBlock code={coarseGrainCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Static Noise</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl rounded-b-none border border-border bg-gradient-to-br from-orange-500 to-red-500 shadow-sm">
              <NoiseTexture 
                grain="fine"
                opacity={0.25}
                animate={false}
              />
              <div className="relative z-10 flex h-full items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Static Noise</h3>
              </div>
            </div>
            <CodeBlock code={staticNoiseCode} lang="tsx" className="rounded-t-none" />
          </div>

        </div>
      </Section>

      <Section title="Props">
        <div className="grid grid-cols-1 divide-y border rounded-xl bg-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">opacity</div>
            <div className="text-sm text-muted-foreground">
              Noise overlay opacity from 0 to 1 (default: 0.15)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">speed</div>
            <div className="text-sm text-muted-foreground">
              Animation frames per second (default: 10)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">grain</div>
            <div className="text-sm text-muted-foreground">
              Grain size: &quot;fine&quot; | &quot;medium&quot; | &quot;coarse&quot; (default: &quot;medium&quot;)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">blend</div>
            <div className="text-sm text-muted-foreground">
              CSS blend mode: &quot;overlay&quot; | &quot;soft-light&quot; | &quot;multiply&quot; | &quot;screen&quot; (default: &quot;overlay&quot;)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">animate</div>
            <div className="text-sm text-muted-foreground">
              Enable/disable animation (default: true)
            </div>
          </div>
        </div>
      </Section>
    </ComponentLayout>
  )
}
