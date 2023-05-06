import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

// service Data
const serviceData = [
  {
    name: "Web Development",
    description:
      "I specialize in crafting visually appealing and functional websites that make a lasting impression.",
    link: "learn more",
  },
  {
    name: "Web Application Development",
    description:
      "Need a powerful and dynamic web application? I've got you covered I can make modern web app by using React JS",
    link: "learn more",
  },
  {
    name: "Frontend Development",
    description:
      "I excel in frontend development, crafting intuitive and engaging user interfaces. With expertise in HTML, CSS, and JavaScript, along with popular frameworks like React.",
    link: "learn more",
  },
  {
    name: "Website Maintenance and Support",
    description:
      "Already have a website or web application but need ongoing maintenance and support? I provide reliable and efficient maintenance services.",
    link: "learn more",
    borderX: "none",
  },
];
const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & images */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <div className="h-full flex flex-col justify-end mt-10 lg:mt-0">
              <h2 className="h2 text-accent mb-6">What I Do</h2>
              <h3 className="font-primary font-semibold text-[18px] leading-[36px] max-w-[455px] mb-16">
                I offer a range of development services to cater to your unique
                needs and help you achieve your digital goals. Here are some of
                the services I provide
              </h3>
              <Link
                to="work"
                smooth={true}
                spy={true}
                className="btn btn-sm w-56 flex justify-center items-center cursor-pointer"
              >
                See My Works
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {serviceData.map((service, index) => {
              const { name, description, link, borderX } = service;
              return (
                <div
                  className={`border-b border-white/20 h-[160px] lg:h-[150px] mb-[20px] flex ${
                    borderX ? "border-none" : null
                  }`}
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary lg:text-base text-sm leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a className="capitalize text-gradient text-sm" href="#">
                      {link}{" "}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
