import React from "react";
import "./testingillustration.css";
import laptopBase from '../../asset/secondLaptopBase.webp';
import keyboard from '../../asset/keyboardButton.webp';
import laptopScreen from '../../asset/secondLaptopScreen.webp';
import laptopPerson from '../../asset/secondLaptopPerson.webp';
import browserFrame from "../../asset/frame.webp";
import laptopText from "../../asset/seondLaptopScreenText.webp";
import laptopTarget from "../../asset/secondLaptopTargert.webp"
import frameBugs from "../../asset/FrameBugs.webp";
import frameCode from '../../asset/frmaeCode.webp';
import percentageFrame from '../../asset/FramePercentage.webp';
import FrameCheck from '../../asset/FrameCheck.webp';
import MagnifySet from '../../asset/magnifysetImage.webp';
import Person1 from '../../asset/secondLaptopPerson1.webp';
import FrameStaric from '../../asset/FrameStaric.webp';
import frameCode1 from '../../asset/FrameCode.webp';
export default function TestingIllustration() {
    return (
        <div className="testing-graphics">
            <div className="ti-laptop-box">
            <img src={laptopScreen} alt="screen" className="ti-screen-panel"/>
            <img src={laptopText} alt="" className="ti-screen-text1" />
            <img src={laptopText} alt="" className="ti-screen-text" />
            <img src={laptopTarget} alt="" className="ti-laptop-target" />
            <img src={frameBugs} alt="bugs" className="ti-laptop-bugs"/>
            <img src={browserFrame} alt="" className="ti-browser-frame" />
            <img src={laptopBase} alt="base" className="ti-base-plate"/>
            <img src={keyboard} alt="keyboard" className="ti-keyboard-plate"/>
            <img src={laptopPerson} alt="person" className="ti-laptop-person"/>
            <img src={percentageFrame} alt="percentage" className="ti-percentage-frame"/>
            <img src={FrameCheck} alt="check" className="ti-frame-check"/>
            <img src={MagnifySet} alt="magnify" className="ti-magnify-set"/>
            <img src={frameCode} alt="code" className="ti-frame-code"/>
            <img src={Person1} alt="person1" className="ti-laptop-person1"/>
            <img src={FrameStaric} alt="staric" className="ti-frame-staric"/>
            <img src={frameCode1} alt="code1" className="ti-frame-code1"/> 
        </div>
            </div>
    );
}