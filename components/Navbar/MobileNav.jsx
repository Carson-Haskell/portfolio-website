import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ContactIcons from '../Contact/ContactIcons';

const MobileNav = ({ logo, toggleNav, nav }) => {
  return (
    <div
      className={
        nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''
      }
    >
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed top-0 left-[-100%] p-10 ease-in duration-500'
        }
      >
        <div>
          <div className="flex items-center justify-between w-full -ml-3">
            {logo}
            <div
              onClick={toggleNav}
              className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="mb-4 -mt-3 border-b border-gray-300">
            <p className="w-[85%] md:w-[90%] py-4">Carson Haskell</p>
          </div>
        </div>

        <div className="flex flex-col py-4">
          <ul className="uppercase">
            <Link href="/#home">
              <li className="py-4 text-sm">Home</li>
            </Link>
            <Link href="/#about">
              <li className="py-4 text-sm">About</li>
            </Link>
            <Link href="/#skills">
              <li className="py-4 text-sm">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="py-4 text-sm">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="py-4 text-sm">Contact</li>
            </Link>
          </ul>
          <div className="pt-40">
            <p className="tracking-widest uppercase text-[#5651e5]">
              Let's connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <ContactIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
