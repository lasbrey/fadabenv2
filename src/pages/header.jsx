import React from "react";
import {
  Home,
  MailOutline,
  LibraryMusic,
  Collections,
  VideoSettings,
  Tour,
  ContactMail,
} from "@mui/icons-material";

function Header() {
  return (
    <header className="bg-[#0d0d0d] xl:fixed hidden top-0 w-20 flex-col xl:flex bottom-0 left-0 one-page-nav shadow-xl">
      <div className=" bg-[#60100b] ">
        <p className="flex justify-center p-5">
          <img
            src="https://pxdraft.com/themeforest/tailwind/nairo/assets/img/logo.svg"
            className=""
            title=""
            alt=""
          />
        </p>
      </div>
      <div className="navbar-collapse">
        <ul className="m-0 pt-0 flex flex-col list-none nav-menu">
          <li className="">
            <a href="#home">
              <p
                className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer active"
                data-scroll-nav="0"
              >
                <Home sx={{ fontSize: 30 }} />
              </p>
            </a>
          </li>
          <li className="">
            <a href="#about">
              <p
                className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
                data-scroll-nav="1"
              >
                <ContactMail sx={{ fontSize: 30 }} />
              </p>
            </a>
          </li>
          <li className="">
            <a href="#music">
              <p
                className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
                data-scroll-nav="2"
              >
                <LibraryMusic sx={{ fontSize: 30 }} />
              </p>
            </a>
          </li>
          <li className="">
            <a href="#gallery">
              <p
                className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
                data-scroll-nav="3"
              >
                <Collections sx={{ fontSize: 30 }} />
              </p>
            </a>
          </li>
          <li className="">
            <a href="#video">
              <p
                className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
                data-scroll-nav="4"
              >
                <VideoSettings sx={{ fontSize: 30 }} />
              </p>
            </a>
          </li>
          <li className="">
            <a href="#tour">
              <p
                className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
                data-scroll-nav="5"
              >
                <Tour sx={{ fontSize: 30 }} />
              </p>
            </a>
          </li>
          <li className="">
            <a href="#contact">
              <p
                className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
                data-scroll-nav="5"
              >
                <MailOutline sx={{ fontSize: 30 }} />
              </p>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
