import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, description, img }) => {
  return (
    <div className="hover:shadow-gray-500 hover:shadow-xl hover:scale-105 ease-in duration-300 relative flex items-center justify-center w-full h-auto p-4 rounded-xl shadow-lg shadow-gray-400 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image className="rounded-xl group-hover:opacity-10" src={img} alt="/" />
      <div className="absolute hidden group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center text-white">
          {title}
        </h3>
        <p className="pt-2 pb-4 text-center text-white">{description}</p>
        <Link href="/">
          <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
