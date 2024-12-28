import React from "react";
import img from "../assets/promo_video_factory-640x480.jpg.png";
import { doupleArrow } from "../assets/icons";
import HeaderText from "../utilities/HeaderText";
import ProjectsImg from "../utilities/ProjectsImg";
const OurProjects = () => {
  return (
    <div className="flex flex-col my-[180px] px-[50px] gap-[120px] sm:px-[100px] sm:gap-[200px] md:px-[150px]">
      <div className="flex-col flex items-center md:items-start gap-[120px] sm:gap-[220px] xl:flex-row">
        <div className="relative flex justify-end w-max">
          <ProjectsImg img={img} icon={doupleArrow} color={"promo-img-bg-1"} />
          <div className="more-btn absolute flex flex-col items-center cursor-pointer left-[-63px] md:left-[-83px] top-1/2">
            {doupleArrow}
            <p className="font-bold text-white text-[15px]">المزيد</p>
          </div>
        </div>
        <div className="flex-1">
          <HeaderText header={"مشاريعنا"} />
          <p className="text-secondary_text text-[18px] leading-[32px] mt-8">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء القارئ عن
            التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي
            يقرأها. ولذلك يتم.
          </p>
        </div>
      </div>
      <div className="flex-col-reverse items-center md:items-end gap-[120px] sm:gap-[220px] flex xl:flex-row xl:items-center">
        <div className="flex-1">
          <HeaderText header={""} />
          <p className="text-secondary_text text-[18px] leading-[32px] mt-8">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء القارئ عن
            التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي
            يقرأها. ولذلك يتم.
          </p>
        </div>
        <ProjectsImg img={img} icon={doupleArrow} color={"promo-img-bg-2"} />  
      </div>
    </div>
  );
};

export default OurProjects;
