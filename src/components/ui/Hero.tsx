import image from "@/assets/img.png";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { BsDashLg } from "react-icons/bs";

function Hero() {
  return (
    <div className="h-[100vh] flex justify-between items-center px-4">
      <div className="flex items-center gap-10">
        <div className="flex flex-col justify-between h-[100vh] py-6 bg-transparent">
          <div />
          <div className="flex flex-col gap-10">
            <a href="">
              <VscGithubInverted color="white" size={30} />
            </a>
            <a href="">
              <FaLinkedin color="white" size={30} />
            </a>

            <a href="">
              <BsTwitterX color="white" size={30} />
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-400 writing-mode-vertical">down Scroll</p>
            <FaChevronDown color="gray" />
          </div>
        </div>

        <div className="flex flex-col -mt-28">
          <div className="flex items-center gap-1">
            <BsDashLg color="white" size={60} />
            <p className="text-white">Hello</p>
          </div>
          <div className="lg:ml-18 ">
            <h2 className="text-gray-400 text-3xl lg:text-7xl my-4">
              I'm <span className="text-white">Joseph ThankGod</span>
            </h2>
            <p className="text-gray-400 text-base">A full stack developer based in Lagos</p>
          </div>
        </div>
      </div>
      <img
        src={image}
        alt="Joseph"
        className="w-[40%] object-cover hidden lg:block"
      />
    </div>
  );
}

export default Hero;
