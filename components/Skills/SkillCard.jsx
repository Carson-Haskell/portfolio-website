import Lottie from "lottie-react";

const SkillCard = ({ icon }) => {
  return (
    <div className="xl:w-full w-[80%] p-10 m-auto lg:mb-4 duration-300 ease-in shadow-lg cursor-pointer rounded-[10%] hover:shadow-2xl hover:scale-105 ">
      <div className="flex items-center justify-center">
        <div className="m-auto">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
