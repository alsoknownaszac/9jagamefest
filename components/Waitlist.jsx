import React from "react";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { CrownSvg } from "./reuseable/CrownSvg";

export default function Waitlist() {
  return (
    <div className="relative h-fit w-full bg-hero_sm bg-cover bg-no-repeat bg-top overflow-hidden">
      <div className="w-[160px] h-[160px] 2xl:w-[180px] 2xl:h-[180px] 3xl:w-[220px] 3xl:h-[220px] absolute -bottom-4 md:left-8 xl:left-[10%]">
        <Image
          src="/blox4.svg"
          alt="waitlist section img"
          fill="fill"
          style="contain"
        />
      </div>
      <div className="container mx-auto xs:w-[80%] sm:w-[520px] md:w-[600px] lg:w-[700px] xl:w-[740px] 2xl:w-[900px] text-center pt-[86px] lg:pt-[129px] 2xl:pt-[190px] pb-[138px] lg:pb-[152px] 2xl:pb-4220px]">
        <div className="w-[85%] mx-auto mb-[21px] 2xl:mb-[32px] relative">
          <CrownSvg className="-right-3 3xs:-right-4 2xs:-right-4 sm:-right-4 md:-right-6 lg:-right-2 xl:-right-6 2xl:-right-8 -top-7 3xs:-top-10 lg:-top-12 2xl:-top-16 w-[60px] h-[60px] lg:w-[75px] lg:h-[75px] 2xl:w-[95px] 2xl:h-[95px]" />
          <h1 className=" font-bold text-[28px] 2xl:text-[40px] leading-[135%]">
            Join <span className="text-[#0AB221]">9jagames</span>Fest and Have
            the best time of your life
          </h1>
        </div>
        <p className="lg:w-[75%] mx-auto font-normal text-[14px] 2xl:text-[24px] leading-[135%] mb-[42px] 2xl:mb-[64px]">
          Join the waitlist and be among the very first people to be notified
          when the tickets becomes available
        </p>
        <button className="mx-auto bg-[#0AB221] flex items-center gap-[12px] font-bold rounded-[2px] text-white px-[26px] py-[9px] text-[13px] 2xl:text-[24px]">
          Join Waitlist
          <RiArrowRightUpLine className="font-bold text-[16px] 2xl:text-[26px]" />
        </button>
      </div>
    </div>
  );
}
