import { codeToHtml } from "shiki"

interface CodeBlockProps {
  code: string
  lang?: string
  className?: string
}

export async function CodeBlock({ code, lang = "tsx", className }: CodeBlockProps) {
  const html = await codeToHtml(code.trim(), {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  })

  return (
    <>
      <style>{`
        .shiki,
        .shiki span {
          background-color: transparent !important;
        }
        .dark .shiki,
        .dark .shiki span {
          color: var(--shiki-dark) !important;
          background-color: transparent !important;
        }
      `}</style>
      <div
        className={`rounded-lg overflow-hidden text-sm [&_pre]:p-4 [&_pre]:overflow-x-auto bg-zinc-100 dark:bg-zinc-900 ${className || ""}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
