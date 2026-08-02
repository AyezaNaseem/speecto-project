import React from 'react';
import './productDesign.css';

import pdBg     from "../../asset/productDesignLightBg.webp";
import pdMan    from "../../asset/productDesignLightMan.webp";
import pdCloud1 from "../../asset/productDesignLightCloud1.webp";
import pdCloud2 from "../../asset/productDesignLightCloud2.webp";

import wireframeIcon from "../../asset/wireframe.svg";
import designIcon    from "../../asset/design.svg";
import productIcon   from "../../asset/product.svg";
import roadmapIcon   from "../../asset/roadmap.svg";

const ProductDesign = () => {
    return (
        <div className='pd_container'>

           
            <div className='pd_header'>
                <div className='pd_header_line'></div>
                <div className='pd_badge'>2</div>
                <h3 className='pd_title'>PRODUCT DESIGN</h3>
            </div>

            
            <div className='pd_grid'>
                <div className='pd_text_col'>
                    <div className='pd_timeline'>

                        {/* Step 1 */}
                        <div className='pd_node'>
                            <div className='pd_node_content'>
                                <div className='pd_icon_wrap'>
                                    <img src={wireframeIcon} alt="" />
                                </div>
                                <h4 className='pd_node_title'>Wireframing</h4>
                                <p className='pd_node_desc'>
                                    Wireframing is a method of creating a basic visual outline of a product or
                                    website's structure and features in order to convey and refine design ideas.
                                </p>
                            </div>
                            <div className='pd_dot'></div>
                        </div>

                        {/* Step 2 */}
                        <div className='pd_node'>
                            <div className='pd_node_content'>
                                <div className='pd_icon_wrap'>
                                    <img src={designIcon} alt="" />
                                </div>
                                <h4 className='pd_node_title'>UI/UX Design</h4>
                                <p className='pd_node_desc'>
                                    UI/UX design is the process of developing interfaces that are both
                                    aesthetically pleasing and easy to use, providing users with a seamless
                                    and enjoyable experience while interacting with a product or service.
                                </p>
                            </div>
                            <div className='pd_dot'></div>
                        </div>

                        {/* Step 3 */}
                        <div className='pd_node'>
                            <div className='pd_node_content'>
                                <div className='pd_icon_wrap'>
                                    <img src={productIcon} alt="" />
                                </div>
                                <h4 className='pd_node_title'>Technical review</h4>
                                <p className='pd_node_desc'>
                                    A technical review of UI/UX design evaluates the practicality and
                                    implementation of design choices, making sure they can be properly
                                    executed to create a functional and efficient software product.
                                </p>
                            </div>
                            <div className='pd_dot'></div>
                        </div>

                        {/* Step 4 */}
                        <div className='pd_node pd_node_last'>
                            <div className='pd_node_content'>
                                <div className='pd_icon_wrap'>
                                    <img src={roadmapIcon} alt="" />
                                </div>
                                <h4 className='pd_node_title'>Roadmap</h4>
                                <p className='pd_node_desc'>
                                    A roadmap for product development is a strategic document that defines
                                    the timeline, milestones, stages, and necessary resources for a product's
                                    development cycle in order to achieve its launch into the market.
                                </p>
                            </div>
                            <div className='pd_dot'></div>
                        </div>

                    </div>
                </div>
                <div className='pd_illustration_col'>
                    <div className='pd_sticky_wrap'>
                        <div className='pd_canvas'>

                            <img src={pdBg} alt="" className='pd_bg' aria-hidden="true" />
                            <img src={pdCloud1} alt="" className='pd_cloud pd_cloud1' aria-hidden="true" />
                            <img src={pdCloud2} alt="" className='pd_cloud pd_cloud2' aria-hidden="true" />
                            <div className='pd_gears_wrap'>
                                <svg className='pd_gear pd_gear_big pd_spin'    viewBox="0 0 512 512" aria-hidden="true"><path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>
                                <svg className='pd_gear pd_gear_med  pd_spin_rev' viewBox="0 0 512 512" aria-hidden="true"><path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>
                                <svg className='pd_gear pd_gear_sm   pd_spin'    viewBox="0 0 512 512" aria-hidden="true"><path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>
                            </div>
                            <div className='pd_monitor_wrap'>
                                <div className='pd_monitor_screen'>
                                    <div className='pd_monitor_header'>
                                        <div className='pd_header_dots'>
                                            <span></span><span></span><span></span>
                                        </div>
                                        <div className='pd_hamburger'>
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                    <div className='pd_monitor_body'>

                                       
                                        <div className='pd_panel_left'>
                                            <svg viewBox="0 0 100 100" className='pd_bezier_svg'>
                                                <line x1="42" y1="12" x2="42" y2="88" stroke="#d946ef" strokeWidth="1.5" />
                                                
                                                <path d="M 80 15 C 38 15, 38 85, 80 85" stroke="#d946ef" strokeWidth="1.8" fill="none" />
                                                <rect x="77" y="12"  width="6" height="6" fill="#fff" stroke="#c026d3" strokeWidth="1.5" />
                                                <rect x="39" y="47"  width="6" height="6" fill="#fff" stroke="#c026d3" strokeWidth="1.5" />
                                                <rect x="77" y="82"  width="6" height="6" fill="#fff" stroke="#c026d3" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                        <div className='pd_panel_right'>
                                            <div className='pd_selection_box'>
                                                <span className='pd_handle h_tl'></span>
                                                <span className='pd_handle h_tc'></span>
                                                <span className='pd_handle h_tr'></span>
                                                <span className='pd_handle h_ml'></span>
                                                <span className='pd_handle h_mr'></span>
                                                <span className='pd_handle h_bl'></span>
                                                <span className='pd_handle h_bc'></span>
                                                <span className='pd_handle h_br'></span>
                                                <div className='pd_pill'></div>
                                                <div className='pd_pill'></div>
                                            </div>
                                            <div className='pd_right_bars'>
                                                <div className='pd_bar'></div>
                                                <div className='pd_bar pd_bar_short'></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='pd_monitor_footer'>
                                        <div className='pd_footer_pill'></div>
                                        <div className='pd_footer_pill'></div>
                                    </div>

                                </div>
                                <div className='pd_monitor_stand'></div>

                            </div>
                            <div className='pd_info_card'>
                                <div className='pd_info_line'></div>
                                <div className='pd_info_line pd_info_line_short'></div>
                                <div className='pd_info_line'></div>
                                <div className='pd_info_line pd_info_line_short'></div>
                                <div className='pd_info_line'></div>
                            </div>

                            <img src={pdMan} alt="Product Design" className='pd_man' />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDesign;