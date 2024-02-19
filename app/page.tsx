"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Avatar from "./components/Avatar";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className=" h-full">
      <div className="w-full h-screen">
        <div className="text-center flex flex-col justify-center  xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            안녕하세요 <br /> 언제나 즐겁게 즐길 줄 아는 <br />
            프론트엔드 개발자
            <br />
            <span className=" bg-primaryGradient text-transparent bg-clip-text">
              박태영입니다.
            </span>
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
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" xl:max-w-sm xl:mx-0 mb-10 xl:mb-16 cursor-pointer sm:w-full"
          >
            <Link href={"/work"}>
              <Button>View All Project</Button>
            </Link>
            <Button>Contact</Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full max-w-[640px] max-h-[600px] absolute  z-negative lg:bottom-10 lg:right-[8%] "
      >
        <Avatar />
      </motion.div>
    </div>
  );
}
