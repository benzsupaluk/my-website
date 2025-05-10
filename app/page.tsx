"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Info from "./components/Info";

import FastAPI from "@/public/images/tech/fastapi.webp";
import Flask from "@/public/images/tech/flask.webp";
import Gatsby from "@/public/images/tech/gatsby.webp";
import Nextjs from "@/public/images/tech/nextjs.webp";
import Nuxtjs from "@/public/images/tech/nuxtjs.webp";
import ReactImage from "@/public/images/tech/react.webp";
import ROS from "@/public/images/tech/ros.webp";
import Vuejs from "@/public/images/tech/vuejs.webp";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 px-12 pb-8 grow">
      <p className="max-w-[500px]">
        I'm a Front-end Developer with 4 years of experience building
        responsive, high-performance websites. I specialize in accessibility,
        best practices, and SEO optimization—consistently achieving top scores
        on Lighthouse. My focus is on creating scalable, user-friendly solutions
        that work seamlessly across all devices.
      </p>
      <TechExpertise />
    </main>
  );
}

const TechExpertise = () => {
  const techList = [
    { imageSrc: Nextjs.src, alt: "Next.js" },
    { imageSrc: ReactImage.src, alt: "React" },
    { imageSrc: Gatsby.src, alt: "Gatsby.js" },
    { imageSrc: Vuejs.src, alt: "Vue.js" },
    { imageSrc: Nuxtjs.src, alt: "Nuxt.js" },
    { imageSrc: Flask.src, alt: "Flask" },
    { imageSrc: FastAPI.src, alt: "Fast API" },
    { imageSrc: ROS.src, alt: "ROS" },
  ];
  return (
    <section className="flex flex-col gap-6">
      <div className="font-semibold text-xl">My Areas of Tech Expertise</div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,_1fr))] gap-4 max-w-[500px]">
        {techList.map((tech, index) => {
          return (
            <div
              key={index}
              className="p-2 bg-white flex justify-center items-center rounded-lg opacity-70"
            >
              <Image
                key={index}
                src={tech.imageSrc}
                alt={tech.alt}
                width={80}
                height={80}
                className="aspect-square w-auto h-[80px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
