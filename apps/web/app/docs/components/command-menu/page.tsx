import type React from "react"
import type { Metadata } from "next"
import { InstallCommand } from "@/components/install-command"
import { CodeBlock } from "@/components/code-block"
import { ComponentLayout, Section } from "@/components/component-layout"
import { CommandMenuDemo, CommandMenuCustomDemo } from "./demo"

export const metadata: Metadata = {
  title: "Command Menu Component",
  description: "A macOS Spotlight-style command menu with animated search, keyboard navigation, and customizable groups. Features backdrop blur, smooth animations, and full keyboard support.",
  alternates: {
    canonical: "https://componentry.fun/docs/components/command-menu",
  },
}

const basicUsageCode = `import { CommandMenu } from "@/components/ui/command-menu"
import { FileText, Settings, User, Search } from "lucide-react"

const groups = [
  {
    title: "Pages",
    items: [
      { id: "home", title: "Home", icon: <FileText className="h-4 w-4" />, onSelect: () => console.log("Home") },
      { id: "about", title: "About", icon: <FileText className="h-4 w-4" />, onSelect: () => console.log("About") },
    ],
  },
  {
    title: "Settings",
    items: [
      { id: "profile", title: "Profile", icon: <User className="h-4 w-4" />, onSelect: () => console.log("Profile") },
      { id: "settings", title: "Settings", icon: <Settings className="h-4 w-4" />, onSelect: () => console.log("Settings") },
    ],
  },
]

<CommandMenu 
  groups={groups}
  placeholder="Search..."
  brandName="My App"
/>`

const customShortcutCode = `import { CommandMenu } from "@/components/ui/command-menu"
import { FileText, Hash } from "lucide-react"

const groups = [
  {
    title: "Documentation",
    items: [
      { id: "intro", title: "Introduction", icon: <FileText className="h-4 w-4" />, onSelect: () => {} },
      { id: "api", title: "API Reference", icon: <Hash className="h-4 w-4" />, onSelect: () => {} },
    ],
  },
]

<CommandMenu 
  groups={groups}
  placeholder="Search documentation..."
  triggerLabel="Docs..."
  shortcutKey="J"
  brandName="Docs"
/>`

const controlledCode = `import { useState } from "react"
import { CommandMenu } from "@/components/ui/command-menu"

function MyComponent() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Menu</button>
      <CommandMenu 
        groups={groups}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  )
}`

export default function CommandMenuPage(): React.JSX.Element {
  return (
    <ComponentLayout
      title="Command Menu"
      description="A macOS Spotlight-style command menu with animated search, smooth transitions, keyboard navigation, and customizable groups."

    >
      <Section title="Install">
        <InstallCommand component="command-menu" />
      </Section>

      <Section title="Examples">
        <div className="space-y-12">

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Default</h3>
            <div className="relative flex h-[120px] w-full items-center justify-center overflow-hidden rounded-t-xl rounded-b-none border border-border bg-background shadow-sm">
              <CommandMenuDemo />
            </div>
            <CodeBlock code={basicUsageCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Custom Shortcut &amp; Labels</h3>
            <div className="relative flex h-[120px] w-full items-center justify-center overflow-hidden rounded-t-xl rounded-b-none border border-border bg-background shadow-sm">
              <CommandMenuCustomDemo />
            </div>
            <CodeBlock code={customShortcutCode} lang="tsx" className="rounded-t-none" />
          </div>

          <div className="space-y-0">
            <h3 className="text-xl font-medium mb-4">Controlled State</h3>
            <CodeBlock code={controlledCode} lang="tsx" />
            <p className="text-sm text-muted-foreground mt-4">
              Use the <code className="px-1.5 py-0.5 bg-muted rounded text-xs">open</code> and <code className="px-1.5 py-0.5 bg-muted rounded text-xs">onOpenChange</code> props to control the menu state externally.
            </p>
          </div>

        </div>
      </Section>

      <Section title="Props">
        <div className="grid grid-cols-1 divide-y border rounded-xl bg-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">groups</div>
            <div className="text-sm text-muted-foreground">
              Array of menu groups with title and items. Each item has id, title, icon (optional), and onSelect callback.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">placeholder</div>
            <div className="text-sm text-muted-foreground">
              Placeholder text for the search input (default: &quot;Search...&quot;)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">emptyMessage</div>
            <div className="text-sm text-muted-foreground">
              Message shown when no results are found (default: &quot;No results found&quot;)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">brandName</div>
            <div className="text-sm text-muted-foreground">
              Brand name displayed in the footer (default: &quot;Command Menu&quot;)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">triggerLabel</div>
            <div className="text-sm text-muted-foreground">
              Label for the trigger button (default: &quot;Search...&quot;)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">triggerClassName</div>
            <div className="text-sm text-muted-foreground">
              Additional CSS classes for the trigger button
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">shortcutKey</div>
            <div className="text-sm text-muted-foreground">
              Keyboard shortcut key used with Cmd/Ctrl (default: &quot;K&quot;)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">open</div>
            <div className="text-sm text-muted-foreground">
              Controlled open state (optional)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">onOpenChange</div>
            <div className="text-sm text-muted-foreground">
              Callback when open state changes (optional)
            </div>
          </div>
        </div>
      </Section>

      <Section title="Keyboard">
        <div className="grid grid-cols-1 divide-y border rounded-xl bg-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">⌘/Ctrl + K</div>
            <div className="text-sm text-muted-foreground">
              Toggle the command menu (customizable via shortcutKey prop)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">↑ / ↓</div>
            <div className="text-sm text-muted-foreground">
              Navigate through menu items
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">Enter</div>
            <div className="text-sm text-muted-foreground">
              Select the highlighted item
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 p-4">
            <div className="font-mono text-sm">Escape</div>
            <div className="text-sm text-muted-foreground">
              Close the command menu
            </div>
          </div>
        </div>
      </Section>
    </ComponentLayout>
  )
}
