"use client"

import { motion } from "framer-motion"
import {
  SiPython, SiJavascript, SiMysql, SiMongodb, SiExpress, SiReact, SiNodedotjs,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiFlask, SiPostgresql,
  SiGit, SiGithub, SiFigma, SiGooglecolab, SiHtml5, SiCss3
} from "react-icons/si"
import { FaDatabase, FaCode, FaChartBar, FaBrain, FaCogs, FaProjectDiagram } from "react-icons/fa"
import { VscVscode } from "react-icons/vsc"

const iconMap = {
  // Programming
  "Python": { icon: SiPython, color: "#3776AB" },
  "SQL": { icon: SiMysql, color: "#4479A1" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: SiCss3, color: "#1572B6" },

  // MERN
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Express.js": { icon: SiExpress, color: "#ffffff" }, // White for dark mode
  "React": { icon: SiReact, color: "#61DAFB" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },

  // ML/AI
  "Supervised Learning": { icon: FaBrain, color: "#FF6B6B" }, // Coral
  "Unsupervised Learning": { icon: FaBrain, color: "#4ECDC4" }, // Teal
  "Feature Engineering": { icon: FaCogs, color: "#FFE66D" }, // Yellow
  "Model Evaluation": { icon: FaChartBar, color: "#F7FFF7" }, // Mint/White
  "EDA": { icon: FaChartBar, color: "#61DAFB" }, // Cyan

  // Libraries
  "Pandas": { icon: SiPandas, color: "#150458" }, // Navy - might need lighten for dark mode, let's use #E70488 (Pink part of logo) or #ffffff
  "Pandas": { icon: SiPandas, color: "#ffffff" },
  "NumPy": { icon: SiNumpy, color: "#013243" }, // Dark blue, use lighter #4DABCF
  "NumPy": { icon: SiNumpy, color: "#4DABCF" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  "Matplotlib": { icon: FaChartBar, color: "#ffffff" },
  "Seaborn": { icon: FaChartBar, color: "#cecdcd" },
  "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },

  // Backend
  "REST APIs": { icon: FaProjectDiagram, color: "#61DAFB" },
  "Flask": { icon: SiFlask, color: "#ffffff" },

  // Databases
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "PostgreSQL": { icon: SiPostgresql, color: "#336791" },

  // Tools
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  "Google Colab": { icon: SiGooglecolab, color: "#F9AB00" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#ffffff" },
  "Figma": { icon: SiFigma, color: "#F24E1E" }
};

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "MERN Stack",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Model Evaluation",
      "EDA",
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "TensorFlow"],
  },
  {
    title: "Backend & Integration",
    skills: ["REST APIs", "Flask"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Google Colab", "Git", "GitHub", "Figma"],
  },
]

export function Skills({ shuffleKey = 0 }) {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Technical skills"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        <div className="flex items-center gap-4 mb-6">
          <h2
            className="text-sm font-bold uppercase tracking-widest text-muted-foreground"
          >
            Technical Skills
          </h2>
        </div>
      </div>

      <div key={shuffleKey} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          // Only apply random shuffle effects after the first trigger (shuffleKey > 0)
          // This prevents hydration errors on the initial load because SSR and Client initial render will both match (no random)
          const isShuffled = shuffleKey > 0;

          const randomX = isShuffled ? Math.random() * 400 - 200 : 0;
          const randomY = isShuffled ? Math.random() * 400 - 200 : 0;
          const randomRotate = isShuffled ? Math.random() * 20 - 10 : 0;

          // Initial entrance animation vs shuffle animation
          const initialOpacity = isShuffled ? 0 : 0;
          const initialY = isShuffled ? randomY : 20;

          return (
            <motion.div
              key={category.title}
              initial={{
                opacity: initialOpacity,
                x: randomX,
                y: initialY,
                rotate: randomRotate,
                scale: isShuffled ? 0.5 : 1
              }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "hsl(var(--muted) / 0.6)",
                borderColor: "hsl(var(--primary) / 0.5)",
                rotate: 0
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 0.5,
                delay: index * 0.05
              }}
              viewport={{ once: true }}
              className="rounded-lg border border-border bg-card p-4 transition-colors cursor-default"
            >
              <h3 className="text-sm font-semibold text-foreground mb-3">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const { icon: Icon, color: iconColor } = iconMap[skill] || {};
                  return (
                    <motion.li
                      key={skill}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3 + (index * 0.1) + (skillIndex * 0.05)
                      }}
                      className="relative touch-none"
                    >
                      <motion.span
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.2}
                        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)", cursor: "grab" }}
                        whileTap={{ scale: 0.95, cursor: "grabbing" }}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors"
                      >
                        {Icon && <Icon className="mr-1.5 h-3.5 w-3.5" style={{ color: iconColor }} />}
                        {skill}
                      </motion.span>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}


