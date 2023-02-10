import React from "react";

function Tours() {
  return (
    <section className="xl:w-5/6 w-full px-4 mx-auto">
      <div className="">
        <div className="mb-5 ">
          <h3 className="relative z-10 m-0 inline-block text-3xl font-semibold after:-top-3 after:-left-4 after:h-11 after:w-11 after:rounded-full after:bg-red-500 after:absolute after:-z-10 ">
            Tours
          </h3>
        </div>
        <div className="pt-10">
          <div className="rounded-xl bg-slate-800 p-8">
            <div className="grid grid-cols-12 gap-7">
              <div className="col-span-12 md:col-span-4 xl:col-span-3">
                <div className="rb-left">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote</label>
                  <p>Jan 2019 - Present</p>
                  <div className="rb-time">Full Time</div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 xl:col-span-9">
                <div className="rb-right">
                  <h6>About Company</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tours;
