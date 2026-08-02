import React from "react";
import "./mobileillustration.css";
import mobileSvg from "../../asset/mobile5.svg";
import shadowSvg from "../../asset/shadow.svg";
import v1 from "../../asset/v1.svg"; 
import v2 from "../../asset/v2.svg"; 
import f1 from "../../asset/f1.svg"; 

export default function MobileIllustration() {
  return (
    <div className="mob-wrapper">
      <img src={shadowSvg} alt="" className="mob-shadow" aria-hidden="true" />
      <img src={mobileSvg} alt="Mobile app illustration" className="mob-main mob-entrance" />
      <img src={v1} alt="" className="mob-asset mob-diamond-top mob-float1" aria-hidden="true" />
      <img src={v1} alt="" className="mob-asset mob-diamond-wire-1 mob-float2" aria-hidden="true" />
      <img src={v1} alt="" className="mob-asset mob-diamond-wire-2 mob-float3" aria-hidden="true" />
      <img src={f1} alt="" className="mob-asset mob-lines-top mob-float3" aria-hidden="true" />
      <img src={v2} alt="" className="mob-asset mob-lines-bottom mob-float1" aria-hidden="true" />
    </div>
  );
}