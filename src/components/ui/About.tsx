import { motion, type Variants } from "motion/react";
import profileImage from "@/assets/joseph.jfif";
import LoopLogo from "./LoopLogo";

const variants: Variants | undefined = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      stiffness: 50,
    },
  },
};

const About = () => {
  return (
    <motion.section
      className="px-4 my-14 flex flex-col gap-30"
      variants={containerVariants}
      viewport={{ once: true }}
      id="about"
    >
      <motion.div
        className="flex flex-col gap-10 lg:gap-0 justify-around lg:flex-row"
        initial="hidden"
        whileInView="visible"
        variants={variants}
      >
        <img
          src={profileImage}
          alt="Joseph"
          className="rounded-full h-40 w-40 lg:mx-0 mx-auto lg:w-[30%] lg:h-[600px] object-cover lg:rounded-lg"
        />
        <div className="lg:w-md flex flex-col justify-between gap-10">
          <div>
            <h1 className="text-white text-4xl mb-10 font-bold">About me</h1>

            <h2 className="text-white mb-6 text-2xl">
              I turn ideas into real,{" "}
              <span className="text-[#4e8df3]">usable products ✨</span>, no
              nonsense, just results.
            </h2>
            <p className="text-white/80">
              Web and mobile developer obsessed with clean code and smooth user
              experiences. When I’m not pushing commits, I’m either studying new
              tech trends, buried in a book, or trying not to lose at chess.
            </p>
          </div>
          <blockquote className="text-white italic">
            Code is my tool, but building useful stuff for people is my real
            job.
          </blockquote>
        </div>
      </motion.div>
      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        variants={variants}
      >
        <h3 className="text-white text-center text-4xl lg:text-5xl font-bold">
          Skills
        </h3>
        <LoopLogo />
      </motion.div>
    </motion.section>
  );
};

export default About;
