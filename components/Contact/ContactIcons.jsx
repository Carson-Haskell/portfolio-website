import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const CONTACT_ICONS = [
  { key: 1, icon: <FaGithub /> },
  { key: 2, icon: <FaLinkedinIn /> },
  { key: 3, icon: <AiOutlineMail /> },
  { key: 4, icon: <BsFillPersonLinesFill /> },
];

const ContactIcons = () => {
  return (
    <>
      {CONTACT_ICONS.map(icon => (
        <div
          key={icon.key}
          className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:shadow-2xl hover:scale-110 shadow-gray-400"
        >
          {icon.icon}
        </div>
      ))}
    </>
  );
};

export default ContactIcons;
