import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import WhoWeAre from "@/components/WhoWeAre";
import Offerings from "@/components/Offerings";
import FAQ from "@/components/FAQ";
import Sponsors from "@/components/Sponsors";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen ">
        {/* <Nav /> */}
        <Hero />
        <WhoWeAre />
        <Offerings />
        <FAQ />
        <Sponsors />
        {/*<Waitlist />
        <Footer /> */}
        {/* <section className=" h-[1214px]">
          <div className="w-[143px] h-[43px] mx-auto mt-[108px]">
            <p className="font-[500] text-[20px] text-[#0AB221]">Who we are</p>
          </div>
          <div className="mt-[56px] w-[1280px] mx-auto mb-[32px]">
            <h1 className="font-[700] text-[40px] text-[#343436] text-center">
              The Biggest South South event happening live in Warri
            </h1>
          </div>
          <div className="w-[1280px] h-[81px] mx-auto">
            <p className="font-[700] text-[20px] text-[#717172] text-center">
              9jagames Fest is the biggest event hosted in Warri. A great place
              to have fun, connect with people, try out amazing games. We bring
              you the biggest and the largest event happening Live in Delta
              State.
            </p>
          </div>
          <div className="backgroundimage-2"></div>
        </section>
        <section className=" h-[2078px] bg-[#F1EDED]">
          <div>
            <h1 className="font-[700] text-[56px] text-[#000000] text-center pt-[116px]">
              Explore Our Offerings
            </h1>
          </div>
          <div>
            <div>
              <div className="flex">
                <div className="ml-[286px] mt-[62px]">
                  <h4 className="font-[700] text-[24px] text-[#000000] mt-[32px]">
                    Amazing VR game
                  </h4>
                  <p className="font-[500] text-[18px] text-[#626266] mt-[8px] w-[339px] h-[40px]">
                    Join us and have access to experience an amazing Virtual
                    Reality game
                  </p>
                </div>
                <div className="ml-[63px] mt-[171px]">
                  <h4 className="font-[700] text-[24px] text-[#000000] mt-[32px]">
                    Play Stations
                  </h4>
                  <p className="font-[500] text-[18px] text-[#626266] mt-[8px] w-[339px] h-[72px]">
                    Join the tournament and be among the competitors for the
                    ultimate playstation legend!!!
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="ml-[286px]">
                  <h4 className="font-[700] text-[24px] text-[#000000] mt-[32px]">
                    Chess Master
                  </h4>
                  <p className="font-[500] text-[18px] text-[#626266] mt-[8px] w-[339px] h-[48px]">
                    Are you a lover of Chess, Join us and Play with amazing
                    partners.
                  </p>
                </div>
                <div className="ml-[68px] mt-[120px]">
                  <h4 className="font-[700] text-[24px] text-[#000000] mt-[32px]">
                    Dart!!!
                  </h4>
                  <p className="font-[500] text-[18px] text-[#626266] mt-[8px] w-[339px] h-[96px]">
                    How confident are you, To Succed in the game of dart you
                    need more than good eye coordination, If you Fit for this,
                    Join us and Battle for the crown!!.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-[700] text-[24px] text-[#0AB221] mt-[132px] text-center mb-[181px]">
                  View more
                </h4>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
