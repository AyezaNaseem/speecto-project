import React from "react";
import './craftingillustration.css';
import reactIcon from "../../asset/reactIcon2.webp";
import img1 from "../../asset/bannerReactCircle1.webp";
import img2 from "../../asset/bannerReactCircle2.webp";
import img3 from "../../asset/bannerReactCircle3.webp";
import img4 from "../../asset/bannerReactCircle4.webp";

export default function CraftingIllustration() {
  return (
    <div className="ci-container">
      <div className="ci-orbit-path-static">
        <div className="sub-orbit s1-1"><span className="inner-dot"></span></div>
        <div className="center-dot c1"></div>
        <div className="sub-orbit s1-2"><span className="inner-dot"></span></div>
        <div className="ti-orbit-item item-1"></div>

        <div className="sub-orbit s2-1"><span className="inner-dot"></span></div>
        <div className="center-dot c2"></div>
        <div className="sub-orbit s2-2"><span className="inner-dot"></span></div>
        <div className="ti-orbit-item item-2"></div>

        <div className="sub-orbit s3-1"><span className="inner-dot"></span></div>
        <div className="center-dot c3"></div>
        <div className="sub-orbit s3-2"><span className="inner-dot"></span></div>
        <div className="ti-orbit-item item-3"></div>

        <div className="sub-orbit s4-1"><span className="inner-dot"></span></div>
        <div className="center-dot c4"></div>
        <div className="sub-orbit s4-2"><span className="inner-dot"></span></div>
        <div className="ti-orbit-item item-4"></div>

        <div className="sub-orbit s5-1"><span className="inner-dot"></span></div>
        <div className="center-dot c5"></div>
        <div className="sub-orbit s5-2"><span className="inner-dot"></span></div>
        <div className="ti-orbit-item item-5"></div>

        <div className="sub-orbit s6-1"><span className="inner-dot"></span></div>
        <div className="center-dot c6"></div>
        <div className="sub-orbit s6-2"><span className="inner-dot"></span></div>
        <div className="ti-orbit-item item-6"></div>

        <div className="sub-orbit s7-1"><span className="inner-dot"></span></div>
        <div className="center-dot c7"></div>
        <div className="sub-orbit s7-2"><span className="inner-dot"></span></div>
        <div className="ti-orbit-item item-7"></div>

        <div className="sub-orbit s8-1"><span className="inner-dot"></span></div>
        <div className="center-dot c8"></div>
        <div className="sub-orbit s8-2"><span className="inner-dot"></span></div>
        <div className="ti-orbit-item item-8"></div>
        
        <div className="ti-orbit-item img-node moving-node mn-1">
          <img src={img1} alt="node-img" className="node-vector-img" />
        </div>
        <div className="ti-orbit-item img-node moving-node mn-2">
          <img src={img2} alt="node-img" className="node-vector-img" />
        </div>
        <div className="ti-orbit-item img-node moving-node mn-3">
          <img src={img3} alt="node-img" className="node-vector-img" />
        </div>
        <div className="ti-orbit-item img-node moving-node mn-4">
          <img src={img4} alt="node-img" className="node-vector-img" />
        </div>

      </div>
      <img src={reactIcon} alt="reactIcon" className="ci-react-icon"/>
    </div>
  );
}