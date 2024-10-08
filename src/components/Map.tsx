import React from "react";
import { useState, useEffect } from "react";

let mapInstance: naver.maps.Map | undefined;

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  // 지도 로딩 상태
  const [isMapLoaded, setMapLoaded] = useState(false);

  const initMap = () => {
    // 추가 옵션 설정
    const mapOptions = {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 17,
    };

    // 지도 초기화 확인
    if (document.getElementById("map")) {
      mapInstance = new naver.maps.Map("map", mapOptions);
    }

    // Marker 생성
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapInstance,
    });

    // Marker 클릭 시 지도 초기화
    naver.maps.Event.addListener(marker, "click", () => {
      mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
      mapInstance?.setZoom(17);
    });

    // 지도 로드 완료
    setMapLoaded(true);
  };

  useEffect(() => {
    // 스크립트 로딩 확인
    if (typeof naver === "undefined" || !naver.maps) {
      loadScript(
        "https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ara9y50yn3",
        initMap
      );
    } else {
      initMap();
    }
  }, [latitude, longitude]);

  return (
    <>
      {isMapLoaded && (
        <div id="map" className="mt-5 h-[400px] border-[#cccccc] border rounded-lg" />
      )}
    </>
  );
};

export default Map;
