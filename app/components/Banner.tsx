import Image from "next/image";

import TempImage from "@/public/images/akane-kurokawa.png";

const Banner = () => {
  return (
    <section className="h-[70dvh] max-h-[720px] min-h-[720px] bg-primary-100 shrink-0 relative flex items-end justify-end">
      {/* Profile image */}
      <Image
        alt="Profile image"
        src={TempImage}
        className="absolute lg:left-[20%] left-0 bottom-0 w-auto object-contain object-bottom h-[80%]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <section className="relative z-10 md:w-[50%] w-full md:mb-[5%] md:py-16 py-8 flex flex-col gap-8 sm:px-6 px-4 md:bg-transparent bg-white/50">
        {/* Greeting */}
        <div className="flex flex-col gap-2">
          <p className="text-xl text-gray-900">Hello, I am</p>
          <div className="flex flex-col gap-1">
            <div className="md:text-8xl text-6xl text-primary-900 font-bold md:ml-[-8px] ml-[-4px]">
              Benz
            </div>
            <div className="text-gray-900 text-xl tracking-wide font-semibold">
              Supaluk Jaroensuk
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="h-2 w-40 bg-primary-700 rounded-sm"></div>
        {/* Career */}
        <div className="font-bold text-3xl">Full Stack Developer</div>
      </section>
    </section>
  );
};

export default Banner;
