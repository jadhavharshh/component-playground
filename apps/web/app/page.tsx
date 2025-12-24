import type React from "react"

export default function Page(): React.JSX.Element {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center px-6">
      <main className="max-w-2xl text-center space-y-8">
        <h1
          className="text-5xl md:text-7xl tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Component Playground
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A personal workshop for handcrafted UI components. Not a design
          system. Not a polished library. Just experiments, ideas, and
          iterations built in public.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Progress</span>
          <span className="text-foreground">&gt;</span>
          <span>polish</span>
        </div>
      </main>
    </div>
  )
}
