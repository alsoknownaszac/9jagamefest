import React from "react";
import { BiCopyright } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="container flex flex-col py-[34px] lg:py-[52px] 2xl:py-[90px] lg:flex-row gap-[58px] lg:gap-[68px]">
      <div className="grid grid-cols-2 lg:flex font-bold gap-y-[28px] lg:gap-[78px] 2xl:gap-[98px] 3xl:gap-[137px]">
        <h1 className="col-span-2 font-bold text-[20px] 2xl:text-[25px] 3xl:text-[34px] leading-[135%]">
          <span className="text-[#0AB221]">9jagames</span>Fest
        </h1>
        <div className="flex flex-col gap-[16px] 2xl:gap-[29px] text-[12px] 2xl:text-[16px] 3xl:text-[20px] leading-[135%]">
          <div className="text-[#717172]">About Us</div>
          <div className="text-[#343436]">Features</div>
          <div className="text-[#343436]">Faq</div>
        </div>
        <div className="flex flex-col gap-[16px] 2xl:gap-[29px] text-[12px] 2xl:text-[16px] 3xl:text-[20px] leading-[135%]">
          <div className="text-[#717172]">Socials</div>
          <div className="text-[#343436]">Instagram</div>
          <div className="text-[#343436]">Facebook</div>
          <div className="text-[#343436]">Twitter</div>
        </div>
      </div>
      <div className="flex items-center gap-[8px] mt-auto w-fit lg:ml-auto text-[11px] 2xl:text-[14px] 3xl:text-[16px]">
        All Rights Reserved <BiCopyright /> {new Date().getFullYear()}{" "}
        9jagamesFest
      </div>
    </div>
  );
}
