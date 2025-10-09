import { motion } from "motion/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Your name must be more than 4 letters" })
    .trim(),
  email: z.email(),
  message: z
    .string()
    .min(5, { message: "Your message most be greater than 5 letters" })
    .trim(),
});
type FormData = z.infer<typeof formSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <button
            className="bg-white rounded-lg px-2 py-2 font-bold"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Form;
