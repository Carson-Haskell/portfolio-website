import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderNav = ({ logo, toggleNav }) => {
  return (
    <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
      <div className="flex items-center">
        {logo}
        <h2 className="ml-2 text-[#1f2937] text-[20px] font-normal tracking-widest">Haskell</h2>
      </div>
      <div>
        <ul className="hidden pr-8 md:flex">
          <Link href="">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>

        {/* Hamburger icon to access mobile Nav */}
        <div onClick={toggleNav} className="mr-1 md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
