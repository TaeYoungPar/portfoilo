"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Work = () => {
  return (
    <div className="w-full h-screen">
      <div className="text-center flex flex-col justify-center  xl:pt-40 xl:text-left h-full container mx-auto">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1"
        >
          Project
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-lg mx-auto xl:mx-0 mb-10 xl:mb-16"
        >
          프론트엔드 개발에서 사용되는 프로그래밍 언어를 통해 시각적으로
          매력적이고 상호작용성 있는 웹 어플리케이션을 구현하는 것이 제
          즐거움입니다. 오류와 문제에 직면하더라도 극복하며 성취감을 느끼며,
          이러한 과정에서 개발의 흥미를 더욱 높이고 있습니다.
        </motion.p>
      </div>
    </div>
  );
};

export default Work;
