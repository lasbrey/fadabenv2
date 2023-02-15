import React from "react";
import "./style.css";

function HeroSection() {
  return (
    <section className="relative overflow-hidden" id="home">
      <div className="absolute top-0 left-0 right-0 z-10 xl:px-[50px] px-3 xl:text-md text-[12px] pt-[30px] flex justify-between">
        <div className="hb-info">
          <label>+04 6545-9535-6515</label>
          <label className="ml-20">fadaben@fadaben.com</label>
        </div>
      </div>
      <div className="mx-auto relative z-10 px-4 w-5/6">
        <div className="grid grid-cols-12 min-h-screen items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="type-box">
              <h6 className="text-xl">👋 Hello, my name is</h6>
              <h1 className="xl:text-6xl text-4xl pt-8 font-bold"><span className="text-[#60100b]"> FadaBen</span></h1>
              <p className="max-w-[450px] pt-8 text-gray-400">
              My name is FadaBen. I bring art to life through my music and
                  creative adventures. I’m a Catholic Priest, Multipotentialite,
                  Creative Director, Musician - Producer. <br /> I’m also a Youth
                  Animator, with a burning desire to harness youthful energies
                  to grow our local communities and the world at large.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hb-me absolute right-0 top-0 bottom-0 h-full w-screen bg-contain bg-bottom bg-no-repeat opacity-40"></div>
      <div className=""></div>
    </section>
  );
}

export default HeroSection;
