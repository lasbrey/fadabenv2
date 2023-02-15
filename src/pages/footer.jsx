import React from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    LinkedIn,
  } from "@mui/icons-material";

function Footer() {
  return (
    <footer class="footer bg-[#60100b] border-t border-gray-100 py-4 mt-4 ">
      <div class="xl:w-5/6 w-full px-4 mx-auto">
        <div class="grid grid-cols-12">
          <div class="col-span-12 md:col-span-6 flex pb-3 md:pb-0">
            <div class="flex justify-center md:justify-start w-full">
              <a
                class="text-gray-700 dark:text-white text-opacity-90 hover:text-theme-500 mr-5 text-[16px]"
                href="#"
              >
                <Facebook />
              </a>
              <a
                class="text-gray-700 dark:text-white text-opacity-90 hover:text-theme-500 mr-5 text-[16px]"
                href="#"
              >
                <Instagram />
              </a>
              <a
                class="text-gray-700 dark:text-white text-opacity-90 hover:text-theme-500 mr-5 text-[16px]"
                href="#"
              >
                 <Twitter />
              </a>
              <a
                class="text-gray-700 dark:text-white text-opacity-90 hover:text-theme-500 mr-5 text-[16px]"
                href="#"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
          <div class="col-span-12 md:col-span-6 text-center md:text-right">
            <p class="m-0 text-gray-700 dark:text-white text-opacity-75">
              © 2022 copyright all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
