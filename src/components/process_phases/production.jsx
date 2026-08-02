import React from "react";
import './production.css';
import prodVideo from "../../asset/ps.mp4";

const Production = () => {
    return (
        <div className="phase_container phase6_scope">
            <div className="phase6_header">
                <div className="phase6_header_line"></div>
                <div className="phase6_badge">6</div>
                <h3 className="phase6_title">PRODUCTION</h3>
            </div>

            <p className="phase6_subtitle">
                Taking a product into production involves finalizing development, testing, preparing for deployment, and coordinating with operations and support teams. The process may vary based on the product and the organization's specific needs. Once completed, the product is released to the public for use.
            </p>

            <div className="phase6_illustration_wrapper">
                <div className="mock_illustration phase6_illustration prod-canvas">
                    <video 
                        src={prodVideo} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="prod_main_video" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Production;