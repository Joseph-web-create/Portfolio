import { techLogos } from "@/const/icon";

import LogoLoop from "./LogoLoop";

const LoopLogo = () => {
  return (
    <div
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
      // className="text-white/70"
    >
      <LogoLoop
        logos={techLogos}
        speed={90}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default LoopLogo;
