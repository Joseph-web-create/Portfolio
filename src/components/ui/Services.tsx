import GlassIconParent from "./GlassIconParent";
import GlassIcons from "./GlassIcons";
import frontEnd from "@/assets/frontEnd.png";
import backend from "@/assets/backend.png";
import fullstack from "@/assets/digital-services.png";
import mobile from "@/assets/software-development.png";
import AppWrapper from "./AppWrapper";

const Services = () => {
  const service = [
    {
      icon: (
        <GlassIcons
          icon={<img src={frontEnd} alt="Front-End" className="w-9" />}
          bg="bg-[#3B82F6]"
        />
      ),
      title: "Frontend Development",
      pTag: "I make clean, responsive interfaces that feel smooth to use on any screen.",
    },
    {
      icon: (
        <GlassIcons
          icon={<img src={backend} alt="Back-End" className="w-9" />}
          bg="bg-[#10B981]"
        />
      ),
      title: "Backend Development & APIs",
      pTag: "I build the logic and databases that keep apps running fast and secure.",
    },
    {
      icon: (
        <GlassIcons
          icon={<img src={fullstack} alt="Full Stack dev" className="w-9" />}
          bg="bg-[#F59E0B]"
        />
      ),
      title: "Full-Stack Web Applications",
      pTag: "From the buttons you click to the server that saves your data, I put it all together.",
    },
    {
      icon: (
        <GlassIcons
          icon={<img src={mobile} alt="Mobile dev" className="w-9" />}
          bg="bg-[#8B5CF6]"
        />
      ),
      title: "Mobile Development",
      pTag: "I create apps that run on both iOS and Android with a single codebase.",
    },
  ];
  return (
    <>
      <AppWrapper id="service">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center ">
          Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {service.map((service) => (
            <GlassIconParent
              key={service.title}
              icon={service.icon}
              title={service.title}
              pTag={service.pTag}
            />
          ))}
        </div>
      </AppWrapper>
    </>
  );
};

export default Services;
