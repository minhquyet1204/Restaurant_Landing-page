import React from "react";

import TestimonialCarousel from "../components/TestimonialCarousel";

import { testimonialData } from "../data";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Testimonial = () => {
  return (
    <section className="bg-testimonial bg-cover bg-no-repeat relative top-[340px] lg:top-[390px] z-10 h-[800px] pt-[60px] md:pt-[120px]">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-center capitalize flex flex-col items-center"
        >
          <h2 className="h2 text-white">{testimonialData.title}</h2>
          <p className="text-white/70 capitalize mb-8">
            {testimonialData.subtitle}
          </p>
          <div className="mb-12">
            <img src={testimonialData.modelImg} alt="" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <TestimonialCarousel slider={testimonialData.slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
