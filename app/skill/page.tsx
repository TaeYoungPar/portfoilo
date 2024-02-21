"use client";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const About = () => {
  return (
    <div className=" h-full">
      <div className="w-full h-screen">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col justify-center  h-full container mx-auto max-w-[1000px] xl:pt-40"
        >
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 "
          >
            Skills
          </motion.h1>
          <div className="grid grid-cols-1 gap-3 w-full sm:grid-cols-2 sm:gap-5 mb-3 sm:mb-5">
            <SkillCard
              img="sunglass.png"
              title="Language"
              contents="JavaScript, TypeScript"
            />
            <SkillCard
              img="heart.png"
              title="Library & Framework"
              contents="React, Next.js, React-Query, Redux-toolkit"
            />

            <SkillCard
              img="wink.png"
              title="State Management"
              contents="React-Query, Redux"
            />
            <SkillCard
              img="smile.png"
              title="Styling"
              contents="Tailwind CSS, Styled Components"
            />
          </div>
          <div className=" w-full flex">
            <SkillCard
              img="wired.png"
              title="etc"
              contents="Storybook, Pocket base"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
