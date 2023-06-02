import Lottie from "lottie-react";

const SkillCard = ({ icon, skill }) => {
  return (
    <div className="p-6 duration-300 ease-in shadow-lg hover:shadow-2xl hover:scale-100 rounded-xl">
      <div className="grid items-center justify-center grid-cols-2 gap-4">
        <div className="m-auto">
          {icon}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{skill}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
