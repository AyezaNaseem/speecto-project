import { useState, useEffect } from "react";
import "./hero.css";
import LaptopIllustration from "./heroGraphics/laptopillustration";
import TestingIllustration from "./heroGraphics/testingillustration";
import CraftingIllustration from "./heroGraphics/craftingillustration";
import Laptop from "./heroGraphics/laptopillustration2";
import MobileIllustration from "./heroGraphics/mobileillustration";

const slideData = [
    {
        id: 1,
        headingPart1: "WE DEVELOP",
        headingPart2: "HIGH-PERFORMANCE",
        headingPart3: "WEB APPS",
        subheading: "WEB DEVELOPMENT",
        headingPart2Color: "#f97316",
        description: "We are a team of tech enthusiasts dedicated to developing world-class custom software solutions while fostering a culture of creativit...",
    },
    {
        id: 2,
        headingPart1: "WE DEVELOP",
        headingPart2: "HIGH-PERFORMANCE",
        headingPart3: "MOBILE APPS",
        subheading: "APP DEVELOPMENT",
        headingPart2Color: "#ec4899",
        subheadingColor: "#ec4899",
        description: "We are a team of tech enthusiasts dedicated to developing world-class custom software solutions while fostering a culture of creativit...",
    },
    {
        id: 3,
        headingPart1: "WE DEVELOP",
        headingPart2: "HIGH-PERFORMANCE",
        headingPart3: "MOBILE APPS",
        subheading: "APP DEVELOPMENT",
        headingPart2Color: "#3b82f6",
        subheadingColor: "#3b82f6",
        description: "We are a team of tech enthusiasts dedicated to developing world-class custom software solutions while fostering a culture of creativit...",
    },
    {
        id: 4,
        headingPart1: "THOROUGH TESTING",
        headingPart2: "FOR SEAMLESS SOFTWARE EXPERIENCES",
        subheading: "TESTING",
        headingPart1Color: "#f97316",
        subheadingColor: "#f97316",
        description: "We are a team of tech enthusiasts dedicated to developing world-class custom software solutions while fostering a culture of creativit...",
    },
    {
        id: 5,
        headingPart1: "WE EXCEL IN",
        headingPart2: "CRAFTING",
        headingPart3: "SUPERIOR SOFTWARE SOLUTIONS",
        subheading: "DIGITAL SOLUTIONS",
        headingPart2Color: "#3b82f6",
        subheadingColor: "#3b82f6",
        description: "We are a team of tech enthusiasts dedicated to developing world-class custom software solutions while fostering a culture of creativit...",
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [animPhase, setAnimPhase] = useState('enter'); 

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimPhase('exit');
            setTimeout(() => {
                setCurrent((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
                setAnimPhase('enter');
            }, 1250); 
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const currentData = slideData[current];

    return (
        <section className="hero">
            <div className="hero_bg-text">TECH</div>
            <div className="hero_container">
                <div className="hero_content">
                    <div className="hero_header_mobile_wrap">
                        <h1 className="hero_heading">
                            <span style={{ color: currentData?.headingPart1Color || "#ffffff" }}>
                                {currentData?.headingPart1}
                            </span>{" "}
                            <span style={{ color: currentData?.headingPart2Color || "#ffffff" }}>
                                {currentData?.headingPart2}
                            </span>{" "}
                            {currentData?.headingPart3 && (
                                <span style={{ color: currentData?.headingPart3Color || "#ffffff" }}>
                                    {currentData?.headingPart3}
                                </span>
                            )}
                        </h1>
                        {currentData?.subheading && (
                            <h2 
                                key={current} 
                                className="hero_subheading" 
                                style={{ color: currentData?.subheadingColor || "#ffffff" }}
                            >
                                {currentData?.subheading}
                            </h2>
                        )}
                    </div>

                    <div className="hero_body_mobile_wrap">
                        <p className="hero_description">{currentData?.description}</p>

                        <div className="hero_actions">
                            <button
                                className="hero_btn-primary"
                                style={{
                                    color: currentData?.subheadingColor || currentData?.headingPart2Color || "#3b82f6",
                                    borderColor: currentData?.subheadingColor || currentData?.headingPart2Color || "#ffffff"
                                }}
                            >
                                Get Started
                            </button>
                            <a href="#" className="hero_link-more">
                                Learn more <span className="arrow">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`hero_graphic_side hero_graphic--${animPhase}`}>
                    {currentData?.id === 1 && <Laptop/>}
                    {currentData?.id === 2 && <MobileIllustration />}
                    {currentData?.id === 3 && <LaptopIllustration />}
                    {currentData?.id === 4 && <TestingIllustration />}
                    {currentData?.id === 5 && <CraftingIllustration />}
                </div>

            </div>
        </section>
    );
};

export default Hero;