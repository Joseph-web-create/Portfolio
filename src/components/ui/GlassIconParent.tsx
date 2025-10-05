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
        className="text-center bg-[#1b1b1b] [background-image:radial-gradient(circle_at_center,rgba(250,250,250,0.15),transparent_30%)] flex flex-col items-center justify-center rounded-lg py-10 h-auto gap-4 "
        variants={variants}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
        <h2 className="text-white/90 text-2xl my-2">{title}</h2>
        <p className="text-[#747474] text-base">{pTag}</p>
      </motion.div>
    </>
  );
};

export default GlassIconParent;
