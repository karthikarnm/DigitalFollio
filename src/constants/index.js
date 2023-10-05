/* eslint-disable no-unused-vars */
import {
    mobile,
    backend,
    creator,
    web,
    javascript,

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
    phablecare
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "FrontEnd Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },

];
const certificates = [
    {
        title: "Full Stack Development course by HEROVIRED",
        icon: web,
        description: "Course completion certificate from Herovired.https://drive.google.com/file/d/1qW5lo6SD9USsuONC-5P180UmspMX_zyl/view?usp=share_link"
    },
    {
        title: "Got Certification in Hacker Rank",
        icon: mobile,
    },
    {
        title: "Got Certification In Joy of Computing python By NPTEL",
        icon: backend,
    },

];

const technologies = [
    {
        name: "HTML ",
        icon: html,
    },
    {
        name: "CSS ",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    }
];

const experiences = [
    {
        title: "Full stack Developer Intern",
        company_name: "DotGlasses",
        icon: dotglasse,
        iconBg: "#E6DEDD",
        date: "May 2022 - july 2022",
        points: [
            "DOT Glasses is the first sustainable evolution to the world’s vision problem • Adjustable one-size-fits-all eyeglasses • A transformational lens concept",
            "Building an webpage.",
            "Made this website responsive using REACT JS.",
            "Created a Chat Bot using MONGO DB, NODE JS, EXPRESS JS, REACTJS",
            "Building an authentication user login and Sign up",
            "This project was successfully completed with my strategies.My presentation got good appreciation from company."

        ],
    },
   
    {
        title: "Frontend Developer Intern",
        company_name: "Phable Care",
        icon: phablecare,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - March 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",

        ],
    },
    {
        title: "Backend intern",
        company_name: "Celebal Technologies",
        icon: celebal,
        iconBg: "#383E56",
        date: "June 2023 - September 2023",
        points: [
            "Handled APIs and created authentication login and logout",
            "Utilized Passport middleware for authentication",
            "Developed flight booking chatbots using Microsoft Bot Builder Framework",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
   
];
const educations = [
    {
        name: "Secondary School Education",
        icon: diploma,
        iconBg: "#E6DEDD",
        date: "2016 - 2017",
        description: "Sri Sai Maruthi School  CGPA 8.8, Ananthapuram."
    },
   
    {
        name: "Diploma ",
        icon: diploma,
        iconBg: "#E6DEDD",
        date: "2017 - 2020",
        description: "Sree vidyanikethan Engineering College with 83.3%, Tirupathi."
    },
    {
        name: "Bachelor of Technology in Computer Science",
        icon: btech,
        iconBg: "#E6DEDD",
        date: "2020 - 2023",
        description: "Aditya College of Engineering and Technology with CGPA 6.48, Surampalem."


    },
   
]
const projects = [
    {
        name: "Full Stack application development ",
        description:
            "Building an webpage. Made this website responsive using REACT JS. Created a Chat Bot using MONGO DB ,NODE JS, EXPRESS JS, REACTJS Building an authentication user login and Sign up. This project was successfully completed with my strategies.My presentation got good appreciation from company",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Html & Css",
                color: "pink-text-gradient",
            },
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/karthikarnm/dotglasses-using-react",
    },
    {
        name: "FlightBooking ChatBot",
        description:
            "This bot has been created using Bot Framework, it shows how to:Use LUIS to implement core AI capabilities Implement a multi- turn conversation using Dialogs Handle user interruptions for such things as Help or Cancel Prompt for and validate requests for information from the user",
        tags: [
            {
                name: "MS BotBuilder Framework", 
                color: "blue-text-gradient",
            },
            {
                name: "NodeJs",
                color: "green-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/karthikarnm/Flight_Booking_Bot",
    },
    {
        name: "URL Shrinker Web Application",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations. Provided a solution for reducing the length of web page addresses for easier tracking and memorization.",
        tags: [
            {
                name: " Node.js & Express.js",
                color: "blue-text-gradient",
            },
            {
                name: "HTML & CSS",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/karthikarnm/url-shortner",
    },
];

export { navLinks, services, technologies, experiences, projects, educations, certificates };