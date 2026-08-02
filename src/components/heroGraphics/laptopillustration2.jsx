import React, { useEffect, useState } from "react";

import kayboardBlue5dfb from "../../asset/kayboardBlue5dfb.webp";
import keyboardBase from "../../asset/keyboardBase.webp";
import laptopBase from "../../asset/laptopBase.webp";
import laptopBaseOutline from "../../asset/laptopBaseOutline.svg";
import laptopBaseUpper from "../../asset/laptopBaseUpper.webp";
import laptopShadow from "../../asset/laptopShadow.webp";
import laptopScreen from "../../asset/laptopScreen.svg";
import laptopScreenBack from "../../asset/laptopScreenBack.svg";
import laptopScreenUppeback from "../../asset/laptopScreenUppeback.svg";
import seondLaptopScreenText from "../../asset/seondLaptopScreenText.webp";

import bigCircle from "../../asset/mediumCircle.webp";
import smallCircle from "../../asset/smallCircle.webp";

import "./laptopillustration2.css";

const Laptop = () => {
  const [brightness, setBrightness] = useState(40);

  useEffect(() => {
    let value = 30;

    const interval = setInterval(() => {
      value += 3;
      if (value >= 100) clearInterval(interval);
      setBrightness(value);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper relative w-full h-full flex items-center justify-center mx-auto my-auto">
      <div className="animation-container relative flex items-center justify-center w-[600px] h-[500px] m-auto">
        <div className="floating-shapes-layer z-0 absolute inset-0 w-full h-full pointer-events-none">
          <img src={bigCircle} alt="shape" className="shape pos1" />
          <img src={bigCircle} alt="shape" className="shape pos2" />
          <img src={bigCircle} alt="shape" className="shape pos9" />
          
          <img src={smallCircle} alt="shape" className="shape pos6" />
          <img src={smallCircle} alt="shape" className="shape pos7" />

          <div className="shape pos3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#52b7aaff"
              strokeWidth="4"
              className="rounded-full"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>

          <div className="shape pos4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
              strokeLinecap="round"
            >
              <line x1="4" y1="4" x2="20" y2="20"></line>
              <line x1="20" y1="4" x2="4" y2="20"></line>
            </svg>
          </div>

          <div className="shape pos5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="4"
            >
              <polygon points="12,2 22,12 12,22 2,12" />
            </svg>
          </div>

          <div className="shape pos8">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#77efddff">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>
          <div className="shape extra-top-red-far">
            <svg width="6" height="6" viewBox="0 0 24 24" fill="#ef4444">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>

          <div className="shape extra-top-zink-ring">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="4">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>

          <div className="shape extra-top-blue">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="#38bdf8">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>

          <div className="shape extra-top-red">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="#ef4444">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>

          <div className="shape extra-left-blue">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="#38bdf8">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>

          <div className="shape extra-left-red">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="#ef4444">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>

          <div className="shape extra-left-orange-tiny">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#f97316">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>

          <div className="shape extra-right-orange-dot">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#ff7a3d">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>

        </div>

        <div
          className="scene z-10"
          style={{ filter: `brightness(${brightness}%)` }}
        >
          <div className="laptop">
           
            <div className="base">
              <img src={laptopShadow} className="img shadow" alt="" />
              <img src={laptopBase} className="img1" alt="" />
              <img src={laptopBaseOutline} className="img" alt="" />
              <img src={laptopBaseUpper} className="img2" alt="" />
              <img src={kayboardBlue5dfb} className="img3 glow" alt="" />
            </div>
            <div className="lid open">
              <img src={laptopScreenBack} className="imgLidBack" alt="" />
              <img src={laptopScreenUppeback} className="imgLidUpperBack" alt="" />
              <img src={laptopScreen} className="imgLidScreen" alt="" />
              <img src={seondLaptopScreenText} className="imgLidText" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;