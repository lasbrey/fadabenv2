import React from "react";
import { PlayCircle } from "@mui/icons-material";

function Music() {
  return (
    <section className="xl:w-5/6 w-full px-4 mx-auto xl:mb-20 mb-10">
      <div className="mb-5 ">
        <h3 className="relative z-10 m-0 inline-block text-3xl font-semibold after:-top-3 after:-left-4 after:h-11 after:w-11 after:rounded-full after:bg-red-500 after:absolute after:-z-10 ">
          Music
        </h3>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1  m-2 snap-center">
        <div>
          <div className="">
            <img
              className="xl:w-96 w-100 h-auto rounded-lg img-bg transition-all duration-300 blur-none hover:blur-sm"
              src="https://res.cloudinary.com/dgikmoh1f/image/upload/v1666116474/ep_mqfcuh.jpg"
              alt="image description"
            />
          </div>
        </div>

        <div>
          <div className="xl:w-96 xl:ml-8 ml-0 w-full xl:mt-0 mt-5">
            <div className="bg-grey-200">
              <div className="p-2 flex justify-between mb-5">
                <div className="">
                  <h1>There is always a way</h1>
                  <p>FadaBen</p>
                </div>
                <div className=" ">
                  <h6 className="border border-gray-300 px-2 hover:bg-red-700 hover:text-white hover:cursor-pointer hover:border-0">
                    Download Album
                  </h6>
                </div>
              </div>
              <div>
                <div className="border-t border-gray-300 border-b py-5 flex justify-between">
                  <div className="text-white">
                    <span className=" py-3 px-4">
                      <PlayCircle />
                    </span>
                    The Great Fall
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">02:34</p>
                  </div>
                </div>
                <div className="border-t border-gray-300 border-b py-5 flex justify-between">
                  <div className="text-white">
                    <span className=" py-3 px-4">
                      <PlayCircle />
                    </span>
                    The Great Fall
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">02:34</p>
                  </div>
                </div>
                <div className="border-t border-gray-300 border-b py-5 flex justify-between">
                  <div className="text-white">
                    <span className=" py-3 px-4">
                      <PlayCircle />
                    </span>
                    The Great Fall
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">02:34</p>
                  </div>
                </div>

                <div className="border-t border-gray-300 border-b py-5 flex justify-between">
                  <div className="text-white">
                    <span className=" py-3 px-4">
                      <PlayCircle />
                    </span>
                    The Great Fall
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">02:34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Music;
