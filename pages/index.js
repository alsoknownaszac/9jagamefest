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
        <title>9JaGameFest - Join a large number of people and have fun</title>
        <meta
          name="description"
          content="9jagames fest brings to you all the fun that you deserve as you connect with so many others around and have a fun time."
        />
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
        <Waitlist />
        <Footer />
      </main>
    </>
  );
}
