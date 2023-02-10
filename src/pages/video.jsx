import React from "react";

function Video() {
  return (
    <section class="mb-10 mt-20 xl:w-5/6 w-full px-4 mx-auto" id="video">
      <div className="mb-5 ">
        <h3 className="relative z-10 m-0 inline-block text-3xl font-semibold after:-top-3 after:-left-4 after:h-11 after:w-11 after:rounded-full after:bg-red-500 after:absolute after:-z-10 ">
          Videos
        </h3>
      </div>
      <div>
        <div class="xl:px-0 py-2 lg:pt-12">
          <div class="h-full overflow-x-hidden text-center">
            <div class="csslider infinity" id="slider1">
              <ul>
                <li>
                  <p>
                    <iframe
                    className="w-full xl:h-[400px] h-[200px]"
                      src="https://www.youtube.com/embed/oNY_ERCfgbY"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                    ></iframe>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="xl:px-0 py-2 mx-auto lg:pt-12">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap xl:w-1/3 w-full">
              <div class="w-full p-1 md:p-2">
                <iframe
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/oNY_ERCfgbY"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="flex flex-wrap xl:w-1/3 w-full">
              <div class="w-full p-1 md:p-2">
                <iframe
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/oNY_ERCfgbY"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="flex flex-wrap xl:w-1/3 w-full">
              <div class="w-full p-1 md:p-2">
                <iframe
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/oNY_ERCfgbY"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center p-10">
        <h2 class="p-10">FOR MORE VIDEOS SUBSCRIBE TO MY CHANNEL</h2>
        <a
          href="https://www.youtube.com/channel/UC7VasuZmhGn8lJgiazcebcA"
          class="pointer"
        >
          {" "}
          <button class="px-8 py-3 text-white bg-red-800"> SUBSCRIBE</button>
        </a>
      </div>
    </section>
  );
}

export default Video;
