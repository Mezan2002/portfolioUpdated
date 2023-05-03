import React from "react";
import Image from "../assets/avatar.svg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center w-full"
      id="home"
    >
      <div className="lg:px-40 md:px-20 px-5 flex flex-col-reverse lg:items-center justify-center lg:flex-row gap-y-8 lg:gap-x-12 w-full">
        {/* text */}
        <div className="flex-1 text-center lg:text-left font-secondary">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-[40px] font-bold leading-[0.8] lg:text-[110px]"
          >
            Mezanur <span>Rahman</span>{" "}
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[20px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
          >
            <span className="mr-4 text-white">I am a</span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React JS Developer",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              className="text-accent"
            />
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            eaque ipsa distinctio excepturi tempore sapiente?
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center max-w-max gap-x-6 mb-12 mx-auto lg:mx-0"
          >
            <button className="btn btn-lg">Contact Me</button>
            <a href="#home" className="text-gradient btn-link">
              Resume
            </a>
          </motion.div>
          {/* social links */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
          >
            <a href="#home">
              <FaGithub />
            </a>
            <a href="#home">
              <FaFacebook />
            </a>
            <a href="#home">
              <FaInstagram />
            </a>
            <a href="#home">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          className="lg:max-w-[482px] md:max-w-[70%] mx-auto"
        >
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
