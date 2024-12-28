import React from "react";
import logo from "../assets/logo.png";
import { down, login, navbarIcon } from "../assets/icons";

const Navbar = () => {

  return (
    <div className="relative">
      <div className="absolute z-10 flex items-center justify-between w-full px-5 py-3 bg-navbar_bg">
        <div className="flex w-full">
          <img className="h-24 ml-4 logo" src={logo} alt="logo" />
          <ul className=" items-center gap-4 text-white font-bold text-[20px] leading-none hidden lg:flex">
            <li className="cursor-pointer">الرئيسية</li>
            <div className="w-[1px] h-[40px] bg-white "></div>
            <li className="flex items-center justify-center gap-1 cursor-pointer">
              من نحن
              {down}
            </li>
            <li className="cursor-pointer">مشاريعنا</li>
            <li className="cursor-pointer">شركاء النجاح</li>
            <li className="cursor-pointer">التوظيف</li>
            <li className="cursor-pointer">المدونة</li>
            <li className="cursor-pointer">اجازاتنا</li>
          </ul>
        </div>
        <div className="items-center justify-center hidden gap-3 lg:flex">
          <button className="text-white py-[22px] px-[30px] font-bold text-[20px] leading-none my-0 bg-primary">
            المنصة&nbsp;العقارية
          </button>
          <div className="w-[1px] h-[40px] bg-white "></div>
          {login}
        </div>
        <div className="flex cursor-auto lg:hidden">
          {navbarIcon}
        </div>
        <input
          type="checkbox"
          className="w-[40px] h-[40px] z-10 left-5 opacity-0 absolute block lg:hidden"
          name=""
          id="menu-checkbox"
        />

        <ul
          id="menu"
          className={`absolute items-center justify-evenly text-primary 
                    top-[120px] left-[0px] font-bold text-[26px] py-10 px-5 leading-none flex-col 
                    flex w-1/2 h-[85vh] bg-white lg:hidden`}
        >
          <li className="cursor-pointer">الرئيسية</li>
          <li className="flex items-center justify-center gap-1 cursor-pointer">
            من نحن
            {down}
          </li>
          <li className="cursor-pointer">مشاريعنا</li>
          <li className="cursor-pointer">شركاء النجاح</li>
          <li className="cursor-pointer">التوظيف</li>
          <li className="cursor-pointer">المدونة</li>
          <li className="cursor-pointer">اجازاتنا</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

