import Instagram from "@/assets/instagram.svg?react";
import ProjectCard from "./ProjectCard";
import Home from "@/assets/home-button.svg?react";

const Project = () => {
  return (
    <div
      className="min-h-[50vh]  px-4 grid gap-10  items-center "
      id="projects"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-white text-center ">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ProjectCard
          Instagram={Instagram}
          title="Instagram clone"
          stack="Full stack"
          list={[
            `Built a social platform with authentication, media uploads,
                likes, and comments`,
            `Enabled 100+ test users to interact in real time`,
          ]}
          tectStacks={["React", "Node js", "MongoDB"]}
        />
        <ProjectCard
          Instagram={Home}
          title="House Rental service"
          stack="Full stack"
          list={[
            `Built a social platform with authentication, media uploads,
                likes, and comments`,
            `Enabled 100+ test users to interact in real time`,
          ]}
          tectStacks={["React", "Node js", "MongoDB"]}
        />
        <ProjectCard
          Instagram={Instagram}
          title="Instagram clone"
          stack="Full stack"
          list={[
            `Built a social platform with authentication, media uploads,
                likes, and comments`,
            `Enabled 100+ test users to interact in real time`,
          ]}
          tectStacks={["React", "Node js", "MongoDB"]}
        />
      </div>
    </div>
  );
};

export default Project;
