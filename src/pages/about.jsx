import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Pinterest,
} from "@mui/icons-material";
import Image from "../asset/gallery1.jpeg";
import "./style.css";

function About() {
  return (
    <section className="section py-8" id="about">
      <div className=" mx-auto xl:w-5/6 w-full px-4">
        <div className="grid grid-cols-12 gap-7 items-center justify-center">
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-0 mx-auto">
              <div className="relative flex justify-center items-center">
                <div className="border-4 rounded-full overflow-hidden max-w-[14rem] max-h-[14rem] flex justify-center items-center">
                  <img src={Image} title="" alt="" />
                </div>
                <div className="absolute bottom-[-15px] left-0 right-0 flex justify-center social-icons">
                  <a href="#">
                    <Facebook
                      className="rounded-full"
                      
                    />
                  </a>
                  <a href="#">
                    <Twitter
                      className="rounded-full"
                      
                    />
                  </a>
                  <a href="#">
                    <Instagram
                      className="rounded-full"
                      
                    />
                  </a>
                  <a href="#">
                    <LinkedIn
                      className="rounded-full"
                      
                    />
                  </a>
                  <a href="#">
                    <Pinterest
                      className="rounded-full"
                      
                    />
                  </a>
                </div>
              </div>
              <div className="text-center pt-10">
                <p className="m-0 text-md">Catholic Priest</p>
                <h3 className="text-3xl font-medium">FADABEN</h3>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="about-info">
              <div className="mb-5 ">
                <h3 className="relative z-10 m-0 inline-block text-3xl font-semibold after:-top-3 after:-left-4 after:h-11 after:w-11 after:rounded-full after:bg-[#60100b] after:absolute after:-z-10 ">
                  Biography
                </h3>
              </div>
              <div className="about-text">
                <p>
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
      </div>
    </section>
  );
}

export default About;
