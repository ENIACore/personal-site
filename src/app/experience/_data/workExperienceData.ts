export interface WorkExperienceData {
    companyLogo: string;
    companyName: string;
    logoClasses: string;
    jobTitle: string;
    dateRange: string;
    technologies: string[];
    accomplishments: string[];
}

export const workExperiences: WorkExperienceData[] = [
    {
        companyLogo: "/images/logos/IBM-logo.png",
        companyName: "IBM",
        logoClasses: "!h-7 md:!h-10",
        jobTitle: "Software Developer",
        dateRange: "Oct 2024 - Present",
        technologies: [
            'Java',
            'Spring Boot',
            'Azure',
            'Oracle Database',
            'CI/CD'
        ],
        accomplishments: [
            "Built enterprise Java applications for California's Department of Health Care Services",
            "Modernized 15-year-old aTAR system from Java 6 to Java 21 for treatment access request processing",
            "Migrated ETL logic from CloverETL to Oracle, optimizing legacy data pipeline infrastructure",
            "Led production deployment with live debugging and issue resolution for successful go-live"
        ]
    },
    {
        companyLogo: "/images/logos/UWF-cyber-logo.png",
        companyName: "UWF Center for Cybersecurity",
        logoClasses: "",
        jobTitle: "Fullstack Developer",
        dateRange: "Mar 2023 - Oct 2024",
        technologies: [
            '.NET Core',
            'Django',
            'JavaScript',
            'API Integration'
        ],
        accomplishments: [
            "Led contractor handoff including code migration, API integration, and infrastructure management",
            "Built portal connecting 3,000+ students with employers like J.P. Morgan and Capital One",
            "Migrated Django/JavaScript application to .NET Core, improving maintainability and performance"
        ]
    },
    {
        companyLogo: "/images/logos/UWF-logo.png",
        companyName: "University of West Florida",
        logoClasses: "",
        jobTitle: "Research Assistant",
        dateRange: "Sep 2023 - Mar 2024",
        technologies: [
            'Flask',
            'C#',
            'MISP',
            'OSINT'
        ],
        accomplishments: [
            "Authored IEEE COMPSAC 2024 fast abstract on cyber threat data-sharing platform architecture",
            "Built cyber threat collection platform with 6-member team, enhancing threat correlation",
            "Extended MISP with custom Flask API integrating C# application and OSINT feeds"
        ]
    },
    {
        companyLogo: "/images/logos/UWF-logo.png",
        companyName: "University of West Florida",
        logoClasses: "",
        jobTitle: "Research Assistant",
        dateRange: "Apr 2023 - Aug 2023",
        technologies: [
            'React',
            'GitHub Actions',
            'Docker',
            'AWS'
        ],
        accomplishments: [
            "Developed React application for medical student situational awareness with 5-member team",
            "Built automated CI/CD pipeline using GitHub Actions, DockerHub, and AWS"
        ]
    }
];
