import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/carhub.jpg",
      projectName: "CarHub",
      projectLink: "https://netlify.com",
      projectDescription:
        "Welcome to CarHub, your premier destination for hassle-free car rentals. With our user-friendly Next.js and Tailwind CSS powered website, you can easily browse and rent from our extensive catalog of vehicles. Our TypeScript-driven platform ensures a seamless experience, while RapidAPI integration streamlines the booking process. Rent your dream car today!",
      projectTech: [
        "NextJS",
        "Tailwind CSS",
        "Typescript",
        "RapidApi",
      ],
      projectExternalLinks: {
        github: "https://github.com/sudh-202/CarHub/",
        externalLink: "https://car-hub-2023.vercel.app/",
      },
    },
    {
      image: "/aiimage.jpg",
      projectName: "AI Image Genrator",
      projectLink: "https://aigeneratedimages.netlify.app/",
      projectDescription:
        "Dive into the world of artificial intelligence and generate everything from memes and art to beautiful UI/UX designs!",
      projectTech: [
        "Vite",
        "TailwindCSS",
        "Node.js",
        "Cloudinary",
        "OpenAI",
      ],
      projectExternalLinks: {
        github: "https://github.com/sudh-202/AI-Image-Genrator",
        externalLink: "https://aigeneratedimages.netlify.app/",
      },
    },
    {
      image: "/chatapp.jpg",
      projectName: "Chat App",
      projectLink: "https://netlify.com",
      projectDescription:
        "This is a Text-chat App built with React JS ChatEngine and GoogleFirebase.",
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "ChatEngine",
      ],
      projectExternalLinks: {
        github: "https://github.com/sudh-202/Chat-App-React/",
        externalLink: "https://chat-app-react-two.vercel.app/",
      },
    },
    {
      image: "/fiverr.png",
      projectName: "Fiveer Clone", 
      projectLink: "",
      projectDescription:
        "This is a UI/UX clone of Liverr App built with Vite JS , Tailwind CSS, figma and Typescript.",
      projectTech: [
        "Vite",
        "TailwindCSS",
        "Typescript",
        "Designer.io",
        "figma",
      ],
      projectExternalLinks: {
        github: "https://github.com/sudh-202/Liverr_UI",
        externalLink: "https://liverr.netlify.app/",
      },
    },
    {
      image: "/mataverse.jpg",
      projectName: "MetaVerse Concept UI",
      projectLink: "https://netlify.com",
      projectDescription:
        "Explore the future with our MetaVerse Concept UI. Powered by Next.js, Tailwind CSS, TypeScript, and the magic of Framer Motion, our immersive platform takes you beyond reality. Experience a new dimension of design, interaction, and innovation like never before. Welcome to the MetaVerse of possibilities.",
      projectTech: [
        "NextJs",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
      ],
      projectExternalLinks: {
        github: "https://github.com/sudh-202/ChatGPT-WebApp",
        externalLink: "https://metaverse-demosite.netlify.app/",
      },
    },
    {
      image: "/movie.jpg",
      projectName: "Movie App", 
      projectLink: "",
      projectDescription:
        " Discover your favorite films with our Movie App. Powered by React.js and JavaScript, this sleek app delivers a seamless movie-watching experience. Explore a vast library of movies, all sourced from TMDB Movie API. Enjoy personalized recommendations and stay entertained with ease.",
      projectTech: [
        "React",
        "SCSS",
        "Javascript",
        "TMDB Movie API",
      ],
      projectExternalLinks: {
        github: "https://github.com/sudh-202/react-movie-main",
        externalLink: "https://react-api-movie-app.netlify.app/",
      },
    },
    {
      image: "/three.jpg",
      projectName: "MetaVerse Concept UI",
      projectLink: "https://netlify.com",
      projectDescription:
        "Explore the future with our MetaVerse Concept UI. Powered by Next.js, Tailwind CSS, TypeScript, and the magic of Framer Motion, our immersive platform takes you beyond reality. Experience a new dimension of design, interaction, and innovation like never before. Welcome to the MetaVerse of possibilities.",
      projectTech: [
        "NextJs",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
      ],
      projectExternalLinks: {
        github: "https://github.com/sudh-202/ChatGPT-WebApp",
        externalLink: "https://metaverse-demosite.netlify.app/",
      },
    },
    
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
