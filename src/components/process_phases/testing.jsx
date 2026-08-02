import React from "react";
import './testing.css';

import testingGear1 from "../../asset/testingGear1.webp";
import testingGear2 from "../../asset/testingGear2.webp";
import testingPlane from "../../asset/testingPlane.webp";
import testingTag from "../../asset/testingTag.webp";
import pana1 from "../../asset/pana1.webp";
import pana2 from "../../asset/pana2.webp";
import testingScreenStand from "../../asset/testingScreenStand.webp";
import testingMan from "../../asset/testingMan.webp"; 

// Bug assets import
import pundi1 from "../../asset/pundi1.webp";
import pundi2 from "../../asset/pundi2.webp";
import pundi3 from "../../asset/pundi3.webp";

const Testing = () => {
    return (
        <div className="phase_container phase5_scope">
            <div className="phase5_header">
                <div className="phase5_header_line"></div>
                <div className="phase5_badge">5</div>
                <h3 className="phase5_title">TESTING</h3>
            </div>

            <p className="phase5_subtitle">
                By employing various testing strategies such as unit, integration, integration testing, and end-to-end testing, we identify and fix defects early in the development process, leading to a highly reliable and performant software product that meets the requirements of our clients.
            </p>

            <div className="phase5_content_grid">
                <div className="phase5_graphic_side">
                    <div className="testing_canvas">
                        
                        {/* 1. Background Wireframe Mockup Cards */}
                        <div className="testing_bg_cards">
                            <div className="testing_bg_card card_left"></div>
                            <div className="testing_bg_card card_right"></div>
                        </div>

                        {/* 2. Floating Animated Background Assets */}
                        <div className="testing_bg_assets">
                            <img src={testingPlane} alt="Rocket" className="test_plane test_float_plane" />
                            <img src={pana1} alt="Wrench 1" className="test_pana1 test_float_pana1" />
                            <img src={pana2} alt="Wrench 2" className="test_pana2 test_float_pana2" />
                            <img src={testingGear1} alt="Gear 1" className="test_gear1 test_spin_cw" />
                            <img src={testingGear2} alt="Gear 2" className="test_gear2 test_spin_ccw" />
                            <img src={testingGear1} alt="Gear 3" className="test_gear3 test_spin_cw" />
                        </div>

                        {/* 3. LCD Monitor Assembly */}
                        <div className="testing_monitor_assembly">
                            {/* Outer Light-Green Monitor Shell */}
                            <div className="testing_outer_monitor">
                                {/* Inner Grey Bezel Screen Display */}
                                <div className="testing_inner_screen">
                                    {/* Code Tag Icon */}
                                    <img src={testingTag} alt="Code Tag" className="test_screen_tag" />

                                    {/* Animated Code Lines */}
                                    <div className="test_code_group_top">
                                        <div className="test_code_line w-80"></div>
                                        <div className="test_code_line w-60"></div>
                                        <div className="test_code_line w-90"></div>
                                    </div>
                                    <div className="test_code_group_bottom">
                                        <div className="test_code_line w-75"></div>
                                        <div className="test_code_line w-50"></div>
                                        <div className="test_code_line w-65"></div>
                                    </div>

                                    {/* Bugs on Screen */}
                                    <img src={pundi1} alt="Bug Top Right" className="test_bug bug_top_right" />
                                    <img src={pundi2} alt="Bug Bottom Left" className="test_bug bug_bottom_left" />
                                    <img src={pundi3} alt="Bug Center Right" className="test_bug bug_center_right" />
                                </div>
                            </div>

                            {/* Monitor Stand Neck & Base Foot */}
                            <div className="testing_stand_container">
                                <img src={testingScreenStand} alt="Monitor Stand Neck" className="testing_stand_neck" />
                                <div className="testing_stand_foot"></div>
                            </div>
                        </div>

                        {/* 4. Foreground Overlay (Dev sitting on chair, Inspector & Shadow) */}
                        <div className="testing_man_overlay">
                            <img src={testingMan} alt="Testing Developers" className="testing_man_img" />
                        </div>

                    </div>
                </div>

                <div className="phase5_timeline_side">
                    <div className="timeline_line phase5_line"></div>
                    
                    {/* Step 1: Unit Testing */}
                    <div className="phase5_node">
                        <div className="phase5_dot"></div>
                        <div className="phase5_node_content">
                            <div className="sd_node_icon_wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="8" height="8" rx="1.5" />
                                    <rect x="14" y="2" width="8" height="8" rx="1.5" />
                                    <rect x="2" y="14" width="8" height="8" rx="1.5" />
                                    <rect x="14" y="14" width="8" height="8" rx="1.5" />
                                </svg>
                            </div>
                            <h4 className="node_title">Unit Testing</h4>
                            <p className="node_desc">
                                Unit testing helps us identify and fix defects in individual code components, resulting in a more reliable and efficient software product that meets client requirements.
                            </p>
                        </div>
                    </div>
                    
                    {/* Step 2: Integration Testing */}
                    <div className="phase5_node">
                        <div className="phase5_dot"></div>
                        <div className="phase5_node_content">
                            <div className="sd_node_icon_wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 4H7a2 2 0 0 0-2 2v3a2 2 0 0 1 0 4V18a2 2 0 0 0 2 2h3a2 2 0 0 1 4 0h3a2 2 0 0 0 2-2v-3a2 2 0 0 1 0-4V6a2 2 0 0 0-2-2h-3a2 2 0 0 1-4 0z" />
                                </svg>
                            </div>
                            <h4 className="node_title">Integration Testing</h4>
                            <p className="node_desc">
                                Our focus on integration testing ensures that different parts of the codebase work together seamlessly, resulting in a more reliable and efficient software product that meets client requirements.
                            </p>
                        </div>
                    </div>
                    
                    {/* Step 3: End-to-End Testing */}
                    <div className="phase5_node">
                        <div className="phase5_dot"></div>
                        <div className="phase5_node_content">
                            <div className="sd_node_icon_wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                            </div>
                            <h4 className="node_title">End-to-End Testing</h4>
                            <p className="node_desc">
                                End-to-end testing allows us to identify and resolve defects that might not be caught through other testing methods, resulting in a more reliable and seamless software product that meets the expectations of our clients. By emphasizing end-to-end testing, we can ensure a highly satisfied user base.
                            </p>
                        </div>
                    </div>
                    
                    {/* Step 4: Test-Driven Development */}
                    <div className="phase5_node">
                        <div className="phase5_dot"></div>
                        <div className="phase5_node_content">
                            <div className="sd_node_icon_wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="8" y1="6" x2="21" y2="6" />
                                    <line x1="8" y1="12" x2="21" y2="12" />
                                    <line x1="8" y1="18" x2="21" y2="18" />
                                    <path d="M3 6l1 1 2-2" />
                                    <path d="M3 12l1 1 2-2" />
                                    <path d="M3 18l1 1 2-2" />
                                </svg>
                            </div>
                            <h4 className="node_title">Test-Driven Development</h4>
                            <p className="node_desc">
                                Test-driven development (TDD) improves software quality by writing tests before code, leading to a more reliable and maintainable codebase with fewer defects.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testing;