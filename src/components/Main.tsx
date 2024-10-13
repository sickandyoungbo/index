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
      }, 500); 
    }, 2200); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      <img src={mainImageUrl} />
    </div>
  );
}

export default Main;