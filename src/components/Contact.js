import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

//motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
import image from "../assets/contactUs.png";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1v929vn",
        "template_s1zjdjb",
        form.current,
        "YJcwIzmfm27N48akI"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Message Sended!",
            text: "Thanks For Contacting Me!",
            icon: "success",
            confirmButtonText: "OK",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="lg:section py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text area */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:flex justify-center items-center"
          >
            <div className="lg:flex flex-col items-start justify-start">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in Touch
              </h4>
              <h2 className="text-[45px] hidden lg:block lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
              <h2 className="text-[30px] lg:hidden block leading-none mb-12">
                Let's work together!
              </h2>
              <img src={image} alt="" className="lg:flex hidden -ml-40px" />
            </div>
          </motion.div>
          {/* form area */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 relative"
          >
            <input
              className="bg-white font-semibold text-black border rounded-2xl p-3 outline-none w-full placeholder:text-black focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />
            <input
              className="bg-white font-semibold text-black border rounded-2xl p-3 outline-none w-full placeholder:text-black focus:border-accent transition-all"
              type="email"
              name="user_email"
              placeholder="Your email"
              required
            />
            <textarea
              className="bg-white font-semibold text-black rounded-2xl p-3 outline-none w-full placeholder:text-black focus:border-accent transition-all resize-none mb-12"
              type="text"
              rows={9}
              name="message"
              placeholder="Your message"
              required
            />
            <input
              type="submit"
              value="Send message"
              className="btn btn-lg absolute bottom-5 w-[93%] cursor-pointer"
            />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
