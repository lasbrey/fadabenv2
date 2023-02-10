import React from "react";
import {
    MarkAsUnread,
    PhoneAndroid,
    PersonPinCircle
  } from "@mui/icons-material";

function Contact() {
  return (
    <section className="xl:w-5/6 w-full px-4mx-auto pt-16">
      <div className="container">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-12 lg:col-span-5 xl:col-span-4">
            <div className="contact-info">
              <h4 className="relative z-10 m-0 inline-block after:-top-3 after:-left-4 after:h-11 after:w-11 after:rounded-full after:bg-red-500 after:absolute after:-z-10 text-4xl font-bold mb-4">Get in touch</h4>
              <p className="text-md">
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </p>
              <ul className="pt-4">
                <li className="relative flex text-sm font-medium pt-4">
                 <PersonPinCircle />
                  <span className="pl-4">
                    123 Stree New York City.
                  </span>
                </li>
                <li className="relative flex text-sm font-medium pt-4">
                 <MarkAsUnread />
                  <span className="pl-4">support@domain.com</span>
                </li>
                <li className="relative flex text-sm font-medium pt-4">
                  <PhoneAndroid />
                  <span className="pl-4">+044 9696 9696 3636</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            <div className="contact-form">
              <h4 className="text-2xl font-bold mb-4">Say Something</h4>
              <form id="contact-form" method="POST">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-6">
                    <div className="form-group">
                      <input
                        name="Name"
                        id="name"
                        placeholder="Name *"
                        className="w-full rounded border px-4 py-3 text-sm outline-none border-slate-800 shadow-md bg-slate-700"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="form-group">
                      <input
                        name="Email"
                        id="email"
                        placeholder="Email *"
                        className="w-full rounded border px-4 py-3 text-sm outline-none border-slate-800 shadow-md bg-slate-700"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        name="Subject"
                        id="subject"
                        placeholder="Subject *"
                        className="w-full rounded border px-4 py-3 text-sm outline-none border-slate-800 shadow-md bg-slate-700"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows="5"
                        className="w-full rounded border px-4 py-3 text-sm outline-none border-slate-800 shadow-md bg-slate-700"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
