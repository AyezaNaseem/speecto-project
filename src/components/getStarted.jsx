import React, { useState } from "react";
import './getStarted.css';
const GetStarted = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        const [errors, setErrors] = useState({});
        const handleChange = (e) => {
            const {name,value} = e.target;
            setFormData(prev => ({ ...prev, [name]: value}));
        };
const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name required!';
        if (!formData.email.trim()) newErrors.email = 'Email required!';
        if (!formData.phone.trim()) newErrors.phone = 'Phone No. required!';
        if (!formData.subject.trim()) newErrors.subject = 'Subject required!';
        if (!formData.message.trim()) newErrors.message = 'Message required!';
        return newErrors;
    };
const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0){
        console.log('Form submitted: ', formData);
    }  
};
return(
    <section className="get_started_section">
        <h2 className="get_started_title">Let's Get Started</h2>
        <form className="get_started_form" onSubmit={handleSubmit}>
            <table className="form_table">
                <tbody>
                <tr>
                    <td>
                        <div className="form_group">
                            <label className="form_label">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form_input"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="form_error">{errors.name}</span>}
                        </div>
                    </td>
                    <td>
                        <div className="form_group">
                            <label className="form_label">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form_input"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="form_error">{errors.email}</span>}
                        </div>
                    </td>
               </tr>
               <tr>
                    <td>
                        <div className="form_group">
                            <label className="form_label">Phone No.</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="form_input"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <span className="form_error">{errors.phone}</span>}
                        </div>
                    </td>
                    <td>
                        <div className="form_group">
                            <label className="form_label">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="form_input"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            {errors.subject && <span className="form_error">{errors.subject}</span>}
                        </div>
                    </td>
               </tr>
               <tr>
                <td colSpan="2">
                    <div className="form_group form_group_full">
                                <label className="form_label">Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Write your message..."
                                    className="form_textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.message && <span className="form_error">{errors.message}</span>}
                            </div>
                </td>
               </tr>
               </tbody>
            </table>
            <div className="submit_wrapper">
                <button type="submit" className="submit_btn">Submit</button>
            </div>
        </form>
    </section>
);
};
export default GetStarted;