"use client"

import { Github, Linkedin, Mail, MapPin, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Magnetic } from "@/components/magnetic"
import { GameWindow } from "@/components/game-window"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" }, // Added Skills here
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
]

export function Hero({ onNavigate }) {
  const [activeSection, setActiveSection] = useState("about")
  const [isGameOpen, setIsGameOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects"]
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
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          <Link href="/">Remil Salim K P</Link>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl"
        >
          AI/ML Engineer | Data Scientist | Full Stack Developer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-2 flex flex-col gap-1 text-sm font-medium text-muted-foreground"
        >
          <a href="mailto:remilsalim369@gmail.com" className="hover:text-foreground transition-colors w-fit">
            remilsalim369@gmail.com
          </a>
          <a href="tel:+919497555955" className="hover:text-foreground transition-colors w-fit">
            +91 94975 55955
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-xs leading-relaxed text-muted-foreground"
        >
          I build intelligent solutions that bridge the gap between complex data and real-world applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4" />
          <span>Kerala, India</span>
        </motion.div>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <a
                  className="group flex items-center py-3"
                  href={item.href}
                  onClick={(e) => {
                    if (onNavigate) {
                      onNavigate(item.label.toLowerCase());
                    }
                  }}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none ${activeSection === item.label.toLowerCase()
                      ? "w-16 bg-foreground"
                      : "w-8 bg-muted-foreground/50"
                      }`}
                  />
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-foreground group-focus-visible:text-foreground ${activeSection === item.label.toLowerCase()
                      ? "text-foreground"
                      : "text-muted-foreground"
                      }`}
                  >
                    {item.label}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        {[
          { icon: Github, href: "https://github.com/remilsalim", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com/in/remil-salim-k-p", label: "LinkedIn" },
          { icon: Mail, href: "mailto:remilsalim369@gmail.com", label: "Email", isAction: true },
        ].map((social) => (
          <li key={social.label}>
            <Magnetic>
              <motion.a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={`${social.label} ${social.href.startsWith("http") ? "(opens in a new tab)" : ""}`}
                className="block p-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  if (social.isAction) {
                    // Trigger confetti from the click position
                    const rect = e.target.getBoundingClientRect();
                    const x = (rect.left + rect.width / 2) / window.innerWidth;
                    const y = (rect.top + rect.height / 2) / window.innerHeight;

                    import("canvas-confetti").then((confetti) => {
                      confetti.default({
                        particleCount: 100,
                        spread: 70,
                        origin: { x, y },
                        colors: ["#3b82f6", "#8b5cf6", "#ec4899"],
                      });
                    });
                  }
                }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            </Magnetic>
          </li>
        ))}
        <li>
          <Magnetic>
            <button
              onClick={() => setIsGameOpen(true)}
              className="block p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Interactive Zone"
            >
              <Gamepad2 className="h-6 w-6" />
            </button>
          </Magnetic>
        </li>
      </ul>

      {/* Draggable Game Window */}
      <GameWindow isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </header>
  )
}

