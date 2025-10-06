import Instagram from "@/assets/instagram.svg?react";
import ProjectCard from "./ProjectCard";
import BH from "@/assets/BH.svg?react";
import { motion } from "motion/react";
import Neumock from "@/assets/neumock-logo.svg?react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      stiffness: 50,
    },
  },
};

const Project = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-[50vh] px-4 grid lg:gap-0 gap-10 items-center"
      id="projects"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-white text-center ">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <ProjectCard
          Instagram={Instagram}
          title="Instagram clone"
          role="Fullstack Developer"
          list={[
            `Built a social platform with authentication, media uploads,
                likes, and comments`,
            `Enabled 100+ test users to interact in real time`,
          ]}
          tectStacks={["React", "Node js", "MongoDB"]}
        />
        <ProjectCard
          Instagram={Neumock}
          title="Current Project (API Integration & Authentication)"
          role="Frontend Developer"
          list={[
            `Implemented secure authentication with Google sign-in and social login flows, handling token-based access and protected routes.`,
            `Integrating backend APIs into the frontend, ensuring smooth data flow and responsive UI for core features.`,
          ]}
          tectStacks={["React", "API Integration", "Google Oauth"]}
        />
        <ProjectCard
          Instagram={BH}
          title="Real Estate Marketplace"
          role="Frontend Developer"
          list={[
            `Built the frontend for a real estate platform where users can browse, search, and filter houses for sale.`,
            `Integrated APIs for property listings and authentication, delivering a fast, responsive UI across desktop and mobile`,
          ]}
          tectStacks={["React", "TailwindCSS", "API Integration"]}
        />
      </div>
    </motion.div>
  );
};

export default Project;
