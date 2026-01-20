import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Oct 2025 - Present",
    title: "Project Intern",
    company: "Young Innovators Programme (K-DISC)",
    location: "Thrissur, Kerala",
    description:
      "Supporting district-level implementation of innovation-driven initiatives under the Kerala Government's YIP program. Coordinating outreach activities, student engagement, and communication between institutions.",
    skills: ["Project Coordination", "Documentation", "Communication", "Leadership"],
  },
  {
    period: "June 2025 - Present",
    title: "IT & Web Systems Support",
    company: "Care Palliative Center",
    location: "Tirur, Kerala",
    description:
      "Supporting day-to-day operations by resolving software and web application issues. Assisting in planning and executing system update cycles while coordinating with staff to maintain data integrity.",
    skills: ["IT Support", "System Administration", "Documentation", "Troubleshooting"],
  },
  {
    period: "May 2025 - June 2025",
    title: "Front-End Developer Intern",
    company: "Kerala Police Academy",
    location: "Thrissur, Kerala",
    description:
      "Collaborated with developers to translate design requirements into responsive UI components. Integrated REST API-driven data into interfaces and maintained version-controlled design iterations.",
    skills: ["Figma", "HTML5", "CSS3", "UI/UX Design", "REST APIs"],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <span className="inline-flex items-baseline font-medium leading-tight text-foreground group-hover:text-primary focus-visible:text-primary text-base">
                        <span>
                          {exp.title} · {exp.company}
                        </span>
                      </span>
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      {exp.location}
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
