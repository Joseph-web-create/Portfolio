import image from "@/assets/img.png";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { BsDashLg } from "react-icons/bs";
import Shuffle from "@/components/ui/Shuffle";
import { motion } from "motion/react";

function Hero() {
  return (
    <motion.div className="h-[90vh] flex justify-between items-center px-4">
      <motion.div
        initial={{ opacity: 0, x: -220 }}
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
            <a
              href="https://github.com/Joseph-web-create"
              target="_blank"
              className="hover:text-gray-400 active:text-gray-400 text-white"
            >
              <VscGithubInverted size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-thankgod-3b3a08308?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8qiVkaRKRd6ZI3dDnSDmOA%3D%3D"
              target="_blank"
              className="hover:text-gray-400 active:text-gray-400 text-white"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://x.com/joe__tj?s=21"
              target="_blank"
              className="hover:text-gray-400 active:text-gray-400 text-white"
            >
              <BsTwitterX size={30} />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-400 writing-mode-vertical">Scroll down </p>
            <FaChevronDown color="gray" />
          </div>
        </div>

        <div className="flex flex-col -mt-28">
          <div className="flex items-center ">
            <BsDashLg color="white" size={60} />
            <p className="text-white">Hello</p>
          </div>
          <div className="lg:ml-14 space-y-2">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-gray-400 text-3xl lg:text-7xl mb-2">I'm,</h2>
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
                className="text-1xl lg:text-4xl text-white"
                onShuffleComplete={undefined}
                colorFrom={undefined}
                colorTo={undefined}
              />
            </div>
            <p className="text-gray-400 text-base">
              A full stack developer based in Lagos
            </p>
          </div>
        </div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 220 }}
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
