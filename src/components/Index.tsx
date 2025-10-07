import ClickSpark from "./ui/ClickSpark";
import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import About from "./ui/About";
import Services from "./ui/Services";
import Orb from "./ui/Orb";
import Project from "./ui/Project";

const Index = () => {
  return (
    <>
      <div className="bg-black relative h-[100vh] w-full">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={true}
        />
        <div className="bg-black/50 absolute top-0 bottom-0 h-[100vh] w-full">
          <div className="container mx-auto">
            <ClickSpark
              sparkColor="#fff"
              sparkSize={12}
              sparkRadius={20}
              sparkCount={8}
              duration={400}
            >
              <Nav />
              <Hero />
              <About />
              <div className="flex flex-col lg:gap-26">
                <Project />
                <Services />
              </div>
            </ClickSpark>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
