import naturesNorthwest from '/public/assets/projects/natures-northwest.png';
import smartBrain from '/public/assets/projects/smart-brain.png';
import chuckNorris from '/public/assets/projects/chuck-norris.png';
import todos from '/public/assets/projects/todos.png';
import ProjectItem from './ProjectItem';

const PROJECTS = [
  {
    title: "Nature's Northwest",
    description: 'A PNW hiking blog built with React.js',
    img: naturesNorthwest,
  },
  {
    title: 'Smart Brain',
    description:
      'A fullstack facial recognition app built with React.js and Node.js',
    img: smartBrain,
  },
  {
    title: 'Chuck Norris Jokes',
    description: 'A Chuck Norris joke generator built with Svelte/SvelteKit',
    img: chuckNorris,
  },
  {
    title: 'Simple Todos',
    description: 'A simple yet elegant todo app built with Svelte',
    img: todos,
  },
];

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid gap-8 px-2 pt-6 lg:px-0 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              description={project.description}
              img={project.img}
              url="/project"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;