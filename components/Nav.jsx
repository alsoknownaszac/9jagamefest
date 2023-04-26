import React from "react";
import { TfiMoreAlt } from "react-icons/tfi";

export default function Nav() {
  return (
    <nav className="pt-[40px] pb-[33px] bg-[#F2F4F3]">
      <div className="container w-full flex justify-between lg:grid grid-cols-5 items-center">
        <div className="font-[900] text-[14px] lg:text-[18px] 2xl:text-[34px]">
          <span className="text-[#0AB221]">9jagames</span>Fest
        </div>
        <div className="lg:col-span-3 hidden lg:flex justify-center lg:text-[12px] 2xl:text-[20px] gap-[72px] text-[#717172]">
          <div className="">What we do</div>
          <div className="">About Us</div>
          <div className="">FAQ</div>
        </div>
        <div className="font-semibold lg:col-span-1 bg-[#0AB221] text-[#FFFFFF] text-[12px] 2xl:text-[20px] w-fit lg:justify-self-end px-[20px] py-[6px] 2xl:px-[40px] 2xl:py-[10px] rounded-[5px]">
          Join Waitlist
        </div>
        <div className="lg:hidden w-fit flex justify-self-end">
          <TfiMoreAlt className="mr-1 text-[16px]" />
        </div>
      </div>
    </nav>
  );
}
