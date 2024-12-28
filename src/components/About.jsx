import React from "react";
const About = () => {
  return (
    <div className="flex flex-col grid-cols-5 items-center justify-center my-[60px] px-[30px] sm:px-[50px] mx-auto h-full gap-10 xl:grid">
      <div className="grid-about-1 w-full h-full flex flex-col justify-between bg-primary py-[50px] rounded-[10px] drop-shadow-md">
        <h5 className="text-white text-center mb-10 font-bold text-[48px] leading-none">
          من نحن
        </h5>
        <div className="text-[14px] text-center mb-10 flex flex-col gap-4 px-4 text-white font-bold leading-5 sm:leading-none lg:text-[18px] sm:px-0">
          <p className="">نحن شركة اخوين العقارية</p>
          <p className="">
            التي تقوم بأنشاء مجموعات ضخمه من الوحدات السكنية نحن شركة
          </p>
          <p className="">اخوين العقارية احدي مشاريع مجموعة التي تقوم بأنشاء</p>
          <p className=""> مجموعات ضخمه من الوحدات السكنية</p>
          <p className=""> شركة اخوين العقارية</p>
        </div>
        <div className="text-left cursor-pointer ml-10 text-white font-bold text-[12px] leading-none lg:text-[14px]">
          قراءة المزيد
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center flex-1 w-full gap-2 grid-about-2 xl:flex-col">
        <div className=" py-10 w-full bg-about-2 px-5 rounded-[10px] drop-shadow-md lg:py-8 lg:px-[50px] sm:w-max">
          <h5 className="text-white text-center mb-10 font-bold text-[48px] leading-none">
            الرؤيه
          </h5>
          <p className="text-[14px] text-center mb-10 text-white font-bold leading-none lg:text-[18px]">
            نحن شركة اخوين العقارية احدي مشاريع مجموعة
          </p>
          <div className="text-left cursor-pointer ml-10 text-white font-bold text-[14px] leading-none">
            قراءة المزيد
          </div>
        </div>
        <div className=" py-10 w-full  bg-about-1 px-5 rounded-[10px] drop-shadow-md lg:py-8 lg:px-[50px] sm:w-max">
          <h5 className="text-white text-center mb-10 font-bold text-[48px] leading-none">
            مهمتنا
          </h5>
          <p className="text-[14px] text-center mb-10 text-white font-bold leading-none lg:text-[18px]">
            نحن شركة اخوين العقارية احدي مشاريع مجموعة
          </p>
          <div className="text-left cursor-pointer ml-10 text-white font-bold text-[14px] leading-none">
            قراءة المزيد
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
