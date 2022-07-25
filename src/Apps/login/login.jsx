import "./login.css";
import { useState, useRef } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Login() {
  Login.prototype.logged = '';
  const [persInfo, setPersInfo] = useState();
  const [invalid, setin] = useState(false);
  const [valid, setValid] = useState(false);
  const password = useRef();
  const userName = useRef();
  const [res, setRes] = useState(false);
  const [correct, setCorrect] = useState(false);

  const [utype, setUtype] = useState("");

  const handleChange = (event) => {
    setUtype(event.target.value)
  }

  Login.prototype.valid = () => {
    return valid
  }

  let navigate = useNavigate();

  const log = () => {
    Axios.post("http://localhost:3001/login", {
      ID: userName.current.value,
      password: password.current.value
    }).then((result) => {
      if (result.data.message === "succ") {
        setPersInfo(result.data.result[0])
        setRes(true);
        Login.prototype.ppp = result.data.result[0];
        setValid(true);
        Login.prototype.logged = 'logged';
        sessionStorage.setItem("userType543678", result.data.result[0].usertype)
        sessionStorage.setItem("logged26554336", "logged")
        sessionStorage.setItem("loggedPersInfo", JSON.stringify(result.data.result[0]))
        if (result.data.result[0].usertype === 'Administrator') {
          navigate('/Administrator');
        }
        else {
          navigate('/')
        }
      }
      else if (result.data.message === "invalid userName/password") {
        setCorrect("Username or Password is incorrect")
      }
      else {
        setin(true);
      }
    }
    );
  }

  return (
    <div>
      <div className="aboutBackground" style={{ color: 'white' }}>
        <h1 className="AboutcoverH1">Log In</h1>
      </div>
      <div className="Account">
        <div className='contLog'>
          <h1 className='head7'>Login</h1> <br></br>
          <label className='l'>User Name</label>
          <input type="text" name='name' className='inp7' placeholder='Username' ref={userName} required />
          <label className='l'>Password</label>
          <input type="password" name='surname' className='inp7' placeholder="password" ref={password} required /> <br></br>
          <div className='message' >{correct && <div>{correct}</div>}</div>
          <button className='btn7' onClick={log} > log In  </button>
        </div>
        <div class="AccountForm">
          <div className='contact'>
            <div className="left">
              <h1>Welcome</h1>
              <p>If You Don't have An Account Yet, You Can Register</p>
              <Link to="/Registration"><p className="btn7">Register</p></Link>
            </div>
            <br></br>
            <h3>Login Via</h3>
            <div className="AccountSocial" >
              <a href="#faq" className='fb'><FaFacebook size={'1.5em'} /> </a>
              <a href="#faq" className='linkdIn'><FaLinkedin size={'1.5em'} /> </a>
              <a href="#faq" className='twitter'><FaTwitter size={'1.5em'} /></a>
              <a href="#faq" className='youtube'><FaYoutube size={'1.5em'} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}


export default Login;