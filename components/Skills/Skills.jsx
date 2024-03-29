'use client';

import SkillCard from './SkillCard';
import Lottie from 'lottie-react';
import SkillAnim from '/public/assets/lotties/SkillAnim.json';
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
  SveltePlain,
} from 'devicons-react';
import { AzuresqldatabaseOriginal, PrismaOriginal } from '@beta/devicons-react';

const SKILLS = [
  {
    name: 'HTML',
    icon: <Html5Original size="100" />,
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5#',
    id: 1,
  },
  {
    name: 'CSS',
    icon: <Css3Original size="100" />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    id: 2,
  },
  {
    name: 'JavaScript',
    icon: <JavascriptOriginal size="100" />,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    id: 3,
  },
  {
    name: 'React.js',
    icon: <ReactOriginal size="100" />,
    url: 'https://react.dev',
    id: 4,
  },

  {
    name: 'Next.js',
    icon: <NextjsOriginal size="100" />,
    url: 'https://nextjs.org',
    id: 5,
  },
  {
    name: 'Svelte',
    icon: <SveltePlain size="100" />,
    url: 'https://svelte.dev',
    id: 6,
  },
  {
    name: 'Redux',
    icon: <ReduxOriginal size="100" />,
    url: 'https://react-redux.js.org',
    id: 7,
  },
  {
    name: 'Tailwind',
    icon: <TailwindcssPlain size="100" />,
    url: 'https://tailwindcss.com',
    id: 8,
  },
  {
    name: 'Node.js',
    icon: <NodejsOriginal size="100" />,
    url: 'https://nodejs.org/en/about',
    id: 9,
  },

  {
    name: 'MongoDB',
    icon: <MongodbOriginal size="100" />,
    url: 'https://www.mongodb.com',
    id: 10,
  },
  {
    name: 'SQL',
    icon: <AzuresqldatabaseOriginal size="100" />,
    url: 'https://aws.amazon.com/what-is/sql/',
    id: 11,
  },

  {
    name: 'Prisma',
    icon: <PrismaOriginal size="100" />,
    url: 'https://www.prisma.io',
    id: 12,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 mb-20 lg:h-[90%]">
      <div className="m-w-[1240px] mx-auto flex-col justify-end h-full items-end">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] mt-20 mb-2 md:mt-2 md:mb-6">
            Skills
          </p>
          <h2 className="text-gray-700">What I Can Do</h2>
          <Lottie
            animationData={SkillAnim}
            className="md:h-[50%] md:w-[50%] h-[80%] w-[80%] mb-16 lg:mb-0 lg:pb-0 lg:-mt-24 ease-in duration-500 hover:scale-105"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 xl:gap-12 md:gap-8 xl:px-36 lg:px-24 md:px-14 lg:gap-4 md:grid-cols-4">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              siteUrl={skill.url}
              skill={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
