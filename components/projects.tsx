import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "FaceTheBeat",
    description:
      "A browser-based app that detects facial expressions in real time and recommends Malayalam music based on your mood, using AI-powered emotion recognition.",
    tech: ["JavaScript", "TensorFlow.js", "Face API", "HTML/CSS"],
    github: "https://github.com/remilsalim/FaceTheBeat",
  },
  {
    title: "MolecularGraph",
    description:
      "A machine learning project that predicts potential drug side effects from molecular formulas using molecular feature extraction and a Random Forest classifier.",
    tech: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    github: "https://github.com/remilsalim/MolecularGraph",
  },
  {
    title: "StackSense",
    description:
      "An intelligent recommendation engine that suggests tailored tech stacks (Frontend, Backend, Database, Cloud) based on your project's scale, domain, and priorities.",
    tech: ["Python", "Machine Learning", "Flask", "React"],
    github: "https://github.com/remilsalim/StackSense",
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

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
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
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

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
                  <Github className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 mt-16">
          Academic Research
        </h3>
        <ol className="group/list">
          {academicProjects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

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
            </li>
          ))}
        </ol>

        <div className="mt-12">
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
        </div>
      </div>
    </section>
  )
}
