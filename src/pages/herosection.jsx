import React from "react";
import "./style.css";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 xl:px-[50px] px-0 xl:text-md text-[12px] pt-[30px] flex justify-between">
        <div className="hb-info">
          <label>+04 6545-9535-6515</label>
          <label className="ml-20">fadaben@fadaben.com</label>
        </div>
      </div>
      <div className="mx-auto relative z-10 px-4 w-5/6">
        <div className="grid grid-cols-12 min-h-screen items-center">
          <div className="col-span-12 lg:col-span-8">
            <div className="type-box">
              <h6 className="text-xl">👋 Hello, My name is</h6>
              <h1 className="xl:text-7xl text-4xl pt-8 font-bold">FADABEN</h1>
              <p className="max-w-[450px] pt-8 text-gray-400">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hb-me"></div>
    </section>
  );
}

export default HeroSection;
