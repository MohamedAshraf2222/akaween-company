import React from "react";

const ProjectsImg = ({ img ,icon,color}) => {
  return (
    <div className="relative flex justify-end w-max">
      <div className={`promo-img ${color}`}>
        <img className="w-[300px] md:w-full" src={img} alt="img" />
      </div>
      <div className="more-btn absolute flex flex-col items-center cursor-pointer left-[-63px] md:left-[-83px] top-1/2">
        {icon}
        <p className="font-bold text-white text-[15px]">المزيد</p>
      </div>
    </div>
  );
};

export default ProjectsImg;
