import type { ElementType } from "react";
import { motion, type Variants } from "motion/react";

const variants: Variants | undefined = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ProjectCard = ({
  Instagram,
  title,
  role,
  list,
  tectStacks,
}: {
  Instagram: ElementType;
  title: string;
  role: string;
  list: string[];
  tectStacks: string[];
}) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.03 }}
      className="bg-[#1b1b1b] shadow-xl/30 hover:shadow-[#555555] rounded-lg px-4 py-6 flex flex-col justify-between gap-4"
    >
      <div className="flex items-center gap-4">
        <Instagram className="w-18 h-14 lg:h-18" />
        <div>
          <h3 className="text-white/90 font-bold text-1xl">{title}</h3>
          <p className="text-white/80 text-[16px]">{role}</p>
        </div>
      </div>

      <ul className="text-[#949393] list-disc ml-6 space-y-4 text-base">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-4 ">
        {tectStacks.map((item) => (
          <div key={item} className="bg-[#272626] px-3 py-1 rounded-2xl">
            <p className="text-white/70 text-[14px] shiny-text">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
