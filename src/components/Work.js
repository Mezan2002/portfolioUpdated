import React from "react";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col justify-between mb-10 lg:mb-0"
          >
            {/* text area */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br />
                Work
              </h2>
              <p className="mb-16">
                Explore some of my latest projects that showcase my skills and
                expertise in web development. Each project represents a unique
                challenge and an opportunity to demonstrate my ability to create
                visually stunning and functional websites.
              </p>
              <button className="btn btn-sm capitalize mb-10 lg:mb-0">
                View all projects
              </button>
            </div>
            {/* images */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl -mb-3 lg:mb-0">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pre title */}
              <div className="absolute -bottom-full lg:left-12 lg:group-hover:bottom-32 group-hover:bottom-28 left-5 transition-all duration-500 z-50">
                <span className="text-gradient">Cloud Kitchen Platform</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full lg:left-12 lg:group-hover:bottom-24 group-hover:bottom-20 left-5 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Khaiyalamu</span>
              </div>
              {/* button */}
              <div className="absolute -bottom-full lg:left-[45px] lg:group-hover:bottom-12 group-hover:bottom-4 left-4 transition-all duration-700 z-50">
                <button className="btn btn-sm">Learn More</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-7"
          >
            {/* images2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pre title */}
              <div className="absolute -bottom-full lg:left-12 lg:group-hover:bottom-32 group-hover:bottom-28 left-5 transition-all duration-500 z-50">
                <span className="text-gradient">E-Commerce Platform</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full lg:left-12 lg:group-hover:bottom-24 group-hover:bottom-20 left-5 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Safe Sale</span>
              </div>
              {/* button */}
              <div className="absolute -bottom-full lg:left-[45px] lg:group-hover:bottom-12 group-hover:bottom-4 left-4 transition-all duration-700 z-50">
                <button className="btn btn-sm">Learn More</button>
              </div>
            </div>
            {/* images3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pre title */}
              <div className="absolute -bottom-full lg:left-12 lg:group-hover:bottom-32 group-hover:bottom-28 left-5 transition-all duration-500 z-50">
                <span className="text-gradient">Social Media Platform</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full lg:left-12 lg:group-hover:bottom-24 group-hover:bottom-20 left-5 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Mini Verse</span>
              </div>
              {/* button */}
              <div className="absolute -bottom-full lg:left-[45px] lg:group-hover:bottom-12 group-hover:bottom-4 left-4 transition-all duration-700 z-50">
                <button className="btn btn-sm">Learn More</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
