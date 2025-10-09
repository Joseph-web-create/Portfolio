import { motion } from "motion/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(4, "Your name must be more than 4 letters").trim(),
  email: z.string().email("Please enter a valid email address").trim(),
  message: z
    .string()
    .min(5, "Your message must be greater than 5 letters")
    .trim(),
});

type FormData = z.infer<typeof formSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axiosInstance.post("/sendMails", data);

      if (response.status === 200) {
        toast("Got your message!", {
          description: "I'll reach out to you soon.",
        });
        reset();
      } else if (response.status === 400) {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
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
      <form onSubmit={handleSubmit(onSubmit)} className="px-4">
        <div className="flex flex-col gap-6 px-4 py-8 w-full lg:w-[40%] mx-auto bg rounded-xl ">
          <p className="text-white text-center dynapuff text-2xl">Say hello</p>
          <div>
            <input
              type="text"
              placeholder="Drop a name"
              className=" placeholder:text-white/60 px-4 py-3  rounded-[8px] outline-none caret-amber-50 text-white bg-[#1b1b1b] w-full"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-base">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              placeholder="Wanna hear back? Add your email "
              className=" placeholder:text-white/60 px-4 py-3 bg-[#1b1b1b] rounded-lg outline-none caret-amber-50 text-white w-full"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-base">{errors.email.message}</p>
            )}
          </div>
          <div className="">
            <textarea
              id="message"
              placeholder="Drop a note . . ."
              className=" placeholder:text-white/60 px-4 py-3 h-30 max-h-60  bg-[#1d1d1c] rounded-lg outline-none caret-amber-50 text-white resize-none w-full"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-base">{errors.message.message}</p>
            )}
          </div>
          <button
            className="bg-white rounded-lg px-2 py-2 font-bold cursor-pointer"
            type="submit"
          >
            Send message
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Form;
