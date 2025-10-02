import type { ReactNode } from "react";

const GlassIcons = ({ icon, bg }: { icon: ReactNode; bg: string }) => {
  return (
    <>
      <button className={`icon-btn `} type="button">
        <span className={`icon-btn__back ${bg}`}></span>
        <span className="icon-btn__front">
          <span className="icon-btn__icon" aria-hidden="true">
            {icon}
          </span>
        </span>
      </button>
    </>
  );
};

export default GlassIcons;
