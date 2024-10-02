import Image from "next/image";

import Banner from "./components/Banner";
import clsx from "clsx";

import KasetsartLogo from "@/public/images/kasetsart-university-logo.webp";

const LAYOUT_CLASS = "max-w-[1440px] mx-auto w-full";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <section className="grow py-16">
        {/* Section 1: The Road So Far */}
        <JourneySection />
      </section>
    </main>
  );
}

const JourneySection = () => {
  return (
    <section className={clsx("", LAYOUT_CLASS)}>
      <h1 className="text-center font-semibold">My Journey</h1>
      <div className="">
        {/* Education */}
        <JourneyCard
          title="Kasetsart University"
          detail={`B.Eng. (Software & Knowledge Engineering)\nBangkok, Thailand`}
          time="July 2017 - May 2021"
          image={KasetsartLogo.src}
        />
      </div>
    </section>
  );
};

type JourneyProps = {
  title: string;
  detail: string;
  time: string;
  image?: string;
};

const JourneyCard = ({ title, detail, time, image }: JourneyProps) => {
  return (
    <div className="bg-white border border-gray-300 w-fit p-2 rounded-xl text-base">
      <div className="font-semibold">{title}</div>
      <p className="whitespace-pre-line"></p>
    </div>
  );
};
