import React from "react";
import Resume from "../assets/MezanurRahman'sResumeWebDeveloper.pdf";

//images import here
import Image from "../assets/avatar3.png";
//Icons Import here
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import { SiFiverr, SiUpwork } from "react-icons/si";
//type image animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="mx-auto">
        <div className="lg:px-60 px-5 flex flex-col-reverse lg:items-center justify-center lg:flex-row gap-y-8 lg:gap-x-12 w-full">
          {/* text area*/}
          <div className="flex-1 text-center lg:text-left font-secondary">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold leading-[0.8] lg:text-[110px]"
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
              className="mb-8 max-w-lg mx-auto lg:mx-0 lg:text-lg text-sm"
            >
              I'm Mezanur Rahman , a passionate developer based in Bangladesh
              with 2 years of experience. I specialize in front-end development,
              crafting visually appealing and user-friendly websites.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center max-w-max gap-x-6 mb-6 mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/mezanurrahman2002/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-lg">Contact Me</button>
              </a>
              <a
                href={Resume}
                target="_blank"
                rel="noreferrer"
                className="text-gradient btn-link"
              >
                Resume
              </a>
            </motion.div>
            {/* social links */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#home">
                <FaGithub />
              </a>
              <a href="#home">
                <FaFacebook />
              </a>
              <a href="#home">
                <FaLinkedin />
              </a>
              <a href="#home">
                <SiFiverr className="text-3xl" />
              </a>
              <a href="#home">
                <SiUpwork />
              </a>
            </motion.div>
          </div>
          {/* images area */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            className="lg:max-w-[482px] w-[50%] md:max-w-[70%] mx-auto"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
