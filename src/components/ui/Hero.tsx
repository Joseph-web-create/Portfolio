import image from "@/assets/img.png";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { BsDashLg } from "react-icons/bs";
import Shuffle from "@/components/ui/Shuffle";
import { motion } from "motion/react";
import ButtonPerent from "./ButtonPerent";

function Hero() {
  const links = [
    {
      href: "https://github.com/Joseph-web-create",
      icon: <VscGithubInverted />,
    },
    {
      href: "https://www.linkedin.com/in/joseph-thankgod-3b3a08308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: <FaLinkedin />,
    },
    {
      href: "https://x.com/joe__tj?s=21",
      icon: <BsTwitterX />,
    },
  ];

  return (
    <motion.div className="h-[95vh] flex justify-between items-center px-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="flex items-center gap-10"
      >
        <div className="flex flex-col justify-between h-[90vh] py-6 bg-transparent">
          <div />
          <div className="flex flex-col gap-10">
            {links.map((data) => (
              <a
                key={data.href}
                href={data.href}
                rel="noopener noreferrer"
                target="_blank"
                className="text-2xl  hover:text-gray-400 active:text-gray-400 text-white"
              >
                {data.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-400 writing-mode-vertical">Scroll down </p>
            <FaChevronDown color="gray" />
          </div>
        </div>

        <div className="flex flex-col -mt-22 lg:-m-0">
          <div className="lg:flex items-center hidden">
            <BsDashLg color="white" className="text-2xl lg:text-4xl -mt-1" />
            <p className="text-white">Hello</p>
          </div>
          <div className="lg:ml-8 space-y-2">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-gray-400 text-2xl lg:text-7xl mb-2 ">I'm,</h2>
              <Shuffle
                text="Joseph ThankGod"
                shuffleDirection="right"
                duration={0.9}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={true}
                respectReducedMotion={true}
                // style={{ color: "#fff" }}
                className="text-base lg:text-4xl text-white/96 -ml-3  lg:ml-0"
                onShuffleComplete={undefined}
                colorFrom={undefined}
                colorTo={undefined}
              />
            </div>
            <p className="text-gray-400 text-[14px] lg:text-base ">
              A full stack developer based in Lagos
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-green-400 rounded-full p-[5px]" />
              <p className="text-gray-400 text-[14px] lg:text-base">
                Available for new project
              </p>
            </div>
            <ButtonPerent />
          </div>
        </div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.4 }}
        src={image}
        alt="Joseph"
        className="w-[40%] object-cover hidden lg:block"
      />
    </motion.div>
  );
}

export default Hero;
