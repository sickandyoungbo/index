import React, { useEffect, useRef, useState } from "react";
import "../style/main.css";

const Main = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const videoRef = useRef(null);
  

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if(videoEnded) {
      interval = setInterval(() => {
        setFadeIn(false); 
        setTimeout(() => {
          setFadeIn(true); 
        }, 2000); 
      }, 4000); 
    }
    

    return () => clearInterval(interval);
  }, [videoEnded]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  }

  return (
    <div className="w-full relative h-screen">
      <div className="video-container">
        <video
          src='/videos/main2.mp4'
          ref={videoRef}
          autoPlay muted playsInline
          className={`w-screen h-screen ${videoEnded ? 'hidden' : 'block'}`}
          onEnded={handleVideoEnd}
        />
      </div>
      {
        videoEnded && (
          <div className={`w-full h-screen bg-[url('./assets/images/main.jpg')] bg-center bg-cover bg-no-repeat ${videoEnded ? 'img-fade-in' : 'opacity-0'}`}>
            <div className="w-full absolute bottom-[97px] text-center text-white flex justify-center items-center">
              <p className={`text-xl dream-cottage ${fadeIn ? 'fade-in' : 'fade-out'} absolute`}>
                Sick Asked<span className={'croisan text-[15px]'}>&nbsp;&</span>
              </p>
              <p className={`text-xl dream-cottage ${fadeIn ? 'fade-out' : 'fade-in'}`}>
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