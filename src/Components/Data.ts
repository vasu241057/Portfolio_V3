import paytm from "../assets/projects/paytm.jpg";
import eShopping from "../assets/projects/e-commerce.jpg";
import jamming from "../assets/projects/jamming.jpg";
import website_v1 from "../assets/projects/website_v1.jpg";
import Recipe from "../assets/projects/Recipe.jpg";
import processing from "../assets/projects/Image-processing.png";

//pricing cards

export const PricingCardData = [
  {
    types: "Basic",
    price: "$100",
    duration: "3 Days",
    size: "3 Pages",
  },
  {
    types: "Standard",
    price: "$250",
    duration: "7 Days",
    size: "6 Pages",
  },
  {
    types: "Premium",
    price: "$500",
    duration: "15 Days",
    size: "9+ Pages",
  },
];

//Projects card

export const ProjectCardData = [
  {
    image: eShopping,
    alt: " e-commerce",
    title: "E-Commerce Site",
    text: "e-Shopping is a full-fledged e-commerce website designed to streamline the process of setting up and managing an online store.",
    git: "https://github.com/vasu241057/e-commerce",
    link: "https://e-commerce-vasu.vercel.app/",
  },
  {
    image: processing,
    alt: "Project Image",
    title: "Image-processing",
    text: "A system that processes images from CSV files, compresses them, and uploads to AWS S3. It supports asynchronous image handling with APIs for uploading CSVs and checking status. ",
    git: "https://github.com/vasu241057/image-processing-frontend",
    link: "https://image-processing-frontend-9dsj.vercel.app/",
  },
  {
    image: paytm,
    alt: "Project Image",
    title: "Paytm",
    text: "Full-Stack Paytm Clone: Developed a MERN stack clone of Paytm, enabling user signup/signin, secure money transfers, and user search functionality.",
    git: "https://github.com/vasu241057/paytm-fullstack",
    link: "https://paytm-vasu.vercel.app/",
  },
  {
    image: Recipe,
    alt: "Project Image",
    title: "Recipe-app",
    text: "Constructed web app for searching recipe of a food item and displaying it in the form of tables. made from JS, Edaman recipe. ",
    git: "https://github.com/vasu241057/Recipe-app",
    link: "https://vasu241057.github.io/Recipe-app/",
  },
  {
    image: jamming,
    alt: "Project Image",
    title: "Spotify-Jamming",
    text: "An app that will allow user to save playlist by authenticating with spotify",
    git: "https://github.com/vasu241057/spotify-jamming",
    link: "http://jamming-vasu.surge.sh/",
  },
  {
    image: website_v1,
    alt: "Project Image",
    title: "website_v1",
    text: "version 1  of my portfolio website. started with basic but gradually added features",
    git: "https://github.com/vasu241057/Portfolio-website",
    link: "https://vasu241057.github.io/Portfolio-website/",
  },
];
