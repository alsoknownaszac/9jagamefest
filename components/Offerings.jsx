import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { CrownSvg } from "./reuseable/CrownSvg";

export default function Offerings() {
  return (
    <section className="relative py-[60px] 2xl:py-[120px] bg-[linear-gradient(180.83deg,_#E1EFE3_-3.75%,_rgba(235,_240,_236,_0)_99.1%)]">
      <div className="container w-fit mx-auto mb-[60px] relative">
        <CrownSvg className="-right-[17px] sm:right-2 md:right-6 lg:right-2 xl:right-12 2xl:-right-2 -top-[7px] 2xl:-top-4 w-[44px] h-[21px] 2xl:w-[85px] 2xl:h-[41px]" />
        <h2 className="font-bold text-[24px] lg:text-[28px] 2xl:text-[50px] leading-[135%]">
          Explore Our Offerings
        </h2>
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-[53px] lg:gap-x-[36px] lg:gap-y-[12px] 2xl:gap-x-[63px] 2xl:gap-y-[40px] mb-[34px] lg:mb-[48px] 2xl:mb-[100px]">
        <div className="relative w-[218px] 2xl:w-[423px] lg:even:mt-[56px] 2xl:even:mt-[109px]">
          <ArrowOneSvg />
          <ArrowTwoSvg />
          <div className="w-full h-[247px] 2xl:h-[480px] relative mb-[16px]">
            <Image
              src="/VR_games.png"
              alt="hero section img 2"
              fill="fill"
              style="contain"
            />
          </div>
          <div className="w-[98%] 2xl:w-[85%]">
            <h4 className="font-bold text-[16px] 2xl:text-[24px] mb-[9px] leading-[135%]">
              Amazing VR games
            </h4>
            <p className="font-normal text-[#626266] text-[12px] 2xl:text-[18px] leading-[135%]">
              Join us and have access to experience an amazing Virtual Reality
              game
            </p>
          </div>
        </div>
        <div className="w-[218px] 2xl:w-[423px] lg:even:mt-[56px] 2xl:even:mt-[109px]">
          <div className="w-full h-[247px] 2xl:h-[480px] relative mb-[16px]">
            <Image
              src="/playstations.png"
              alt="hero section img 2"
              fill="fill"
              style="contain"
            />
          </div>
          <div className="w-[98%] 2xl:w-[85%]">
            <h4 className="font-bold text-[16px] 2xl:text-[24px] mb-[9px] leading-[135%]">
              Play Stations
            </h4>
            <p className="font-normal text-[#626266] text-[12px] 2xl:text-[18px] leading-[135%]">
              Join the tournament and be among the competitors for the ultimate
              playstation legend!!!
            </p>
          </div>
        </div>
        <div className="relative w-[218px] 2xl:w-[423px] lg:even:mt-[56px] 2xl:even:mt-[109px]">
          <ArrowThreeSvg />
          <div className="w-full h-[247px] 2xl:h-[480px] relative mb-[16px]">
            <Image
              src="/chess_master.png"
              alt="hero section img 2"
              fill="fill"
              style="contain"
            />
          </div>
          <div className="w-[98%] 2xl:w-[85%]">
            <h4 className="font-bold text-[16px] 2xl:text-[24px] mb-[9px] leading-[135%]">
              Chess Master!!!
            </h4>
            <p className="font-normal text-[#626266] text-[12px] 2xl:text-[18px] leading-[135%]">
              Are you a lover of Chess, Join us and Play with amazing partners.
            </p>
          </div>
        </div>
        <div className="relative w-[218px] 2xl:w-[423px] lg:even:mt-[56px] 2xl:even:mt-[109px]">
          <ArrowFourSvg />
          <div className="w-full h-[247px] 2xl:h-[480px] relative mb-[16px]">
            <Image
              src="/dart.png"
              alt="hero section img 2"
              fill="fill"
              style="contain"
            />
          </div>
          <div className="w-[98%] 2xl:w-[85%]">
            <h4 className="font-bold text-[16px] 2xl:text-[24px] mb-[9px] leading-[135%]">
              Dart!!!
            </h4>
            <p className="font-normal text-[#626266] text-[12px] 2xl:text-[18px] leading-[135%]">
              How confident are you, To Succed in the game of dart you need more
              than good eye coordination, If you Fit for this, Join us and
              Battle for the crown!!.
            </p>
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto cursor-pointer text-[#0AB221] text-[12px] 2xl:text-[24px] flex items-center gap-[4.12px]">
        <span>View more</span>
        <IoIosArrowDown className="text-[24px]" />
      </div>
    </section>
  );
}

function ArrowOneSvg() {
  return (
    <svg
      width="49"
      height="45"
      viewBox="0 0 49 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute 2xl:w-[115px] 2xl:h-[75px] top-[50%] lg:top-[60%] 2xl:top-[63%] -left-[23%] 2xl:-left-[27%]"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7829 10.7357C30.7377 4.95877 43.0377 0.120877 47.9822 0.447127C49.2045 0.526249 48.9887 1.35279 47.6184 1.79364C45.5962 2.46834 41.0863 4.93395 35.4993 8.43818C32.7687 10.1559 25.8861 15.2972 23.7361 17.2691C8.25498 31.3446 8.38741 34.6444 24.3562 32.0615C28.6119 31.3713 28.3768 31.4967 28.8385 29.5911C29.4997 26.8712 30.3549 24.7468 30.752 24.832C30.945 24.8661 32.7576 25.5499 34.7917 26.3486C38.9262 27.973 41.7156 28.9203 44.2096 29.5271C47.752 30.3947 46.2522 31.9806 34.4619 39.9118C32.4314 41.2828 29.9101 43.0222 28.857 43.7617C26.3039 45.6017 25.6443 44.2567 26.8998 39.685C27.1999 38.5396 27.4092 38.5614 24.5327 39.5708C21.6562 40.5801 19.0078 41.3416 15.9322 42.2703C-7.2365 49.2105 -3.06649 26.7838 21.7829 10.7357ZM11.4189 22.0433C0.863832 32.0884 -0.837253 39.9338 7.31183 40.9468C10.4853 41.3246 23.4218 38.2068 27.4899 36.0728C28.7584 35.4017 28.9655 36.1663 28.3485 39.3642L27.8518 42.0372C27.8682 42.0249 38.3786 34.2623 42.9522 31.5956L43.8211 31.0966C40.6068 30.0593 35.3551 28.4048 33.0996 27.4911C31.5075 26.8462 31.2318 26.7976 31.17 27.1507C31.0505 27.7516 29.3203 32.1941 29.3533 32.6549C29.4669 34.3587 14.7474 35.5692 12.2211 34.0921C7.24623 31.1818 14.2766 21.3035 27.4295 11.3526C31.3121 8.41234 31.6281 8.14961 30.5232 8.69794C24.6922 11.5675 16.0709 17.6308 11.4189 22.0433Z"
        fill="#DFC147"
      />
    </svg>
  );
}

function ArrowTwoSvg() {
  return (
    <svg
      width="64"
      height="33"
      viewBox="0 0 64 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute 2xl:w-[115px] 2xl:h-[108px] bottom-0 lg:bottom-[10%] 2xl:bottom-[5%] -right-[30%] lg:-right-[10%] 2xl:right-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.5144 8.41072C58.6306 7.8338 56.1854 6.41034 51.3986 3.12089C45.8236 -0.720507 45.9315 -0.727428 46.436 3.43858C46.7041 5.64607 46.4966 6.53127 46.4882 6.89641C46.0622 6.8867 43.1064 7.72328 39.823 5.87792C35.1801 3.26621 31.4528 0.34748 26.5433 10.2447C24.2746 14.8393 22.0449 15.669 17.7809 13.4874C14.6511 11.8938 13.0965 11.0527 11.6097 10.1148C4.61419 5.71178 -1.99868 7.53282 -5.72541 14.8575C-6.17638 15.7372 -6.3162 16.7316 -6.13233 17.7053C-4.14979 28.3265 -3.93811 28.0831 -3.63951 29.9822C-3.44321 31.2326 -3.14315 31.8342 -2.50695 32.2796C-1.71861 32.8316 -1.77113 32.8772 1.19185 28.8512C5.90053 22.42 8.0348 21.4617 14.4718 22.8357C24.4647 24.9887 27.1535 24.1507 31.4874 17.519C34.3605 13.1209 34.106 13.19 41.3424 15.0412C45.3796 16.0747 45.7185 16.0029 48.3104 15.9215C48.45 17.194 48.5122 18.1649 48.8178 18.9353C49.9808 21.9548 51.6905 19.6894 53.3351 18.2234C56.1749 15.6981 59.3245 13.3484 61.5639 12.0927C64.2639 10.5618 63.0911 9.20484 60.5144 8.41072ZM59.3372 9.91543C59.2307 10.0676 55.871 11.5694 51.3727 15.9632C50.4819 16.8234 50.421 16.8221 50.399 15.941C50.3604 14.3476 49.3091 13.4055 47.695 13.5327C45.2178 13.715 43.5499 13.5366 40.5514 12.7562C32.3095 10.6338 32.8697 10.5108 29.5595 15.1799C24.5741 22.2418 23.5686 22.5889 13.5425 20.4539C6.77908 19.0162 3.97398 20.0201 0.0233488 25.2508L-1.67664 27.5024C-2.01123 25.9491 -3.45333 19.1482 -4.04242 17.664C-4.30378 17.007 -4.29131 16.8715 -3.96071 16.5465C-3.75461 16.3404 -3.11413 15.5728 -2.52625 14.8509C1.6775 9.61195 6.17551 8.7216 11.9941 11.9503C23.0766 18.0812 25.5717 17.932 29.037 10.9807C31.5948 5.82606 34.4843 4.6133 38.491 6.98568C41.6845 8.87114 44.5751 9.65839 47.3262 9.37922C48.9694 9.21061 49.0911 9.83159 48.9833 7.98373C48.6878 2.87167 48.4456 3.01125 52.8146 5.92585C58.9083 10.0273 59.4534 9.74947 59.3372 9.91543Z"
        fill="#84D890"
      />
    </svg>
  );
}

function ArrowThreeSvg() {
  return (
    <svg
      width="41"
      height="55"
      viewBox="0 0 41 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute 2xl:w-[104px] 2xl:h-[90px] -top-[3%] lg:top-[70%] -left-[15%] lg:-left-[22%]"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7855 6.06128C21.3209 6.15576 23.4011 8.98269 23.7439 10.0469C23.8218 10.2887 23.4245 10.8704 22.8266 11.4901C21.8173 12.4826 18.6626 16.2216 16.5419 18.8801C13.6195 22.5976 12.4294 27.7326 11.7552 27.9498C6.79441 29.5476 0.516762 40.6725 0.386878 48.1085C0.238578 56.7252 4.5265 55.1841 4.41191 50.0423C4.25554 43.2854 6.10016 37.4592 9.92069 32.6516C11.2077 31.0359 11.2954 31.0608 11.1828 32.9392C10.6839 42.2828 23.3631 44.9255 27.737 36.3893C30.6695 30.6398 25.1905 24.77 17.699 25.6081C15.9843 25.8134 18.4705 20.7414 22.4262 16.0237C25.7509 12.0698 25.4293 12.2267 26.4564 13.7645C30.8318 20.4169 32.5614 20.3403 34.3033 13.4527C35.0909 10.3694 37.1514 6.36882 40.1745 2.13834C41.3253 0.512999 40.1589 0.274783 37.2904 1.51911C34.1726 2.89706 29.6014 3.88902 25.6054 4.10834C19.9272 4.46912 19.9943 5.91572 20.7855 6.06128ZM18.3931 27.6802C23.8624 28.3211 26.4316 35.5552 22.4234 38.9549C19.8588 41.1426 15.2077 36.6879 15.312 32.1429C15.4162 28.5056 16.1784 27.4059 18.3931 27.6802Z"
        fill="#E7CB95"
        fillOpacity="0.66"
      />
    </svg>
  );
}

function ArrowFourSvg() {
  return (
    <svg
      width="54"
      height="38"
      viewBox="0 0 54 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute 2xl:w-[105px] 2xl:h-[88px] -bottom-[5%] lg:bottom-[20%] 2xl:bottom-[12%] -right-[10%]"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.60651 34.7218C5.00337 34.8749 9.01599 35.6142 13.8333 36.6348C17.2065 37.3511 17.1518 37.4454 15.6702 32.8621C15.2144 31.4471 15.2179 31.216 15.7227 30.5396C17.1334 28.6234 19.5566 30.0888 23.7874 30.0171C27.3258 29.9554 29.2792 28.7491 30.622 21.9584C31.893 15.5981 32.0771 15.4592 39.5503 15.3899C43.4654 15.3464 44.6123 15.0649 46.7947 13.6074C52.0783 10.0592 52.1395 5.03179 53.4863 2.48062C54.4773 0.597211 52.2671 -0.241766 51.726 0.951342C49.0675 6.95978 44.3212 9.32941 34.0046 9.82227C28.3698 10.0948 26.5837 11.6064 24.7687 17.6431C23.3028 22.5463 22.147 23.3515 16.2708 23.5937C12.7679 23.7418 12.3916 23.9403 11.4077 24.325L11.1338 23.6522C9.58288 19.7628 8.5641 19.3498 7.20198 22.0672C6.28153 23.9066 3.86673 28.0278 2.48967 30.0917C-0.146958 34.1102 -0.0916146 34.3408 3.60651 34.7218ZM8.36809 24.7143C9.0835 23.3643 9.0835 23.3643 9.58968 24.4826C10.348 26.191 10.829 26.4213 12.1224 25.7593C13.11 25.2517 14.265 25.0496 16.5912 25.0208C23.4073 24.9396 25.149 23.8653 26.7657 18.7838C28.5773 13.0866 30.2636 11.6734 35.4906 11.4985C42.3495 11.258 46.1002 10.3529 48.8327 8.32338C49.8238 7.58472 49.822 7.64614 48.8421 9.1611C46.7552 12.3908 43.7647 13.9064 39.2535 13.9843C30.684 14.1468 30.5528 14.2527 28.665 21.2146C26.7811 28.162 24.9971 29.7206 20.2579 28.5186C16.8511 27.6546 14.7081 28.1475 13.3583 30.1101C13.1158 30.4662 13.0637 30.9326 13.2566 31.3064C14.4104 33.6719 15.1729 35.474 15.177 35.5679C15.1831 35.7087 12.9637 35.1767 2.80735 33.2197C2.81124 33.2052 7.55693 26.2566 8.36809 24.7143Z"
        fill="#87B7FF"
      />
    </svg>
  );
}
