export const personalInfo = {
  name: "Muzammil Ali",
  titlePrefix: "Full-Stack MERN Developer • Peshawar, Pakistan",
  roles: [
    "Full-Stack MERN Developer",
    "Software Engineer",
    "React & Node.js Specialist",
    "Data Science Enthusiast",
  ],
  bio: "I build scalable, production-ready web applications and lead engineering teams. I am Muzammil Ali, a professional Full-Stack MERN Developer based in Peshawar, Pakistan. I am passionate about bridging business goals with high-performance technical solutions.",
  aboutBio: [
    "I’m a Full-Stack Web Developer and Data Science student based in Peshawar, Pakistan, passionate about building modern, scalable, and user-focused web applications. Trained through Saylani Mass IT Training (SMIT), I work across the frontend and backend using technologies such as JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and REST APIs.",
    "I enjoy turning ideas and business requirements into practical digital solutions, from designing intuitive user interfaces to developing reliable backend systems and integrating APIs. I’m also experienced in working within collaborative development teams, contributing to project architecture, solving technical challenges, and maintaining clean, reusable, and maintainable code.",
    "Beyond web development, I’m pursuing Data Science at the University of Peshawar, exploring Artificial Intelligence and cloud technologies to expand my technical perspective. I’m continuously learning, experimenting with new technologies, and looking for opportunities to grow as a developer while creating software that delivers real-world value.",
  ],
  email: "alimuzmmil294@gmail.com",
  phone: "0370-0504863",
  location: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
  profileImage: "/assets/profilepic.jpg",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/alimuzmmil294-coder",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muzammil-ali-824075386/",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:alimuzmmil294@gmail.com",
      icon: "mail",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/923700504863",
      icon: "whatsapp",
    },
  ],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export const education = [
  {
    institution: "University of Peshawar",
    degree: "Bachelor of Science in Data Science",
    period: "2025 - 2029",
  },
  {
    institution: "Saylani Mass I.T. Training (SMIT)",
    degree: "Web and Mobile Application Development (MERN Stack)",
    period: "2024 - 2025",
  },
];

export const experiences = [
  {
    company: "Saylani Mass I.T. Training (SMIT)",
    period: "Aug 2026 - Present",
    duration: "3 mos",
    current: true,
    roles: [
      {
        title: "Frontend Developer (EduHub LMS)",
        period: "Aug 2026 - Present",
        duration: "3 mos",
        location: "Peshawar, Pakistan · Hybrid",
        type: "Project-based",
        current: true,
        description:
          "Building the frontend architecture for EduHub, an institutional Learning Management System.",
        highlights: [
          "Architect role-based navigation and modular UI layouts using React and Tailwind CSS",
          "Lead sprint planning, enforce Git branching strategies, and review pull requests",
          "Oversee seamless integration of RESTful API endpoints with backend services",
          "Ensure high interface responsiveness, accessibility, and clean state management",
        ],
        technologies: [
          "React.js",
          "Tailwind CSS",
          "Redux Toolkit",
          "REST API",
          "Git & GitHub",
        ],
      },
    ],
  },
  {
    company: "CodeAlpha",
    period: "May 2026 - Jul 2026",
    duration: "3 mos",
    current: false,
    roles: [
      {
        title: "Software Development Intern",
        period: "May 2026 - Jul 2026",
        duration: "3 mos",
        location: "Remote",
        type: "Internship",
        description:
          "Engineered task management and algorithmic utility web applications with strict delivery timelines.",
        highlights: [
          "Architected a full-featured task management application with persistent state",
          "Built data-driven calculation tools featuring robust edge-case validation",
          "Optimized client-side rendering performance and cross-browser consistency",
        ],
        technologies: [
          "JavaScript",
          "React.js",
          "Tailwind CSS",
          "REST API",
          "Git",
        ],
      },
    ],
  },
  {
    company: "Private Academic Tutoring",
    period: "Jul 2026 - Present",
    duration: "4 mos",
    current: true,
    roles: [
      {
        title: "Academic Home Tutor",
        period: "Jul 2026 - Present",
        duration: "4 mos",
        location: "Peshawar, Pakistan",
        type: "Part-time",
        current: true,
        description:
          "Providing personalized home tutoring to primary and middle school students (Grades 2, 3, and 6) to build strong academic foundations.",
        highlights: [
          "Deliver tailored one-on-one lessons in Mathematics, Science, and English to suit each child's learning pace",
          "Break down complex textbook concepts into simple, engaging, and easy-to-understand daily lessons",
          "Assist with homework completion, exam preparation, and building consistent study habits",
          "Communicate regularly with parents to track academic progress and address learning gaps",
        ],
        skills: [
          "Curriculum Instruction",
          "Mathematics & Science",
          "Student Mentorship",
          "Exam Preparation",
          "Clear Communication",
        ],
      },
    ],
  },
];

export const skills = [
  { name: "JavaScript", icon: "js", color: "#F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "next", color: "#000000" },
  { name: "Node.js", icon: "node", color: "#339933" },
  { name: "Express.js", icon: "express", color: "#000000" },
  { name: "MongoDB", icon: "mongo", color: "#47A248" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "Redux", icon: "redux", color: "#764ABC" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "Material UI", icon: "mui", color: "#007FFF" },
  { name: "HTML5", icon: "html5", color: "#E34F26" },
  { name: "CSS3", icon: "css3", color: "#1572B6" },
  { name: "REST API", icon: "layer-group", color: "#6C63FF" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "#181717" },
];

export const projects = [
  // EduHub
  {
    title: "EduHub — Institutional Learning Management System (LMS)",
    description:
      "Architected by Muzammil Ali at Saylani Mass IT Training (SMIT), EduHub is an institutional learning management system designed to streamline academic operations and classroom collaboration. Built with a scalable React and Tailwind CSS frontend architecture, it provides role-based portals for students, instructors, and administrators to seamlessly manage course enrollments, lecture materials, assignments, attendance tracking, and academic performance analytics.",
    image: "/assets/eduhub.png",
    imageAlt: "EduHub LMS student attendance and performance dashboard interface",
    projectLink: "https://edu-hub-0.vercel.app/",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST API",
      "Git & GitHub",
      "JWT",
      "Bcrypt",
      "Express.js",
      "MongoDB",
      "Node.js",
    ],
  },
  // SMIT LMS
  {
    title: "SMIT Learning Management System (LMS)",
    subtitle: "Enterprise Academic & Attendance Tracking Portal",
    description:
      "An institutional learning management and administrative dashboard engineered to streamline campus operations. Features live student and teacher metric tracking, dynamic attendance logging with automated check-in and checkout timestamps, task management workflows, and dedicated course and team administration modules.",
    image: "/assets/smit-lms-dashboard.png",
    imageAlt: "SMIT Learning Management System campus operations and attendance tracking dashboard",
    projectLink: "https://smit-lms-h8sn.vercel.app/",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST API",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },

  // POLLIFY
  {
    title: "Pollify — Full-Stack Interactive MERN Polling App",
    description:
      "Engineered by Muzammil Ali, Pollify is a real-time community engagement platform built with the MERN stack (MongoDB, Express.js, React, Node.js). Features full JWT user authentication, interactive vote tallying with dynamic progress bars, threaded comments, and personal activity metrics.",
    image: "/assets/pollify.png",
    imageAlt: "Pollify interactive polling platform dashboard",
    highlights: [
      "Full user auth flow (register, login, sessions)",
      "Create, edit, delete, vote, save, and share polls",
      "Interactive vote tallying with dynamic progress bars",
      "Threaded comments and personal activity metrics dashboard",
    ],
    projectLink: "https://pollify-frontend-seven.vercel.app/",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
  },

  // Hackathon Project
  {
    title: "MedFlow — Smart Clinic Management Operating System",
    status: "In Development",
    description:
      "Engineered by Muzammil Ali, MedFlow is an AI-assisted clinic management platform modernizing outpatient workflows for healthcare practices. Features encrypted digital patient health records, appointment scheduling, automated prescription handling, and role-based staff permissions—integrated with AI diagnostics that assist doctors and translate clinical insights into patient-friendly language.",
    image: "/assets/medflow.png",
    imageAlt: "MedFlow smart clinic management operating system with AI diagnostic assistant",
    projectLink: "https://heckathon-project-six.vercel.app/",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "AI Integration",
      "Role-Based Access (RBAC)",
    ],
  },
  // E-COM WEBSITE
  {
    title: "Islamic Desk Admin Panel",
    description:
      "Contributed to the development of the Islamic Desk Admin Panel by Muzammil Ali, implementing core features for content and user management. Integrated global state management using Redux for seamless data handling across components, and optimized dashboard performance for a smooth user experience.",
    projectLink: "https://www.islamicdesk.com/",
    technologies: ["JavaScript", "React", "Node.js", "Redux"],
  },

  {
    title: "Vellato Mobile App",
    description:
      "Designed and developed a fully responsive mobile application interface for Android and iOS using React Native. Focused on creating pixel-perfect UI/UX layouts that adapt seamlessly across screen sizes and devices, delivering a user-centric experience by applying modern mobile design principles and reusable components.",
    projectLink: "https://github.com/alimuzmmil294-coder",
    technologies: ["React Native", "UI/UX", "Mobile Design"],
  },
  {
    title: "12Commerce SaaS — Lead Generation Platform",
    description:
      "12Commerce SaaS – Global e-commerce platform combining functional websites with an intelligent lead generation widget. Overseeing full-stack development, deployment, and client delivery, ensuring the platform is scalable, efficient, and future-ready.",
    projectLink: "https://store.12monday.net/",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Redux",
      "MongoDB",
      "Express.js",
    ],
  },
];

export const certificates = [
  {
    title: "Web and Mobile App Development (MERN)",
    organization: "Saylani Mass IT Training (SMIT)",
    description:
      "Professional full-stack certification covering MongoDB, Express.js, React, Node.js, Redux Toolkit, REST API architecture, and production deployment.",
    icon: "code",
  },
  {
    title: "Data Science & Algorithmic Foundations",
    organization: "University of Peshawar",
    description:
      "Academic coursework in computer algorithms, computational data science, data manipulation, and software engineering methodologies.",
    icon: "laptop",
  },
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    description:
      "Fundamental training in cybersecurity principles, threat defense mechanisms, data encryption, and safe application architecture.",
    icon: "shield",
  },
  {
    title: "Software Engineering & Algorithmic Utilities",
    organization: "CodeAlpha Engineering",
    description:
      "Hands-on engineering certification developing stateful client-side utilities, algorithmic calculations, and responsive interface architectures.",
    icon: "award",
  },
];
