import React , {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './footer.css';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const handleSubscribe = (e) =>{
        e.preventDefault();
        if (email.trim()){
            toast.success('Submitted Successfully!',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar:false,
                closeOnCLick:true,
                pauseOnHover:true,
                draggable:true,
                theme:"light", 
            });
            setEmail('');
        }
    };

    return(
        <footer className='footer_section'>
            <ToastContainer/>
            <div className='newsletter_container'>
                <div className='footer_logo'>
                    <span className='logo_icon'></span>SPEECTO<span className='logo_dot'>.</span>
                </div>
                <h3 className='newsletter_title'>Subscribe To Our Newsletter</h3>
                <form className='subscribe_form' onSubmit={handleSubscribe}>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='subscribe_input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type='submit' className='subscribe_btn'>Subscribe</button>
                </form>
            </div>
            <div className='footer_grid_wrapper'>
                <div className='footer_grid_column col_explore'>
                    <h4>Explore</h4>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#OurTeam'>Our Team</a></li>
                    </ul>
                </div>
                <div className='footer_grid_column col_resources'>
                    <h4>Resources</h4>
                    <ul>
                        <li><a href='#contact'>Contact</a></li>
                        <li><a href='#services'>Services</a></li>
                    </ul>
                </div>
                <div className='footer_grid_column col_contact'>
                    <h4>GetInTouch</h4>
                    <ul>
                        <li>
                            <div className="contact_item">
                                <svg className="contact_icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</span>
                            </div>
                        </li>
                        <li>
                            <div className="contact_item">
                                <svg className="contact_icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                <a href="mailto:contactus@specto.com">contactus@specto.com</a>
                            </div>
                        </li>
                        <li>
                            <div className="contact_item">
                                <svg className="contact_icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                <a href="tel:+442071757733">+442071757733</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="footer_bottom">
                <p>© 2023 Specto Ltd is a company registered in England and Wales (Company No. 15060881)</p>
            </div>
        </footer>
    );
};

export default Footer;