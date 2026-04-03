export const projects = [
  {
    id: 0,
    title: "F1 Pitstop",
    subtitle: "Full-Stack Race Tracker",
    description: "A high-fidelity, production-ready race tracking platform providing real-time Formula 1 data, interactive circuit maps, and deep-dive historical analytics. Features a seamless responsive UI built for F1 enthusiasts.",
    tech: ["React", "Chart.js", "Tailwind CSS", "REST API", "Vercel"],
    category: "Full-Stack Web App",
    image: "/hero-bg.png",
    github: "https://github.com/remilsalim/portfolio",
    demo: "https://pitstop-f1.vercel.app/",
    features: ["Real-time race statistics", "Interactive circuit visualizations", "Comprehensive driver analytics"]
  },
  {
    id: 1,
    title: "DruGNN",
    subtitle: "Drug–Gene–SideEffect Explorer",
    description: "A technical graph-based explorer that uses Graph Neural Networks (GNN) and NetworkX to discover and visualize complex relationships between drugs, genes, and potential side effects. Developed complex data pipelines to extract and filter Ensembl IDs and map them to graph nodes.",
    tech: ["Python", "NetworkX", "PyTorch Geometric", "Flask", "React", "Glassmorphism UI"],
    category: "Data Pipeline / ML System",
    image: "/workflow-bg.png",
    github: "https://github.com/remilsalim/DruGNN",
    demo: null,
    features: ["End-to-end data pipeline", "Graph-based visualization", "Relational AI insights"]
  },
  {
    id: 2,
    title: "FaceTheBeat",
    subtitle: "Emotion-Based Music Recommender",
    description: "A browser-based application that detects facial expressions in real-time using AI-powered emotion recognition (face-api.js) and recommends Malayalam music based on the user's mood and preferences.",
    tech: ["JavaScript", "Vite", "face-api.js", "HTML/CSS", "Lucide Icons"],
    category: "Computer Vision / End-to-End ML",
    image: "/hero-bg.png",
    github: "https://github.com/remilsalim/FaceTheBeat",
    features: ["Real-time face detection", "Emotion classification", "Dynamic music filtering"]
  },
  {
    id: 3,
    title: "StackSense",
    subtitle: "Tech Stack Intelligence Engine",
    description: "An intelligent recommendation engine that suggests tailored technology stacks (Frontend, Backend, Database, Cloud) based on a project's scale, domain, and specific priorities using Scikit-learn.",
    tech: ["Python", "Flask", "React", "Scikit-Learn", "Vite"],
    category: "Recommendation System",
    image: "/workflow-bg.png",
    github: "https://github.com/remilsalim/StackSense",
    demo: null,
    features: ["Intelligent decision engine", "Dynamic recommendation weights", "Production-level API design"]
  },
  {
    id: 4,
    title: "ForensicVoiceMatch",
    subtitle: "Digital Forensics Audio Analysis",
    description: "A digital forensics project that analyzes and matches suspect voice samples against recordings using audio processing and AI/ML techniques. Leverages Librosa for feature extraction.",
    tech: ["Python", "Librosa", "Audio Processing", "Scikit-Learn", "Jupyter"],
    category: "Audio Analysis / ML System",
    image: "/hero-bg.png",
    github: "https://github.com/remilsalim/ForensicVoiceMatch",
    demo: null,
    features: ["Speech feature extraction", "Frequency spectrum analysis", "Classification accuracy validation"]
  },
  {
    id: 5,
    title: "Alzheimer’s Detection",
    subtitle: "Medical ML Experimentation",
    description: "A robust machine learning experimentation project focused on the early detection of Alzheimer's disease using XGBoost models and comparative analysis of medical datasets.",
    tech: ["Python", "XGBoost", "Pandas", "Scikit-Learn", "Matplotlib"],
    category: "ML Experimentation",
    image: "/workflow-bg.png",
    github: "https://github.com/remilsalim/Alzheimer-Detection",
    demo: null,
    features: ["Data preprocessing pipeline", "Hyperparameter tuning", "Comprehensive ROC/AUC analysis"]
  }
];
