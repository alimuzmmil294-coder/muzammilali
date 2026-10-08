export const personalInfo = {
  name: "Muzammil Ali",
  titlePrefix: "Full Stack Developer & Data Science Enthusiast",
  roles: [
    "Full Stack Developer",
    "Software Engineer",
    "Data Science Enthusiast",
  ],
  bio: "I build scalable, production-ready web applications and lead engineering teams. Passionate about bridging business goals with technical solutions.",
  aboutBio: [
    "I’m a Full-Stack Web Developer and Data Science student passionate about building modern, scalable, and user-focused web applications. I work across the frontend and backend, with experience in technologies such as JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and REST APIs.I enjoy turning ideas and business requirements into practical digital solutions, from designing intuitive user interfaces to developing reliable backend systems and integrating APIs. I’m also experienced in working within collaborative development teams, contributing to project architecture, solving technical challenges, and maintaining clean, reusable, and maintainable code. Beyond web development, I’m exploring Data Science, Artificial Intelligence, and cloud technologies to expand my technical perspective and build smarter solutions. I’m continuously learning, experimenting with new technologies, and looking for opportunities to grow as a developer while creating software that delivers real-world value.",
  ],
  email: "alimuzmmil294@gmail.com",
  phone: "0370-0504863",
  location: "Pakistan",
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
    institution: "Sylani Mass IT Training (SMIT)",
    degree: "Modern web and mobile development",
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
  { name: "Node.js", icon: "node", color: "#339933" },
  { name: "MongoDB", icon: "mongo", color: "#47A248" },
  { name: "Express.js", icon: "express", color: "#000000" },
  // { name: "Next.js", icon: "next", color: "#000000" },
  { name: "Redux", icon: "redux", color: "#764ABC" },
  { name: "HTML5", icon: "html5", color: "#E34F26" },
  { name: "CSS3", icon: "css3", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "Material UI", icon: "mui", color: "#007FFF" },
  // { name: "Firebase", icon: "fire", color: "#FFCA28" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "#181717" },
  // { name: "Python", icon: "python", color: "#3776AB" },
  { name: "REST API", icon: "layer-group", color: "#6C63FF" },
  // { name: "AWS", icon: "aws", color: "#FF9900" },
  // { name: "Docker", icon: "docker", color: "#2496ED" },
  // { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
];

export const projects = [
  // EduHub
  {
    title: "EduHub - Learning Management System (LMS)",
    description:
      "EduHub is an institutional learning management system designed to streamline academic operations and classroom collaboration. Built with a scalable frontend architecture, it provides role-based portals for students, instructors, and administrators to seamlessly manage course enrollments, lecture materials, assignments, attendance tracking, and academic performance analytics from a unified dashboard.",
    image: "/assets/eduhub.png",
    projectLink: "https://eduhub-demo.com", // Replace with your actual project/live demo link
    technologies: [
      "React.js",
      // "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST API",
      "Git & GitHub",
    ],
  },
  // SMIT LMS
  {
    title: "Founder - JobPlus",
    description:
      "JobPlus is a job posting and application platform I founded, connecting schools, students, and tech professionals. Built using React, Redux, and Node.js, the platform features role-specific dashboards for recruiters, students, and administrators, enabling seamless job posting, applications, and tracking. I handled end-to-end development, state management with Redux, and deployment, creating a scalable, real-world solution that bridges education and industry.",
        projectLink: "https://jobplus.ibrahimkhan.pro/",
    technologies: ["TypeScript", "React", "Redux", "Node.js"],
  },

  // POLLIFY
  {
    title: "Founder - Personal Smart AI",
    description:
      "Build an intelligent content creation platform capable of generating high-quality articles, blogs, and AI-powered images using advanced natural language and image generation models. Designed to enhance creativity and productivity through automation and smart personalization.",
        projectLink: "https://personalai.ibrahimkhan.pro/",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "PostgreSQL",
      "Neon",
      "OpenAI",
    ],
  },

  //
  {
    title: "CapsPro - E-commerce Platform",
    description:
      "Developed a fully functional e-commerce platform with Next.js frontend and real-time admin panel powered by Socket.io. Features include product management, order tracking, real-time inventory updates, and secure payment integration. Built a scalable architecture supporting dynamic product catalogs and seamless customer experience across all devices.",
        projectLink: "https://capspro.online/",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "AWS",
    ],
  },

  // E-COM WEBSITE
  {
    title: "Islamic Desk Admin Panel",
    description:
      "Contributed to the development of the Islamic Desk Admin Panel, implementing core features for content and user management. Integrated global state management using Redux for seamless data handling across components, and optimized dashboard performance for a smooth user experience.",
        projectLink: "https://www.islamicdesk.com/",
    technologies: ["JavaScript", "React", "Node.js", "Redux"],
  },

  {
    title: "Vellato Mobile App",
    description:
      "Designed and developed a fully responsive mobile application interface for Android and iOS using React Native. Focused on creating pixel-perfect UI/UX layouts that adapt seamlessly across screen sizes and devices, delivering a user-centric experience by applying modern mobile design principles and reusable components.",
        projectLink: "https://github.com/Ibrahimkhan432/Vellato-App/",
    technologies: ["React Native", "UI/UX", "Mobile Design"],
  },
  {
    title: "Technical Lead – 12Commerce SaaS",
    description:
      "12Commerce SaaS – Leading a global e-commerce platform that combines fully functional websites with an intelligent lead generation widget, currently used by international clients. As Tech Lead & Project Manager, I oversee end-to-end development, deployment, and client delivery, ensuring the platform is scalable, efficient, and future-ready.",
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

export const certificates = [];

// export const certificates = [
//   {
//     title: "Software Engineering",
//     organization: "Coursera by IBM",
//     description:
//       "Completed a professional certification in Software Engineering by IBM, covering software development life cycle, version control, APIs, and cloud-based application deployment.",
//     icon: "code",
//   },
//   {
//     title: "DSA Graduate",
//     organization: "Coursera by Packt",
//     description:
//       "Completed a professional certification in Data Structures and Algorithms by Packt, covering fundamental and advanced topics in computer science.",
//     icon: "code",
//   },
//   {
//     title: "Intro to CyberSecurity",
//     organization: "Cisco Networking",
//     description:
//       "Covered fundamental cybersecurity concepts, threats, and protection techniques.",
//     icon: "shield",
//   },
//   {
//     title: "Web Graphics and Mobile App Development",
//     organization: "NAVTTC",
//     description:
//       "Learned UI/UX design principles and basics of mobile app development.",
//     icon: "laptop",
//   },
//   {
//     title: "Freelancing",
//     organization: "DigiSkills",
//     description:
//       "Learned freelancing platforms, client dealing, and earning strategies.",
//     icon: "award",
//   },
//   {
//     title: "WordPress",
//     organization: "DigiSkills",
//     description:
//       "Gained expertise in website creation, customization, and management using WordPress.",
//     icon: "globe",
//   },
//   {
//     title: "English Language",
//     organization: "Youth Development Institute",
//     description:
//       "Improved communication skills, grammar, and professional writing.",
//     icon: "message-square",
//   },
// ];
