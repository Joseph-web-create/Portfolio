import type { ElementType } from "react";

const ProjectCard = ({
  Instagram,
  title,
  stack,
  list,
  tectStacks,
}: {
  Instagram: ElementType;
  title: string;
  stack: string;
  list: string[];
  tectStacks: string[];
}) => {
  return (
    <div className="bg-[#1b1b1b] rounded-lg px-4 py-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Instagram className="w-18 h-18" />
        <div>
          <h3 className="text-white font-bold">{title}</h3>
          <p className="text-white/80">{stack}</p>
        </div>
      </div>

      <ul className="text-white list-disc ml-6 space-y-4">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-4">
        {tectStacks.map((item) => (
          <div key={item}>
            <p className="text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
