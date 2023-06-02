"use client";

import SkillCard from "./SkillCard";
import Lottie from "lottie-react";
import SkillAnim from "/public/assets/lotties/SkillAnim.json";
import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssPlain,
  GithubOriginal,
  NodejsOriginal,
  MongodbOriginal,
  ReduxOriginal,
} from "devicons-react";
import { AzuresqldatabaseOriginal, PrismaOriginal } from "@beta/devicons-react";

const Skills = () => {
  return (
    <div className="w-full p-2 mb-20 lg:h-[90%]">
      <div className="m-w-[1240px] mx-auto flex-col justify-end h-full items-end">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] mt-20 mb-2 md:mt-2 md:mb-6">
            Skills
          </p>
          <h2 className="text-gray-700">What I Can Do</h2>
          <Lottie
            animationData={SkillAnim}
            className="md:h-[50%] md:w-[50%] h-[80%] w-[80%] mb-16 lg:-mt-24 ease-in duration-500 hover:scale-105"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 px-2 xl:gap-12 xl:px-20 lg:gap-2 md:grid-cols-2 lg:grid-cols-4">
          <SkillCard icon={<Html5Original size="150" />} skill="HTML" />
          <SkillCard icon={<Css3Original size="150" />} skill="CSS" />
          <SkillCard
            icon={<JavascriptOriginal size="150" />}
            skill="JavaScript"
          />
          <SkillCard icon={<NodejsOriginal size="150" />} />
          <SkillCard icon={<ReactOriginal size="150" />} />
          <SkillCard icon={<NextjsOriginal size="150" />} />
          <SkillCard icon={<GithubOriginal size="150" />} />
          <SkillCard icon={<TailwindcssPlain size="150" />} />
          <SkillCard icon={<MongodbOriginal size="150" />} />
          <SkillCard icon={<AzuresqldatabaseOriginal size="150" />} />
          <SkillCard icon={<PrismaOriginal size="150" />} />
          <SkillCard icon={<ReduxOriginal size="150" />} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
