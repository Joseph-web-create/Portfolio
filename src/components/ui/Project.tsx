import InstaShots from "@/assets/instashots.svg?react";
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
            Icon={InstaShots}
            title="InstaShots — Social Media Platform"
            role="Fullstack Developer"
            list={[
              `Engineered a full-stack social media SaaS where users can share posts, engage through comments, and manage profiles with secure authentication and media handling.`,
              `Implemented scalable REST APIs with Express.js and MongoDB, integrated Cloudinary for image hosting, and optimized feed rendering for performance.`,
              `Deployed and tested with 100+ early users to analyze engagement metrics and improve retention flow.`,
            ]}
            tectStacks={[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Cloudinary",
              "JWT Auth",
            ]}
            link="https://instagram-clone-mu-ten.vercel.app/auth/login"
            codeLink="https://github.com/Joseph-web-create/Instagram-clone"
          />
          <ProjectCard
            Icon={Neumock}
            title="Neumock — Adaptive Exam Preparation SaaS"
            role="Frontend Developer (Core Platform)"
            list={[
              `Building a full-scale SaaS platform for WAEC, NECO, and JAMB preparation — featuring user authentication, performance analytics, and AI-assisted question recommendations.`,
              `Developed modular dashboards with real-time data fetching, student performance insights, and subscription-based access control.`,
              `Integrated secure Google OAuth and token-based authentication for multi-role user management (admin, student, and instructor).`,
            ]}
            tectStacks={[
              "React",
              "TypeScript",
              "Zod",
              "React Query",
              "Node.js",
              "TailwindCSS",
              "Google OAuth",
            ]}
            link="https://www.neumock.com/"
          />
          <ProjectCard
            Icon={Event}
            title="Eventra — Event Management App"
            role="Frontend Developer (Core Platform)"
            list={[
              `Built a scalable event management platform enabling organizers to create, promote, and track ticket sales in real time.`,
              `Developed the frontend architecture with reusable React components, optimized API integrations, and dynamic data visualization.`,
              `Implemented responsive layouts, session-based authentication, and dashboard analytics for event performance tracking.`,
            ]}
            tectStacks={[
              "React",
              "TypeScript",
              "TailwindCSS",
              "Axios",
              "REST APIs",
            ]}
            link="https://eventra-teal.vercel.app/"
          />
          <ProjectCard
            Icon={BH}
            title="Real Estate Marketplace"
            role="Frontend Developer"
            list={[
              `Developed the core frontend for a real estate platform enabling property owners to list, manage, and sell homes directly to verified buyers.`,
              `Implemented advanced property filtering, authentication, and responsive dashboards powered by RESTful API integrations.`,
              `Optimized performance and UI scalability to support dynamic listings, media-heavy content, and mobile-first design.`,
            ]}
            tectStacks={["React", "JavaScript", "TailwindCSS", "REST APIs"]}
            link="https://tsa-internship-task-3.vercel.app/"
          />
        </div>
      </AppWrapper>
    </>
  );
};

export default Project;
