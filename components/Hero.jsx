import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className=" h-[calc(.625*100vw)] bg-hero w-full bg-cover bg-no-repeat bg-left-bottom">
      <div className="container h-full flex gap-[48px] relative">
        <div className="w-[220px] h-[140px] absolute bottom-0">
          <Image
            src="/blox.png"
            alt="hero section img 2"
            fill="fill"
            style="contain"
          />
        </div>
        <div className="w-[114px] h-[114px] absolute top-[10%] right-[30%]">
          <Image
            src="https://raw.githubusercontent.com/xamie01/kleekit-jobs/main/2%20portfolio/images/retro_wave_019%201.png"
            alt="hero section img 3"
            fill="fill"
            style="contain"
          />
        </div>
        <div className="absolute bottom-[6%] right-0 flex gap-[32px]">
          <div className="border-[.5px] border-[#84D890] rounded-[4px] py-[16px] px-[24px]">
            <div className="w-fit bg-white rounded-full p-[12px] mb-[9.3px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.083 7H4.029C4.118 5.454 4.412 4.03 4.866 2.882C4.13501 3.32992 3.50842 3.92919 3.02838 4.6395C2.54834 5.34982 2.22598 6.1547 2.083 7ZM8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM8 2C7.924 2 7.768 2.032 7.535 2.262C7.297 2.496 7.038 2.885 6.798 3.444C6.409 4.351 6.125 5.586 6.032 7H9.968C9.875 5.586 9.591 4.351 9.202 3.444C8.962 2.884 8.702 2.496 8.465 2.262C8.232 2.032 8.076 2 8 2ZM11.971 7C11.882 5.454 11.588 4.03 11.134 2.882C11.865 3.32992 12.4916 3.92919 12.9716 4.6395C13.4517 5.34982 13.774 6.1547 13.917 7H11.971ZM9.968 9H6.032C6.125 10.414 6.409 11.649 6.798 12.556C7.038 13.116 7.298 13.504 7.535 13.738C7.768 13.968 7.924 14 8 14C8.076 14 8.232 13.968 8.465 13.738C8.703 13.504 8.963 13.115 9.202 12.556C9.591 11.649 9.875 10.414 9.968 9ZM11.134 13.118C11.588 11.971 11.882 10.546 11.971 9H13.917C13.774 9.8453 13.4517 10.6502 12.9716 11.3605C12.4916 12.0708 11.865 12.6701 11.134 13.118ZM4.866 13.118C4.412 11.97 4.118 10.546 4.03 9H2.083C2.22598 9.8453 2.54834 10.6502 3.02838 11.3605C3.50842 12.0708 4.13501 12.6701 4.866 13.118Z"
                  fill="#5CCC6B"
                />
              </svg>
            </div>
            <div className="font-[500] text-[40px] leading-[70%] text-[#606064]">
              10+
            </div>
            <div className="font-[500] text-[20px] leading-[135%] text-[#717172]">
              States
            </div>
          </div>
          <div className="border-[.5px] border-[#84D890] rounded-[4px] py-[16px] px-[24px]">
            <div className="w-fit bg-white rounded-full p-[12px] mb-[9.3px]">
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C12 3.79565 11.6839 4.55871 11.1213 5.12132C10.5587 5.68393 9.79565 6 9 6C8.20435 6 7.44129 5.68393 6.87868 5.12132C6.31607 4.55871 6 3.79565 6 3C6 2.20435 6.31607 1.44129 6.87868 0.87868C7.44129 0.316071 8.20435 0 9 0C9.79565 0 10.5587 0.316071 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3ZM17 5C17 5.53043 16.7893 6.03914 16.4142 6.41421C16.0391 6.78929 15.5304 7 15 7C14.4696 7 13.9609 6.78929 13.5858 6.41421C13.2107 6.03914 13 5.53043 13 5C13 4.46957 13.2107 3.96086 13.5858 3.58579C13.9609 3.21071 14.4696 3 15 3C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5ZM13 12C13 10.9391 12.5786 9.92172 11.8284 9.17157C11.0783 8.42143 10.0609 8 9 8C7.93913 8 6.92172 8.42143 6.17157 9.17157C5.42143 9.92172 5 10.9391 5 12V15H13V12ZM5 5C5 5.53043 4.78929 6.03914 4.41421 6.41421C4.03914 6.78929 3.53043 7 3 7C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3C3.53043 3 4.03914 3.21071 4.41421 3.58579C4.78929 3.96086 5 4.46957 5 5ZM15 15V12C15.0014 10.9833 14.7433 9.98303 14.25 9.094C14.6933 8.98054 15.1568 8.96984 15.6049 9.06272C16.053 9.15559 16.474 9.34959 16.8357 9.62991C17.1974 9.91023 17.4903 10.2695 17.6921 10.6802C17.8939 11.091 17.9992 11.5424 18 12V15H15ZM3.75 9.094C3.25675 9.98305 2.9986 10.9833 3 12V15H2.6572e-07V12C-0.000192468 11.542 0.104463 11.0901 0.305947 10.6789C0.507431 10.2676 0.800394 9.90793 1.16238 9.62742C1.52437 9.3469 1.94578 9.15298 2.39431 9.06052C2.84284 8.96806 3.30658 8.97951 3.75 9.094Z"
                  fill="#5CCC6B"
                />
              </svg>
            </div>
            <div className="font-[500] text-[40px] leading-[70%] text-[#606064]">
              3K+
            </div>
            <div className="font-[500] text-[20px] leading-[135%] text-[#717172]">
              Expected attendants
            </div>
          </div>
        </div>
        <div className="col-span-2 w-[28.57%] mt-auto mb-[calc(0.115*100%)]">
          <div className="w-[94%] mx-auto h-[90px] relative ">
            <Image
              src="https://raw.githubusercontent.com/xamie01/kleekit-jobs/main/2%20portfolio/images/Frame%20597.png"
              alt="pics with small sizes"
              fill="fill"
              style="contain"
            />
          </div>
          <div className="mt-[36px] h-[377px] relative ">
            <Image
              src="https://raw.githubusercontent.com/xamie01/kleekit-jobs/main/2%20portfolio/images/Frame%20603.png"
              alt="hero section img 1"
              fill="fill"
              style="contain"
            />
          </div>
        </div>
        <div className="col-span-3 w-[42.85%] my-auto text-center">
          <h1 className="font-bold text-[54px] leading-[135%] text-[#343436] mb-[24px]">
            Join a large number of people and have fun
          </h1>
          <p className="w-[95%] font-semibold text-[20px] leading-[135%] text-[#717172] mb-[35px]">
            9jagames fest brings to you all the fun that you deserve as you
            connect with so many others around and have a fun time.
          </p>
          <button className="bg-[#0AB221] rounded-[4px] text-[#FFFFFF] px-[48px] py-[14px] text-[20px]">
            Join Waitlist
          </button>
        </div>
        <div className="col-span-2 w-[28.57%] mt-[calc(0.06*100%)]">
          <div className=" h-[430px] relative ">
            <Image
              src="/s1img2.png"
              alt="hero section img 2"
              fill="fill"
              style="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
