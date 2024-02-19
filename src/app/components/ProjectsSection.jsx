"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tindog Website: Tinder for Dogs",
    description:
      "Developed a Front-end website using HTML5, CSS3, Bootstrap, and Javascript. The key featers include, Responsive, attractive, and user friendly interface.",
    image: "/images/projects/Tindog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UPande1/tindog-updated.git",
    previewUrl: "https://upande1.github.io/tindog-updated/",
  },
  {
    id: 2,
    title: "Netflix",
    description:
      "Developed a clone of Netflix website using skills in HTML, CSS, Javascript with grid in CSS.",
    image: "/images/projects/Netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UPande1/Netflix-clone",
    previewUrl: "https://upande1.github.io/Netflix-clone/#",
  },
  // {
  //   id: 3,
  //   title: "Cryptoverse ",
  //   description:
  //     "Created a cryptocurrency visualization app with React JS hosted on Netlify, utilizing Rapid API for data. Implemented interactive charts and a user-friendly multi-page design. Leveraged React libraries, including Material UI and Redux, to enhance functionality and displayed comprehensive cryptocurrency information and statistics",
  //   image: "/images/projects/cry.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "",
  //   previewUrl: "",
  // },
  {
    id: 4,
    title: "React Go-Clueless E-commerce Store",
    description:
    "Developed a full-stack eCommerce application using React, Node, MongoDB, and Express, enabling users to add and display products. Key features include",
    image: "/images/projects/gocl.png",
    tag: ["All", "Web"],
    gitUrl: "https://frantic-toad-outerwear.cyclic.cloud/",
    previewUrl: "https://frantic-toad-outerwear.cyclic.cloud/",
  },
  {
    id: 5,
    title: "Search Engine",
    description:
      "Built a React-based movie app that allows users to search and discover movies. Leveraged external APIs to fetch movie data, implemented dynamic search functionality, and designed a user-friendly interface for viewing movie details and trailers.",
    image: "/images/projects/se.jpg",
    tag: ["All", "Java"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Web Crawler",
    description:
      "Developed a program that navigates the Web and finds new or updated pages for indexing. The Crawler starts with seed websites or a wide range of popular URLs (also known as the frontier) and searches in depth and width for hyperlinks to extract page text and page titles and store them in database using MySQL.",
    image: "/images/projects/crawler.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/UPande1/Web-Crawler",
    previewUrl: "https://upande1.github.io/Web-Crawler",
  },
  {
    id: 7,
    title: "Simon game",
    description:
    "Built this web game using HTML5, CSS3, and Javascript. This game is a part of my javascript practice projects and it is hostet using GitHub Pages.",
    image: "/images/projects/simon.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UPande1/simon-game",
    previewUrl: "https://upande1.github.io/simon-game/",
  },
  {
    id: 8,
    title: "Keeper App",
    description:
    "Built this keeper app which is basically a notes app using React, HTML and CSS. Hosted using GitHub Pages.",
    image: "/images/projects/keeper.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UPande1/simon-game",
    previewUrl: "https://upande1.github.io/simon-game/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Java"
          isSelected={tag === "Java"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;