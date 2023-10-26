import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const CONTACT_ICONS = [
  {
    key: 1,
    icon: <FaGithub />,
    url: 'https://github.com/Carson-Haskell?tab=repositories',
  },
  {
    key: 2,
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/carson-haskell/',
  },
  { key: 3, icon: <AiOutlineMail />, url: '' },
  { key: 4, icon: <BsFillPersonLinesFill />, url: '' },
];

const ContactIcons = () => {
  return (
    <>
      {CONTACT_ICONS.map((icon) => (
        <div
          key={icon.key}
          className="p-4 duration-300 ease-in rounded-full shadow-md cursor-pointer hover:shadow-lg hover:scale-110 shadow-gray-400 hover:shadow-gray-400"
        >
          <Link href={icon.url} target={icon.url ? '_blank' : ''}>
            {icon.icon}
          </Link>
        </div>
      ))}
    </>
  );
};

export default ContactIcons;
