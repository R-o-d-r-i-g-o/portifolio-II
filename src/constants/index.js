import { irroba, q2 } from "../assets/images";
import {
    contact,
    estate,
    git,
    github,
    cSharp,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    reactNative,
    snapgram,
    summiz,
    typescript,
    python,
    gitlab,
    go,
    redis,
    postgres,
    sqlServer,
    sqs,
    docker,
    kubernets,
    terraform,
    appCenter,
    flutter,
    firebase,
    oracle,
    azure,
    rabbitMQ,
    easyPanel,
    githubBlue,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cSharp,
        name: 'C#',
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: gitlab,
        name: "GitLab",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Cache-Database"
    },
    {
        imageUrl: oracle,
        name: "Oracle DB",
        type: "Database"
    },
    {
        imageUrl: postgres,
        name: "PostgreSQL",
        type: "Database"
    },
    {
        imageUrl: sqlServer,
        name: "SQL Server",
        type: "Database",
    },
    {
        imageUrl: go,
        name: "Golang",
        type: "Backend",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "cloud"
    },
    {
        imageUrl: easyPanel,
        name: "Easy Panel",
        type: "cloud"
    },
    {
        imageUrl: sqs,
        name: "SQS",
        type: "message broker"
    },
    {
        imageUrl: rabbitMQ,
        name: "RabbitMQ",
        type: "message broker"
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: flutter,
        Name: "Flutter",
        type: "Mobile"
    },
    {
        imageUrl: reactNative,
        name: "React Native",
        type: "Mobile",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "CI/CD"
    },
    {
        imageUrl: docker,
        name: "docker",
        type: "CI/CD"
    },
    {
        imageUrl: kubernets,
        name: "Kubernets",
        type: "CI/CD"
    },
    {
        imageUrl: terraform,
        name: "Terraform",
        type: "CI/CD"
    },
    {
        imageUrl: appCenter,
        name: "App Center",
        type: "CI/CD"
    }
];

export const experiences = [
    {
        title: "Software Enginner (intern.)",
        company_name: "Irroba",
        icon: irroba,
        iconBg: "#E3022C",
        date: "jan 2022 - jun 2022",
        points: [
            "Developing and maintaining full-stack applications using PHP and other related technologies.",
            "Contributed by documenting several features, including MFA, within the knowledge base.",
            "Assisted in facilitating conversations with end users to reduce the churn rate. By engaging with customers directly, I was able to identify pain points and gather useful feedbacks."
        ],
    },
    {
        title: "Software Enginner",
        company_name: "Q2 Group",
        icon: q2,
        iconBg: "#234EF2",
        date: "Jun 2022 - Present",
        points: [
            "Designed and implemented scalable APIs and background workers for managing first- and third-party proprietary licenses that serve millions (e.g., approximately 8000 rpm) of license.",
            "Led the design and development of multiple enterprise-level microservice application, resulting in a significant reduction SLA (24,3%) time.",
            "Improve microservices reliability by adding load/stress, unit, integration, and end-to-end (e2e) testing pipelines.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: githubBlue,
        link: 'https://github.com/R-o-d-r-i-g-o',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rodrigo-marques-ribeiro/',
    }
];

export const projects = [
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'ANGOLIST - Ergonomic Checklist',
        description: 'Access and evaluate your app to ensure it\'s user-friendly for customers in general, including an easy onboarding process.',
        link: 'https://github.com/R-o-d-r-i-g-o/angolist---mobile',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'P.O.S. Machine Printer Integration',
        description: 'Print any document directly from an Android-based payment machine. Enjoy the convenience of having a portable printer at your fingertips.',
        link: 'https://github.com/R-o-d-r-i-g-o/POS_Printer',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Dev Superior Movie (DSMovie)',
        description: 'A movie-classification web app to save users\' opinions, comments, and classify movies according to them. Made with spring boot and react typescript.',
        link: 'https://github.com/R-o-d-r-i-g-o/dsmovie',
    }
];