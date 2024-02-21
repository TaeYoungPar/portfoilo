"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";

type FormData = {
  user_name: string;
  user_email: string;
  title: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail: SubmitHandler<FormData> = (data) => {
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            setModalIsOpen(true);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            alert("이메일이 전송이 실패되었습니다.");
          }
        );
    }
  };

  return (
    <div className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full max-w-[700px]"
        >
          <h2 className="h2 text-center mb-12">Contact</h2>
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="flex-1 flex flex-col items-center xl:items-start gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <div className="w-full text-start">
                <input
                  type="text"
                  placeholder="이름"
                  className={`input ${errors.user_name && "mb-2"}`}
                  {...register("user_name", { required: true })}
                />
                {errors.user_name && <span>이름을 입력하세요.</span>}
              </div>
              <div className="w-full  text-start">
                <input
                  type="text"
                  placeholder="이메일"
                  className={`input ${errors.user_email && "mb-2"}`}
                  {...register("user_email", { required: true })}
                />
                {errors.user_email && <span>이메일을 입력하세요.</span>}
              </div>
            </div>
            <input
              type="text"
              placeholder="제목"
              className="input"
              {...register("title")}
            />
            <textarea
              placeholder="내용"
              className="textarea"
              {...register("message")}
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex  group-hover:-translate-y-0  group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </motion.div>
        {modalIsOpen ? (
          <Modal
            isOpen={true}
            ariaHideApp={false}
            style={customStyles}
            onRequestClose={() => setModalIsOpen(false)}
            className="w-[50%] h-[58vh] mt-[10%] m-auto bg-white text-black text-lg rounded-[10px]  flex flex-col items-center justify-center "
          >
            <h1 className="flex justify-center h-[20%]  items-center text-5xl rounded-t-[10px]">
              ​​​​​​​감사합니다!
            </h1>
            <div className="flex justify-center p-[5%]">
              최대한 빠르게 연락드리겠습니다.
            </div>
            <button
              onClick={showModal}
              className="border font-semibold  p-4 w-40 rounded-full hover:bg-black hover:text-white duration-300"
            >
              확인
            </button>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
