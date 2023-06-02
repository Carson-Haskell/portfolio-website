const SkillCard = ({ icon, siteUrl }) => {
  return (
    <div className="xl:w-full w-[80%] p-10 m-auto lg:mb-4 duration-300 ease-in shadow-lg cursor-pointer rounded-[10%] hover:shadow-2xl hover:scale-105 lg:hover:scale-110">
      <div className="flex items-center justify-center">
        <a href={siteUrl} target="_blank" rel="noopener noreferrer">
          <div className="m-auto">{icon}</div>
        </a>
      </div>
    </div>
  );
};

export default SkillCard;
