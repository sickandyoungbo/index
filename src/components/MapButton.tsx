import React, { MouseEventHandler } from "react";

interface MapButtonProps {
  iconUrl: string;
  name: string;
}

const MapButton = ({
  iconUrl,
  name
}: MapButtonProps) => {
  /** 지도 앱 연결 */
  const clickMapButton = (name: string) => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const appName = "sickandyoungbo.github.io";
    // 우리들교회 판교채플
    const encodedDestination = "%EC%9A%B0%EB%A6%AC%EB%93%A4%EA%B5%90%ED%9A%8C%20%ED%8C%90%EA%B5%90%EC%B1%84%ED%94%8C"

    if (name === 'TMAP') {
      window.location.href = `tmap://search?name=${encodedDestination}`
    }

    if (name === '네이버지도') {
      const clickedAt = +new Date();

      if (isAndroid) {
        // Android 네이버 지도 앱 스킴
        window.location.href = `intent://search?query${encodedDestination}=&appname=${appName}#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`;
      } else if (isIos) {
        // iOS 네이버 지도 앱 스킴
        window.location.href = `nmap://search?query=${encodedDestination}&appname=${appName}`;

        setTimeout(function() {
          // 만약 2초 이내에 앱이 열리지 않았다면, App Store로 이동
          if (+new Date() - clickedAt < 2000) {
            return window.location.href = 'http://itunes.apple.com/app/id311867728?mt=8';
          }
        }, 1500);
      }
    }

    if (name === '카카오맵') {
      window.location.href = `kakaomap://search?q=${encodedDestination}`;
    }
  }

  return (
    <button className='flex items-center p-3 border-[#CCCCCC] border-[0.5px] rounded-md' onClick={() => clickMapButton(name)}>
      <img className='w-7 mr-1' src={iconUrl} />
      <p className='pretendard font-medium text-sm'>{name}</p>
    </button>
  )
}

export default MapButton;