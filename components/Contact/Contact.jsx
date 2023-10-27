'use client';

// import Image from 'next/image';
import React from 'react';
import Lottie from 'lottie-react';
import ContactAnim from '/public/assets/lotties/Contact.json';
import ContactIcons from './ContactIcons';
import ContactForm from './ContactForm';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* LEFT */}
          <div className="w-full h-full col-span-3 p-4 shadow-lg lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <Lottie
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                  animationData={ContactAnim}
                />
              </div>
              <div>
                <h2 className="py-2">Carson Haskell</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk!
                </p>
              </div>
              <div>
                <p className="pt-4 uppercase">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <ContactIcons />
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full h-auto col-span-3 shadow-lg shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-16 pb-10">
          <Link href="/#home">
            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 animate-bounce">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
