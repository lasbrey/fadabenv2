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
    <header className="bg-slate-800 xl:fixed hidden top-0 w-20 flex-col flex bottom-0 left-0 one-page-nav">
      <div className=" bg-red-500  ">
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
            <p
              className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer active"
              data-scroll-nav="0"
              href="#home"
            >
              <Home sx={{ fontSize: 30 }} />
            </p>
          </li>
          <li className="">
            <p
              className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
              data-scroll-nav="1"
            >
              <ContactMail sx={{ fontSize: 30 }} />
            </p>
          </li>
          <li className="">
            <p
              className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
              data-scroll-nav="2"
            >
              <LibraryMusic sx={{ fontSize: 30 }} />
            </p>
          </li>
          <li className="">
            <p
              className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
              data-scroll-nav="3"
            >
              <Collections sx={{ fontSize: 30 }} />
            </p>
          </li>
          <li className="">
            <p
              className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
              data-scroll-nav="4"
            >
              <VideoSettings sx={{ fontSize: 30 }} />
            </p>
          </li>
          <li className="">
            <p
              className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
              data-scroll-nav="5"
            >
              <Tour sx={{ fontSize: 30 }} />
            </p>
          </li>
          <li className="">
            <p
              className="m-0 flex items-center justify-center p-5 text-center text-white hover:text-red-400 cursor-pointer"
              data-scroll-nav="5"
            >
              <MailOutline sx={{ fontSize: 30 }} />
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
