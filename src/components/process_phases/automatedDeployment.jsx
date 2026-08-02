import React from "react";
import './automatedDeployment.css';
import autoVideo from "../../asset/d1.mp4";

const AutomatedDeployment = () => {
    return (
        <div className="phase_container phase7_scope">
            <div className="phase7_header">
                <div className="phase7_header_line"></div>
                <div className="phase7_badge">7</div>
                <h3 className="phase7_title">AUTOMATED DEPLOYMENT</h3>
            </div>

            <p className="phase7_subtitle">
                Automated deployment ensures a smoother and safer production process by streamlining deployment, reducing human error, and allowing for faster and more consistent releases. It can be achieved through continuous integration and delivery tools, leading to an efficient and reliable production process.
            </p>

            <div className="phase7_illustration_wrapper">
                <div className="mock_illustration phase7_illustration auto-canvas">
                    <video 
                        src={autoVideo} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="auto_main_video" 
                    />
                </div>
            </div>
        </div>
    );
};

export default AutomatedDeployment;