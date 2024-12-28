import React from "react";
import { earthIcon, mailIcon, phoneIcon, whatsAppIcon } from "../assets/icons";

const HeaderIcons = () => {
  return (
    <>
      <div className="absolute right-0 z-10 flex flex-col gap-1 top-1/3 lg:top-1/2">
        <div className="w-[67px] h-[45px] bg-green flex items-center justify-center cursor-pointer">
          {whatsAppIcon}
        </div>
        <div className="w-[67px] h-[45px] bg-primary flex items-center justify-center cursor-pointer">
          {mailIcon}
        </div>
        <div className="w-[67px] h-[45px] bg-dark_gray flex items-center justify-center cursor-pointer">
          {phoneIcon}
        </div>
      </div>
      <div className="absolute left-0 top-[40%] lg:top-1/2 z-10 w-[58px] h-[60px] bg-white flex items-center justify-center cursor-pointer">
        {earthIcon}
      </div>
    </>
  );
};

export default HeaderIcons;
