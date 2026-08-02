import React from "react";
import './development.css';
import devMan from "../../asset/developmentMan.webp";
import devLights from "../../asset/developmentLights.webp";
import devChart from "../../asset/developmentChart.webp";
import settingGear from "../../asset/setting.png";

const Development = () => {
    return (
        <div className="phase_container phase4_scope">
            <div className="phase4_header">
                <div className="phase4_header_line"></div>
                <div className="phase_badge phase4_badge">4</div>
                <h3 className="phase_title phase4_title">DEVELOPMENT</h3>
            </div>

            <div className="phase_content_grid">
                <div className="phase_timeline_side phase4_timeline">
                    <div className="timeline_line phase4_line"></div>
                    
                    {/* Step 1: Using Scrum */}
                    <div className="timeline_node phase4_node">
                        <div className="node_content phase4_content">
                            <div className="sd_node_icon_wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#64748b" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4C8.13 4 5 7.13 5 11h3l-4 5-4-5h3c0-5.01 4.09-9 9-9 3.19 0 6.01 1.65 7.61 4.15l-1.63 1.18C16.64 5.56 14.45 4 12 4zm8 3l-1.61 1.19C19.36 9.94 20 11.91 20 14c0 3.87-3.13 7-7 7-3.87 0-7-3.13-7-7H4c0 5.01 4.09 9 9 9s9-3.99 9-9c0-2.61-.83-5.03-2.24-7z"/>
                                </svg>
                            </div>
                            <h4 className="node_title">Using Scrum</h4>
                            <p className="node_desc">
                                At our software development company, we use the Scrum framework to develop software iteratively, in close collaboration with our clients, emphasizing flexibility, continuous improvement, and rapid delivery of high-quality software products. By using Scrum, we prioritize customer satisfaction, team communication, and product adaptability, ensuring that we meet the evolving needs of our clients throughout the software development lifecycle.
                            </p>
                        </div>
                        <div className="node_dot phase4_dot"></div>
                    </div>
                    
                    {/* Step 2: Code Quality */}
                    <div className="timeline_node phase4_node">
                        <div className="node_content phase4_content">
                            <div className="sd_node_icon_wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none"/>
                                    <line x1="2" y1="9" x2="22" y2="9"/>
                                    <circle cx="5" cy="6.5" r="0.5" fill="#64748b"/>
                                    <circle cx="8" cy="6.5" r="0.5" fill="#64748b"/>
                                    <circle cx="11" cy="6.5" r="0.5" fill="#64748b"/>
                                    <path d="M7 13l-2 2 2 2"/>
                                    <path d="M11 13l2 2-2 2"/>
                                </svg>
                            </div>
                            <h4 className="node_title">Code Quality</h4>
                            <p className="node_desc">
                                Emphasizing code quality is crucial to achieving superior software quality, and we achieve this through various techniques such as automated testing, code reviews, and strict adherence to coding standards. By prioritizing the quality of the code, we can create a highly reliable, maintainable, and efficient software product that meets the ever-changing demands of our clients.
                            </p>
                        </div>
                        <div className="node_dot phase4_dot"></div>
                    </div>
                </div>
                
                <div className="phase_graphic_side">
                    <div className="mock_illustration phase4_illustration">
                        <div className="dev-canvas">
                            <div className="bg-frames-wrapper">
                                <div className="bg-frame frame-left">
                                    <img src={settingGear} alt="" className="dev-gear gear-1" aria-hidden="true" />
                                    <img src={settingGear} alt="" className="dev-gear gear-2" aria-hidden="true" />
                                    <img src={settingGear} alt="" className="dev-gear gear-3" aria-hidden="true" />
                                </div>

                                <div className="bg-frame frame-right">
                                    <img src={settingGear} alt="" className="dev-gear gear-4" aria-hidden="true" />
                                    <img src={settingGear} alt="" className="dev-gear gear-5" aria-hidden="true" />
                                    <img src={settingGear} alt="" className="dev-gear gear-6" aria-hidden="true" />
                                    <img src={settingGear} alt="" className="dev-gear gear-7" aria-hidden="true" />
                                    <div className="bar-chart">
                                        <img src={devLights} alt="Bar Chart" className="dev-bar-chart" />
                                    </div>
                                </div>
                            </div>

                            <div className="dev-orange-card">
                                <div className="card-header-orange">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                                <div className="card-body">
                                    <img src={devChart} alt="Pie Chart" className="dev-pie-chart" />
                                </div>
                            </div>

                            <img src={devMan} alt="Development Phase" className="dev-main-people" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Development;