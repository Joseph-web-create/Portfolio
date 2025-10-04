import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";
import { BiLogoPostgresql } from "react-icons/bi";

const techLogos = [
  {
    node: <SiReact color="#61DBFB" />,
    title: "React",
  },
  {
    node: <SiNextdotjs color="#ffffff" />,
    title: "Next.js",
  },
  {
    node: <SiTypescript color="#3178C6" />,
    title: "TypeScript",
  },
  {
    node: <SiTailwindcss color="#38BDF8" />,
    title: "Tailwind CSS",
  },
  {
    node: <SiNodedotjs color="#68A063" />,
    title: "Node.js",
  },
  {
    node: <SiExpress color="#ffffff" />,
    title: "Express.js",
  },
  {
    node: <SiMongodb color="#4DB33D" />,
    title: "MongoDB",
  },
  {
    node: <BiLogoPostgresql color="#336791" />,
    title: "PostgreSQL",
  },
];

const LoopLogo = () => {
  return (
    <div
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
      // className="text-white/70"
    >
      <LogoLoop
        logos={techLogos}
        speed={90}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default LoopLogo;
