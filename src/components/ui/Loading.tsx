import Logo from "@/assets/layer.svg?react";

const Loading = () => {
  return (
    <div className="bg-black flex justify-center items-center h-screen">
      <div className="loader-wrapper h-screen">
        <div className="">
          <Logo className="w-12 h-12 mx-auto" />
          <p className="shiny-text">Loading</p>
        </div>

        <div className="loader space-y-1"></div>
      </div>
    </div>
  );
};

export default Loading;
