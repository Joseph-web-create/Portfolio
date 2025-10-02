import type { ReactNode } from "react";
import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const GlassIconParent = ({
  icon,
  title,
  pTag,
}: {
  icon: ReactNode;
  title: string;
  pTag: string;
}) => {
  return (
    <motion.div
      className="text-center bg-[#2b2a29] flex flex-col items-center justify-center rounded-lg py-10 h-auto gap-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ transformOrigin: "center center", display: "inline-block" }}
      variants={cardVariants}
    >
      {icon}
      <h2 className="text-white text-2xl my-2">{title}</h2>
      <p className="text-[gray] text-base">{pTag}</p>
    </motion.div>
  );
};

export default GlassIconParent;
