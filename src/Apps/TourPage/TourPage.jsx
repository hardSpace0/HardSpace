import "./TourPage.css";
import React, { useRef, useState, useEffect } from "react";
import BtnSlider from "./BtnSlider.js";
import { GiFoodTruck } from "react-icons/gi";
import { TbBuildingCarousel, TbFileDescription } from "react-icons/tb";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaStar, FaTicketAlt, FaHotel } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import Axios from "axios";
import { Link } from "react-router-dom"

export default function TourPage() {
  const [id, setID] = useState();
  const [toggleState, setToggleState] = useState(1);
  const [description, setdescription] = useState("");
  const [details, setdetails] = useState("");
  const [start_date, setstartdate] = useState("");
  const [end_date, setenddate] = useState("");
  const [photo, setphoto] = useState("");
  const [photo1, setphoto1] = useState("");
  const [photo2, setphoto2] = useState("");
  const [photo3, setphoto3] = useState("");
  const [price, setprice] = useState("");
  const [tourName, settourName] = useState("");
  const [comments, setComments] = useState([]);
  const comment = useRef();
  const insert = () => {
    if (sessionStorage.getItem("logged26554336") === "logged") {
      const info = JSON.parse(sessionStorage.getItem("loggedPersInfo"));
      console.log(info.password);
      console.log(info.userName);
      Axios.post("http://localhost:3001/insert1/comment", {
        tour: id,
        userName: info.userName,
        password: info.password,
        comment: comment.current.value,
      }).then((result) => {
        console.log(result);
        console.log("succes");
      });
    }
    Axios.get("http://localhost:3001/api/get/comment/" + id).then(
      (response) => {
        if (response.data.message === "succ") {
          setComments(response.data.result);
        }
      }
    );
  };

  Axios.get("http://localhost:3001/api/get/comment/" + id).then((response) => {
    if (response.data.message === "succ") {
      setComments(response.data.result);
    }
  });

  const data = [
    {
      id: 1,
      image: `${photo}`,
    },
    {
      id: 2,
      image: `${photo1}`,
    },
    {
      id: 3,
      image: `${photo2}`,
    },
    {
      id: 4,
      image: `${photo3}`,
    },
  ];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [indexing, setIndexing] = useState(1);
  const [autoScroll, setAutoScroll] = useState(true);

  let slideInterval;
  let intervalTime = 5000;

  const dotMoving = (index) => {
    setIndexing(index);
  };

  const right = () => {
    if (indexing !== data.length) {
      setIndexing(indexing + 1);
    } else if (indexing === data.length) {
      setIndexing(1);
    }
  };

  const left = () => {
    if (indexing !== 1) {
      setIndexing(indexing - 1);
    } else if (indexing === 1) {
      setIndexing(data.length);
    }
  };

  function auto() {
    if (autoScroll) {
      slideInterval = setInterval(right, intervalTime);
    }
  }
  useEffect(() => {
    const idL = window.location.href.split("/");
    Axios.get("http://localhost:3001/getTour/" + idL[idL.length - 1]).then(
      (result) => {
        if (result.data.message === "succ") {
          setdescription(result.data.result.description);
          setdetails(result.data.result.details);
          setstartdate(result.data.result.start_date);
          setenddate(result.data.result.end_date);
          setphoto(result.data.result.photo);
          setphoto1(result.data.result.photo1);
          setphoto2(result.data.result.photo2);
          setphoto3(result.data.result.photo3);
          setprice(result.data.result.price);
          setID(result.data.result.id);
          settourName(result.data.result.tourName);
        }
      }
    );
  }, []);

  useEffect(() => {
    auto();
    return () => clearInterval(slideInterval);
  }, [indexing]);

  // star rating
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="TourPage">
      <div className="Tour-slider">
        {data.map((slide, index) => {
          return (
            <div
              key={slide.id}
              className={indexing === index + 1 ? "slide active-anim" : "slide"}
            >
              <br />
              <>
                <img
                  src={slide.image}
                  alt="slide"
                  style={{ cursor: "pointer" }}
                />
              </>
            </div>
          );
        })}

        <BtnSlider moveSlide={right} direction={"next"} />
        <BtnSlider moveSlide={left} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: data.length }).map((item, index) => (
            <div
              onClick={() => dotMoving(index + 1)}
              className={indexing === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
      <div className="headerTour">
        <h1>{tourName}</h1>
        <Link to={"/Booking/" + id}><button>Book Tour</button></Link>
      </div>
      <div className="TourContainer">
        <div className="bloc-infos">
          <button
            className={toggleState === 1 ? "infos active-infos" : "infos"}
            onClick={() => toggleTab(1)}
          >
            <div className="planLabel">
              {" "}
              <TbFileDescription /> Tour Description
            </div>
          </button>
          <button
            className={toggleState === 2 ? "infos active-infos" : "infos"}
            onClick={() => toggleTab(2)}
          >
            <div className="planLabel">
              {" "}
              <HiOutlineInformationCircle /> About Country{" "}
            </div>
          </button>
          <button
            className={toggleState === 3 ? "infos active-infos" : "infos"}
            onClick={() => toggleTab(3)}
          >
            <div className="planLabel">
              {" "}
              <TbBuildingCarousel /> Where To Go{" "}
            </div>
          </button>
          <button
            className={toggleState === 4 ? "infos active-infos" : "infos"}
            onClick={() => toggleTab(4)}
          >
            <div className="planLabel">
              {" "}
              <GiFoodTruck /> What to Eat{" "}
            </div>
          </button>
        </div>

        <div className="content-infos">
          <div
            className={
              toggleState === 1 ? "TourContent  active-content" : "TourContent"
            }
          >
            <div className="contentTour">
              <h2>About Tour</h2>
              <br></br>
              <div>
                {description}
                {details}
              </div>
              <br></br>
              <div>
                <div>
                  Start Date:{" "}
                  {(new Date(end_date) - new Date(start_date)) /
                    (1000 * 60 * 60 * 24) +
                    1}{" "}
                  left till tour starts
                </div>
                <div>
                  Price: <span className="Pricing"> {price} $</span>
                  <span class="h6 text-muted ml-2"> /per person</span>
                </div>
              </div>
              <br></br>
              <div className="TourOffers">
                <h2>Tour Offers</h2>
                <br></br>
                <ul className="tourTable">
                  <li>
                    <a href="#">
                      <FaTicketAlt /> Both Way Tickets
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaHotel /> 5 star hotel
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <GiFoodTruck /> Food
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <MdSecurity /> Travel Insurance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
            }}
            className={
              toggleState === 4 ? "TourContent  active-content" : "TourContent"
            }
          >
            <h2 className="dishesH2">National Dishes</h2>
            <p>
              <ol className="dishesOL">
                <li className="">
                  <a href="#">Pizza</a>
                </li>
                <li className="">
                  <a href="#">Spaggeti</a>
                </li>
                <li className="">
                  <a href="#">Pizza Again</a>
                </li>
                <li className="">
                  <a href="#">Mooore Pizzaaa</a>
                </li>
              </ol>
            </p>
          </div>

          <div
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
            }}
            className={
              toggleState === 3 ? "TourContent  active-content" : "TourContent"
            }
          >
            <h2 className="placesH2">Places to See</h2>
            <ol className="placesOL">
              <li className="">
                <a href="#">The Colosseum</a>
              </li>
              <li className="">
                <a href="#">Random Pizzerias</a>
              </li>
              <li className="">
                <a href="#">Take a Walk With a Pope</a>
              </li>
              <li className="">
                <a href="#">The Vatican</a>
              </li>
              <li className="">
                <a href="#">Sistine Chapel</a>
              </li>
            </ol>
          </div>
          <div
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
              backgroundsize: "cover",
            }}
            className={
              toggleState === 2 ? "TourContent  active-content" : "TourContent"
            }
          >
            <h2 className="ToursH2">About Country</h2>

            <div className="ToursDiv">
              <p>{details}</p>
              <br></br>
              <p>{details}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tourRating">
        <h2> Rate The Tour </h2>
        <br></br>
        <div className="tourStars">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={30}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? "orange" : "grey"}
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <textarea
          placeholder="Heelo, how is life?"
          className="textareaTour"
          ref={comment}
        />
        <br></br>
        <button className="btn7" style={{ padding: "5px", fontsize: "10px" }} onClick={insert}>
          Submit
        </button>
        <br></br>
        <br></br> <br></br>
        {comments.map((val) => {
          <li key={val.ID}></li>;
          return (
            <div className="comments7">
              <div className="commentuser"> {val.user} </div>
              <span >{val.comment}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

