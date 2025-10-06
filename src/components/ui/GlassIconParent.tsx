import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

const variants: Variants | undefined = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
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
    <>
      <motion.div
        className="text-center  bg-[#1b1b1b] flex flex-col items-center  rounded-lg py-14 mt-8 shadow-xl/30 shadow-[#555555] "
        variants={variants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.03 }}
      >
        {icon}
        <h2 className="text-white/90 text-2xl my-2">{title}</h2>
        <p className="text-[#949393] text-base">{pTag}</p>
      </motion.div>
    </>
  );
};

export default GlassIconParent;
