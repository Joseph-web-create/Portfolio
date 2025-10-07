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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-[50vh] grid gap-10 items-center px-4"
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default AppWrapper;
