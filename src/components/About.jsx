import React from "react";
import { aboutData } from "../data";

import { motion } from "framer-motion";
import { fadeIn, plateVariants, staggerContainer } from "../variants";
const About = () => {
  return (
    <section className="min-h-[620px]" id="about">
      <div className="container mx-auto min-h-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-full flex flex-col lg:flex-row items-center"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className=" text-center lg:text-left"
          >
            <div className="pretitle">{aboutData.pretitle}</div>
            <h2 className="h2 capitalize">{aboutData.title}</h2>
            <p className="mb-8 max-w-[560px]">{aboutData.subtitle}</p>
            <button className="btn capitalize mx-auto lg:mx-0">
              {aboutData.btnText}
            </button>
          </motion.div>

          <motion.div
            variants={plateVariants}
            className="-mb-[300px] -mr-[186px] z-10"
          >
            <img src={aboutData.image} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
