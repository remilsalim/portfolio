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
    images: [
      "/images/facethebeat/Screenshot 2026-01-20 181824.png",
      "/images/facethebeat/Screenshot 2026-01-20 181836.png",
      "/images/facethebeat/Screenshot 2026-01-20 181911.png",
      "/images/facethebeat/Screenshot 2026-01-20 181920.png",
      "/images/facethebeat/Screenshot 2026-01-20 181930.png"
    ]
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
    images: [
      "/images/moleculargraph/Screenshot 2026-01-21 095234.png",
      "/images/moleculargraph/Screenshot 2026-01-21 095337.png",
      "/images/moleculargraph/Screenshot 2026-01-21 095407.png",
      "/images/moleculargraph/Screenshot 2026-01-21 095523.png"
    ]
  },
  {
    title: "CodeScope",
    description:
      "A client-side tool developed in vanilla JavaScript to analyze source code complexity through static, rule-based analysis, enabling fast and explainable complexity evaluation.",
    tech: ["JavaScript", "Static Analysis", "AST Parsing"],
    github: "https://github.com/remilsalim/CodeScope",
    images: [
      "/images/codescope/Screenshot 2026-01-21 101302.png",
      "/images/codescope/Screenshot 2026-01-21 101308.png",
      "/images/codescope/Screenshot 2026-01-21 101321.png",
      "/images/codescope/Screenshot 2026-01-21 101334.png",
      "/images/codescope/Screenshot 2026-01-21 101348.png",
      "/images/codescope/Screenshot 2026-01-21 101358.png",
      "/images/codescope/Screenshot 2026-01-21 101418.png",
      "/images/codescope/Screenshot 2026-01-21 101428.png"
    ]
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

  // Carousel State
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Reset index when project changes
  useEffect(() => {
    setActiveIndex(0);
    setIsPaused(false);
  }, [hoveredProject]);

  // Auto-Play Swipe Effect
  useEffect(() => {
    if (!hoveredProject?.images || isPaused || dragging) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % hoveredProject.images.length);
    }, 1500); // Swipe every 1.5 seconds

    return () => clearInterval(interval);
  }, [hoveredProject, isPaused, dragging]);

  const handleMouseEnter = (project) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
    }, 150);
  };

  const nextSlide = (e) => {
    e?.stopPropagation();
    if (!hoveredProject?.images) return;
    setActiveIndex((prev) => (prev + 1) % hoveredProject.images.length);
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    if (!hoveredProject?.images) return;
    setActiveIndex((prev) => (prev - 1 + hoveredProject.images.length) % hoveredProject.images.length);
  };

  // Calculate swipe direction
  const onDragEnd = (event, info) => {
    setDragging(false);
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] md:w-[70vw] lg:w-[60vw] h-[50vh] bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
              setIsPaused(true);
            }}
            onMouseLeave={() => { // Fix: Pass ref correctly
              // handleMouseLeave only sets timeout for nulling project
              // We also need to resume auto-play
              handleMouseLeave();
              setIsPaused(false);
            }}
          >
            {/* Header in Popup */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-20 flex justify-between items-start pointer-events-none">
              <div className="pointer-events-auto">
                <h3
                  className="text-xl font-bold text-white shadow-black drop-shadow-md cursor-pointer hover:text-teal-400 transition-colors"
                  onClick={() => window.open(hoveredProject.github, '_blank')}
                >
                  {hoveredProject.title}
                </h3>
                <p className="text-xs text-slate-300 max-w-[80%] line-clamp-1">{hoveredProject.description}</p>
              </div>
            </div>

            {/* Coverflow Carousel */}
            <div className="relative w-full h-full flex items-center justify-center bg-black/50 overflow-hidden">
              <motion.div
                className="flex items-center justify-center cursor-grab active:cursor-grabbing w-full h-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setDragging(true)}
                onDragEnd={onDragEnd}
              >
                {hoveredProject.images.map((imgSrc, i) => {

                  const length = hoveredProject.images.length;
                  // Calculate Circular distance
                  let distance = i - activeIndex;
                  if (distance > length / 2) distance -= length;
                  if (distance < -length / 2) distance += length;

                  const isActive = i === activeIndex;
                  const isLeft = distance === -1 || (activeIndex === 0 && i === length - 1 && length > 2);
                  const isRight = distance === 1 || (activeIndex === length - 1 && i === 0 && length > 2);

                  // Relax the visibility condition for smoother transitions or allow all to exist but hide far ones
                  // For auto-play swipe, we want to animate positions.
                  // Let's rely on distance for positioning to handle animation smoothly

                  // Refined positioning logic for animation
                  let positionX = 0;
                  if (distance === 0) positionX = 0;
                  else if (distance === -1 || (i === length - 1 && activeIndex === 0)) positionX = '-60%';
                  else if (distance === 1 || (i === 0 && activeIndex === length - 1)) positionX = '60%';
                  else positionX = '200%'; // Hide others offscreen

                  const isVisible = Math.abs(distance) <= 1 || (length > 2 && Math.abs(distance) >= length - 1);

                  return (
                    <AnimatePresence key={i} mode="popLayout">
                      {isVisible && (
                        <motion.div
                          className="absolute cursor-pointer"
                          initial={false}
                          animate={{
                            x: positionX,
                            scale: isActive ? 1.25 : 0.75,
                            zIndex: isActive ? 50 : 10,
                            opacity: isActive ? 1 : 0.4,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                          }}
                          style={{
                            perspective: 1000
                          }}
                          onClick={(e) => {
                            if (!dragging) {
                              e.stopPropagation();
                              window.open(hoveredProject.github, '_blank');
                            }
                          }}
                        >       <img
                            src={imgSrc}
                            className="h-[28vh] w-auto rounded-xl shadow-2xl border border-white/10 bg-black object-contain"
                            draggable={false}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )
                })}
              </motion.div>

              {/* Navigation Controls */}
              {!dragging && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white/10 text-white transition-colors z-30"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white/10 text-white transition-colors z-30"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section >
  )
}
