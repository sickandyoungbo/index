import React, { useEffect, useState } from "react";
import mainImageUrl from "../assets/images/image_main.png";
import "../style/main.css";

const Main = () => {
  const texts = ["Sick Asked", "Youngbo Said Yes."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeIn(true); 
      }, 600); 
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      <img src={mainImageUrl} />
      <div className="w-full absolute top-1/2 text-center text-white -translate-y-1/2 flex justify-center items-center">
        <p className={`text-[27px] dream-cottage ${fadeIn ? 'fade-in' : 'fade-out'}`}>
          {texts[currentIndex]}
          {currentIndex === 0 && <span className={'croisan text-xl'}>&nbsp;&</span>}
        </p>
        
      </div>
      <div className="absolute bottom-[50px] w-full text-center text-white text-[10px] leading-[16px]">
        <p>2024.12.07. 토요일 오전 11시</p>
        <p>경기도 성남시 분당구 안양판교로 1219</p>
        <p className="pt-1">우리들교회 판교채플 7층(탄설홀)</p>
      </div>
    </div>
  );
}

export default Main;