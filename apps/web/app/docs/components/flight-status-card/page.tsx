import type React from "react"
import type { Metadata } from "next"
import { FlightStatusCardAdaptive } from "@workspace/ui/components/flight-status-card"
import { InstallCommand } from "@/components/install-command"
import { CodeBlock } from "@/components/code-block"
import { ComponentLayout, Section } from "@/components/component-layout"

export const metadata: Metadata = {
  title: "Flight Status Card Component",
  description: "A detailed flight status widget with dot-matrix airport codes, progress tracking, and ETA. Free React component with Tailwind CSS by Harsh Jadhav.",
  alternates: {
    canonical: "https://componentry.fun/docs/components/flight-status-card",
  },
}

const defaultCardCode = `import { FlightStatusCardAdaptive } from "@/components/ui/flight-status-card"

<FlightStatusCardAdaptive />`

const customRouteCode = `import { FlightStatusCardAdaptive } from "@/components/ui/flight-status-card"

<FlightStatusCardAdaptive
  departureCode="SFO"
  arrivalCode="LHR"
  departureCity="San Francisco"
  arrivalCity="London"
  departureTime="FRI, 10:30 AM"
  arrivalTime="SAT, 6:45 AM"
  eta="ETA 6:45 AM"
  timezone="London Time"
  nextEvent="LANDING IN"
  nextEventTime="4:15H"
  progress={65}
  remainingTime="-4H 15M"
/>`

export default function FlightStatusCardPage(): React.JSX.Element {
  return (
    <ComponentLayout
      title="Flight Status Card"
      description="A detailed flight status widget with dot-matrix airport codes, progress tracking, and ETA information. Pixel-perfect recreation of a premium travel app design."

    >
      <Section title="Install">
        <InstallCommand component="flight-status-card" />
      </Section>

      <Section title="Examples">
        <div className="space-y-12">

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Default</h3>
            <div className="p-8 bg-muted/30 rounded-t-xl rounded-b-none border border-border flex items-center justify-center">
              <FlightStatusCardAdaptive />
            </div>
            <CodeBlock code={defaultCardCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Custom Route</h3>
            <div className="p-8 bg-muted/30 rounded-t-xl rounded-b-none border border-border flex items-center justify-center">
              <FlightStatusCardAdaptive
                departureCode="SFO"
                arrivalCode="LHR"
                departureCity="San Francisco"
                arrivalCity="London"
                departureTime="FRI, 10:30 AM"
                arrivalTime="SAT, 6:45 AM"
                eta="ETA 6:45 AM"
                timezone="London Time"
                nextEvent="LANDING IN"
                nextEventTime="4:15H"
                progress={65}
                remainingTime="-4H 15M"
              />
            </div>
            <CodeBlock code={customRouteCode} lang="tsx" className="rounded-t-none" />
          </div>

        </div>
      </Section>

      <Section title="Features">
        <div className="grid grid-cols-1 divide-y border rounded-xl bg-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-medium text-sm">Dot Matrix Display</div>
            <div className="text-sm text-muted-foreground">
              LED-style airport code rendering with individual dot animations
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-medium text-sm">Halftone Pattern</div>
            <div className="text-sm text-muted-foreground">
              Subtle gradient dot pattern for visual depth
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-medium text-sm">Progress Tracking</div>
            <div className="text-sm text-muted-foreground">
              Animated progress bar with glowing plane icon
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-medium text-sm">ETA Panel</div>
            <div className="text-sm text-muted-foreground">
              Real-time arrival estimates with timezone and event countdown
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-medium text-sm">Theme Support</div>
            <div className="text-sm text-muted-foreground">
              Separate dark and light mode variants with adaptive option
            </div>
          </div>
        </div>
      </Section>
    </ComponentLayout>
  )
}
