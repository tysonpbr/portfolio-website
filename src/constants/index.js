import {
  mobile,
  backend,
  creator,
  web,
  logo_agile,
  logo_bitbucket,
  logo_c,
  logo_cplus,
  logo_csharp,
  logo_css,
  logo_firebase,
  logo_git,
  logo_html,
  logo_java,
  logo_javascript,
  logo_jira,
  logo_mongodb,
  logo_node,
  logo_python,
  logo_react,
  logo_sourcetree,
  logo_tailwind,
  logo_testcafe,
  logo_three,
  logo_typescript,
  logo_project,
  logo_vidigami,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "interests",
    title: "Interests",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "JavaScript",
    icon: logo_javascript,
  },
  {
    title: "HTML",
    icon: logo_html,
  },
  {
    title: "CSS",
    icon: logo_css,
  },
  {
    title: "TypeScript",
    icon: logo_typescript,
  },
  
  {
    title: "React JS",
    icon: logo_react,
  },
  {
    title: "C",
    icon: logo_c,
  },
  {
    title: "C++",
    icon: logo_cplus,
  },
  {
    title: "C#",
    icon: logo_csharp,
  },
  
  {
    title: "MongoDB",
    icon: logo_mongodb,
  },
  {
    title: "Node JS",
    icon: logo_node,
  },
  {
    title: "Test Cafe",
    icon: logo_testcafe,
  },
  
  {
    title: "Python",
    icon: logo_python,
  },
  {
    title: "Java",
    icon: logo_java,
  },
  {
    title: "Sourcetree",
    icon: logo_sourcetree,
  },
  {
    title: "Git",
    icon: logo_git,
  },
  {
    title: "Bitbucket",
    icon: logo_bitbucket,
  },
  {
    title: "Agile Methodology",
    icon: logo_agile,
  },
  {
    title: "Jira",
    icon: logo_jira,
  },
  {
    title: "Firebase",
    icon: logo_firebase,
  },
  {
    title: "Tailwind CSS",
    icon: logo_tailwind,
  },
  {
    title: "Three JS",
    icon: logo_three,
  },
];

const experiences = [
  {
    title: "Littlestones Creations Website",
    company_name: "Personal Project",
    icon: logo_project,
    iconBg: "#D48133",
    date: "January 2023 - Current",
    points: [
      "Created a MERN stack website to showcase the work of Littlestones Creations",
      "Wrote JavaScript code with embedded HTML code in React to create website components and pages",
      "Wrote back-end JavaScript code to allow web users to contact the owner of Littlestones Creations",
      "Used Tailwind CSS to help give the website professional styling",
      "Used Hostinger to host the website",
    ],
  },
  {
    title: "AI Image Generator",
    company_name: "Personal Project",
    icon: logo_project,
    iconBg: "#D48133",
    date: "January 2023 - February 2023",
    points: [
      "Created a MERN stack website to create and showcase AI generated images",
      "Wrote JavaScript code to create a page for showcasing past images stored on MongoDB",
      "Wrote JavaScript code to create a page for creating and saving new images",
      "Communicated with OpenAI API to generate new images based of prompts entered on my website",
    ],
  },
  {
    title: "QA Engineer",
    company_name: "Vidigami",
    icon: logo_vidigami,
    iconBg: "#B7F1D9",
    date: "May 2022 - December 2022",
    points: [
      "Developed then executed functionality, regression and smoke test cases for desktop and mobile ",
      "Created automation tests using TestCafe software",
      "Documented and tracked bugs, stories and chores in Jira ",
      "Worked closely with the development team to complete development tasks",
      "Performed data maintenance tasks for live users",
      "Gained experience working with agile methodology ",
    ],
  },
  {
    title: "JavaScript Multiplayer Game",
    company_name: "Personal Project",
    icon: logo_project,
    iconBg: "#D48133",
    date: "June 2022 - September 2022",
    points: [
      "Created an online multiplayer game coded in HTML, CSS and JavaScript ",
      "Used google Firebase to support online multiplayer connection",
      "Created the game without any using pre-existing JavaScript game libraries",
      "Developed my own functions for both character movement mechanics and walking animations",
      "Designed all characters and map locations using Aseprite",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, experiences, testimonials };