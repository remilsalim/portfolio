export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-muted-foreground">
        <p>
          I&apos;m an <span className="text-foreground font-medium">M.Tech Computer Science</span> student at 
          Government Engineering College, Thrissur, specializing in{" "}
          <span className="text-foreground font-medium">Artificial Intelligence and Machine Learning</span>. 
          My journey in tech is driven by curiosity and a passion for solving complex problems with data-driven solutions.
        </p>

        <p>
          With hands-on experience in{" "}
          <span className="text-foreground font-medium">Python-based data preprocessing</span>,{" "}
          <span className="text-foreground font-medium">exploratory data analysis</span>, and{" "}
          <span className="text-foreground font-medium">model evaluation</span>, I&apos;ve worked on real-world 
          biomedical datasets and developed frameworks for drug side-effect prediction using graph neural networks.
          I also have a keen interest in <span className="text-foreground font-medium">data processing</span>, <span className="text-foreground font-medium">data analysis</span>, <span className="text-foreground font-medium">data engineering</span>, and <span className="text-foreground font-medium">full-stack development</span>.
        </p>

        <p>
          Beyond academics, I&apos;ve delivered full-stack solutions for real clients, coordinated innovation 
          programs at the district level, and supported IT operations in healthcare settings. I believe in 
          building technology that makes a meaningful impact.
        </p>

        <p>
          When I&apos;m not coding, you&apos;ll find me exploring new AI research papers, contributing to 
          open-source projects, or collaborating on innovative solutions that push the boundaries of what&apos;s possible.
        </p>
      </div>
    </section>
  )
}
