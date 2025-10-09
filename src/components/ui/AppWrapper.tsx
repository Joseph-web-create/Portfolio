import { motion } from "motion/react";
import type { ReactNode } from "react";
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
const AppWrapper = ({ children, id }: { children: ReactNode; id: string }) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[70vh] grid gap-10 items-center px-4 lg:py-20"
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default AppWrapper;
