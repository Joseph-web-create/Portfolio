import { PiReadCvLogoFill } from "react-icons/pi";
import WhatsApp from "@/assets/whatsapp.svg?react";

const ButtonPerent = () => {
  return (
    <div className="flex mt-4 gap-4 ">
      <a
        href="/JosephThankGod.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className=" bg-[#ebebeb] hover:bg-[#e0e0e0d0] text-[#352f2f] py-2 flex px-4 items-center gap-2 rounded-xl font-bold text-[12px] lg:text-1xl"
      >
        Resume
        <div className="text-gray-500 text-2xl">
          <PiReadCvLogoFill />
        </div>
      </a>

      <a
        href="https://wa.me/message/W22DLFJNNKRQG1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#000000] hover:bg-[#252222] text-white py-2 flex px-4 items-center gap-2 rounded-xl font-bold text-[12px] shiny-text"
      >
        Start Chat
        <div className="text-2xl">
          <WhatsApp className="w-5 h-5" />
        </div>
      </a>
    </div>
  );
};

export default ButtonPerent;
