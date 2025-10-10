import { MdMenu } from "react-icons/md";
import Logo from "@/assets/layer.svg?react";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "motion/react";

function Nav() {
  const [shwoMenu, setShowMenu] = useState(false);
  const close = () => setShowMenu(false);
  const open = () => setShowMenu(true);

  return (
    <>
      <div className="py-4  lg:hidden relative">
        <div className="px-4">
          <MdMenu color="white" size={30} onClick={open} />
        </div>
        {shwoMenu && (
          <div
            className="bg-[#00000079] h-screen w-full absolute top-0 bottom-0 z-40"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeIn" }}
              className="bg-black py-6 px-4 h-screen w-[70%] flex justify-between"
            >
              <div className="flex flex-col gap-4 shiny-text w-full">
                <a href="#about" className="hover:text-white">
                  About
                </a>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
                <a href="#service" className="hover:text-white">
                  Service
                </a>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </div>
              <div onClick={close}>
                <IoCloseCircle className="text-white/80 text-2xl " />
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <div className="container mx-auto">
        <div className="fixed top-0 lg:block container mx-auto mt-12 hidden z-100">
          <div className="flex items-center w-[90%] mx-auto justify-between py-2 px-8 rounded-full border border-gray-700/95">
            <a href="#">
              <Logo className="w-12 h-12" />
            </a>
            <div className="flex items-center gap-4 shiny-text">
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
              <a href="#service" className="hover:text-white">
                Service
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
