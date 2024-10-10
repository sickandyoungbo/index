import React from "react";
import "../style/header.css";

const Header = () => {
  return (
    <div className="flex justify-between w-full header px-5 py-[12.5px] items-center sticky top-0 z-10 bg-white">
      <p className=" text-[22px] dream-cottage pt-1">2024-12-07 Sat. 11A.M.</p>
      <button className="text-[17px] border-black border rounded-[13px] p-[14px] pretendard">오시는 길</button>
    </div>
  );
}

export default Header;