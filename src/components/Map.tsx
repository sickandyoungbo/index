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
  };

  useEffect(() => {
    if (typeof window.naver !== "undefined") {
      initMap();
    } else {
      const existingScript = document.querySelector('script[src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ara9y50yn3"]') as HTMLScriptElement;
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://openapi.map.naver.com/oapi/v3/maps.js?ncpClientId=ara9y50yn3";
        script.onload = () => initMap();
        document.head.appendChild(script);
      } else {
        existingScript.onload = () => initMap();
      }
    }
  }, [latitude, longitude]);

  return (
      <div id="map" ref={mapRef} className="mt-5 h-[400px] border-[#cccccc] border-[0.5px] rounded-md"></div>
  );
};

export default Map;
