"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "../../src/styles/styles.scss";

const slides = [
  {
    id: 1,
    title: "НАМЕРИ СВОЯТА ПОСТЕЛКА",
    description:
      "Прегледай различни дизайни и материали, за да намериш своята перфектена постелка.",
    img: "/hero-2.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "ОНЛАЙН ЙОГА УРОЦИ",
    description: "Прави йога от удобството на собствения си дом",
    img: "/hero-4.png",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "НОВА КОЛЕКЦЯ ЙОГА ОБЛЕКЛО",
    description: "Удобство и комфорт във всяка асана",
    img: "/bali-sunset.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full relative`}
            key={slide.id}
          >
            {/* IMAGE CONTAINER */}
            <div className="w-full h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
            {/* TEXT CONTAINER */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center bg-black bg-opacity-50">
              <h2 className="text-4xl lg:text-[50px] font-light text-white max-w-m lg:max-w-xl line-height font-cormorant tracking-widest">
                {slide.title}
              </h2>
              <Link href={slide.url}>
                <button className=" bg-white text-black py-3 px-4 font-cormorant tracking-widest">
                  Разгледай
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 bottom-8 flex gap-4 transform -translate-x-1/2">
  {slides.map((slide, index) => (
    <div
      className={`w-3 h-3 rounded-full ring-1 ring-white cursor-pointer flex items-center justify-center ${
        current === index ? "scale-150" : ""
      }`}
      key={slide.id}
      onClick={() => setCurrent(index)}
    >
      {current === index && (
        <div className="w-[6px] h-[6px] bg-yellow rounded-full"></div>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default Slider;
