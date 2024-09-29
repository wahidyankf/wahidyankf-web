export type CVEntry = {
  title: string;
  organization: string;
  period: string;
  details: string[];
  skills?: string[];
  links?: { [key: string]: string };
  type: "about" | "work" | "education" | "honor" | "certification" | "language";
};

export const cvData: CVEntry[] = [
  {
    title: "About Me",
    organization: "",
    period: "",
    details: [
      "Yoka is a software engineering leader with a diverse portfolio and over three years of experience leading software engineering teams in high-traffic (the biggest ed-tech in SEA) and highly regulated businesses (e.g., financial institutions). He is passionate about this role because he feels that seeing his team grow while delivering product and business value and staying technically competent is a highly satisfying experience. He also loves to code in functional programming languages but thinks that paradigms and programming languages are only tools for delivering impact and achieving goals.",
      "Yoka is about more than technical skills or getting the job done. He is a polyglot who speaks more than three languages and has three years of experience living overseas. During his free time, he usually reads books to expand his knowledge and contribute to the community via AyoKoding's website, ayokoding.com (in Bahasa and English), and YouTube channels (in Bahasa).",
    ],
    skills: [
      "Engineering Management",
      "Systems Design",
      "Software Engineering",
      "Software Testing",
      "Core Banking & Financing Engineering",
      "Frontend Engineering",
    ],
    links: {
      github: "https://github.com/wahidyankf",
      githubOrg: "https://github.com/organiclever",
      linkedin: "https://www.linkedin.com/in/wahidyan-kresna-fridayoka/",
      website: "https://wahidyankf.com",
      email: "wahidyankf@gmail.com",
    },
    type: "about",
  },
  {
    title: "Work Experience",
    organization: "",
    period: "",
    details: ["In Progress"],
    type: "work",
  },
  {
    title: "Certificate of Appreciation: Hijra Group's Exceptional Performer",
    organization: "Hijra Group",
    period: "May 2024",
    details: [
      "Associated with: Engineering Manager - Alami P2P Lending and Hijra Bank Financing at Hijra",
      'Description: Appreciation for "Exceptional Performance" in the performance appraisal cycle 2023, based on Hijra Group\'s CFR 2023.',
    ],
    type: "honor",
  },
  {
    title: "Ruangguru's Chief of The Month: September 2019",
    organization: "Ruangguru",
    period: "September 2019",
    details: [
      "Associated with: Senior Frontend Engineer at Ruangguru",
      "Description: Ruang Guru's Most Performant Employee Award for September 2019",
    ],
    type: "honor",
  },
  {
    title: "Ruangguru's Chief of The Month: August 2018",
    organization: "Ruangguru",
    period: "August 2018",
    details: [
      "Associated with: Frontend Engineer at Ruangguru",
      "Description: Ruang Guru's Most Performant Employee Award for August 2018.",
    ],
    type: "honor",
  },
  {
    title: "Certificate of Completion - System Design Assessment",
    organization: "AlgoExpert",
    period: "December 2021",
    details: ["Credential ID: 524646adaa", "Skills: System Design"],
    links: {
      credential: "https://certificate.algoexpert.io/SE-524646adaa",
    },
    type: "certification",
  },
  {
    title: "Languages",
    organization: "",
    period: "",
    details: [
      "Bahasa Indonesia|Native or bilingual proficiency",
      "English|Full professional proficiency",
      "German|Limited working proficiency",
    ],
    type: "language",
  },
  {
    title: "Bachelor of Engineering (B.Eng.)",
    organization: "Institut Teknologi Bandung",
    period: "July 2005 - July 2011",
    details: [
      "Field of study: Electrical and Electronics Engineering",
      "Grade: 3.0",
    ],
    type: "education",
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
};

export const projectsData: Project[] = [
  {
    title: "Personal Website",
    description:
      "A responsive personal website showcasing my portfolio and blog.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/wahidyankf/wahidyankf.com",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "AyoKoding",
    description:
      "An educational platform for learning programming in Bahasa Indonesia.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://ayokoding.com",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Ruangguru Clone",
    description: "A clone of the Ruangguru platform for educational purposes.",
    technologies: ["React Native", "Redux", "Firebase"],
    link: "https://github.com/wahidyankf/ruangguru-clone",
    image: "/placeholder.svg?height=200&width=300",
  },
];
