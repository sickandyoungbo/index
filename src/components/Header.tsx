import React from "react";
import "../style/header.css";

const Header = () => {
  return (
    <div className="flex justify-between w-full header px-5 py-2 items-center sticky">
      <p className="text-lg dream-cottage pt-1">2024-12-07 Sat. 11A.M.</p>
      <button className="text-[11px] border-black border rounded-[6.5px] py-2 px-[25px] pretendard">오시는 길</button>
    </div>
  );
}

export default Header;