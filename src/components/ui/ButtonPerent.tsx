import { IoLogoWhatsapp } from "react-icons/io";

const ButtonPerent = () => {
  return (
    <div className="flex mt-4 gap-4 ">
      <a
        href="https://wa.me/message/W22DLFJNNKRQG1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#000000] border text-white py-2 flex px-4 items-center gap-2 rounded-xl font-bold"
      >
        Start Chat
        <div className="text-green-400 rounded-full inline-block">
          <IoLogoWhatsapp size={30} />
        </div>
      </a>

      <a
        href="https://wa.me/message/W22DLFJNNKRQG1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#000000] border text-white py-2 flex px-4 items-center gap-2 rounded-xl font-bold"
      >
        Start Chat
        <div className="text-green-400 rounded-full inline-block">
          <IoLogoWhatsapp size={30} />
        </div>
      </a>
    </div>
  );
};

export default ButtonPerent;
