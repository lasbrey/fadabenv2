import React from "react";
import Image from "../asset/FadaBen EP -05.jpg";
import Image2 from "../asset/0S2A8182.jpg";
import Image3 from "../asset/gallery3.jpeg";
import Image4 from "../asset/gallery2.jpeg";
import Image5 from "../asset/EJ2A8598.jpg";
import Image6 from "../asset/IMG_6080.JPG";

function Gallery() {
  return (
    <section id="gallery" className="section mb-10">
      <div className="xl:w-5/6 w-full px-4 mx-auto">
        <div className="mb-5 ">
          <h3 className="relative z-10 m-0 inline-block text-3xl font-semibold after:-top-3 after:-left-4 after:h-11 after:w-11 after:rounded-full after:bg-[#60100b] after:absolute after:-z-10 ">
            Gallery
          </h3>
        </div>
        <section class="overflow-hidden text-gray-700">
          <div class="">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={Image}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={Image2}
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={Image3}
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={Image4}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={Image5}
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={Image6}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center py-5">
        <a
          href="https://www.youtube.com/channel/UC7VasuZmhGn8lJgiazcebcA"
          class="pointer"
        >
          {" "}
          <button class="px-8 py-3 text-white bg-red-800"> View More Photos</button>
        </a>
      </div>
      </div>
    </section>
  );
}

export default Gallery;