import React from "react";

import { teamData } from "../data";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Team = () => {
  return (
    <section
      className="relative top-96 z-10 lg:top-[480px] min-h-[720px]"
      id="team"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[120px] items-center lg:items-start">
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 text-center lg:text-left lg:pt-16"
          >
            <div className="pretitle">{teamData.pretitle}</div>
            <h2 className="h2 capitalize">{teamData.title}</h2>
            <p className="mb-[60px]">{teamData.sub1}</p>
            <p>{teamData.sub2}</p>

            <div className="my-[26px]">
              <div className="text-2xl capitalize font-semibold text-accent">
                {teamData.name}
              </div>
              <div className="text-[15px] font-medium capitalize text-grey/70">
                {teamData.occupation}
              </div>
            </div>

            <div className="flex justify-center lg:justify-start mb-6 lg:mb-0 ">
              <img src={teamData.signatureImg} alt="" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", " down", 0.7, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 "
          >
            <img src={teamData.chefImg} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
