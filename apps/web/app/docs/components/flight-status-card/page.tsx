import type React from "react"
import { FlightStatusCardAdaptive } from "@workspace/ui/components/flight-status-card"
import { InstallCommand } from "@/components/install-command"
import { CodeBlock } from "@/components/code-block"

const usageCode = `import { FlightStatusCardAdaptive } from "components/ui/flight-status-card"

// Auto-switches between dark and light mode
<FlightStatusCardAdaptive />

// With custom props
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
    <div className="space-y-16">
      <header className="grid md:grid-cols-[120px_1fr] gap-8">
        <div>
          <span className="text-6xl font-light text-muted-foreground/50">
            002
          </span>
        </div>
        <div className="space-y-4">
          <h1
            className="text-5xl md:text-6xl tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Flight Status Card
          </h1>
          <p className="text-muted-foreground max-w-md">
            A detailed flight status widget with dot-matrix airport codes,
            progress tracking, and ETA information. Pixel-perfect recreation of
            a premium travel app design.
          </p>
        </div>
      </header>

      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <div className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
          Install
        </div>
        <div className="space-y-3">
          <InstallCommand component="flight-status-card" />
          <p className="text-xs text-muted-foreground">
            Requires shadcn CLI. Run <code className="bg-muted px-1 rounded">npx shadcn@latest init</code> first if not set up.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <div className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
          Preview
        </div>
        <div className="space-y-6">
          <div className="p-8 bg-muted/30 rounded-xl flex items-center justify-center">
            <FlightStatusCardAdaptive />
          </div>
          <p className="text-xs text-muted-foreground">
            Automatically adapts to light and dark mode. Toggle the theme to see it in action.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <div className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
          Custom
        </div>
        <div className="space-y-6">
          <div className="p-8 bg-muted/30 rounded-xl flex items-center justify-center">
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
          <p className="text-xs text-muted-foreground">
            Fully customizable with any route, times, and progress state.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <div className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
          Features
        </div>
        <div className="space-y-4">
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>
              <strong className="text-foreground">Dot Matrix Display:</strong>{" "}
              LED-style airport code rendering with individual dot animations
            </li>
            <li>
              <strong className="text-foreground">Halftone Pattern:</strong>{" "}
              Subtle gradient dot pattern for visual depth
            </li>
            <li>
              <strong className="text-foreground">Progress Tracking:</strong>{" "}
              Animated progress bar with glowing plane icon
            </li>
            <li>
              <strong className="text-foreground">ETA Panel:</strong> Real-time
              arrival estimates with timezone and event countdown
            </li>
            <li>
              <strong className="text-foreground">Theme Support:</strong>{" "}
              Separate dark and light mode variants with adaptive option
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <div className="text-xs uppercase tracking-widest text-muted-foreground pt-1">
          Code
        </div>
        <div className="space-y-4">
          <CodeBlock code={usageCode} lang="tsx" />
          <p className="text-xs text-muted-foreground">
            Import and use directly. All props are optional with sensible
            defaults.
          </p>
        </div>
      </div>
    </div>
  )
}
