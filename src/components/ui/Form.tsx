import { motion } from "motion/react";

const Form = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 min-h-[50vh] flex flex-col gap-10 mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, ease: "easeIn" }}
    >
      <h2 className="text-3xl lg:text-6xl text-white/80 text-center bartle px-6 lg:mb-6">
        Let's make <br /> it happen
      </h2>
      <form>
        <div className="flex flex-col gap-6 px-4 py-8 w-full lg:w-[40%] mx-auto bg rounded-xl ">
          <p className="text-white text-center dynapuff text-2xl">Say hello</p>
          <input
            type="text"
            placeholder="Drop a name"
            className=" placeholder:text-white/60 px-4 py-3  rounded-[8px] outline-none caret-amber-50 text-white bg-[#1b1b1b]"
          />
          <input
            type="email"
            placeholder="Wanna hear back? Add your email "
            className=" placeholder:text-white/60 px-4 py-3 bg-[#1b1b1b] rounded-lg outline-none caret-amber-50 text-white"
          />
          <textarea
            name=""
            id=""
            placeholder="Drop a note . . ."
            className=" placeholder:text-white/60 px-4 py-3 h-30 max-h-60  bg-[#1d1d1c] rounded-lg outline-none caret-amber-50 text-white resize-none "
          ></textarea>
          <button className="bg-white rounded-lg px-2 py-2 font-bold">
            Send
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Form;
