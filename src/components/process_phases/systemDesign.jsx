import React from "react";
import "./systemDesign.css";

import product               from "../../assets/asset/product.svg";
import roadmap               from "../../assets/asset/roadmap.svg";
import wireframe             from "../../assets/asset/wireframe.svg";
import design                from "../../assets/asset/design.svg";
import systemDesignLightBg   from "../../assets/asset/systemDesignLightBg.webp";
import systemDesignLightMan  from "../../assets/asset/systemDesignLightMan.webp";
import systemDesignMessage   from "../../assets/asset/systemDesignMessage.webp";
import systemDesignLine1     from "../../assets/asset/systemDesignLine1.webp";
import systemDesignLine2     from "../../assets/asset/systemDesignLine2.webp";
import systemDesignCloud1    from "../../assets/asset/systemDesignCloud1.webp";
import gearSvg               from "../../asset/gear.png";
import blackGearSvg          from "../../assets/asset/gearblack.svg";

const leftItems = [
  {
    title: "Architectural design",
    text: "Our software architectural design services involve creating a high-level overview of a system's structure and organization to ensure scalability, modularity, maintainability, and performance.",
    img: roadmap,
  },
  {
    title: "Database design",
    text: "We specialize in software database design, creating efficient and scalable data storage solutions that ensure optimal performance, data integrity, and security.",
    img: wireframe,
  },
  {
    title: "Interface Design",
    text: "Interface Design creates the user-facing layouts, inputs, and feedback elements to ensure a clear, interactive, and user-friendly experience.",
    img: design,
  },
];

const rightItems = [
  {
    title: "APIs",
    text: "Designing endpoints before development is important because it helps to establish a clear communication protocol between different components, facilitates efficient data exchange, and ensures that the system is scalable, flexible, and secure.",
    img: design,
  },
  {
    title: "GraphQL",
    text: "Designing GraphQL prior to development is of utmost importance as it guarantees the optimization of the GraphQL schema for optimal performance, consistency, and alignment with the needs of both the server and client, thereby resulting in a highly efficient, scalable, and maintainable system.",
    img: product,
  },
];

const SystemDesign = () => {
  return (
    <div className="sd-page-wrapper">
      <div className="sd-header-line-wrap">
        <div className="timeline-lineHeader3"></div>
      </div>
      <div className="sd-header">
        <div className="sd-badge">3</div>
        <h2 className="sd-title">SYSTEM DESIGN</h2>
      </div>
      <div className="sd-main-content">
        <div className="sd-left-col">
          <div className="sd-illustration-outer">
            <div className="sd-illustration-inner">
              <div className="sd-top-grey-card"></div>

              <div className="sd-bg-card">
                <div className="sd-bg-card-top">
                  <div className="sd-bg-card-line"></div>
                  <div className="sd-bg-card-line sd-line-short"></div>
                  <div className="sd-bg-card-line"></div>
                </div>

                <img src={blackGearSvg} alt="" className="sd-bg-gear-img sd-bg-g1 sd-gear-spin" />
                <img src={blackGearSvg} alt="" className="sd-bg-gear-img sd-bg-g2 sd-gear-spin-back" />
                <img src={blackGearSvg} alt="" className="sd-bg-gear-img sd-bg-g3 sd-gear-spin" />
              </div>
              <div className="sd-man-wrap">
                <img
                  src={systemDesignLightMan}
                  alt="System Design Man"
                  className="sd-man-img"
                />
                <div className="sd-monitor-wrap">

                  <div className="sd-monitor-bezel">
                    <div className="sd-monitor-topbar">
                      <span className="sd-mon-dot sd-mon-dot-1"></span>
                      <span className="sd-mon-dot sd-mon-dot-2"></span>
                      <span className="sd-mon-dot sd-mon-dot-3"></span>
                    </div>

                    <div className="sd-monitor-screen">
                      <div className="sd-purple-panel">
                        <div className="sd-cloud-card">
                          <div className="sd-cloud-card-top">
                            <span className="sd-cloud-dot"></span>
                            <span className="sd-cloud-dot"></span>
                            <span className="sd-cloud-dot"></span>
                          </div>
                          <div className="sd-cloud-card-body">
                            <img src={systemDesignCloud1} alt="" className="sd-cloud-img sd-wiggle" />
                          </div>
                        </div>
                        <div className="sd-api-gear-wrap">
                          <img src={gearSvg} alt="API Gear" className="sd-gear-image" />
                          <span className="sd-api-text">API</span>

                          <img src={blackGearSvg} alt="" className="sd-side-gear sd-sg-r sd-gear-spin" />
                          <img src={gearSvg}      alt="" className="sd-side-gear sd-sg-rt sd-gear-spin-back" />
                          <img src={blackGearSvg} alt="" className="sd-side-gear sd-sg-l sd-gear-spin" />
                          <img src={gearSvg}      alt="" className="sd-side-gear sd-sg-lb sd-gear-spin-back" />

                          <div className="sd-line1-wrap">
                            <img src={systemDesignLine1} alt="" className="sd-line-img" />
                          </div>
                          <div className="sd-line2-wrap">
                            <img src={systemDesignLine2} alt="" className="sd-line-img" />
                          </div>
                        </div>
                      </div>
                      <div className="sd-code-panel">
                        <div className="sd-code-panel-top">
                          <span className="sd-cp-dot"></span>
                          <span className="sd-cp-dot"></span>
                          <span className="sd-cp-dot"></span>
                        </div>
                        <div className="sd-code-lines">
                          {[80,55,70,40,65,50,75,35,60].map((w, i) => (
                            <div key={i} className="sd-code-line" style={{ width: `${w}%` }}></div>
                          ))}
                        </div>
                      </div>
                      <div className="sd-bottom-panel">
                        <div className="sd-bottom-panel-top">
                          <span className="sd-cp-dot"></span>
                          <span className="sd-cp-dot"></span>
                          <span className="sd-cp-dot"></span>
                        </div>
                        <div className="sd-bottom-grid">
                          <div className="sd-bp-left">
                            {[1,2,3,4,5,6].map(i => (
                              <div key={i} className="sd-bp-bar sd-bar-anim"></div>
                            ))}
                          </div>
                          <div className="sd-bp-right">
                            {[1,2,3,4,5,6].map(i => (
                              <div key={i} className="sd-bp-row">
                                <span className="sd-bp-dot-r"></span>
                                <span className="sd-bp-dot-r"></span>
                                <span className="sd-bp-dot-r"></span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sd-monitor-neck"></div>
                  <div className="sd-monitor-foot"></div>
                </div>

                <div className="sd-msg-badge sd-pulse">
                  <img src={systemDesignMessage} alt="" className="sd-msg-img" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="sd-mid-timeline">
          <div className="timeline-line3"></div>
          <div className="sd-mid-dot sd-mid-dot-1"></div>
          <div className="sd-mid-dot sd-mid-dot-2"></div>
          <div className="sd-mid-dot sd-mid-dot-3"></div>
        </div>
        <div className="sd-right-col">
          <div className="sd-right-spacer"></div>

          {leftItems.map((item, index) => (
            <div key={index} className="sd-node">
              <div className="sd-node-icon">
                <img src={item.img} alt={item.title} className="sd-node-icon-img" />
              </div>
              <h3 className="sd-node-title">{item.title}</h3>
              <p className="sd-node-desc">{item.text}</p>
            </div>
          ))}

          <div className="sd-sub-group">
            <div className="sd-sub-timeline">
              <div className="timeline-line3-1"></div>
              <div className="sd-mid-dot sd-sub-dot-1"></div>
              <div className="sd-mid-dot sd-sub-dot-2"></div>
            </div>

            <div className="sd-sub-nodes">
              <div className="sd-right-spacer"></div>
              {rightItems.map((item, index) => (
                <div key={index} className="sd-node">
                  <div className="sd-node-icon">
                    <img src={item.img} alt={item.title} className="sd-node-icon-img" />
                  </div>
                  <h3 className="sd-node-title">{item.title}</h3>
                  <p className="sd-node-desc">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SystemDesign;