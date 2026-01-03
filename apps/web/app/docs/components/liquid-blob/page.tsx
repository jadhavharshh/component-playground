import type React from "react"
import type { Metadata } from "next"
import { LiquidBlob } from "@workspace/ui/components/liquid-blob"
import { InstallCommand } from "@/components/install-command"
import { CodeBlock } from "@/components/code-block"
import { ComponentLayout, Section } from "@/components/component-layout"

export const metadata: Metadata = {
  title: "Liquid Blob Component",
  description: "Animated liquid morphing blob shapes that create a beautiful organic background effect. Glassmorphism style blobs for React with Tailwind CSS by Harsh Jadhav.",
  alternates: {
    canonical: "https://componentry.fun/docs/components/liquid-blob",
  },
}

const defaultCode = `import { LiquidBlob } from "@/components/ui/liquid-blob"

// Hover over the container to see the interactive effect!
<div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-zinc-900">
  <LiquidBlob interactive />
  <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
    <h3 className="text-2xl font-bold text-white">Liquid Blob</h3>
  </div>
</div>`

const customColorsCode = `import { LiquidBlob } from "@/components/ui/liquid-blob"

<div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-zinc-900">
  <LiquidBlob 
    color="#10b981"
    secondaryColor="#06b6d4"
    size={350}
    blur={80}
  />
  <div className="relative z-10 flex h-full items-center justify-center">
    <h3 className="text-2xl font-bold text-white">Teal Theme</h3>
  </div>
</div>`

const fastBlobCode = `import { LiquidBlob } from "@/components/ui/liquid-blob"

<div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-zinc-900">
  <LiquidBlob 
    color="#f97316"
    secondaryColor="#ef4444"
    size={250}
    speed={4}
    opacity={0.8}
  />
  <div className="relative z-10 flex h-full items-center justify-center">
    <h3 className="text-2xl font-bold text-white">Fast Animation</h3>
  </div>
</div>`

export default function LiquidBlobPage(): React.JSX.Element {
  return (
    <ComponentLayout
      title="Liquid Blob"
      description="Animated liquid morphing blob shapes that create a beautiful organic background effect. Perfect for hero sections, cards, and creating depth with glassmorphism style."

    >
      <Section title="Install">
        <InstallCommand component="liquid-blob" />
      </Section>

      <Section title="Examples">
        <div className="space-y-12">

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Interactive (Hover Me!)</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl rounded-b-none border border-border bg-zinc-900 shadow-sm">
              <LiquidBlob interactive />
              <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
                <h3 className="text-2xl font-bold text-white">Liquid Blob</h3>
              </div>
            </div>
            <CodeBlock code={defaultCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Teal Theme</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl rounded-b-none border border-border bg-zinc-900 shadow-sm">
              <LiquidBlob 
                color="#10b981"
                secondaryColor="#06b6d4"
                size={350}
                blur={80}
                interactive
              />
              <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
                <h3 className="text-2xl font-bold text-white">Teal Theme</h3>
              </div>
            </div>
            <CodeBlock code={customColorsCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Fast Animation</h3>
            <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl rounded-b-none border border-border bg-zinc-900 shadow-sm">
              <LiquidBlob 
                color="#f97316"
                secondaryColor="#ef4444"
                size={250}
                speed={4}
                opacity={0.8}
                interactive
              />
              <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
                <h3 className="text-2xl font-bold text-white">Fast Animation</h3>
              </div>
            </div>
            <CodeBlock code={fastBlobCode} lang="tsx" className="rounded-t-none" />
          </div>

        </div>
      </Section>

      <Section title="Props">
        <div className="grid grid-cols-1 divide-y border rounded-xl bg-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">color</div>
            <div className="text-sm text-muted-foreground">
              Primary blob color (default: #8b5cf6)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">secondaryColor</div>
            <div className="text-sm text-muted-foreground">
              Secondary blob color (default: #ec4899)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">size</div>
            <div className="text-sm text-muted-foreground">
              Base size of the blobs in pixels (default: 300)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">blur</div>
            <div className="text-sm text-muted-foreground">
              Blur amount for the soft glow effect (default: 60)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">speed</div>
            <div className="text-sm text-muted-foreground">
              Animation duration in seconds (default: 8)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">opacity</div>
            <div className="text-sm text-muted-foreground">
              Blob opacity from 0 to 1 (default: 0.7)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">interactive</div>
            <div className="text-sm text-muted-foreground">
              Enable mouse hover interaction (default: true)
            </div>
          </div>
        </div>
      </Section>
    </ComponentLayout>
  )
}
