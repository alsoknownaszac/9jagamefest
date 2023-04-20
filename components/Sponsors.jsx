import React from "react";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Sponsors() {
  return (
    <div className="container pt-[87px] lg:pt-[80px] 2xl:pt-[150px] pb-[26px] lg:pb-[79px] 2xl:pb-[150px]">
      <div className="bg-[#33BF46] rounded-[5px] pt-[170px] lg:pt-[47px] pb-[96px] lg:pb-[68px] 2xl:pt-[95px] 2xl:pb-[100px] 3xl:pt-[115px] 3xl:pb-[110px] pl-[18px] lg:pl-[40px] 2xl:pl-[60px] 3xl:pl-[65px] pr-[8px] lg:pr-0 relative ">
        <div className="w-[101px] h-[101px] 2xl:w-[133px] 2xl:h-[133px] 3xl:w-[193px] 3xl:h-[193px] absolute top-0 left-0">
          <Image
            src="/blox2.svg"
            alt="sponsors section img 2"
            fill="fill"
            style="contain"
          />
        </div>

        <div className="hidden lg:block w-[101px] h-[101px] 2xl:w-[133px] 2xl:h-[133px] 3xl:w-[193px] 3xl:h-[193px] absolute bottom-0 right-0">
          <Image
            src="/blox3.svg"
            alt="sponsors section img 4"
            fill="fill"
            style="contain"
          />
        </div>

        <div className="w-[205px] h-[190px] lg:w-[304px] lg:h-[281px] 2xl:w-[407px] 2xl:h-[385px] 3xl:w-[557px] 3xl:h-[535px] absolute -top-[62px] lg:-top-[48px] 2xl:-top-[92px] right-[27px] lg:right-[20px] 2xl:right-[38px]">
          <Image
            src="/sponsors_img.png"
            alt="sponsors section img"
            fill="fill"
            style="contain"
          />
        </div>
        {/* <div className="w-[101px] h-[101px] 2xl:h-[480px] absolute  bottom-0 left-0">
          <Image
            src="/two_ellipse.svg"
            alt="sponsors section img 3"
            fill="fill"
            style="contain"
          />
        </div> */}

        <div className="lg:w-[52%] 2xl:w-[45%]">
          <h1 className="font-bold text-[28px] 2xl:text-[35px] 3xl:text-[56px] leading-[135%] text-white mb-[8px] 2xl:mb-[17px] 3xl:mb-[29px] w-5/6 2xl:w-full">
            Join 9jagames Fest and be a Sponsor
          </h1>
          <p className="w-[95%] font-normal text-[14px] 3xl:text-[20px] leading-[135%] text-white mb-[30px] 2xl:mb-[58px] 3xl:mb-[70px]">
            Be a sponsor and enjoy awesome benefits which would be very
            beneficial to you and you wont regret making the choice
          </p>
          <button className=" bg-white flex items-center gap-[12px] font-bold rounded-[2px] text-[#343436] px-[26px] py-[9px] text-[11px] 2xl:text-[16px] 3xl:text-[20px]">
            Become a Sponsor{" "}
            <RiArrowRightUpLine className="font-bold text-[14px] 2xl:text-[23px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
