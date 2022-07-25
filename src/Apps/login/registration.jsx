import { useRef, useState } from 'react';
import Axios from 'axios';
import "./registration.css";
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

function Registration() {
  Registration.prototype.logged = '';
  const [mess, setmess] = useState('');
  const [invalid, setInvalid] = useState('');
  const [checked, setChecked] = useState(false);
  const [warning, setWarning] = useState('');


 
  const userName = useRef();
  const password = useRef();
  const phone = useRef();
  const name = useRef();
  const surname = useRef();
  const mail = useRef();

  let navigate = useNavigate();

  const handleChange = () => {

    setChecked(!checked);
    setWarning("")
  };

  const register = () => {
    if (checked) {
      Axios.post("http://localhost:3001/register", {
        mail: mail.current.value,
        phone: phone.current.value,
        password: password.current.value,
        surname: surname.current.value,
        name: name.current.value,
        userName: userName.current.value
      }).then((result) => {

        if (result.data.message === 'succ') {
          setmess("succesfull registration");
          sessionStorage.setItem("logged26554336", 'logged')
          sessionStorage.setItem("loggedPersInfo", JSON.stringify(result.data.result[0]))
          sessionStorage.setItem("userType543678", "user")
          Registration.prototype.logged = 'logged';
          navigate('/')
        }

        else {
          if (result.data.message === 'UAO') {
            setInvalid("username is occupied");
          }
          else {
            setmess("ops something went wrong try another time");
          }
        }
      })
    } else {
      setWarning("You should read the rules")
    }
    setInvalid("")
  }


  const getStyle = () => {
    return {
      color: `#ff0000`,


    };
  };


  return (
    <div>
      <div className="aboutBackground" style={{ color: 'white' }}>
        <h1 className="AboutcoverH1">Registration</h1>
      </div>
      <div className='Account'>
        <div className='cont'>
          <h1 className='head7'>Registration</h1>
          <br></br>
          <label>Name</label>
          <input type="text" name='name' className='inp5' ref={name} />
          <label>Surname</label>
          <input type="text" name='surname' className='inp5' ref={surname} />
          <label>User Name</label>
          <input type="text" name='userName' className='inp5' ref={userName} />
          <p className='message' style={getStyle()}>{invalid && <p>{invalid}</p>}</p>
          <label>Password</label>
          <input type="password" name='password' className='inp5' ref={password} />
          <label>Mail</label>
          <input type="text" name='mail' className='inp5' ref={mail} />
          <label>Phone</label>
          <input type="text" name='phone' className='inp5' ref={phone} />
          <div className='rule'>
            <input type="checkbox" onChange={handleChange}></input>
            <>I read and agree with the  <Link to="/Rules" style={{ color: "blue" }}>   rules</Link></>
          </div>
          <br></br>
          <div className='message' style={getStyle()}>{warning && <div>{warning}</div>}</div>

          <button className='btn7' onClick={register} > Register  </button>

          <h5 style={getStyle()}>{mess && <h5>{mess}</h5>}</h5>
        </div >

        <div class="AccountForm">
          <div className='contact'>
            <div className="left">
              <h1>Welcome</h1>
              <p>If You Already have An Account, You Can Log In Here</p>
              <Link to="/Login"><p className="btn7">Log In</p></Link>
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
  );
}

export default Registration;
