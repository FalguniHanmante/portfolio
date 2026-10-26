export const profile = {
    greeting: "Hi, I'm",
    name: "Falguni Hanmante",
    role: "Web Application Developer",
    tagline:
        "I build fast, responsive web applications with Next.js, React, and Tailwind CSS, backed by Python and FastAPI APIs.",
    availability: "Open to new opportunities",
    location: "Pune, Maharashtra, India",
    email: "falguni.hanmante17@gmail.com",
    phone: "",
    github: "https://github.com/FalguniHanmante",
    linkedin: "https://www.linkedin.com/in/falguni-hanmante-6612a3230/",
    resume: "/Falguni_Hanmante_Resume.pdf",
    siteUrl: "https://your-portfolio.vercel.app", // TODO: update after your first deploy
    contactNote:
        "I'm open to full stack and frontend roles. Email is the quickest way to reach me.",
};

// Returns true only when a link has been filled in (hides placeholders)
export const isSet = (value) => Boolean(value) && !value.includes("YOUR-");

export const about = [
    "I'm a web application developer in Pune with more than four years of experience building responsive, high-performance websites and applications for clients across different industries. Most of my work is in Next.js 14, React.js, and Tailwind CSS, where I turn design mockups into production-ready, pixel-accurate interfaces.",
    "I also build backend services with Python and FastAPI: REST APIs with CRUD operations on MongoDB through an ORM layer. I use GitHub Copilot throughout development to move faster on boilerplate, tests, and debugging while keeping the code clean and maintainable.",
];

export const skills = [
    {
        group: "Frontend",
        items: [
            "Next.js 14",
            "React.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "jQuery",
            "AJAX",
        ],
    },
    {
        group: "Backend and data",
        items: [
            "Python",
            "FastAPI",
            "RESTful APIs",
            "CRUD operations",
            "MongoDB",
            "ORM/ODM",
            "SQL",
            "JSON",
        ],
    },
    {
        group: "Testing",
        items: ["Jest", "React Testing Library"],
    },
    {
        group: "Tools and workflow",
        items: [
            "Git",
            "GitHub",
            "GitHub Copilot",
            "Figma",
            "JIRA",
            "Agile/Scrum",
        ],
    },
];

export const experience = [
    {
        role: "Software Engineer",
        company: "ShiftBoolean",
        location: "India (Remote)",
        period: "Oct 2023 – Mar 2026",
        bullets: [
            "Developed and maintained production-grade web applications for multiple clients in a service and consulting environment, using Next.js 14, React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS.",
            "Built the responsive multi-page Shift Boolean corporate website end to end, with a Next.js frontend and a Python FastAPI backend.",
            "Designed and developed RESTful APIs with FastAPI, implementing CRUD operations and using an ORM layer for data modeling and database access with MongoDB.",
            "Developed the frontend of RidingMoto, a product website for an IoT-based vehicle tracking platform, improving responsiveness, UI consistency, and code standards.",
            "Implemented pixel-accurate, mobile-first layouts with Tailwind CSS that render consistently across desktop, tablet, and mobile.",
            "Optimized performance with the Next.js App Router, Server-Side Rendering (SSR), Static Site Generation (SSG), and next/image.",
            "Improved SEO and organic search visibility across client websites by implementing the Next.js Metadata API.",
            "Built reusable, modular React components to reduce code duplication and speed up delivery across projects.",
            "Used GitHub Copilot across frontend and backend development to accelerate coding, generate boilerplate, write tests, and debug, improving productivity while maintaining code quality.",
        ],
    },
    {
        role: "Software Engineer",
        company: "SS Infomate",
        location: "India (Remote)",
        period: "Nov 2022 – Sep 2023",
        bullets: [
            "Developed and maintained responsive UI components with React.js for a healthcare web application serving US-based end users.",
            "Built reusable React components and integrated RESTful APIs for features such as patient records, appointment scheduling, and dashboards.",
            "Collaborated with backend developers and US-based stakeholders in an Agile/Scrum environment to turn requirements into working UI features.",
            "Debugged and resolved UI/UX issues and production bugs, improving application stability and reducing client-reported defects.",
            "Worked closely with the QA team to identify, reproduce, and fix bugs during sprint cycles, contributing to on-time releases.",
        ],
    },
];

export const projects = [
    {
        name: "Shift Boolean company website",
        type: "Full stack",
        url: "https://shiftboolean.com",
        image: "/projects/shiftboolean.png", // set to "" to hide the screenshot
        description:
            "The public website for Shift Boolean, a software services and consulting company: a responsive multi-page frontend plus a FastAPI and MongoDB backend.",
        highlights: [
            "Frontend in Next.js 14 with the App Router, SSR/SSG, next/image, and the Metadata API for SEO.",
            "Backend REST APIs in FastAPI with CRUD operations on MongoDB through an ORM layer.",
            "Responsive Tailwind CSS layouts and reusable React components.",
            "Built with GitHub Copilot to speed up boilerplate, tests, and debugging.",
        ],
        stack: [
            "Next.js 14",
            "React.js",
            "Tailwind CSS",
            "Python",
            "FastAPI",
            "MongoDB",
        ],
    },
    {
        name: "RidingMoto",
        type: "Frontend",
        url: "https://web.ridingmoto.com/",
        image: "/projects/ridingmoto.png", // set to "" to hide the screenshot
        description:
            "A product website for an IoT-based vehicle tracking platform, built for a ShiftBoolean client.",
        highlights: [
            "Responsive, multi-device UI implemented from design mockups.",
            "Reusable React components and consistent code standards across the project.",
            "Improved responsiveness and performance of the product pages.",
        ],
        stack: ["Next.js", "React.js", "Tailwind CSS", "JavaScript (ES6+)"],
    },
];

export const education = {
    school: "Bapurao Deshmukh College of Engineering",
    place: "Wardha, Maharashtra",
    degree: "Bachelor of Engineering, Civil Engineering",
    year: "2018",
};

export const certifications = ["Claude Code in Action", "Claude 101"];