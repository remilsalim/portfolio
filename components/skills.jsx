"use client"

import { motion } from "framer-motion"


const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript"],
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
                {category.skills.map((skill, skillIndex) => (
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
                      {skill}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
