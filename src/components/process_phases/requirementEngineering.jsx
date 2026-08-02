import React from 'react';
import './requirementEngineering.css';
import clipVector from '../../asset/clipVector.webp';
import man1LightVector from '../../asset/man1LightVector.webp';
import fman2LightVector from '../../asset/fman2LightVector.webp';
import contactUsAnimateMessage from '../../asset/contactUsAnimateMessage.webp';
import copyVectorLight from '../../asset/copyVectorLight.webp';
import windowVectorLight from '../../asset/windowVectorLight.webp';
import plantVectorLight from '../../asset/plantVectorLight.webp';
import meetIcon from '../../asset/meet.svg';
import analysisIcon from '../../asset/analysis.svg';
import documentIcon from '../../asset/document.svg';
import checkIcon from '../../asset/check.svg';

const RequirementsEngineering = () => {
    return (
        <div className='phase_container'>
            <div className="sd-header-line-wrap">
                <div className="timeline-lineHeader3"></div>
            </div>

            <div className='phase_badge'>1</div>
            <h3 className='phase_title'>REQUIREMENTS ENGINEERING</h3>
            
            <div className='phase1_content_grid'>
                <div className='phase1_graphic_side'>
                    <div className='req_illustration_canvas'>
                        <div className="bg_frame_left"></div>
                        <div className="bg_frame_right">
                            <div className="window_shuttle_wrapper">
                                <img 
                                    src={windowVectorLight} 
                                    alt="Window Blind" 
                                    className="window_shuttle_img" 
                                />
                            </div>
                        </div>
                        <img src={plantVectorLight} alt="Plant Pot" className="plant_pot_img" />
                        <div className="bg_clock_circle">
                            <div className="clock_center_dot"></div>
                            <div className="clock_hand_hour"></div>
                            <div className="clock_hand_minute"></div>
                            <div className="clock_hand_second"></div>
                        </div>
                        <img src={contactUsAnimateMessage} alt="" className="floating_asset chat_left" />
                        <img src={contactUsAnimateMessage} alt="" className="floating_asset chat_right" />
                        <img src={copyVectorLight} alt="" className="floating_asset paper_bg_left" />
                        <img src={copyVectorLight} alt="" className="floating_asset paper_bg_right" />
                        <img src={copyVectorLight} alt="" className="floating_asset paper_slate_top" />
                        <img src={copyVectorLight} alt="" className="floating_asset paper_desk_man" />
                        
                        <div className='slate_board'>
                            <img src={clipVector} alt="Slate Clip" className="slate_clip_img" />
                            <div className='slate_content'>
                                <div className='slate_grey_bar top_bar'></div>

                                <div className='slate_rows_container'>
                                    <div className='slate_row'>
                                        <div className='slate_line_group'>
                                            <div className='slate_line'></div>
                                            <div className='slate_line'></div>
                                        </div>
                                        <div className='slate_check'>✓</div>
                                    </div>
                                    <div className='slate_row'>
                                        <div className='slate_line_group'>
                                            <div className='slate_line'></div>
                                            <div className='slate_line'></div>
                                        </div>
                                        <div className='slate_check'>✓</div>
                                    </div>
                                    <div className='slate_row'>
                                        <div className='slate_line_group'>
                                            <div className='slate_line'></div>
                                            <div className='slate_line'></div>
                                        </div>
                                        <div className='slate_check'>✓</div>
                                    </div>
                                    <div className='slate_row'>
                                        <div className='slate_line_group'>
                                            <div className='slate_line'></div>
                                            <div className='slate_line'></div>
                                        </div>
                                        <div className='slate_check'>✓</div>
                                    </div>
                                </div>

                                <div className='slate_grey_bar bottom_bar'></div>
                            </div>
                        </div>
                        <img src={man1LightVector} alt="Standing Woman" className='char_standing_woman' />
                        <img src={fman2LightVector} alt="Desk Team" className='char_desk_team' />

                    </div>
                </div>
                <div className='phase1_timeline_side'>
                    <div className='phase1_line'></div>
                    
                    {/* STEP 1: Elicitation */}
                    <div className='phase1_node'>
                        <div className='phase1_dot'></div>
                        <div className='node_content'>
                            <div className='step_icon_wrapper'>
                                <img src={meetIcon} alt="Elicitation" className='step_icon_img' />
                            </div>
                            <h4 className='node_title'>Elicitation</h4>
                            <p className='node_desc'>
                                This step involves identifying stakeholders and understanding their needs.
                            </p>
                        </div>
                    </div>
                    
                    {/* STEP 2: Analysis & Suggestions */}
                    <div className='phase1_node'>
                        <div className='phase1_dot'></div>
                        <div className='node_content'>
                            <div className='step_icon_wrapper'>
                                <img src={analysisIcon} alt="Analysis & Suggestions" className='step_icon_img' />
                            </div>
                            <h4 className='node_title'>Analysis & Suggestions</h4>
                            <p className='node_desc'>
                                We analyze requirements and suggest trending ideas and features that can add value to products.
                            </p>
                        </div>
                    </div>
                    
                    {/* STEP 3: Document requirements */}
                    <div className='phase1_node'>
                        <div className='phase1_dot'></div>
                        <div className='node_content'>
                            <div className='step_icon_wrapper'>
                                <img src={documentIcon} alt="Document requirements" className='step_icon_img' />
                            </div>
                            <h4 className='node_title'>Document requirements</h4>
                            <p className='node_desc'>
                                Document requirements in a clear and concise manner.
                            </p>
                        </div>
                    </div>
                    
                    {/* STEP 4: Verification and Validation */}
                    <div className='phase1_node'>
                        <div className='phase1_dot'></div>
                        <div className='node_content'>
                            <div className='step_icon_wrapper'>
                                <img src={checkIcon} alt="Verification and Validation" className='step_icon_img' />
                            </div>
                            <h4 className='node_title'>Verification and Validation</h4>
                            <p className='node_desc'>
                                Requirement verification checks that the requirements are correct, while requirement validation checks that the requirements are suitable for the intended purpose.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RequirementsEngineering;