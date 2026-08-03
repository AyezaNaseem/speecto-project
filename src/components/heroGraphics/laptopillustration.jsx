import React from "react";
import "./laptopillustration.css";
import roundChartsFixed from "../../asset/psRound1_fixed.webp"; 
import roundChartsBack from "../../asset/psRound2.webp";
import manImg from "../../asset/man.webp";
import stepsBase from "../../asset/steps.webp";
import stepsBottom from "../../asset/stepsBottom.webp"; // New Bottom Glow/Shadow Layer

export default function LaptopIllustration() {
  return (
    <div className="laptop-graphic">
      <img src={stepsBottom} alt="" className="lg-steps-bottom" aria-hidden="true" />
      <img src={roundChartsBack} alt="" className="lg-charts-back float-back" aria-hidden="true" />
      <img src={stepsBase} alt="" className="lg-steps" aria-hidden="true" />
      <img src={manImg} alt="Web development team illustration" className="lg-man lg-man--enter" />
      <img src={roundChartsFixed} alt="" className="lg-charts float-medium" aria-hidden="true" />
    </div>
  );
}