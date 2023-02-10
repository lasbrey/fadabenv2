import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Pinterest,
} from "@mui/icons-material";
import Image from "../asset/landing2.png";
import "./style.css";

function About() {
  return (
    <section className="section bg-slate-900 py-8">
      <div className=" mx-auto xl:w-5/6 w-full px-4">
        <div className="grid grid-cols-12 gap-7 items-center justify-center">
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-0 mx-auto">
              <div className="relative flex justify-center items-center">
                <div className="border-4 rounded-full overflow-hidden max-w-sm max-h-96 flex justify-center items-center">
                  <img src={Image} title="" alt="" />
                </div>
                <div className="absolute bottom-[-15px] left-0 right-0 flex justify-center social-icons">
                  <a href="#">
                    <Facebook
                      className="bg-white text-black  rounded-full"
                      sx={{ fontSize: 40, padding: 1 }}
                    />
                  </a>
                  <a href="#">
                    <Twitter
                      className="bg-white text-black  rounded-full"
                      sx={{ fontSize: 40, padding: 1 }}
                    />
                  </a>
                  <a href="#">
                    <Instagram
                      className="bg-white text-black  rounded-full"
                      sx={{ fontSize: 40, padding: 1 }}
                    />
                  </a>
                  <a href="#">
                    <LinkedIn
                      className="bg-white text-black  rounded-full"
                      sx={{ fontSize: 40, padding: 1 }}
                    />
                  </a>
                  <a href="#">
                    <Pinterest
                      className="bg-white text-black  rounded-full"
                      sx={{ fontSize: 40, padding: 1 }}
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
                <h3 className="relative z-10 m-0 inline-block text-3xl font-semibold after:-top-3 after:-left-4 after:h-11 after:w-11 after:rounded-full after:bg-red-500 after:absolute after:-z-10 ">
                  Biography
                </h3>
              </div>
              <div className="about-text">
                <p>
                  I'm a Freelancer Front-end Developer with over 3 years of
                  experience. I'm from San Francisco. I code and create web
                  elements for amazing people around the world. I like work with
                  new people. New people new Experiences.
                </p>
                <p>
                  I'm a Freelancer Front-end Developer with over 3 years of
                  experience. I'm from San Francisco. I code and create web
                  elements for amazing people around the world. I like work with
                  new people. New people new Experiences.
                </p>
              </div>
              <div className="pt-10">
                <div className="grid sm:gap-7 grid-cols-12">
                  <div className="col-span-12 sm:col-span-6">
                    <ul>
                      <li>
                        <label>Name: </label>
                        <span>FADABEN</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <ul>
                      <li>
                        <label>Birthday: </label>
                        <span>4th April 1994</span>
                      </li>
                    </ul>
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

export default About;
