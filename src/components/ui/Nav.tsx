import { MdMenu } from "react-icons/md";
import Logo from "@/assets/layer.svg?react";

function Nav() {
  return (
    <>
      <div className="py-4 px-2 lg:hidden ">
        <MdMenu color="white" size={30} />
      </div>

      <div className="fixed top-0 lg:block container mt-12 hidden ">
        <div className="flex items-center w-[90%] mx-auto justify-between py-2 px-8 rounded-full border border-gray-700/95">
          <a href="#">
            <Logo className="w-12 h-12" />
          </a>
          <div className="flex items-center gap-4 shiny-text">
            <p>About</p>
            <p>Projects</p>
            <a href="#service" className="hover:text-white">Service</a>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
