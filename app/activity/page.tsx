"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ActivityImg from "../components/Activity";
const Activity = () => {
  return (
    <div className="w-full h-screen">
      <div className="text-center flex flex-col justify-center   xl:pt-40 xl:text-left h-full container mx-auto">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1"
        >
          Activity
        </motion.h1>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex flex-col items-center xl:items-start mb-10 mx-auto xl:mx-0">
            <span className="text-xl font-bold  mb-2 ">
              웅진씽크빅X유데미X인사이드아웃 앱/웹 개발자 인턴형 프로그램 수료
            </span>
            <p className="mb-4">2023.12 - 2024.02</p>
            <ul className="list-disc ml-5 text-start w-full sm:w-[500px]  ">
              <li>스팩스페이스 기업 연계 프로젝트 진행</li>
              <li>Next.js, Pocketbase 자가 학습</li>
              <li>프로젝트 최우수팀 수상</li>
            </ul>
          </div>
          <div className="flex flex-col items-center xl:items-start mb-10 mx-auto xl:mx-0">
            <span className="text-xl font-bold  mb-2 ">
              Software Engineering Frontend Bootcamp (코드스테이츠) 수료
            </span>
            <p className="mb-4">2023.04 - 2023.10</p>
            <ul className="list-disc ml-5 text-start w-full sm:w-[500px] ">
              <li>
                React, JavaScript, HTML5, CSS 기반 프론트엔드 프로그래밍 학습
              </li>
              <li>컴퓨터 과학과 알고리즘에 대한 기초 및 코딩 테스트 학습</li>
              <li>페어 프로그램을 통한 협업 스킬 및 커뮤니케이션 향상</li>
              <li>
                미니 프로젝트 1회 메인 프로젝트 1회 총 팀 프로젝트 2회 진행
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mix-blend-color-dodge max-w-[640px] max-h-[600px] absolute   z-negative lg:bottom-44 lg:right-[18%] "
      >
        <ActivityImg />
      </motion.div>
    </div>
  );
};

export default Activity;
