import { useRef, useEffect, useState } from 'react';
import Axios from 'axios';
import "./Destinations.css";
import { Link } from 'react-router-dom'
export default function Cards() {

  const [cardList, setCardList] = useState([])
  const pfrom = useRef();
  const pto = useRef();
  const tfrom = useRef();
  const tto = useRef();
  const sort = useRef();
  const direction = useRef();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      if (response.data.message === "succ") {
        setCardList(response.data.result)
      }
    }
    )
  }, [])

  const search = () => {
    var date = '/'
    if (tfrom.current.value != '') {
      date += tfrom.current.value + '/'
    }
    else {
      date += '-1/'
    }
    if (tto.current.value != '') {
      date += tto.current.value + '/'
    }
    else {
      date += '-1/'
    }
    const link = 'http://localhost:3001/gettourlist/1' + date + pfrom.current.value + '/' + pto.current.value + '/' + sort.current.value + '/' + direction.current.value
    console.log('link')
    console.log(link)
    Axios.get(link).then((result) => {
      if (result.data.message === 'succ') {
        setCardList(result.data.result)
      }
    });
  }


  return (
    <div>
      <div className="aboutBackground" style={{ color: 'white' }}>
        <h1 className="AboutcoverH1">Destinations</h1>
      </div>
      <div className="planner">
        <div className='planForm'>
          <div className="row">
            <label className='planLabel'>Date from</label>
            <input type="date" className='planDate' defaultValue={'-1'} ref={tfrom} />
          </div>
          <div className="row">
            <label className='planLabel'>Date to</label>
            <input type="date" className='planDate' defaultValue={'-1'} ref={tto} />
          </div>
          <div className="row">
            <label className='planLabel'>Min Price</label>
            <input className='planInput' style={{ width: "100px" }}
              type="number"
              placeholder='$0'
              defaultValue={'0'}
              ref={pfrom}
            />
          </div>
          <div className="row">
            <label className='planLabel'>Max Price</label>
            <input className='planInput' style={{ width: "100px" }}
              type="number"
              placeholder='$10000'
              defaultValue={'10000'}
              ref={pto}
            />
          </div>
          <div className="row">
            <label className='planLabel'>sort by</label>
            <select ref={sort} defaultValue={-1} className='planInput'>
              <option value={-1}>None</option>
              <option value={'start_date'}>Date</option>
              <option value={'price'}>Price</option>
            </select>
          </div>
          <div className="row">
            <label className='planLabel'>sort direction</label>
            <select ref={direction} defaultValue={-1} className='planInput'>
              <option value={'asc'} className='planInput'>🡩 ASC</option>
              <option value={'desc'} className='planInput'>🡫 DESC</option>
            </select>
          </div>

          <div className="row">
            <button className="planSearch" onClick={search}>
              <span className="planSearch-shadow"></span>
              <span className="planSearch-edge"></span>
              <span className="planSearch-front text">
                Search
              </span>
            </button>
          </div>
        </div>
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
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>

  );
}


