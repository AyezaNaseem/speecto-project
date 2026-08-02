import React, { useState } from 'react';
import teamHeroImg from '../asset/teamCropedBg.png';
import member1 from '../asset/19f6c.jpg';
import member2 from '../asset/144c28.jpg';
import member3 from '../asset/21de5.jpg';
import member4 from '../asset/4d73f.jpg';
import member5 from '../asset/3fa0a.jpg';
import member6 from '../asset/54003.jpg';
import member7 from '../asset/7a1a6.jpg';
import member8 from '../asset/61c29.jpg';
import member9 from '../asset/256356.jpg';
import member10 from '../asset/119ec4.jpg';
import member11 from '../asset/20b9f7.jpg';
import member12 from '../asset/246371.jpg';
import member13 from '../asset/g34274.jpg';
import member14 from '../asset/g296cc.jpg';
import member15 from '../asset/g16dec.jpg';

import './ourteam.css';

const teamMembers = [
  { id: 1, name: "Hamza Shafiq", role: "Full Stack Engineer", image: member1 , bio: "Meet Hamza Shafiq, Speecto's composed Software Engineer. Graduating from Punjab University in 2021, he's been with Speecto for a year, appreciating its relaxed environment. A sports lover, Hamza also aspires to solve real-world problems with his own product in the future."},
  { id: 2, name: "Muhammad Ahmad", role: "Full Stack Engineer", image: member2, bio: "Introducing Muhammad Ahmed — a compelling personality and a front-end engineer by profession. Ahmed, a 2021 NCBA graduate, joined Speecto appreciating its supportive atmosphere and growth opportunities. A budding book enthusiast and Ted Talks producer, he also enjoys mentoring juniors." },
  { id: 3, name: "Muhammad Umar", role: "Full Stack Engineer", image: member3, bio: "Introducing Muhammad Umar — a consistent high-achiever and our esteemed React Native Developer. A GK University graduate, Umar joined Speecto a year ago, and despite his accomplishments, he's ever-humble and committed to learning. With two years of experience pre-graduation, Umar is fond of reading technical blogs and is passionate about technology." },
  { id: 4, name: "Muhammad Usman", role: "UI UX Designer", image: member4, bio: "Introducing Muhammad Usman, our quick-witted UI/UX Designer at Speecto. An alumnus of the University of Faisalabad, Usman not only brings insightful knowledge to the team, but also a unique interest in Holy Quran reading and F1 racing." },
  { id: 5, name: "Uzair Butt", role: "Graphic Designer", image: member5 , bio: "Introducing Uzair Butt - a versatile Graphic Designer, handling more than his expertise dictates at Speecto. A 2019 NCA graduate, Uzair joined Speecto after gaining two years of experience in the field. He has an impressive track record of completing diverse tasks flawlessly, even maintaining a record of zero days off."},
  { id: 6, name: "Umair Akbar", role: "Senior Frontend Engineer", image: member6, bio: "Introducing Umair - a dynamic Software Engineer who's been contributing significantly to Speecto for 2 years. Despite being an extrovert, he's a man of few words but abundant action. An alumnus of Riphah International University, Umair is not only kind and humorous but also hardworking and strategic." },
  { id: 7, name: "Uzair Aslam", role: "UI UX Designer", image: member7, bio: "Meet Uzair Aslam - a testament to the friendly atmosphere at Speecto. Uzair, a 2021 graduate from the Agriculture University of Faisalabad, joined Speecto nine months ago and has since proved his mettle as an exceptional UI/UX designer." },
  { id: 8, name: "Asad Ijaz", role: "Frontend Engineer", image: member8, bio: "Introducing Asad Ijaz, our skilled Junior Front-End Engineer at Speecto and a champion at Counter-Strike: Global Offensive. A graduate from the Agriculture University of Faisalabad, Asad is proficient in React.js. He appreciates the supportive team, frequent events, and flexible timings at Speecto." },
  { id: 9, name: "Muhammad Saif", role: "Backend Developer", image: member9 , bio: "Introducing Muhammad Saif-ur-Rehman, an adept Junior Back End Developer with one year of professional experience, is a proud graduate of the University of Faisalabad. He currently brings his skills and values to his role at Speecto."},
  { id: 10, name: "Mujtaba Asif", role: "Frontend Engineer", image: member10, bio: "Mujtaba Asif, a compassionate individual and graduate from National Textile University, serves as a Mern-Stack developer at Speecto, leveraging his one-year professional experience in the field. He is known for his work-life balance, love for travel, and aspiration to excel in his coding career at Speecto." },
  { id: 11, name: "Muhammad Jahanzaib", role: "SEO Analyst", image: member11, bio: "Muhammad Jahanzaib, our new SEO Analyst at Speecto. Armed with a BS in Software Engineering from National Textile University and over three years of experience in the field, Jahanzaib brings a wealth of knowledge and expertise. His unique skills will no doubt contribute to enhancing our platform's visibility and reach."},
  { id: 12, name: "Mohammad Hamza", role: "Graphic Designer", image: member12, bio: "Introducing Mohammad Hamza Mohammad Ali, the newest member of our Speecto team. Holding a Bachelor's degree in Commerce from the University of Karachi and an Advanced Diploma in Media Studies from Arena Multimedia, Pakistan, Hamza brings a unique blend of academic and IT expertise. With over 4 years of diverse industry experience, including notable stints at Shop Arena, Moazzam Khan Couture, Creatrix Multimedia, Technallize, and Premium Brand Digital Solution, he is all set to leave his mark at Speecto." },
  { id: 13, name: "Ayesha", role: "Business Development Manager", image: member13, bio: "Introducing Ayesha, our new Business Development Officer at Speecto. Armed with a BBA degree and over a year of professional experience, Ayesha's business acumen is set to be a great asset to our team. We're thrilled to have her on board and can't wait to see the growth she drives." },
  { id: 14, name: "Nimra Maqsood", role: "Business Development Manager", image: member14, bio: "We'd like to welcome Nimra, another addition to our Business Development team. With an impressive academic background, holding both a BS and MPhil in Computer Science, and a year of industry experience, we are excited to see how her tech-savvy approach benefits our business strategies." },
  { id: 15, name: "Noor Fatima", role: "Human Resource Executive", image: member15,bio: "Meet Noor Fatima, our new Human Resources Manager. A BBA graduate with over a year of HR experience, Fatima's expertise in fostering positive work environments is set to be a valuable addition to our company culture. We're confident she'll make a significant impact in strengthening our team." }
];

const OurTeam = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name required!';
    if (!formData.email.trim()) newErrors.email = 'Email required!';
    if (!formData.phone.trim()) newErrors.phone = 'Company name required!';
    if (!formData.subject.trim()) newErrors.subject = 'Phone No. required!';
    if (!formData.message.trim()) newErrors.message = 'Trade required!';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form Submitted:', formData);
      setErrors({});
    }
  };

  return (
    <div className="our_team_page">
      <section className="team_hero_container">
        <div className="team_hero_content">
          <h1 className="team_hero_title">
            MEET OUR <span>TEAM</span>
          </h1>
          <p className="team_hero_subtitle">
            UNLEASHING THE POWER OF COLLABORATION TO CREATE EXTRAORDINARY RESULTS.
          </p>
        </div>

        <div className="team_image_container">
          <img
            src={teamHeroImg}
            alt="Speecto Team"
            className="team_crop_img"
          />
        </div>
      </section>
      <section className="team_cards_section">
  <div className="team_cards_grid">
    {teamMembers.map((member) => (
      <div key={member.id} className="team_card">
        <div className="card_img_wrapper">
          <img src={member.image} alt={member.name} />
          <div className="card_overlay">
            <h3 className="member_name">{member.name}</h3>
            <p className="member_role">{member.role}</p>
          </div>
          {member.bio && (
            <div className="hover_overlay">
              <h3 className="hover_name">{member.name}</h3>
              <p className="hover_role">{member.role}</p>
              <p className="hover_bio">{member.bio}</p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
      <section className="get_started_section">
        <h2 className="get_started_heading">Let's Get Started</h2>

        <form className="get_started_form" onSubmit={handleSubmit} noValidate>
          <div className="form_row">
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error_text">{errors.name}</span>}
            </div>

            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error_text">{errors.email}</span>}
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label htmlFor="phone">Phone No.</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error_text">{errors.phone}</span>}
            </div>

            <div className="form_group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="error_text">{errors.subject}</span>}
            </div>
          </div>
          <div className="form_group full_width">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error_text">{errors.message}</span>}
          </div>
          <div className="submit_btn_wrapper">
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default OurTeam;