import React from "react";
import "../style/header.css";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="flex justify-between w-full header px-5 py-[12.5px] items-center sticky top-0 bg-white z-[9999]">
      <p className=" text-xl dream-cottage pt-1">2024-12-07 Sat. 11A.M.</p>
      <div className="text-sm border-black border rounded-lg py-2 px-3">
        <Link to="location" smooth={true}>오시는 길</Link>
      </div>
    </div>
  );
}

export default Header;