import React, { useState } from 'react';
import { 
  FaLaptopCode, 
  FaGlobe, 
  FaSearch, 
  FaMobileAlt, 
  FaCheck, 
  FaCode, 
  FaArrowRight,
  FaChartBar,
  FaBezierCurve,
  FaCheckCircle
} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CraftingIllustration from './heroGraphics/craftingillustration';
import howWeWorkImg from '../asset/howWeWork.webp';
import './service.css';

const servicesData = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Product/SAAS Development",
    description: "Unveiling software needs, capturing stakeholder expectations, and defining actionable requirements for successful development."
  },
  {
    id: 2,
    icon: <FaGlobe />,
    title: "Web App Development",
    description: "Accelerating development processes through automated tools, streamlined workflows, and efficient code generation."
  },
  {
    id: 3,
    icon: <FaSearch />,
    title: "SEO Optimised Web Application",
    description: "Crafting intuitive, user-centric interfaces that elevate user experiences and enhance digital interactions."
  },
  {
    id: 4,
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Delivering high-quality software solutions to production, ensuring seamless deployment and optimal performance for end-users."
  },
  {
    id: 5,
    icon: <FaCheck />,
    title: "SEO",
    description: "Ensuring software quality through comprehensive testing, meticulous bug identification, and continuous optimization."
  },
  {
    id: 6,
    icon: <FaCode />,
    title: "MVP Development",
    description: "Building innovative and reliable software solutions with cutting-edge technologies and for seamless development experiences."
  }
];
const processData = [
  {
    id: 1,
    icon: <FaChartBar />,
    title: "Strategy & Planning",
    description: "We partner with our clients to understand their business goals and objectives, then create a customized strategy that aligns with their vision."
  },
  {
    id: 2,
    icon: <FaBezierCurve />,
    title: "Design",
    description: "Our team uses the latest UI/UX practices to create stunning, user-friendly products that capture our clients' brands."
  },
  {
    id: 3,
    icon: <FaCode />,
    title: "Development",
    description: "We develop the product with the latest technologies and frameworks to ensure the best performance and scalability."
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "Testing",
    description: "Our products undergo rigorous testing before launch to ensure they meet the highest standards of quality and functionality."
  }
];

const ServicesHero = () => {
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

    const handleContactSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name required!';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email required!';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        toast.success('Message Sent Successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
    };

    return (
        <div className="services_page_wrapper">
            <ToastContainer />
            <section className="services_hero_container">
                <div className="services_hero_content">
                    <div className="services_hero_text">
                        <h1 className="services_title">
                            OUR <span>SERVICES</span>
                        </h1>
                        <p className="services_description">
                            we offer a comprehensive range of IT solutions to meet your business needs. 
                            From Requirement Engineering, development and Product design to cloud computing 
                            and Testing, our experienced team is here to provide expert guidance and deliver 
                            innovative solutions.
                        </p>
                        <button className="services_contact_btn">Contact Us</button>
                    </div>

                    <div className="services_hero_graphic">
                        <CraftingIllustration />
                    </div>
                </div>
            </section>
            <section className="services_grid_container">
                <div className="services_grid_wrapper">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service_card">
                            <div className="card_header">
                                <div className="card_icon_box">
                                    {service.icon}
                                </div>
                                <h3 className="card_title">{service.title}</h3>
                            </div>
                            <p className="card_description">{service.description}</p>
                            <div className="card_arrow_btn">
                                <FaArrowRight />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="services_process_container">
                <div className="services_process_wrapper">
                    <div className="process_left_content">
                        <div className="process_tag_line">
                            <span className="blue_dot_tag">How Do We Do It. —</span>
                        </div>
                        <h2 className="process_heading">
                            Crafting Exceptional Digital Experiences: Our Process
                        </h2>
                        <p className="process_subtext">
                            We create exceptional digital experiences by understanding your business goals, user requirements, and product specifications. Our process involves selecting the best technology, creating user personas and journeys, developing information architecture and wireframes, and designing and launching your product.
                        </p>
                        <div className="process_steps_list">
                            {processData.map((step) => (
                                <div key={step.id} className="process_step_item">
                                    <div className="process_icon_circle">
                                        {step.icon}
                                    </div>
                                    <div className="process_step_details">
                                        <h4 className="process_step_title">{step.title}</h4>
                                        <p className="process_step_desc">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="process_right_image">
                        <img src={howWeWorkImg} alt="Crafting Exceptional Digital Experiences" className="process_img" />
                    </div>
                </div>
            </section>
            <section className="get_started_section">
                <div className="get_started_container">
                    <h2 className="get_started_heading">Let’s Get Started</h2>

                  
                    <form className="get_started_form" onSubmit={handleContactSubmit} noValidate>
                        <div className="form_grid_row">
                            <div className="form_group">
                                <label className="form_label">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    className={`get_started_input ${errors.name ? 'input_error_border' : ''}`}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="field_error_message">{errors.name}</span>}
                            </div>
                            <div className="form_group">
                                <label className="form_label">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    className={`get_started_input ${errors.email ? 'input_error_border' : ''}`}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="field_error_message">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="form_grid_row">
                            <div className="form_group">
                                <label className="form_label">Phone No.</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    placeholder="Phone Number" 
                                    className="get_started_input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form_group">
                                <label className="form_label">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    className="get_started_input"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form_group full_width_group">
                            <label className="form_label">Your Message</label>
                            <textarea 
                                name="message" 
                                placeholder="Write your message..." 
                                className="get_started_textarea"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="form_submit_wrapper">
                            <button type="submit" className="get_started_submit_btn">Submit</button>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default ServicesHero;