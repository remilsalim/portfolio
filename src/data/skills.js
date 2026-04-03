import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Workflow, 
  GitBranch, 
  Terminal,
  LineChart,
  Layout,
  Layers,
  Cpu
} from 'lucide-react';

export const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL", "JavaScript", "CSS", "HTML"]
  },
  {
    title: "Web Development",
    icon: Layout,
    skills: ["React", "HTML5/CSS3", "Modern UI Design", "Responsive Layouts", "Vite"]
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Deep Learning", "Transformers"]
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["Pandas", "NumPy", "ETL Pipelines", "Data Preprocessing", "Big Data"]
  },
  {
    title: "Specialized ML",
    icon: Cpu,
    skills: ["Computer Vision (face-api.js)", "GNN (NetworkX)", "GNN Visualization"]
  },
  {
    title: "Tools & DevOps",
    icon: GitBranch,
    skills: ["Git", "GitHub Actions", "Vite", "JSON/REST APIs", "Jupyter Notebooks"]
  }
];
