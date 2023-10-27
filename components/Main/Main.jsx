import React from 'react';
import ContactIcons from '../Contact/ContactIcons';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-wide text-gray-600 uppercase">
            {/* My slogan goes here */}
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5651e5] to-[#729bf5]">
              Carson
            </span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a developer specializing in{' '}
            <span className="text-[#5651e5]">
              <a href="https://www.mongodb.com/mern-stack" target="_blank">
                MERN Stack
              </a>
            </span>{' '}
            web applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <ContactIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
