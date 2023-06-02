"use client";

import Lottie from "lottie-react";
import Programmer from "/public/assets/lotties/Programmer.json";
import useSound from "use-sound";
import typingSfx from "/public/assets/mp3s/typing.mp3";

const About = () => {
  const [play, { stop }] = useSound(typingSfx, { volume: 0.5 });

  return (
    <div className="flex items-center justify-between w-full p-2 lg:pb-44 lg:mb-10 md:h-screen lg:h-[70%]">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="self-center col-span-2 ">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            My name is Carson Haskell Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Optio aspernatur quas vel fuga expedita sequi
            fugiat quisquam voluptates, et quae placeat labore sed nemo sapiente
            sunt eius nam, tempora impedit.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            maxime aspernatur doloremque nostrum totam voluptatibus, expedita
            qui accusamus laborum earum modi soluta quos sapiente! Quam ex enim
            quaerat autem officiis?
          </p>
        </div>
        <div
          className="ease-in w-[60%] h-[60%] m-auto mt-12 duration-500 md:m-auto md:p-4 md:h-auto md:w-full md:justify-center md:items-center md:flex shadow-gray-400 rounded-xl hover:scale-110"
          onMouseEnter={() => play()}
          onMouseLeave={() => stop()}
        >
          <Lottie animationData={Programmer} className="drop-shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
