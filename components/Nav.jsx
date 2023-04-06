import React from "react";

export default function Nav() {
  return (
    <nav className="pt-[40px] pb-[33px] bg-[#F2F4F3]">
      <div className="container w-full grid grid-cols-5 items-center text-[20px]">
        <div className="text-[#0AB221] ">9jagames</div>
        <div className="col-span-3 flex justify-center gap-[72px] text-[#717172]">
          <div className="">What we do</div>
          <div className="">About Us</div>
          <div className="">FAQ</div>
        </div>
        <div className="bg-[#0AB221] text-[#FFFFFF] w-fit justify-self-end px-[40px] py-[10px] rounded-[16px]">
          Join Waitlist
        </div>
      </div>
    </nav>
  );
}
