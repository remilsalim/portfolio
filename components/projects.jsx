"use client"

import { useState, useRef, useEffect } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Updated image list using ONLY user uploaded real screenshots + mocks as needed
const stackSenseImages = [
  "/images/stacksense/1.png",
  "/images/stacksense/2.png",
  "/images/stacksense/3.png",
  "/images/stacksense/4.png"
];

const projects = [
  {
    title: "FaceTheBeat",
    description:
      "A browser-based app that detects facial expressions in real time and recommends Malayalam music based on your mood, using AI-powered emotion recognition.",
    tech: ["JavaScript", "TensorFlow.js", "Face API", "HTML/CSS"],
    github: "https://github.com/remilsalim/FaceTheBeat",
    images: ["/images/facethebeat/mockup.png", "/images/facethebeat/screenshot_new.png"]
  },
  {
    title: "StackSense",
    description:
      "An intelligent recommendation engine that suggests tailored tech stacks (Frontend, Backend, Database, Cloud) based on your project's scale, domain, and priorities.",
    tech: ["Python", "Machine Learning", "Flask", "React"],
    github: "https://github.com/remilsalim/StackSense",
    images: stackSenseImages,
  },
  {
    title: "MolecularGraph",
    description:
      "A machine learning project that predicts potential drug side effects from molecular formulas using molecular feature extraction and a Random Forest classifier.",
    tech: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    github: "https://github.com/remilsalim/MolecularGraph",
  },
  {
    title: "CodeScope",
    description:
      "A client-side tool developed in vanilla JavaScript to analyze source code complexity through static, rule-based analysis, enabling fast and explainable complexity evaluation.",
    tech: ["JavaScript", "Static Analysis", "AST Parsing"],
    github: "https://github.com/remilsalim/CodeScope",
  },
  {
    title: "EyeShield",
    description:
      "A lightweight browser-based project providing a simple interactive interface for eye protection with customizable break reminders and screen overlay features.",
    tech: ["HTML", "CSS", "JavaScript", "Chrome Extension"],
    github: "https://github.com/remilsalim/EyeShield",
  },
  {
    title: "Website-Tracker",
    description:
      "A privacy-first Chrome extension that tracks your web activity in real-time. Features a sleek dark mode, local-only storage, and zero data collection.",
    tech: ["JavaScript", "Chrome APIs", "Local Storage"],
    github: "https://github.com/remilsalim/Website-Tracker",
  },
]

const academicProjects = [
  {
    title: "TissEx: Adverse Drug Reaction Prediction",
    description:
      "Designed and implemented a data-driven framework to analyze tissue-specific adverse drug reactions using multi-source biomedical data from DrugBank, SIDER, GTEx, and STRING.",
    tech: ["Python", "Pandas", "NumPy", "Biomedical Data"],
  },
  {
    title: "DruGNN: Drug Side-Effect Prediction",
    description:
      "Integrated data from multiple sources (SIDER, DrugBank, STITCH, HuRI, PubChem) for drug side-effect analysis using graph-based neural network models.",
    tech: ["Python", "GNN", "Pandas", "Matplotlib"],
  },
]

export function Projects({ triggerKey = 0 }) {
  const [hoveredProject, setHoveredProject] = useState(null)
  const hoverTimeoutRef = useRef(null)
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-SCROLL effect (Continuous Marquee with Manual Override)
  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      if (scrollRef.current && !isPaused) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Move 2px per frame (adjustable speed)
        scrollRef.current.scrollLeft += 2;

        // Infinite Loop Logic: If we've scrolled past the first set of images (halfway), reset to 0
        // We render [...images, ...images], so half width is exactly one full set.
        if (scrollLeft >= (scrollWidth / 2)) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hoveredProject, isPaused]);

  const handleMouseEnter = (project) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredProject(project);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
    }, 150);
  };

  const manualScroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 350; // Approx one image width
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section
      key={triggerKey}
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 relative"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
          Open Source
        </h3>
        <ol className="group/list">
          {projects.map((project, index) => {
            const isShuffled = triggerKey > 0;
            const randomX = isShuffled ? Math.random() * 300 - 150 : 0;
            const randomY = isShuffled ? Math.random() * 300 - 150 : 20;
            const randomRotate = isShuffled ? Math.random() * 10 - 5 : 0;

            return (
              <motion.li
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: randomX, y: randomY, rotate: randomRotate }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="group relative grid gap-4 p-4 rounded-xl transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:bg-slate-900/50 hover:backdrop-blur-sm border border-transparent hover:border-white/10">
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary focus-visible:text-primary group/link text-base"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {project.title}
                          <span className="inline-block">
                            <ExternalLink className="ml-1 h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {project.tech.map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="z-10 flex items-center sm:order-1 sm:col-span-2">
                    <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ol>

        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 mt-16">
          Academic Research
        </h3>
        <ol className="group/list">
          {academicProjects.map((project, index) => {
            return (
              <motion.li
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="group relative grid gap-4 p-4 rounded-xl transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:bg-slate-900/50 hover:backdrop-blur-sm border border-transparent hover:border-white/10">
                  <div className="z-10">
                    <h3 className="font-medium leading-tight text-foreground group-hover:text-primary text-base">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {project.tech.map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ol>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
            href="https://github.com/remilsalim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              View Full Project Archive
              <span className="inline-block">
                <ExternalLink className="ml-1 h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Hover Popup Overlay */}
      <AnimatePresence mode="wait">
        {hoveredProject && hoveredProject.images && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] md:w-[60vw] lg:w-[50vw] h-[40vh] bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
              setIsPaused(true); // Pause auto-scroll on hover interaction
            }}
            onMouseLeave={() => {
              handleMouseLeave();
              setIsPaused(false); // Resume auto-scroll
            }}
          >
            {/* Header in Popup */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-20 flex justify-between items-start pointer-events-none">
              <div>
                <h3 className="text-xl font-bold text-white shadow-black drop-shadow-md">{hoveredProject.title}</h3>
                <p className="text-xs text-slate-300 max-w-[80%] line-clamp-1">{hoveredProject.description}</p>
              </div>
            </div>

            {/* Continuous Scroll Gallery */}
            <div className="relative w-full h-full flex items-center justify-start bg-black/50 overflow-hidden">
              {/* Scroll Wrapper */}
              <div
                ref={scrollRef}
                className="flex gap-4 px-4 overflow-x-hidden w-full h-full items-center scroll-smooth"
                style={{ whiteSpace: 'nowrap' }}
              >
                {/* Triple Loop for seamless infinite scroll and to ensure enough width */}
                {[...hoveredProject.images, ...hoveredProject.images, ...hoveredProject.images].map((imgSrc, i) => (
                  <div key={i} className="flex-shrink-0 h-[80%] w-auto">
                    <img
                      src={imgSrc}
                      alt="Screenshot"
                      className="h-full w-auto rounded-lg shadow-lg object-contain bg-black/40 border border-white/5"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <button
                onClick={(e) => { e.stopPropagation(); manualScroll('left'); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors z-30 backdrop-blur-sm"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); manualScroll('right'); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors z-30 backdrop-blur-sm"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section >
  )
}
