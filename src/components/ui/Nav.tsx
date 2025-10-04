import { MdMenu } from "react-icons/md";
import Logo from "@/assets/logo.svg?react";

function Nav() {
  return (
    <>
      <div className="py-4 px-2 lg:hidden ">
        <MdMenu color="white" size={30} />
      </div>

      <div className="fixed top-0 lg:block container mt-12 hidden ">
        <div className="flex items-center w-[90%] mx-auto justify-between bg-black/70 py-3 px-8 rounded-full border border-gray-800">
          <Logo className="w-10 h-10" />
          <div className="flex items-center gap-4 text-white">
            <p>About</p>

            <p>Projects</p>
            <p>Service</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
