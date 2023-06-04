import blog from "/public/assets/projects/blog.png";
import library from '/public/assets/projects/library.png';
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid gap-8 px-2 pt-6 lg:px-0 md:grid-cols-2">
          <ProjectItem
            title="Simple Blog"
            description="A React.js Project"
            img={blog}
          />
          <ProjectItem
            title="Simple Library"
            description="A React.js Project"
            img={library}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
