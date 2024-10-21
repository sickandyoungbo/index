import React, { useEffect, useRef, useState } from "react";
import "../style/main.css";
import saveTheDateGifUrl from '../assets/images/save-the-date.gif'

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [introEnded, setIntroEnded] = useState(false);
  const [introStarted, setIntroStarted] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    if (introStarted) {
      setTimeout(() => {
        setIntroEnded(true);
      },  5440);
    }
    
    let interval: string | number | NodeJS.Timeout | undefined;
    if (introEnded) {
      setTimeout(() => {
        setShowSecondText(true);
      }, 2000);

      interval = setInterval(() => {
        setFadeIn(prev => !prev); 
      }, 2000); 

    }
    

    return () => clearInterval(interval);
  }, [introStarted, introEnded]);

  const handleGifLoad = () => {
    setIsLoading(false);
    setIntroStarted(true);
  }

  return (
    <div className="w-screen relative h-dvh">
      {
        !introEnded && (
          <img className={`${isLoading ? 'opacity-0' : 'opacity-1'} w-screen h-dvh`} src={saveTheDateGifUrl} onLoad={handleGifLoad} />
        )
      }
      {
        introEnded && (
          <div className={`w-screen h-dvh bg-[url('./assets/images/main.jpg')] bg-center bg-cover bg-no-repeat ${introEnded ? 'img-fade-in' : 'opacity-0'}`}>
            <div className="w-full absolute bottom-[97px] text-center text-white h-[30px] flex justify-center items-center">
              <p className={`text-xl dream-cottage ${fadeIn ? 'fade-in' : 'fade-out'} text-center absolute top-0`}>
                Sick Asked<span className={'croisan text-[15px]'}>&nbsp;&</span>
              </p>
              <p className={`text-xl dream-cottage text-center absolute top-0 ${fadeIn ? showSecondText && 'fade-out' : 'fade-in'} ${!showSecondText && 'opacity-0'}`}>
                Youngbo Said Yes.
              </p>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Main;