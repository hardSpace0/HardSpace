import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';

export default function Contact() {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_eqmx9ze', 'template_h3jxoew', form.current, 'Cdx0QTJzrKqL5hjQ1')
            .then((result) => {
                console.log('email sent successfully');
            }, (error) => {
                // alert('error sending email');
            });
        e.target.reset();
    }
    return (
        <div>
            <div>
                <div className="aboutBackground" style={{ color: 'white' }}>
                    <h1 className="AboutcoverH1">Contact Us</h1>
                </div>
                <div className='contact-section'>
                    <div className='contact-form'>
                        <h3 className='contactUsForm'>Les's Get In Touch</h3>
                        <form ref={form} onSubmit={sendEmail} classname="contactForm">
                            <label>Your Name<span style={{ color: "red" }}>*</span></label>
                            <input type="text" name="from_name" className='contactUser' placeholder='Your Name' required></input>
                            <label>Email<span style={{ color: "red" }}>*</span></label>
                            <input type="email" name="reply_to" className='contactUser' placeholder='Email' required></input>
                            <label>Message</label>
                            <textarea name="message" className='textUser' placeholder='Say Hi...' required />
                            <input type="submit" value="Send" className='contactSubmit'></input>
                        </form>
                    </div>

                    <div class="contact-info">
                        <h3 className="contactUs">Contact Us</h3>
                        <div className='contact'>
                            <div className="left">
                                <a ><MdLocalPhone /> +955534234 </a>
                                <br></br>
                                <a className='contactIcon'><MdEmail /> HardSpaceCompany@gmail.com </a>
                                <br></br>
                                <a><MdLocationOn /> Kutaisi, Georgia</a>
                            </div>
                            <div className="social" >
                                <a href="#faq" className='fb'><FaFacebook size={'1.5em'} /> </a>
                                <a href="#faq" className='linkdIn'><FaLinkedin size={'1.5em'} /> </a>
                                <a href="#faq" className='twitter'><FaTwitter size={'1.5em'} /></a>
                                <a href="#faq" className='youtube'><FaYoutube size={'1.5em'} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='map'>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <h1 className='mapHeader'>Where to Find us?</h1>
                            <iframe width="1020" height="336" id="gmap_canvas" src="https://maps.google.com/maps?q=KutaisiInternationalUniversity&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe><a href="https://123movies-to.org"></a><br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
