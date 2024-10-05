export type CVEntry = {
  title: string;
  organization: string;
  period: string;
  employmentType?: string;
  location?: string;
  locationType?: string;
  details: string[];
  skills?: string[];
  programmingLanguages?: string[];
  frameworks?: string[];
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
      "Yoka is about more than technical skills or getting the job done. He is a polyglot who speaks more than three languages and has three years of experience living overseas. During his free time, he usually reads books to expand his knowledge and contribute to the community via AyoKoding's website, [ayokoding.com](https://ayokoding.com) (in Bahasa and English), and [YouTube channel](https://youtube.com/ayokoding) (in Bahasa).",
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
      "Software Engineering",
      "Frontend Engineering",
      "Backend Engineering",
      "Software Testing",
      "Core Banking",
    ],
    programmingLanguages: ["JavaScript", "Java", "TypeScript"],
    frameworks: ["React.js", "Next.js", "React Native", "Spring Boot"],
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
      "Software Engineering",
      "Frontend Engineering",
      "Backend Engineering",
      "Software Testing",
      "Financing System Engineering",
      "Data Engineering",
    ],
    programmingLanguages: ["JavaScript", "Java", "Python", "TypeScript"],
    frameworks: ["React.js", "Next.js", "React Native", "Spring Boot"],
    type: "work",
  },
  {
    type: "work",
    title: "Engineering Manager",
    organization: "GudangAda",
    period: "July 2022 - December 2022",
    employmentType: "Full-time",
    location: "Indonesia",
    locationType: "Hybrid",
    details: [
      "Led GudangAda (Gada)'s Warehouse Management System (WMS) distributed multinational engineering team of 11.",
      "Released WMS bin-related features for internally operated warehouse. Thus improving and making sure GudangAda's warehouses can better organize their inventory and enable more effective inbound/outbound (e.g., by enabling recommendation features such as FEFO or First Expired First Out).",
      "Released WMS-related paperless projects. Thus improving its accuracy and productivity by orders of magnitude (e.g., cutting invoice creation and delivery time to partners by days for invoice automation).",
      "Pushed Gada's web automation framework initiative and adoption. Hence, the whole Gada tech team can use and adopt 1 testing framework (using Cypress and TS) and increase its product iteration velocity, which was used to do the E2E testing on the web app manually. Moreover, the TS introduction to the QE team allows them to use the same language as Gada's FE team. Hence unlocking greater collaboration and code \"transparency.\"",
      "Pushed FE Monorepo initiatives and adoptions in the WMS team, theoretically increasing the WMS FE team's productivity by more than 20% while improving its maintainability and correctness (i.e., by including a dependency graph analysis). Also opened up the possibility for the whole of Gada's FE team to increase its productivity and maintainability and to create the \"whole company\" impact.",
      "Pushed WMS engineering excellence initiatives, requiring the development process to cover the positive cases for its critical path for QE (previously nonexistent) and pushing unit testing adoption in FE and BE + static type checking in BE. Also, doing the system update (i.e., Python, FE/BE libs) and dockerized dev (i.e., for DB). These improve the testing time by orders of magnitude faster and bump the developer's productivity.",
      "Standardized WMS engineering workflow and team performance monitoring. Improving its transparency and future planning capabilities.",
    ],
    skills: [
      "Engineering Management",
      "Frontend Engineering",
      "Backend Engineering",
      "Software Testing",
      "Systems Design",
      "Software Engineering",
    ],
    programmingLanguages: ["JavaScript", "Python", "TypeScript"],
    frameworks: ["React.js", "Next.js", "Django"],
  },
  {
    type: "work",
    title: "Engineering Manager",
    organization: "Ruangguru",
    period: "November 2021 - July 2022",
    employmentType: "Full-time",
    location: "Indonesia",
    locationType: "Remote",
    details: [
      "Led Skill Academy's (SA) Payment, Promotion, and Discovery stream's (SA-PPD) distributed engineering team of 14. Successfully promoted all eligible-to-be-reviewed engineers to the next level (i.e., 2 of them to the senior level).",
      "Pushed engineering effort for a highly successful user reward and OTP system in SA to production, enabling it to contribute to >50% of SA's total number of transactions and made the successful disbursement rate high at >99% (the rest of <1% is due to inevitable users' invalid input).",
      "Improved partnership utility software to make SA's learning partnership run smoother, resulting in billions of Rupiah of partnership contracts successfully secured.",
      "Pushed the SA PPD's back-end re-architecture project forward, resulting in improved system load capacity by at least 200% from the previous architecture, and solved the SA's domain coupling problem in the back-end.",
      "Pushed the SA's frontend platform team initiative, resulting in a 35% improvement in SA's Android app loading time and more than double the lighthouse performance score for SA's web (i.e., from 10s to 50s). It also results in CI/CD tooling for SA's React Native app deployment and builds, saving around 2 hours of APK's build time per day.",
      "Pushed the SA PPD's SEO project. Increased organic traffic by 6+ times (Jan-Jun 2022) and saved ad spending by hundreds of millions of Rupiah/month (e.g., 500+ Million in June 2022). As further notes, organic traffic users in SA are six times more engaged than paid traffic users.",
      "Pushed the dynamic landing pages and public API initiative in SA. Enabling the marketing team's UI engineers to save hundreds of hours of engineering efforts per month.",
      "Became an advisory member of the SA-FE committee, ensuring that SA's FE can clear its tech debts and improve its developer experience. The initiative includes ReasonML to TS migration and web and mobile platform improvements. Also heavily involved in RG's FE hiring committee.",
    ],
    skills: [
      "Engineering Management",
      "Systems Design",
      "Frontend Engineering",
      "Software Engineering",
      "Software Testing",
    ],
    programmingLanguages: [
      "JavaScript",
      "Golang",
      "ReasonML",
      "TypeScript",
      "SQL",
    ],
    frameworks: ["React.js", "Next.js", "ReasonReact"],
  },
  {
    type: "work",
    title: "Technical Lead",
    organization: "Ruangguru",
    period: "August 2021 - October 2021",
    employmentType: "Full-time",
    location: "Jakarta, Indonesia",
    locationType: "Remote",
    details: [
      "Led Skill Academy's payment, promotion, and discovery stream's (SA-PPD) distributed engineering team of 6. In addition, being responsible for the SA-PPD engineering alignment with its stakeholders and its BE & FE engineers' Career Development Plan (CDP).",
      "Led Skill Academy's FE (SA-FE) general technical endeavor by creating its roadmap, alignments with SA streams (e.g., SA-PPD, SA-Learning), and alignments with Ruangguru's FE (RG-FE) platform team. The alignment with SA streams ensured that the SA business grew, and SA-FE could pragmatically chase the RG's engineering excellence principle (e.g., web SEO and performance improvement for SA-PPD, learning journey stabilization for SA-Learning). At the same time, the alignments with the RG-FE team enable the SA-FE squad to benefit from adopting the technological advancement in RG-FE and vice versa (e.g., X-State for the central model adoption). Also responsible for the CDP of every engineer in SA-FE (i.e., seven engineers in total).",
      'Saving hundreds of engineering hours per month by prioritizing eliminating hassle-recurrent jobs in the SA-PPD engineering team (e.g., dynamic ranking, dynamic content adoption). Ensure that the engineering team can focus on what "matters" the most (create delightful products and strive for engineering excellence).',
    ],
    skills: [
      "Engineering Management",
      "Systems Design",
      "Backend Engineering",
      "Frontend Engineering",
      "Software Engineering",
      "React.js",
    ],
    programmingLanguages: [
      "JavaScript",
      "Golang",
      "ReasonML",
      "TypeScript",
      "SQL",
    ],
    frameworks: ["React.js", "React Native", "ReasonReact"],
  },
  {
    type: "work",
    title: "Senior Frontend Engineer",
    organization: "Ruangguru",
    period: "September 2019 - October 2021",
    employmentType: "Full-time",
    location: "Jakarta, Indonesia",
    locationType: "Remote",
    details: [
      "Developed most of Skill Academy's (SA) learning journey (using ReasonML) and CMS (using plain React.js) modules during the short inception period. Made sure that this critical project could be launched on time (8 weeks) while making it run-time error-free.",
      'Became frontend engineering lead for SA team (i.e., led 7 FE engineers) and was responsible for all of its client-side platforms (i.e., Web, Mobile, and CMS using ReasonML, TypeScript, Flow, JS, Cordova, React, React Native, Next.js). Made sure the team members could grow and stay happy while ensuring the SA team met the business needs and its technical debt "payment." Also heavily involved in driving SA\'s FE architecture (e.g., FSM-pattern adoption, heavy feature-toggle usage, offline-first architecture, tracking, testing adoption, dynamic rendering).',
      "Worked with various teams and stakeholders during the ideation, screening, execution, and retrospection phase, ensuring that only the most impactful features were shipped into production while keeping the deadline in check. Made SA the top product in the Indonesian market and became one of the most profitable business units in Ruangguru's history. Thus, it became one of Ruangguru's backbones during the COVID-19 pandemic.",
      "I was involved in Ruangguru's FE engineering committee and influenced its road map. One of the results was that Ruangguru's FE team quickly (i.e., about four weeks from the initial discussion) converged the convention and technological stacks for the then-new TypeScript adoption in Ruangguru's FE future projects.",
      "Heavily involved in Ruangguru's new FE engineer hiring. This involvement results in a faster FE engineering hiring process while ensuring only technical and culturally fit candidates pass. I also streamlined the FE team's onboarding process by creating documents and guides, resulting in a faster, more precise, and smoother onboarding for the new engineers while making it more scalable and reproducible.",
    ],
    skills: ["Frontend Engineering", "Systems Design", "Software Engineering"],
    programmingLanguages: [
      "JavaScript",
      "TypeScript",
      "ReasonML",
      "HTML",
      "CSS",
    ],
    frameworks: ["React.js", "React Native", "ReasonReact"],
  },
  {
    title: "Frontend Engineer",
    organization: "Ruangguru",
    period: "January 2018 - August 2019",
    employmentType: "Full-time",
    location: "Greater Jakarta Area, Indonesia",
    locationType: "Hybrid",
    details: [
      "Became one of the pioneering engineers in Ruang Belajar's Desktop app development using ReasonML, ReasonReact, and Electron. Heavily involved in its core and primitive UI components development (created more than 50% of it) and routing design, while also helping other engineers (mobile engineers) to pick up React and web technology in general. This project is the first joint project between Ruangguru's frontend and Mobile engineers. Opening up a new possibility of higher app development's velocity in Ruangguru.",
      "Involved in Ruangguru's new frontend engineer hiring process by assessing their computational thinking and React.js problem-solving skills through coding challenges. This involvement results in a faster frontend engineering division's hiring process while ensuring that only the high-quality one passed.",
      "Developed Ruang Kerja CMS question and question-set modules using React and Draft.js. Resulting in well-functioning rich-text editor implementation for question and question-set generation tasks in Ruang Kerja apps.",
      "Developed and set up various internal frontend tooling, including command-line applications to bootstrap new web projects, miscellaneous UI kits, rich text editor, and JavaScript utility functions. Resulting in a higher code sharing and development speed for Ruangguru's engineering team.",
      "Led a team of frontend developers to create Ruang Kerja's company dashboard using React JS stacks, flow-typed, and data visualization tools. Also did end-to-end testing for it using cypress. Resulting in a finely crafted and runtime-error-free dashboard web app.",
      "Became one of the pioneering engineers in Ruang Kerja's React Native app development. Resulting in more efficient engineering resource usage for Ruangguru by expanding the uses of its frontend engineers while theoretically cutting the cost of apps development down almost to 50% without losing any of native apps' development speed.",
    ],
    skills: ["Frontend Engineering", "Software Engineering"],
    programmingLanguages: [
      "JavaScript",
      "TypeScript",
      "ReasonML",
      "HTML",
      "CSS",
    ],
    frameworks: ["React.js", "React Native", "ReasonReact"],
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
      "Led a team of frontend developers to develop and optimize Ruang Uji's react stacks and deployment. The result was more than 53.86% smaller initial download size (all assets included), 9.52% lower request number, 46.72% faster finish time, 137.10% faster DOMContentLoad time, and 62.49% faster load time than the original angular.js' stacks (2G connection, 280kbps/256kbps 800ms RTT). I also made subsequent pages load substantially faster by implementing on-point code optimization, aggressive code-splitting, and various images' lazy loading.",
      "Refactored https://ruangguru.com/ assets and code base using IMGIX, AWS S3 bucket, and fastly CDN. The result was a load time speed improvement of more than 300% (from more than 12 seconds average to under 3 seconds) and the advancement of its https://www.webpagetest.org/ average score of B to all A's without sacrificing its assets' apparent quality.",
      "Rewrote and migrated Ruang Uji (https://uji.ruangguru.com) from Angular 1's (AngularJS) stacks to React.js' stacks from scratch. Thus solved the old \"exam event\" problem (e.g., no automatic submission in the background, submission error handler, continuing to the last exam on reload) at Ruang Uji. This project also results in the tech stack's modernization, making it less error-prone.",
      "Automated web apps' bug tracking using sentry (Raven.js) and deployment from Gitlab to AWS S3 and production using Codeship. The result was more precise bug tracking and faster web app integration, deployment, and delivery.",
    ],
    skills: ["Frontend Engineering", "Software Engineering"],
    programmingLanguages: ["JavaScript", "Flow Type", "HTML", "CSS"],
    frameworks: ["React.js"],
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

export const parseDate = (dateString: string): Date => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [month, year] = dateString.split(" ");
  const monthIndex = months.indexOf(month);
  if (monthIndex === -1) {
    throw new Error(`Invalid month: ${month}`);
  }
  return new Date(parseInt(year), monthIndex);
};

export const calculateDuration = (period: string): number => {
  const [start, end] = period.split(" - ");
  const startDate = parseDate(start);
  const endDate = end === "Present" ? new Date() : parseDate(end);

  // Calculate full months
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  // Add 1 to include both start and end months
  return months + 1;
};

export const calculateTotalDuration = (
  periods: { start: Date; end: Date }[]
): number => {
  if (periods.length === 0) return 0;

  // Sort periods by start date
  periods.sort((a, b) => a.start.getTime() - b.start.getTime());

  let totalMonths = 0;
  let currentEnd = new Date(0); // Initialize with the earliest possible date

  for (const period of periods) {
    const startDate = period.start > currentEnd ? period.start : currentEnd;
    const endDate = period.end;

    if (startDate < endDate) {
      // Calculate months, always including start and end months
      const monthsDiff =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth()) +
        1; // Add 1 to include both start and end months

      totalMonths += monthsDiff;
      currentEnd = endDate > currentEnd ? endDate : currentEnd;
    }
  }

  return totalMonths;
};

export const formatDuration = (months: number): string => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${
      remainingMonths > 1 ? "s" : ""
    }`;
  } else if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""}`;
  } else {
    return `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  }
};

export const getTopSkillsLastFiveYears = (
  data: CVEntry[]
): { skill: string; duration: number }[] => {
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);

  const allWorkEntries = data.filter((entry) => entry.type === "work");

  const skillInfo: {
    [key: string]: { count: number; periods: { start: Date; end: Date }[] };
  } = {};

  // Count occurrences in recent entries and collect all periods for each skill
  allWorkEntries.forEach((entry) => {
    const [startStr, endStr] = entry.period.split(" - ");
    const start = parseDate(startStr);
    const end = endStr === "Present" ? new Date() : parseDate(endStr);

    entry.skills?.forEach((skill) => {
      if (!skillInfo[skill]) {
        skillInfo[skill] = { count: 0, periods: [] };
      }
      if (end >= fiveYearsAgo) {
        skillInfo[skill].count += 1;
      }
      skillInfo[skill].periods.push({ start, end });
    });
  });

  // Calculate total duration for each skill
  const skillDurations = Object.entries(skillInfo).map(([skill, info]) => ({
    skill,
    duration: calculateTotalDuration(info.periods),
    count: info.count,
  }));

  // Sort by count (for skills used in last 5 years) and then by duration
  return skillDurations
    .sort((a, b) => b.count - a.count || b.duration - a.duration)
    .slice(0, 10)
    .map(({ skill, duration }) => ({ skill, duration }));
};
