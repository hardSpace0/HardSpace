import { useRef, useState, useEffect } from 'react';
import Axios from 'axios';
import Login from './login';
import "./Administartor.css";
import pers from "./pers.png";
import React from 'react';


function Administrator() {

  const [name, setname] = useState('')
  const [surname, setsurname] = useState('')
  const [mail, setmail] = useState('')
  const [mob, setmob] = useState('')
  const [stat, setstat] = useState('')
  //(description, photo, price, start_date, tourPK)

  const descript = useRef();
  const ph = useRef();
  const pr = useRef();
  const startdate = useRef();
  const enddate = useRef();
  const tour = useRef();
  const id = useRef();

  const [cardList, setCardList] = useState([]);
  const [mails, setMails] = useState([])


  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      if (response.data.message === "succ") {
        setCardList(response.data.result)
      }
    }
    )
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/mails").then((response) => {
      if (response.data.message === "succ") {
        setMails(response.data.result)
      }
    }
    )
  }, [])


  const insert = () => {
    Axios.post("http://localhost:3001/insert", {
      description: descript.current.value,
      photo: ph.current.value,
      price: pr.current.value,
      start_date: startdate.current.value,
      end_date: enddate.current.value,
      tourPK: tour.current.value,
    }).then((result) => {
      console.log(result);
      console.log("succes");
    }
    )
    Axios.get("http://localhost:3001/api/get").then((response) => {
      if (response.data.message === "succ") {
        setCardList(response.data.result)
      }
    }
    )
  }

  function del(id) {
    Axios.post(`http://localhost:3001/delete`, {
      id: id,
    }).then((result) => {
      console.log(result);
    })
    Axios.get("http://localhost:3001/api/get").then((response) => {
      if (response.data.message === "succ") {
        setCardList(response.data.result)
      }
    }
    )

  }

  return (
    <div className="AdminPage">
      <div className="aboutBackground" style={{ color: 'white' }}>
        <h1 className="AboutcoverH1">Administrator Page</h1>
      </div>
      <br></br>


      <div className="newsAdmin">
        <h2>Newsletter Requests</h2>
        <br></br>
        {mails.map((val) => {
          <li key={val.id}></li>
          return <table className="mails">
            <ol>
              <li>{val.mail}</li>
            </ol>
          </table>
        })}
      </div>
      <div className="Destinations">
        {cardList.map((val) => {
          <li key={val.id}></li>
          return <div className="tour">
            <img src={val.photo} className="tourImg" alt=""></img>
            <div className="tour_info">
              <div className="post_content">
                <h1>{val.tourName}</h1>
                <p className="desc_tour">{val.description}</p>
                <div className="container_infos">
                  <br></br>
                  <span className='tourSpan'> {((new Date(val.end_date)) - (new Date(val.start_date))) / (1000 * 60 * 60 * 24) + 1} Days: $ {val.price}/person</span>
                  <br></br>
                  <span> {val.days_left}  days left before tour starts</span>
                  <br></br>
                  <br></br>
                  <a href={"http://localhost:3000/Tour/" + val.id} className="cardButton" >Details</a>
                  <button className='delCard' onClick={() => del(val.id)} > delete  </button>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
      <br></br>

      <div className='containerA'>

        <h1 className='headA'>Add Tour <br></br> </h1>
        <label className='A'>Tour Name</label>
        <input type="text" name='name' className='inputA' ref={tour} />
        <label className='A'>Description</label>
        <input type="text" name='name' className='inputA' ref={descript} />
        <label className='A'>Photo Link</label>
        <input type="text" name='surname' className='inputA' ref={ph} />
        <label className='A'>Start date</label>
        <input type="date" name='userName' className='inputA' ref={startdate} />
        <label className='A'>End date</label>
        <input type="date" name='userName' className='inputA' ref={enddate} />
        <label className='A'>Price</label>
        <input type="text" name='phone' className='inputA' ref={pr} />
        <button className='btn7' onClick={insert} > insert  </button>
      </div>
      <br></br>
    </div >

  );

}

export default Administrator;








