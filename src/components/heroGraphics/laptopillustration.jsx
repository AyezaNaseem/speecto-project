import React from "react";
import "./laptopillustration.css";
import roundChartsFixed from "../../asset/psRound1_fixed.webp"; 
import manImg from "../../asset/man.webp";
import stepsBase from "../../asset/steps.webp";

export default function LaptopIllustration() {
  return (
    <div className="laptop-graphic">
      <img src={stepsBase} alt="" className="lg-steps" aria-hidden="true" />
       <img src={manImg} alt="Web development team illustration" className="lg-man lg-man--enter" />
      <img src={roundChartsFixed} alt="" className="lg-charts float-medium" aria-hidden="true" />
    </div>
  );
}