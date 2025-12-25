"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function TableOfContents(): React.JSX.Element | null {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Find all sections with an ID and a specific class or structure
    // For this specific page, we'll look for the section headers
    // We can target the "text-xs uppercase tracking-widest" divs if they have IDs
    // OR we can rely on standard h2/h3 if we add them.
    
    // Let's assume we will add IDs to the section containers or headers.
    // We'll query for elements with `data-section-title` attribute for robustness.
    const elements = Array.from(document.querySelectorAll("[data-section-title]"))
    
    const items = elements.map((elem) => ({
      id: elem.id,
      text: elem.getAttribute("data-section-title") || "",
    })).filter(item => item.id && item.text)

    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" }
    )

    elements.forEach((elem) => observer.observe(elem))

    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <aside className="w-56 shrink-0 hidden xl:block">
      <div className="sticky top-14 h-[calc(100svh-3.5rem)] overflow-y-auto pl-8 py-10">
        <p className="font-medium text-xs mb-3 text-muted-foreground/70 uppercase tracking-wider">On This Page</p>
        <nav className="flex flex-col gap-0.5">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`
                text-xs transition-colors block py-1
                ${
                  activeId === heading.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                })
                setActiveId(heading.id)
              }}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
