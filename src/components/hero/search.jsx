import { useRef, useEffect, useState } from 'react';
import Axios from 'axios';
// import './src/Apps/Destinations/Destinations.css'
import Hero from './hero';
export default function Search() {

    const [cardList, setCardList] = useState([])
    const [message, setmessage] = useState('')


    useEffect(() => {
        const idL = window.location.href.split("/");
        Axios.get("http://localhost:3001/search/" + idL[idL.length - 1]).then((response) => {
            if (response.data.err) {
                setmessage('try another way')
            }
            else {
                setCardList(response.data.result)
            }
        })
    }, [])


    return (
        <div>
            <Hero />
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

    );
}


