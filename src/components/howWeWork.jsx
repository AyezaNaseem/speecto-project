import React from 'react';
import './howWeWork.css';
import RequirementsEngineering from './process_phases/requirementEngineering';
import ProductDesign from './process_phases/productDesign';
import SystemDesign from './process_phases/systemDesign';
import Development from './process_phases/development';
import Testing from './process_phases/testing';
import Production from './process_phases/production';
import AutomatedDeployment from './process_phases/automatedDeployment';
const HowWeWork = () => {
    return(
        <section className='work_process-section'>
            <div className='header_container'>
                <h2 className='main_title'>HOW DO WE WORK</h2>
                <p className='desc_para1'>
                    As a team, we work tirelessly to develop software solutions that are both innovative and dependable, empowering businesses to prosper and individuals to flourish.
                </p>
                <p className='desc_para2'>
                    Our meticulous and collaborative software development process delivers exceptional results, ensuring quality, reliability, and client satisfaction at every stage.
                </p>
            </div>
            <RequirementsEngineering/>
            <ProductDesign/>
            <SystemDesign/>
            <Development/>
            <Testing/>
            <Production/>
            <AutomatedDeployment/>
        </section>
    )
};
export default HowWeWork;