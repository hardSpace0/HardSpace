import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyle.css'
import { Link, NavLink } from 'react-router-dom'
import Login from '../../Apps/login/login'
import Registration from '../../Apps/login/registration'
import { BsFillPersonFill } from 'react-icons/bs'
import eng from "./eng.png"

const Navbar = () => {
    const [admin, setadmin] = useState(false)
    const [logged, setLogged] = useState(sessionStorage.getItem("logged26554336") === "logged" || Login.prototype.logged === 'logged' || Registration.prototype.logged === "logged")
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    setInterval(function () {
        if (logged != (sessionStorage.getItem("logged26554336") === "logged" || Login.prototype.logged === 'logged' || Registration.prototype.logged === "logged")) {
            setLogged(sessionStorage.getItem("logged26554336") === "logged" || Login.prototype.logged === 'logged' || Registration.prototype.logged === "logged")
            setadmin((sessionStorage.getItem("userType543678") === "Administrator"))
        }
    }, 2000);
    useEffect(() => {
        setLogged(sessionStorage.getItem("logged26554336") === "logged" || Login.prototype.logged === 'logged' || Registration.prototype.logged === "logged")
        setadmin((sessionStorage.getItem("userType543678") === "Administrator"))
    }, [])
    const NavLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#88bdbc' : 'white',
            fontWeight: isActive ? '800' : '500',
        }
    }
    const LogOut123 = () => {
        sessionStorage.setItem("logged26554336", '')
        sessionStorage.setItem("loggedPersInfo", '')
        sessionStorage.setItem("userType543678", '')
        Login.prototype.logged = ''
        Registration.prototype.logged = ""
        setLogged(false)
    }

    return (
        <div className='Navbar'>
            <div className='nav-container'>
                <a href="#">
                    <h2><Link exact to='/'><span style={{ color: '#112d32' }}>Hard</span><span style={{ color: '#88bdbc' }}>Space</span></Link></h2>
                </a>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a>
                            <NavLink exact to='/' style={NavLinkStyles} className='navLink'>Home</NavLink>
                        </a>
                    </li>
                    <li>
                        <a>
                            <NavLink exact to='/destinations' className='navLink' style={NavLinkStyles}>Destinations</NavLink>
                        </a>
                    </li>
                    <li>
                        <NavLink exact to='/blogs' className='navLink' style={NavLinkStyles}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" className='navLink' style={NavLinkStyles}>About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" style={NavLinkStyles}>
                            Contact
                        </NavLink>
                    </li>
                    {logged &&
                        <li>
                            <NavLink exact to="/profile" style={NavLinkStyles}>
                                Profile
                            </NavLink>
                        </li>
                    }
                    {admin &&
                        <li>
                            <NavLink exact to="/Administrator" style={NavLinkStyles}>
                                Admin Page
                            </NavLink>
                        </li>
                    }
                </ul>
                <div className='leftNav'>
                    <select className='languages'>
                        <option >ENG</option>
                        <option>GEO</option>
                    </select>
                    
                    {(logged) ? <>
                        <NavLink exact to="/"><button onClick={LogOut123} className="logoutBtn"><BsFillPersonFill className='logout' size={'1.8em'} />Log Out</button></NavLink>
                    </> : <>
                        <NavLink exact to="/Login"><button className='nav-signup'>Account</button></NavLink>
                    </>}
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={20} style={{ color: 'red' }} />) : (<FaBars size={20} style={{ color: '#88bdbc' }} />)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar