import React from "react";
import "../style/header.css";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="flex justify-between w-full header px-5 py-[12.5px] items-center sticky top-0 bg-white z-[999]">
      <p className=" text-[22px] dream-cottage pt-1">2024-12-07 Sat. 11A.M.</p>
      <div className="text-[17px] border-black border rounded-[13px] p-[14px] pretendard">
        <Link to="location" smooth={true}>오시는 길</Link>
      </div>
    </div>
  );
}

export default Header;