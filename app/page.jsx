"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"
import { CursorFollower } from "@/components/cursor-follower"
import { useEffect, useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

export default function Home() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [sectionKeys, setSectionKeys] = useState({
    about: 0,
    skills: 0,
    experience: 0,
    projects: 0,
  })

  function handleNavClick(section) {
    setSectionKeys((prev) => ({
      ...prev,
      [section]: (prev[section] || 0) + 1,
    }))
  }

  useEffect(() => {
    function handleMouseMove({ clientX, clientY }) {
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(29, 78, 216, 0.15),
    transparent 80%
  )`

  return (
    <div className="relative group/spotlight">
      <CursorFollower />
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background,
        }}
      />

      {/* Subtle dynamic background */}
      <div className="pointer-events-none fixed inset-0 z-[-1] transition-all duration-1000 ease-in-out">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/3 blur-[100px] animate-pulse" />
      </div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-primary/70 to-primary px-4 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground focus-visible:translate-x-0"
        >
          Skip to Content
        </a>

        <div className="lg:flex lg:justify-between lg:gap-4 relative z-40">
          <Hero onNavigate={handleNavClick} />

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About triggerKey={sectionKeys.about} />
            <Skills shuffleKey={sectionKeys.skills} />
            <Experience triggerKey={sectionKeys.experience} />
            <Projects triggerKey={sectionKeys.projects} />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
