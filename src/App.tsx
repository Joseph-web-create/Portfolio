import "./prism-vscode.css";
import Orb from "./components/ui/Orb";
import Nav from "./components/ui/Nav";
import Hero from "./components/ui/Hero";
import Services from "./components/ui/Services";
import About from "./components/ui/About";
import ClickSpark from "./components/ui/ClickSpark";

function App() {
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
              <Services />
            </ClickSpark>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
