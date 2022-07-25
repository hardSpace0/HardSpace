import { useRef } from "react";
import Axios from "axios";
import "./Booking.css";
import { useState, useEffect } from "react";
import reserve from "./reserve.jpg"
import { Link } from 'react-router-dom';


export default function Booking() {
  const userName = useRef();
  const phone = useRef();
  const name = useRef();
  const surname = useRef();
  const mail = useRef();
  const [id, setID] = useState(1)
  const [success, setsucc] = useState(false)
  const [fail, setfail] = useState(false)
  const [fails, setfails] = useState(false)
  useEffect(() => {
    const idL = window.location.href.split('/')
    setID(idL[idL.length - 1])
  }, [])

  const register = () => {
    if (sessionStorage.getItem("logged26554336") === "logged") {
      const userID = JSON.parse(sessionStorage.getItem("loggedPersInfo")).userName
      Axios.post("http://localhost:3001/reserve", {
        mail: mail.current.value,
        phone: phone.current.value,
        tourID: id,
        surname: surname.current.value,
        name: name.current.value,
        userName: userID,
      }).then((result) => {
        if (result.data.message === "succ") {
          setsucc(true)
          setfail(false)
        } else {
          setfail(true)
          setsucc(false)
        }
      });
    }
    else {
      setfails(true)
    }
  };


  return (
    <div>
      <div className="aboutBackground" style={{ color: 'white' }}>
        <h1 className="AboutcoverH1">Reserve Tour</h1>
      </div>
      <div className="Account">
        <div className="cont">
          {fails && <h1>you must be loged in to reserve tour</h1>}
          {success && <h1>tour reserved</h1>}
          {fail && <h1>something went wrong try again</h1>}

          <h1 className="head7">Booking Form</h1> <br></br>
          <label>Name</label>
          <input type="text" name="name" className="inp5" ref={name} /> <br></br>
          <label>Surname</label>
          <input type="text" name="surname" className="inp5" ref={surname} /> <br></br>
          <label>Mail</label>
          <input type="text" name="mail" className="inp5" ref={mail} /><br></br>
          <label>Phone</label>
          <input type="text" name="phone" className="inp5" ref={phone} /><br></br>
          <button className="btn7" onClick={register}>
            {" "}
            reserve{" "}
          </button>
          <br></br>
        </div>

        <div class="AccountForm">
          <img src={reserve} className="bookPic"></img>
          <div className="contact">
            <div className="left">
              <h1>Welcome</h1>
              <p>To Add a Blog, Please Registrate at First</p>
              <Link to="/Registration"><p className="btn7">registrate</p></Link>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
