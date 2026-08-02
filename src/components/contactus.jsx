import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import animateBgWindow from '../asset/contactUsAnimateBgWindow.webp';
import animateMan from '../asset/contactUsAnimateMan.webp';
import animatePegon from '../asset/contactUsAnimatePegon.webp';
import animateMessage from '../asset/contactUsAnimateMessage.webp';
import './contactus.css';

const ContactHero = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name required!';
        if (!formData.email.trim()) newErrors.email = 'Email required!';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        toast.success('Message Sent Successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
    };

    return (
        <div className="contact_page_wrapper">
            <ToastContainer />
            <section className="contact_hero_container">
                <div className="contact_hero_wrapper">
                    <div className="contact_hero_text">
                        <h1 className="contact_title">
                            CONTACT <span>US</span>
                        </h1>
                    </div>
                    <div className="contact_hero_illustration">
                        <div className="illustration_wrapper" style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
                            <img 
                                src={animateBgWindow} 
                                alt="Building Window Background" 
                                className="asset_bg_window" 
                            />
                            
                            <div className="asset_wall_clock">
                                <div className="clock_hand hour_hand"></div>
                                <div className="clock_hand minute_hand"></div>
                                <div className="clock_hand second_hand"></div>
                            </div>
                            <img 
                                src={animatePegon} 
                                alt="Flying Pigeon" 
                                className="asset_pigeon floating_pigeon" 
                                style={{
                                    position: 'absolute',
                                    top: '35px',
                                    left: '13%',
                                    width: '180px',
                                    zIndex: 99,
                                    display: 'block'
                                }}
                            />
                            <img 
                                src={animateMessage} 
                                alt="Message Icon" 
                                className="asset_message pulse_message" 
                            />
                            <img 
                                src={animateMan} 
                                alt="Support Agent" 
                                className="asset_main_man" 
                            />
                        </div>
                    </div>

                </div>
            </section>
            <section className="contact_main_section">
                <div className="contact_main_container">
                    <div className="contact_left_info">
                        <h2 className="get_in_touch_title">Get In Touch</h2>
                        
                        <div className="info_list">
                            <div className="info_item">
                                <FaMapMarkerAlt className="info_icon" />
                                <span>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</span>
                            </div>
                            <div className="info_item">
                                <FaEnvelope className="info_icon" />
                                <a href="mailto:contactus@speecto.com">contactus@speecto.com</a>
                            </div>
                            <div className="info_item">
                                <FaPhoneAlt className="info_icon" />
                                <a href="tel:+442071757733">+442071757733</a>
                            </div>
                        </div>
                        <div className="map_container">
                            <iframe 
                                title="Speecto Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.890351336043!2d-0.1261309233816654!3d51.51522290947702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x22db8232938d21b!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                                width="100%" 
                                height="220" 
                                style={{ border: 0, borderRadius: "12px" }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="contact_right_form">
                        <h2 className="mobile_form_title">Let's Get Started</h2>

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form_row">
                                <div className="form_field">
                                    <label>Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        className={errors.name ? 'input_error' : ''}
                                        value={formData.name} 
                                        onChange={handleChange} 
                                    />
                                    {errors.name && <span className="error_txt">{errors.name}</span>}
                                </div>
                                <div className="form_field">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        className={errors.email ? 'input_error' : ''}
                                        value={formData.email} 
                                        onChange={handleChange} 
                                    />
                                    {errors.email && <span className="error_txt">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="form_row">
                                <div className="form_field">
                                    <label>Phone No.</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="Phone Number" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="form_field">
                                    <label>Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject" 
                                        value={formData.subject} 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>

                            <div className="form_field full_width">
                                <label>Your Message</label>
                                <textarea 
                                    name="message" 
                                    placeholder="Write your message..." 
                                    rows="4"
                                    value={formData.message} 
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="form_btn_container">
                                <button type="submit" className="contact_submit_btn">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactHero;