import profileImage from "@/assets/joseph.jfif";
import LoopLogo from "./LoopLogo";
import CurvedLoop from "./CurvedLoop";

const About = () => {
  return (
    <div className="px-4 my-14">
      <div className="flex flex-col gap-10 lg:gap-0 justify-around lg:flex-row">
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
              Web and mobile developer obsessed with clean architecture and
              smooth user experiences. When I’m not pushing commits, I’m either
              studying new tech trends, buried in a book, or trying not to lose
              at chess.
            </p>
          </div>
          <blockquote className="text-white italic">
            Code is my tool, but building useful stuff for people is my real
            job.
          </blockquote>
        </div>
      </div>
      <div className="space-y-10 mt-20">
        <h3 className="text-white text-center text-4xl">Skills</h3>
        <LoopLogo />
      </div>
    </div>
  );
};

export default About;
