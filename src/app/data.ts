export type CVEntry = {
  title: string;
  organization: string;
  period: string;
  employmentType?: string;
  location?: string;
  locationType?: string;
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
    title: "Engineering Manager - Hijra Bank",
    organization: "Hijra",
    period: "July 2024 - Present",
    employmentType: "Full-time",
    location: "Indonesia",
    locationType: "Hybrid",
    details: [
      "Led Hijra group's Bank domain (core banking, transactions, consumer life-cycle, and release management) team of 16 engineers (including BE, FE, Mobile/React Native, SEIT, SQA), including dealing with day-to-day interactions with compliance and regulators related to the engineering.",
      "Led Hijra Bank's high-priority core banking migration initiative. This initiative is projected to save around 600 Million IDR/Month when completed.",
      "Pushing the automation test initiative to cover the critical path of the business flow. This initiative will also increase the correctness of the Hijra Bank's system and significantly decrease the duration of the regression test.",
    ],
    skills: [
      "Engineering Management",
      "System Design",
      "Software Development",
      "Software Engineering",
      "Core Banking",
      "Frontend Engineering",
    ],
    type: "work",
  },
  {
    title: "Engineering Manager - Alami P2P Lending and Hijra Bank Financing",
    organization: "Hijra",
    period: "December 2022 - July 2024",
    employmentType: "Full-time",
    location: "Indonesia",
    locationType: "Remote",
    details: [
      "Led Hijra group's Financing domain (Bank and Alami Peer-to-peer/P2P lending), Risk Management System, and Reporting (RMS & Reporting), and Data Engineering (DE) team of around 15-25 engineers (including BE, FE, Mobile/React Native, SEIT, SQA, DE).",
      "Initiated Bank's financing (e.g., House financing, commercial financing), product engineering back office, and user onboarding (web and mobile app), including its sales and risk management dashboard. This initiative laid the foundation for Hijra Group's future income backbone.",
      "Pushed Supply Chain Financing (SCF) financing type, contributing to 50% of the total financing application disbursement in Alami P2P lending.",
      "Improved the financing application submission to disbursement SLA by around 25% (from 14 to 10 days) by improving Alami's back-office system.",
      "Pushed credit engine extraction so that it could be used by different groups within Hijra (i.e., Bank and Alami), which saved hundreds of development time hours and eliminated inconsistencies between applications.",
      "Worked with Legal and Compliance teams, ensuring Hijra Group's engineering team (P2P Lending and Bank) achieved 100% compliance with the Indonesian Financial Services Authority (OJK) rules, including Anti Money Laundering (AML) system, regular reporting automation, and back office governance.",
      "Pushed developer productivity initiatives, including Trunk-Based Development (TBD) adoption, supporting migration to Kubernetes, enforcing unit, integration, and E2E tests in CI/CD, and other quality culture and infrastructure adoptions in the Financing domain, resulting in faster, easier, and safer development experience while pushing down the operational cost.",
      'Pushed the transformation of existing QA manuals to QA automation in my team (i.e., all 5 QAs). Hence, it increased team delivery while reducing my team\'s workforce stability. I also pushed the "developers create automation testing" initiative as a final step of this initiative.',
    ],
    skills: [
      "Engineering Management",
      "System Design",
      "Software Development",
      "Software Engineering",
      "Frontend Engineering",
    ],
    type: "work",
  },
  {
    title: "Frontend Engineer",
    organization: "Ruangguru",
    period: "January 2018 - August 2019",
    employmentType: "Full-time",
    location: "Greater Jakarta Area, Indonesia",
    locationType: "Hybrid",
    details: [
      "Became one of the pioneering engineers in Ruang Belajar's Desktop app development using ReasonML, ReasonReact, and Electron. Heavily involved in its core and primitive UI components development (created more than 50% of it) and routing design, while also helping other engineers (mobile engineers) to pick up React and web technology in general. This project is the first joint project between Ruangguru's Front-end and Mobile engineers. Opening up a new possibility of higher app development's velocity in Ruangguru.",
      "Involved in Ruangguru's new front-end engineer hiring process by assessing their computational thinking and React.js problem-solving skills through coding challenges. This involvement results in a faster front-end engineering division's hiring process while ensuring that only the high-quality one passed.",
      "Developed Ruang Kerja CMS question and question-set modules using React and Draft.js. Resulting in well-functioning rich-text editor implementation for question and question-set generation tasks in Ruang Kerja apps.",
      "Developed and set up various internal front-end tooling, including command-line applications to bootstrap new web projects, miscellaneous UI kits, rich text editor, and JavaScript utility functions. Resulting in a higher code sharing and development speed for Ruangguru's engineering team.",
      "Led a team of front-end developers to create Ruang Kerja's company dashboard using React JS stacks, flow-typed, and data visualization tools. Also did end-to-end testing for it using cypress. Resulting in a finely crafted and runtime-error-free dashboard web app.",
      "Became one of the pioneering engineers in Ruang Kerja's React Native app development. Resulting in more efficient engineering resource usage for Ruangguru by expanding the uses of its front-end engineers while theoretically cutting the cost of apps development down almost to 50% without losing any of native apps' development speed.",
    ],
    skills: [
      "Front-End Development",
      "Cascading Style Sheets (CSS)",
      "JavaScript",
      "HTML",
      "Software Development",
      "React.js",
      "ReasonML",
      "Frontend Engineering",
      "TypeScript",
    ],
    type: "work",
  },
  {
    title: "Junior Frontend Engineer",
    organization: "Ruangguru",
    period: "October 2017 - December 2017",
    employmentType: "Full-time",
    location: "Greater Jakarta Area, Indonesia",
    locationType: "Hybrid",
    details: [
      "Led a team of front-end developers to develop and optimize Ruang Uji's react stacks and deployment. The result was more than 53.86% smaller initial download size (all assets included), 9.52% lower request number, 46.72% faster finish time, 137.10% faster DOMContentLoad time, and 62.49% faster load time than the original angular.js' stacks (2G connection, 280kbps/256kbps 800ms RTT). I also made subsequent pages load substantially faster by implementing on-point code optimization, aggressive code-splitting, and various images' lazy loading.",
      "Refactored https://ruangguru.com/ assets and code base using IMGIX, AWS S3 bucket, and fastly CDN. The result was a load time speed improvement of more than 300% (from more than 12 seconds average to under 3 seconds) and the advancement of its https://www.webpagetest.org/ average score of B to all A's without sacrificing its assets' apparent quality.",
      "Rewrote and migrated Ruang Uji (https://uji.ruangguru.com) from Angular 1's (AngularJS) stacks to React.js' stacks from scratch. Thus solved the old \"exam event\" problem (e.g., no automatic submission in the background, submission error handler, continuing to the last exam on reload) at Ruang Uji. This project also results in the tech stack's modernization, making it less error-prone.",
      "Automated web apps' bug tracking using sentry (Raven.js) and deployment from Gitlab to AWS S3 and production using Codeship. The result was more precise bug tracking and faster web app integration, deployment, and delivery.",
    ],
    skills: [
      "Front-End Development",
      "Cascading Style Sheets (CSS)",
      "JavaScript",
      "HTML",
      "Flow Type",
      "Software Development",
      "React.js",
      "Frontend Engineering",
    ],
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
