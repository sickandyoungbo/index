import React, { useRef } from "react";
import { useState, useEffect } from "react";

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isMapLoaded, setMapLoaded] = useState(false);

  const initMap = () => {
    const { naver } = window;
    const location = new naver.maps.LatLng(latitude, longitude);

    if (mapRef.current && naver) {
      const mapOptions = {
        center: location,
        zoom: 17,
      };

      const mapInstance = new naver.maps.Map(mapRef.current, mapOptions);

      const marker = new naver.maps.Marker({
        position: location,
        map: mapInstance,
      });

      naver.maps.Event.addListener(marker, "click", () => {
        mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
        mapInstance?.setZoom(17);
      });
    }
    
    // 지도 로드 완료
    setMapLoaded(true);
  };

  useEffect(() => {
    initMap();
  }, []);

  return (
    <>
      {isMapLoaded && (
        <div id="map" ref={mapRef} className="mt-5 h-[400px] border-[#cccccc] border-[0.5px] rounded-md" />
      )}
    </>
  );
};

export default Map;
