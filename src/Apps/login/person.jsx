import React, { useState, useEffect } from 'react'
import Login from './login'
import "./person.css";
import pers from "./pers.png"



export default function Person() {
  const [name, setname] = useState('')
  const [surname, setsurname] = useState('')
  const [mail, setmail] = useState('')
  const [mob, setmob] = useState('')
  const [stat, setstat] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem("logged26554336") === "logged") {
      const info = JSON.parse(sessionStorage.getItem("loggedPersInfo"))
      setname(info.name)
      setmail(info.mail)
      setmob(info.phone)
      setsurname(info.mail)
      setstat(info.usertype)
    }
  }, []
  )
  return (
    <>
      <div className="aboutBackground" style={{ color: 'white' }}>
        <h1 className="AboutcoverH1">Profile</h1>
      </div>
      <div className="profile-container">
        <div className="profilePerson" >
          <img src={pers} alt='' className="pers"></img>
          <div >Name: {name}</div>
          <div >Surname: {surname}</div>
          <div >Mail: {mail}</div>
          <div>Mobile: {mob}</div>
          <div>Status: {stat}</div>
        </div>
      </div>
    </>
  )
}
