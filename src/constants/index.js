/* eslint-disable no-unused-vars */
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
python,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,

    btech,
    diploma,
    celebal,
    dotglasse,
    phablecare,
    byteAnalytics,
   
} from "../assets";

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "stars",
        title: "Certifications",
    },
    {
        id: "resume",
        title: "Resume",
    },
];

const services = [
    {
        title: "Data Engineer",
        icon: web,
    },
];
const certificates = [
    {
        title: "Databricks Certified Generative AI Engineer Associate",
        icon: web,
        description: "Databricks Certification - GenAI expertise in RAG pipelines and multi-agent systems"
    },
    {
        title: "Full Stack Development course by HEROVIRED",
        icon: mobile,
        description: "Course completion certificate from Herovired. https://drive.google.com/file/d/1qW5lo6SD9USsuONC-5P180UmspMX_zyl/view?usp=share_link"
    },
    {
        title: "Got Certification in Hacker Rank",
        icon: backend,
    },

];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "SQL",
        icon: html,
    },
    {
        name: "PySpark",
        icon: python,
    },
    {
        name: "Oracle SQL",
        icon: html,
    },
    {
        name: "SQL Server",
        icon: html,
    },
    {
        name: "Databricks",
        icon: reactjs,
    },
    {
        name: "Unity Catalog",
        icon: nodejs,
    },
    {
        name: "AWS",
        icon: nodejs,
    },
    {
        name: "Terraform",
        icon: mongodb,
    },
    {
        name: "Active Directory",
        icon: git,
    },
    {
        name: "LDAP",
        icon: git,
    },
    {
        name: "SCIM",
        icon: git,
    },
    {
        name: "Service-Principal Provisioning",
        icon: git,
    },
    {
        name: "Retrieval-Augmented Generation (RAG)",
        icon: javascript,
    },
    {
        name: "LangGraph",
        icon: javascript,
    },
    {
        name: "Vector Search / Vector Databases",
        icon: javascript,
    },
    {
        name: "Databricks Genie",
        icon: reactjs,
    }
];

const experiences = [
    {
        title: "Data Engineer",
        company_name: "Byte Analytics Private Limited (Contracted to Continental Resources Inc.)",
        icon: byteAnalytics,
        iconBg: "#E6DEDD",
        date: "Feb 2024 - Present",
        points: [
            "Contracted to Continental Resources Inc. for enterprise Databricks environments",
            "Built self-service access-automation platform for Databricks, SQL/Oracle, and AI Platform with request intake, approval routing, and provisioning",
            "Implemented IAM governance workflows across Active Directory, LDAP, SCIM, and Unity Catalog with schema/table-level privileges",
            "Built PySpark data pipelines on AWS Databricks for large-scale API data ingestion with validation checks",
            "Designed file-based ingestion pipeline handling 1.5M files with orchestration, audit logging, and transformation",
            "Implemented Retrieval-Augmented Generation pipeline using Databricks Vector Search with PDF extraction and embedding",
            "Built Databricks-native multi-agent system with LangGraph combining RAG and Genie agents for knowledge retrieval",
            "Managed 200+ Terraform workflows automating workspace creation, access requests, and Databricks object provisioning"
        ],
    },
    {
        title: "Backend Developer Intern",
        company_name: "Celebal Technologies",
        icon: celebal,
        iconBg: "#383E56",
        date: "June 2023 - September 2023",
        points: [
            "Built authentication (login/logout) for REST API using Passport middleware",
            "Developed flight booking chatbot using Microsoft Bot Framework",
            "Participated in code reviews and providing constructive feedback to other developers",
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "DotGlasses",
        icon: dotglasse,
        iconBg: "#E6DEDD",
        date: "May 2022 - July 2022",
        points: [
            "Built responsive webpage using REACT JS for sustainable vision correction product",
            "Created Chat Bot using MongoDB, Node JS, Express JS, and React JS",
            "Implemented authentication with user login and sign up functionality",
            "Project successfully completed with team strategies and positive company feedback",
        ],
    },
   
];
const educations = [
    {
        name: "Bachelor of Technology in Computer Science",
        icon: btech,
        iconBg: "#E6DEDD",
        date: "2020 - 2023",
        description: "Aditya College of Engineering and Technology with CGPA 6.48, Surampalem."
    },
    {
        name: "Diploma in Computer Management Engineering",
        icon: diploma,
        iconBg: "#E6DEDD",
        date: "2017 - 2020",
        description: "Sree Vidyanikethan Engineering College with 83.3%, Tirupathi."
    },
    {
        name: "Secondary School Education",
        icon: diploma,
        iconBg: "#E6DEDD",
        date: "2016 - 2017",
        description: "Sri Sai Maruthi School CGPA 8.8, Ananthapuram."
    },
   
]
const projects = [
    {
        name: "Access Automation Platform",
        description:
            "Self-service platform for enterprise Databricks, SQL/Oracle, and AI Platform access management. Integrated with Helix Work Orders for approval-driven provisioning covering request intake, routing, provisioning, and lifecycle tracking.",
        tags: [
            {
                name: "Databricks",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "Active Directory & LDAP",
                color: "pink-text-gradient",
            },
            {
                name: "Terraform",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/karthikarnm",
    },
    {
        name: "RAG Pipeline with Multi-Agent System",
        description:
            "Databricks-native Retrieval-Augmented Generation system using Vector Search with multi-agent architecture. Combines unstructured data retrieval (SharePoint/OneDrive) with structured data queries via Databricks Genie, unified through supervisor agent routing.",
        tags: [
            {
                name: "Databricks", 
                color: "blue-text-gradient",
            },
            {
                name: "LangGraph",
                color: "green-text-gradient",
            },
            {
                name: "Vector Search",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/karthikarnm",
    },
    {
        name: "Large-Scale Data Ingestion Pipeline",
        description:
            "File-based ingestion pipeline handling 1.5M files with PySpark on AWS Databricks. Features download orchestration, audit-table logging, data validation, transformation, and automated job scheduling.",
        tags: [
            {
                name: "PySpark",
                color: "blue-text-gradient",
            },
            {
                name: "AWS",
                color: "green-text-gradient",
            },
            {
                name: "Databricks",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/karthikarnm",
    },
];

export { navLinks, services, technologies, experiences, projects, educations, certificates };
