"use client";
import {useEffect , useState}from "react";

export default function useWindowDimensions() {

  const [windowSize, setWindowSize] = useState({
    width: 1200  ,
    height: 800 ,
  });

  if(typeof window !== "undefined") {
    windowSize.width = window ? window.innerWidth: 1200 
    windowSize.height = window ? window.innerHeight: 800 
  }

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;

}

