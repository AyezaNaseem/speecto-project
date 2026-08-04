import React, { useState } from "react";
import './craftingillustration.css';
import reactIcon from "../../asset/reactIcon2.webp";
import img1 from "../../asset/bannerReactCircle1.webp";
import img2 from "../../asset/bannerReactCircle2.webp";
import img3 from "../../asset/bannerReactCircle3.webp";
import img4 from "../../asset/bannerReactCircle4.webp";

import LaptopIllustration from "./laptopillustration";
import MobileIllustration from "./mobileillustration";
import LaptopIllustration2 from "./laptopillustration2";
import TestingIllustration from "./testingillustration";

export default function CraftingIllustration() {
  const [activeGraphic, setActiveGraphic] = useState(null);

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
        
        {/* Circle 1 (Img 1 - LaptopIllustration2) */}
        <div 
          className="ti-orbit-item img-node moving-node mn-1"
          onMouseEnter={() => setActiveGraphic('laptop2')}
          onMouseLeave={() => setActiveGraphic(null)}
        >
          <img src={img1} alt="laptopillustration-2-icon" className="node-vector-img" />
        </div>

        {/* Circle 2 (Img 2 - MobileIllustration) */}
        <div 
          className="ti-orbit-item img-node moving-node mn-2"
          onMouseEnter={() => setActiveGraphic('mobile')}
          onMouseLeave={() => setActiveGraphic(null)}
        >
          <img src={img2} alt="mobile-illustration-icon" className="node-vector-img" />
        </div>

        {/* Circle 3 (Img 3 - LaptopIllustration1) */}
        <div 
          className="ti-orbit-item img-node moving-node mn-3"
          onMouseEnter={() => setActiveGraphic('laptop1')}
          onMouseLeave={() => setActiveGraphic(null)}
        >
          <img src={img3} alt="laptopillustration-1-icon" className="node-vector-img" />
        </div>

        {/* Circle 4 (Img 4 - TestingIllustration) */}
        <div 
          className="ti-orbit-item img-node moving-node mn-4"
          onMouseEnter={() => setActiveGraphic('testing')}
          onMouseLeave={() => setActiveGraphic(null)}
        >
          <img src={img4} alt="testing-illustration-icon" className="node-vector-img" />
        </div>

      </div>

      <div className="ci-center-stage">
        {(!activeGraphic || activeGraphic === 'default') && <img src={reactIcon} alt="reactIcon" className="ci-react-icon"/>}
        {activeGraphic === 'laptop1' && <div className="ci-center-graphic-component"><LaptopIllustration /></div>}
        {activeGraphic === 'mobile' && <div className="ci-center-graphic-component"><MobileIllustration /></div>}
        {activeGraphic === 'laptop2' && <div className="ci-center-graphic-component"><LaptopIllustration2 /></div>}
        {activeGraphic === 'testing' && <div className="ci-center-graphic-component"><TestingIllustration /></div>}
      </div>
    </div>
  );
}