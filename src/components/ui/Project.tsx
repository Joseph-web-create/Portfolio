import Instagram from "@/assets/instagram.svg?react";
import ProjectCard from "./ProjectCard";
import BH from "@/assets/BH.svg?react";
import Neumock from "@/assets/neumock-logo.svg?react";
import Event from "@/assets/event.svg?react";
import AppWrapper from "./AppWrapper";

const Project = () => {
  return (
    <>
      <AppWrapper id="projects">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center ">
          Experience & Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <ProjectCard
            Icon={Instagram}
            title="Instagram clone"
            role="Fullstack Developer"
            list={[
              `Built a full social media platform with authentication, media uploads, likes, and comments using React, Node.js, and MongoDB.`,
              `Deployed and tested with 100+ real users to validate performance and user flow`,
            ]}
            tectStacks={["React", "Express js", "Node js", "MongoDB"]}
            link="https://instagram-clone-mu-ten.vercel.app/auth/login"
            codeLink="https://github.com/Joseph-web-create/Instagram-clone"
          />
          <ProjectCard
            Icon={Neumock}
            title="Current Project (API Integration & Authentication)"
            role="Frontend Developer"
            list={[
              `Implemented secure authentication with Google sign-in and social login flows, handling token-based access and protected routes.`,
              `Integrating backend APIs into the frontend, ensuring smooth data flow and responsive UI for core features.`,
            ]}
            tectStacks={["React", "API Integration", "Google OAuth"]}
            link="https://www.neumock.com/"
          />
          <ProjectCard
            Icon={Event}
            title="Eventra"
            role="Frontend Developer"
            list={[
              `Developed and styled key frontend components as part of a collaborative team project.`,
              `Integrated APIs and built interactive UI elements to enhance user experience across devices.`,
            ]}
            tectStacks={[
              "React",
              "TailwindCSS",
              "API Integration",
              "Git/GitHub",
            ]}
            link="https://eventra-teal.vercel.app/"
          />
          <ProjectCard
            Icon={BH}
            title="Real Estate Marketplace"
            role="Frontend Developer"
            list={[
              `Built the frontend for a real estate platform where users can browse, search, and filter houses for sale.`,
              `Integrated APIs for property listings and authentication, delivering a fast, responsive UI across desktop and mobile`,
            ]}
            tectStacks={["React", "TailwindCSS", "API Integration"]}
            link="https://tsa-internship-task-3.vercel.app/"
          />
        </div>
      </AppWrapper>
    </>
  );
};

export default Project;
