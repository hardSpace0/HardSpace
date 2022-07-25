import React, { useState, useRef } from 'react'
import './footer.css'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import Axios from 'axios';

function Footer() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const NavLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? 'rgb(37, 78, 88, 0.01)' : 'white',
        }
    }

    const ml = useRef();
    const nm = useRef();
    const subscribe = () => {
        Axios.post("http://localhost:3001/subscribe", {
            mail: ml.current.value,
            name: nm.current.value,
        }).then((result) => {
            console.log(result);
            console.log("success");
        })
    }
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="contain">
                    <a href="#">
                        <Link to="/"><h3 className='footerLogo' ><span style={{ color: '#112d32', fontSize: '25px' }}>Hard</span><span style={{ color: '#88bdbc', fontSize: '25px' }}>Space</span></h3></Link>
                    </a>
                    <div className='aboutFooter'>
                        FOR the most wild, yet most homely narrative which I am about to pen,
                        I neither expect nor solicit belief. Mad indeed would I be to expect it, in a case where my very senses reject their own evidence.
                        , in a case where my very senses reject their own evidence.
                    </div>
                    <div className="social" >
                        <a href="#faq" className='fb'><FaFacebook size={'1.5em'} /> </a>
                        <a href="#faq" className='twitter'><FaTwitter size={'1.5em'} /></a>
                        <a href="#faq" className='youtube'><FaYoutube size={'1.5em'} /></a>
                        <a href="#faq" className='linkdIn'><FaLinkedin size={'1.5em'} /> </a>
                    </div>
                </div>
                <div className="contain">
                    <ul>
                        <h3 className='contactFooter'>Useful Links</h3>
                        <li>
                            <Link to="/about" className='footerLink'><FaArrowRight className='footerArrow' /> about</Link>
                        </li>
                        <li>
                            <Link to="/destinations" className='footerLink'> <FaArrowRight className='footerArrow' /> Destinations</Link>
                        </li>
                        <li>
                            <Link to="/terms" className='footerLink'><FaArrowRight className='footerArrow' /> Terms</Link>
                        </li>
                        <li>
                            <Link to="/faq" className='footerLink'><FaArrowRight className='footerArrow' /> FAQ</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className='footerLink'><FaArrowRight className='footerArrow' /> Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='footerLink'><FaArrowRight className='footerArrow' /> Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="contain">
                    <form className='newsForm'>
                        <div className="container">
                            <h3> Newsletter</h3>
                        </div>

                        <div className="news">
                            <input type="text" placeholder="Name" name="name" className='newsInput' required ref={nm}></input>
                            <input type="email" placeholder="Email address" name="email" className='newsInput' required ref={ml}></input>
                            <br></br>
                            <label>
                                <input type="checkbox" name="subscribe"></input> Daily Newsletter
                            </label>
                        </div>

                        <div className="container">
                            <input type="submit" value="subscribe" className='subscribeSubmit' onClick={subscribe}></input>
                        </div>
                    </form>
                </div>
                <div class="contain">
                    <div className='contactInfos'>
                        <ul>
                            <h3 className='contactFooter'> <Link to="/contact">Contact Us</Link></h3>
                            <li>
                                <FaArrowRight className='footerArrow' /> <MdLocalPhone /> +955534234
                            </li>
                            <li>
                                <FaArrowRight className='footerArrow' /> <MdEmail /> HardSpaceCompany@gmail.com
                            </li>
                            <li>
                                <FaArrowRight className='footerArrow' /> <MdLocationOn /> Kutaisi, Georgia
                            </li>
                            <li>
                                <FaArrowRight className='footerArrow' />  <Link to="#" className='footerLink'> HardSpace.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer