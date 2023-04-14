import React from "react";

export default function WhoWeAre() {
  return (
    <section className="container bg-white pt-[44px] lg:pt-[54px] 2xl:pt-[108px] pb-[44px] lg:pb-[74px] 2xl:pb-[244px] flex flex-col items-center">
      <h1 className="bg-gray-100 text-green-600 font-medium w-fit text-[11px] py-[4px] px-[8px] rounded-[4px] 2xl:text-[20px] 2xl:py-[8px] 2xl:px-[16px] 2xl:rounded-[8px] mb-[9px] lg:mb-[19px] 2xl:mb-[38px]">
        Who We Are
      </h1>
      <div className="text-center mb-[18px] lg:mb-[42px] 2xl:mb-[84px] w-[90%] 2xl:w-[85%] mx-auto">
        <h2 className="font-bold text-[#343436] text-[18px] lg:text-[21px] 2xl:text-[40px] mb-[9px] 2xl:mb-[18px] leading-[135%]">
          The Biggest South South Event Happening Live in Warri
        </h2>
        <p className="font-normal text-[#717172] text-[14px] 2xl:text-[20px] leading-[135%]">
          9jagames Fest is the biggest event hosted in Warri. A great place to
          have fun, connect with people, try out amazing games. We bring you the
          biggest and the largest event happening Live in Delta State.
        </p>
      </div>
      <div className="bg-[#343436] w-full h-[324px] 2xl:h-[512px] rounded-[4px]"></div>
    </section>
  );
}
