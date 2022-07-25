import React from 'react'
import "./hero.css"
import Video from '../../source/vdo.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRef } from "react"
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate()
    const str = useRef()
    const search = () => {
        navigate('/search/' + str.current.value)
    }
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className='overlay'></div>
            <div className='hero-content'>
                <h1 style={{ color: "#254E58" }}>Let's Get Lost</h1>
                <h2>Organazing Trips Is What We Do</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Trips...' ref={str} />
                    </div>
                    <div>
                        <button className='hero-button' onClick={search}><AiOutlineSearch className='hero-search' /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero