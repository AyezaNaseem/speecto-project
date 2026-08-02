import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./aboutus.css";
import aboutIllustration from "../asset/aboutus.webp";

const AboutHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Submitted Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="about_page_wrapper">
      <ToastContainer />
      <section className="about_hero_section" id="about-us">
        <div className="about_hero_container">
          <div className="about_hero_content">
            <h1 className="about_hero_title">
              ABOUT <span className="highlight_text">US</span>
            </h1>
            <p className="about_hero_description">
              We are keen to deliver highly innovative & technological solutions
              through utilizing a rigorous development process. Our journey has taken
              us from the development of dynamic websites and mobile applications to
              the development of key enterprise solutions including.
            </p>
            <button className="about_hero_btn">Our Team</button>
          </div>
          <div className="about_hero_illustration">
            <img
              src={aboutIllustration}
              alt="About Speecto Illustration"
              className="about_img"
            />
          </div>
        </div>
      </section>
      <section className="contact_form_section">
        <div className="contact_form_container">
          <h2 className="contact_form_heading">
            L e t ’ s &nbsp; G e t &nbsp; S t a r t e d
          </h2>

          <form className="main_contact_form" onSubmit={handleSubmit}>
            <div className="form_grid">
              <div className="form_group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="subscribe_input_style"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="subscribe_input_style"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="phone">Phone No.</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="subscribe_input_style"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form_group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="subscribe_input_style"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form_group full_width">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="subscribe_input_style"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form_btn_container">
              <button type="submit" className="footer_style_btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;