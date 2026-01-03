export function JsonLd() {
  const siteUrl = "https://componentry.fun"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Componentry",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    sameAs: [
      "https://github.com/harshjdhv/componentry",
      "https://twitter.com/harshjdhv",
    ],
    founder: {
      "@type": "Person",
      name: "Harsh Jadhav",
      url: "https://twitter.com/harshjdhv",
      sameAs: [
        "https://twitter.com/harshjdhv",
        "https://github.com/harshjdhv",
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Componentry",
    alternateName: ["Componentry UI", "Componentry Components"],
    url: siteUrl,
    description:
      "Free, open-source React UI component library by Harsh Jadhav. Beautiful, animated, copy-paste components.",
    publisher: {
      "@type": "Person",
      name: "Harsh Jadhav",
      url: "https://twitter.com/harshjdhv",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/docs?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "Componentry",
    description:
      "Premium React UI component library with beautiful animations. Copy-paste components built with Tailwind CSS, TypeScript, and Framer Motion.",
    url: siteUrl,
    codeRepository: "https://github.com/harshjdhv/componentry",
    programmingLanguage: ["TypeScript", "JavaScript", "React", "CSS"],
    runtimePlatform: "Node.js",
    author: {
      "@type": "Person",
      name: "Harsh Jadhav",
      url: "https://twitter.com/harshjdhv",
    },
    license: "https://opensource.org/licenses/MIT",
    operatingSystem: "Cross-platform",
    applicationCategory: "DeveloperApplication",
    keywords:
      "React, UI components, Tailwind CSS, TypeScript, Framer Motion, Next.js, component library",
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harsh Jadhav",
    alternateName: ["harshjdhv", "Harsh"],
    url: "https://twitter.com/harshjdhv",
    jobTitle: "Frontend Developer",
    knowsAbout: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Next.js",
      "UI/UX Design",
      "Web Development",
      "Frontend Development",
    ],
    sameAs: [
      "https://twitter.com/harshjdhv",
      "https://github.com/harshjdhv",
      siteUrl,
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl,
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Components",
        item: `${siteUrl}/docs`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
