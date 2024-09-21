import frontendIcon from "../assets/frontend.png";
import language from "../assets/bnr-1.png";
import backend from "../assets/backend.png";
import Database from "../assets/databases.png";
import Dev from "../assets/dev-tools.png";

export const SKILLS = [
  {
    title: "Languages",
    icon: language,
    skills: [
      { skill: "TypeScript", percentage: "80%" },
      { skill: "C++", percentage: "70%" },
      { skill: "JavaScript", percentage: "85%" },
      { skill: "Java", percentage: "60%" },
      { skill: "Python", percentage: "75%" },
      { skill: "C", percentage: "65%" },
    ],
  },
  {
    title: "Front-End",
    icon: frontendIcon,
    skills: [
      { skill: "ReactJS", percentage: "90%" },
      { skill: "NextJS", percentage: "80%" },
      { skill: "Redux", percentage: "75%" },
      { skill: "Recoil", percentage: "70%" },
      { skill: "HTML5", percentage: "95%" },
      { skill: "SCSS/SASS", percentage: "85%" },
      { skill: "MaterialUI", percentage: "80%" },
      { skill: "TailwindCSS", percentage: "75%" },
      { skill: "NextUI", percentage: "70%" },
    ],
  },
  {
    title: "Database Languages",
    icon: Database,
    skills: [
      { skill: "PostgreSQL", percentage: "85%" },
      { skill: "MySQL", percentage: "80%" },
      { skill: "Oracle", percentage: "70%" },
      { skill: "SQLite", percentage: "75%" },
      { skill: "MongoDB", percentage: "90%" },
    ],
  },
  {
    title: "Back-End",
    icon: backend,
    skills: [
      { skill: "NodeJS", percentage: "90%" },
      { skill: "NestJS", percentage: "80%" },
      { skill: "ExpressJS", percentage: "85%" },
      { skill: "JWT", percentage: "75%" },
      { skill: "TypeORM", percentage: "70%" },
      { skill: "Sessions/Cookies", percentage: "80%" },
      { skill: "Redis", percentage: "75%" },
    ],
  },
  {
    title: "Developer Tools",
    icon: Dev,
    skills: [
      { skill: "Jira", percentage: "80%" },
      { skill: "Confluence", percentage: "75%" },
      { skill: "Figma", percentage: "90%" },
      { skill: "Git", percentage: "95%" },
      { skill: "Bitbucket", percentage: "70%" },
      { skill: "AWS", percentage: "65%" },
      { skill: "GCP", percentage: "60%" },
      { skill: "Postman", percentage: "85%" },
    ],
  },
];
