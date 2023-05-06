import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Resume from "../assets/MezanurRahman'sResumeWebDeveloper.pdf";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="lg:px-40 px-5">
        <div className="flex w-full flex-col lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me.</h2>
            <h3 className="h3 mb-4">
              I am a Frontend Developer who is based on Bangladesh.{" "}
              <span className="md:inline hidden">
                I have 2 years of experience with the Frontend Development and I
                am avilaible to work full-time remotely and onsite in Bangladesh
              </span>
            </h3>
            <p className="mb-10 lg:text-lg text-sm">
              Transforming ideas into exceptional digital experiences - that's
              what drives me as a developer. I am a passionate developer, so I
              enjoy working with new technologies and love to explore a lot.
            </p>
            {/* counters */}
            <div className="flex lg:gap-x-12 gap-x-5 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  0{inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
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
                className="btn-link text-gradient"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
