/* eslint-disable react/no-unescaped-entities react-hooks/rules-of-hooks */
"use client"
import Menu from "../assets/images/Menu.svg";
import Carousel from "./components/Page4/Carousel";
import Carousel5 from "./components/Page5/Carousel5";
import Carousel6 from "./components/Page6/Carousel6";
import Image from "next/image";
import India from '@/assets/images/Indi.svg';
import Drop from '@/assets/images/Drop.svg';
import Client1 from '@/assets/images/Client1.svg';
import Client3 from '@/assets/images/Client3.svg';
import Client4 from '@/assets/images/Client4.svg';
import Security from '@/assets/images/Security.png';
import Call from '@/assets/images/Call.svg';
import Prompt from '@/assets/images/Promt.svg';
import Audit from '@/assets/images/Audits.svg';
import Rate from '@/assets/images/Rate.svg';
import Plus from '@/assets/images/Plus.svg';
import Heart from '@/assets/images/Heart.svg';
import Linkedin from '@/assets/images/LinkedIn.svg';
import Insta from '@/assets/images/Instagram.svg';
import X from '@/assets/images/X.svg';
import Discord from '@/assets/images/Discord.svg';
import DiscordB from '@/assets/images/DiscordB.svg';
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";
import bg from '@/assets/images/Bg.svg';
import Testimonials from "./components/Testimonials/Testimonials";

const page = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  }
  return (
    <>
      <div className="bg-white">

        {/* Page1    */}
        <div className="h-auto">
          <div className="bg-gradient-to-b from-[rgba(255,153,0,0)] to-[rgba(255,207,135,0.62)] text-black text-center h-16 mb-20">
            <p className="top-12 font-inter font-normal text-base pt-9">
              Join our community.
              <span className="font-inter font-bold">
                {` Learn more`}
              </span>
            </p>
          </div>
          <div className="flex justify-between m-8 items-center">
            <div>
              <p className="text-black font-inter font-semibold">
                Toingg
              </p>
            </div>
            <div>
              <button onClick={() => toggle()}>
                <Image src={Menu} alt="Menu btn" width={59} height={42} />
                {/* <img src={Menu} /> */}
              </button>
            </div>
          </div>
          <div>

            {show && <Sidebar />}
          </div>
          <div className="mt-20">
            <p className="font-inter font-medium text-center"
              style={{ color: "rgba(111, 110, 110, 1)", fontSize: 50 }}>
              Build AI Calling <br /> Agent that can do
            </p>
            <p className="font-inter font-bold text-black text-center"
              style={{ fontSize: 48 }}>
              Sales Call
            </p>
          </div>
          <div className="flex flex-col justify-center mt-28">
            <button className="mx-auto bg-gradient-to-r from-[rgba(255,169,107,1)] to-[rgba(153,91,46,0.75)] w-[360px] h-16 rounded-lg">
              <p className="font-inter font-semibold text-white"
                style={{ fontSize: 18 }}>
                Bring your own voice Agent
              </p>
              <p className="text-black font-inter font-medium"
                style={{ fontSize: 16 }}>
                It is free
              </p>
            </button>
            <button className="border-2 border-black w-64 mx-auto my-8 h-14 rounded-lg">
              <p className="text-black font-inter font-semibold"
                style={{ fontSize: 18 }}>
                Hear it in action.
              </p>
            </button>
          </div>
        </div>

        {/* page2 */}
        <div className="h-screen flex items-center">
          <div className="bg-gradient-to-b from-[rgba(255,211,180,1)] to-[rgba(255,255,255,1)] m-auto rounded-3xl w-80 h-[513px] p-5
          shadow-[0_4px_4px_0px_rgba(0,0,0,0.18)]"
            style={{ borderWidth: 1, borderColor: "rgba(233, 233, 233, 1)" }}>
            <p className="font-inter font-bold text-3xl text-black pt-20">
              Try now
            </p>
            <p className="font-inter font-medium"
              style={{ color: "rgba(152, 152, 152, 1)", fontSize: 16 }}>
              Get a call from Toingg
            </p>
            <div className="mt-5 gap-y-5 flex flex-col items-center">
              <div className="relative w-[279px]">
                <input
                  className="bg-transparent border-black h-10 placeholder:font-normal placeholder:font-inter pl-5 w-full"
                  placeholder="Name"
                  style={{ borderWidth: 0.5, borderRadius: 10 }}
                />
              </div>
              <div className="relative w-[279px]">
                <input className="bg-transparent border-black h-10 placeholder: font-normal placeholder: font-inter pl-12 w-full" placeholder="+91"
                  style={{ borderWidth: 0.5, borderRadius: 10 }} />
                <Image src={India} className="absolute top-3 left-2" alt="India Flag" width={25} height={14} />
                <Image src={Drop} className="absolute top-5 left-10" alt="Drop-Down" width={5.83} height={2.71} />
              </div>
              <div className="relative w-[279px]">
                <input className="bg-transparent border-black h-10 placeholder: font-normal placeholder: font-inter pl-5 w-full" placeholder="Choose Your Language"
                  style={{ borderWidth: 0.5, borderRadius: 10 }} />
                <Image src={Drop} className="absolute top-5 left-48" alt="Drop-Down" width={5.83} height={2.71} />
              </div>
            </div>
            <div>
              {/* <Image/> */}
              {/* call svg  */}
            </div>
          </div>
        </div>

        <div>
        <iframe src="http://localhost:5173/Chatbot"></iframe>
        </div>

        {/* page3 */}
        <div className="h-screen">
          <div className="w-96 mx-auto pt-28">
            <p className="font-inter font-medium text-center"
              style={{ color: "rgba(121, 121, 121, 1)", fontSize: 18 }}>
              Automate your agents with 5000+ <br /> integration like
            </p>
          </div>
          <div className="flex mt-16 gap-x-10 ml-36">
            <Image src={Client1} alt="Client" width={44} height={38} />
            {/* <Image src="../assets/images/Client1.svg" /> */}
            <Image src={Client3} alt="Client" width={30.73} height={30.84} />
            <Image src={Client4} alt="Client" width={48} height={34} />
            {/* <Image src="../assets/images/Client1.svg" /> */}
          </div>
          <div className="w-80 h-[412px] bg-black mx-auto mt-36">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_La3wQlntgw"
            />
          </div>
        </div>

        {/* page 4 */}
        <div className="w-full flex h-screen justify-center">
          <Carousel />
        </div>

        {/* page5 */}
        <div className="w-full">
          <Carousel5 />
        </div>

        {/* page6 */}
        <div className="h-screen px-auto ">
          <Image src={bg} alt="bg" width={500} height={267} className="absolute z-0 rounded-full mx-auto left-0 right-0 my-auto mt-20" />
          <p className="text-black font-intern font-semibold text-center py-24"
            style={{ fontSize: 24 }}>
            Scale with Enterprise - grade <br /> capabilities
          </p>
          <Carousel6 />
        </div>

        {/* Testimonials */}
        <div className="h-screen px-auto">
          <Image src={bg} alt="bg" width={500} height={267} className="absolute z-0 rounded-full mx-auto left-0 right-0 my-auto mt-20" />
          <p className="text-black font-intern font-semibold text-center py-24"
            style={{ fontSize: 40 }}>
              Testimonials
          </p>
          <Testimonials/>
        </div>

        {/* page 7 */}
        <div className="h-screen flex flex-col items-center">
          <div className="mt-20">
            <Image src={Security} width={96} height={88} alt="Security" />
          </div>
          <p className="text-black font-inter font-medium text-center mt-5"
            style={{ fontSize: 24 }}>
            The highest standards of trust <br /> and safety.
          </p>
          <p className="text-black font-inter font-normal text-center mt-16"
            style={{ fontSize: 18 }}>
            We continue to actively restrict the <br />
            calls we support, ensuring that our <br />
            AI phone call technology continues <br />
            to benefit consumers, businesses, <br />
            and society as a whole.
          </p>
          <div className="flex flex-wrap gap-20 mt-20 justify-center px-10">
            <div>
              <Image src={Call} alt="call" width={100} height={100} className="mx-auto" />
              <p className="font-inter font-medium text-black mt-4"
                style={{ fontSize: 16 }}>
                Call Monitoring
              </p>
            </div>
            <div>
              <Image src={Prompt} width={60} height={60} alt="prompt" className="mx-auto" />
              <p className="font-inter font-medium text-black mt-4"
                style={{ fontSize: 16 }}>
                Prompt Injection
              </p>
            </div>
            <div>
              <Image src={Rate} alt="rate" width={60} height={60} className="mx-auto" />
              <p className="font-inter font-medium text-black mt-4"
                style={{ fontSize: 16 }}>
                Rate Limits
              </p>
            </div>
            <div>
              <Image src={Audit} alt="audit" width={60} height={60} className="mx-auto" />
              <p className="font-inter font-medium text-black mt-4"
                style={{ fontSize: 16 }}>
                Internal Hard Audits
              </p>
            </div>
          </div>
        </div>

        {/* page 8 */}
        <div className="h-screen">
          <div className="mx-auto w-80 pt-28">
            <p className="font-inter font-medium text-black mx-auto"
              style={{ fontSize: 38 }}>
              Frequently asked <br /> questions.
            </p>
          </div>
          <div className="mt-20 gap-y-5">
            <div className="w-80 mx-auto flex justify-between border-b-2">
              <p className="text-black font-inter font-medium"
                style={{ color: "rgba(108, 107, 107, 1)", fontSize: 18 }}>
                What is Toingg price?
              </p>
              <Image src={Plus} alt="plus" width={20} height={20} />
            </div>
            <div className="w-80 mx-auto flex justify-between border-b-2 mt-8">
              <p className="text-black font-inter font-medium"
                style={{ color: "rgba(108, 107, 107, 1)", fontSize: 18 }}>
                What is Toingg?
              </p>
              <Image src={Plus} alt="plus" width={20} height={20} />
            </div>
            <div className="w-80 mx-auto flex justify-between border-b-2 mt-8">
              <p className="text-black font-inter font-medium"
                style={{ color: "rgba(108, 107, 107, 1)", fontSize: 18 }}>
                How secure is Toingg?
              </p>
              <Image src={Plus} alt="plus" width={20} height={20} />
            </div>
            <div className="w-80 mx-auto flex justify-between border-b-2 mt-8">
              <p className="text-black font-inter font-medium"
                style={{ color: "rgba(108, 107, 107, 1)", fontSize: 18 }}>
                how secure is Toingg?
              </p>
              <Image src={Plus} alt="plus" width={20} height={20} />
            </div>
            <div className="w-80 mx-auto flex justify-between border-b-2 mt-8">
              <p className="text-black font-inter font-medium"
                style={{ color: "rgba(108, 107, 107, 1)", fontSize: 18 }}>
                How does billing work?
              </p>
              <Image src={Plus} alt="plus" width={20} height={20} />
            </div>
            <div className="w-80 mx-auto flex justify-between border-b-2 mt-8">
              <p className="text-black font-inter font-medium"
                style={{ color: "rgba(108, 107, 107, 1)", fontSize: 18 }}>
                What phone numbers can I use<br /> with Toingg?
              </p>
              <Image src={Plus} alt="plus" width={20} height={20} />
            </div>
            <div className="w-80 mx-auto flex justify-between border-b-2 mt-8">
              <p className="text-black font-inter font-medium"
                style={{ color: "rgba(108, 107, 107, 1)", fontSize: 18 }}>
                Does Toingg support multiple<br /> languages?
              </p>
              <Image src={Plus} alt="plus" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* page 9 */}
        <div className="h-screen bg-gradient-to-b from-[rgba(255,211,180,1)] to-[rgba(255,255,255,1)]">
          <p className="text-black font-inter font-semibold text-center pt-20"
            style={{ fontSize: 50 }}>
            TOINGG
          </p>
          <div className="relative">
            <p className="text-white text-center font-inter font-medium text-2xl pt-5">
              We are here to grow your<br /> business
              <span className="absolute mt-3 ml-1">
                <Image src={Heart} alt="heart" width={15} height={15} />
              </span>
            </p>
          </div>
          <div className="mt-12">
            <p className="font-inter font-normal text-black text-center text-lg mt-5">
              Terms and Conditions
            </p>
            <p className="font-inter font-normal text-black text-center text-lg mt-5">
              Privacy policy
            </p>
            <p className="font-inter font-normal text-black text-center text-lg mt-5">
              Help center
            </p>
            <p className="font-inter font-normal text-black text-center text-lg mt-5">
              API docs
            </p>
            <p className="font-inter font-normal text-black text-center text-lg mt-5">
              Careers
            </p>
          </div>
          <div className="flex justify-around mt-20 mx-14 relative">
            <div>
              <Image src={Linkedin} alt="linkedin" width={30} height={30} />
            </div>
            <div className="mt-1">
              <Image src={Insta} alt="Insta" width={35} height={35} />
            </div>
            <div className="mt-1">
              <Image src={X} alt="X" width={20} height={20} />
            </div>
            <div>
              <Image src={Discord} alt="discord" width={30} height={30} />
            </div>
          </div>
          <div className="mt-10 ml-10 mt-20">
            <p className="font-inter font-medium text-black"
              style={{ fontSize: 16 }}>
              Copyright © 2024 Toingg <br /> Inc. All rights reserved.<br /><br /> Join our community
              <Image src={DiscordB} alt="discord" width={30} height={30} />
            </p>
          </div>
        </div>

      </div >
    </>
  )
}

export default page
