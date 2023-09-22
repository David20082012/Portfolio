"use client";
import Bulb from "@/app/components/Bulb";
import Circles from "@/app/components/Circles";
import WorkSlider from "@/app/components/WorkSlider";
import Transition from "@/app/components/Transition";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-centere">
      <div className="container mx-auto flex flex-col justify-center ">
        <Transition />
        <Circles />
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex flex-col lg:text-left xl:w-[30vw] mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" h2 xl:mt-12"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              uewewioefj wjefwjhe fkjhwlkf hlksdfb sdnbvs dvkjs dkjvnslk
              jdnvlksjnvl kjsndvlkj sndvlkj nsdlvk jnsdlkjv
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
