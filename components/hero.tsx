"use client"

import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
]

export function Hero() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <Link href="/">Remil Salim K P</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          AI / ML Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I build intelligent solutions that bridge the gap between complex data and real-world applications.
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Kerala, India</span>
        </div>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  className="group flex items-center py-3"
                  href={item.href}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none ${
                      activeSection === item.label.toLowerCase()
                        ? "w-16 bg-foreground"
                        : "w-8 bg-muted-foreground/50"
                    }`}
                  />
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-foreground group-focus-visible:text-foreground ${
                      activeSection === item.label.toLowerCase()
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            className="block text-muted-foreground hover:text-foreground transition-colors"
            href="https://github.com/remilsalim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            className="block text-muted-foreground hover:text-foreground transition-colors"
            href="https://linkedin.com/in/remil-salim-k-p"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            className="block text-muted-foreground hover:text-foreground transition-colors"
            href="mailto:remilsalim369@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  )
}
