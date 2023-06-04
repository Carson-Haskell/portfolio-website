const SkillCard = ({ icon, siteUrl, skill }) => {
  return (
    <div className="w-[80%] hover:shadow-gray-500 shadow-gray-400 p-10 m-auto lg:mb-4 duration-300 ease-in shadow-lg cursor-pointer rounded-[10%] hover:shadow-2xl hover:scale-105 lg:hover:scale-110 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <div className="flex items-center justify-center">
        <a href={siteUrl} target="_blank" rel="noopener noreferrer">
          <div className="m-auto group-hover:opacity-10">{icon}</div>
          <div className="absolute hidden group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p className="text-xl font-bold tracking-wider text-center text-white lg:text-2xl ">{skill}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SkillCard;
