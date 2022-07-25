import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Slideshow.css";
import BtnSlider from "./BtnSlider";


export default function Slider() {
    const [indexing, setIndexing] = useState(1);
    const [autoScroll, setAutoScroll] = useState(true);
    const [sl, setSl] = useState([]);

    let slideInterval;
    let intervalTime = 5000;

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            if (response.data.message === "succ") {
                setSl(response.data.result);
                console.log(response.data.result);
            }
        });
    }, []);

    let navigate = useNavigate();

    function nav(temp) {
        navigate("/Tour/" + temp);
    }

    const dotMoving = (index) => {
        setIndexing(index);
    };

    const right = () => {
        if (indexing !== sl.length) {
            setIndexing(indexing + 1);
        } else if (indexing === sl.length) {
            setIndexing(1);
        }
    };

    const left = () => {
        if (indexing !== 1) {
            setIndexing(indexing - 1);
        } else if (indexing === 1) {
            setIndexing(sl.length);
        }
    };

    function auto() {
        if (autoScroll) {
            slideInterval = setInterval(right, intervalTime);
        }
    }

    useEffect(() => {
        auto();
        return () => clearInterval(slideInterval);
    }, [indexing]);

    return (
        <div className="container-slider">
            {sl.map((slide, index) => {
                return (
                    <div
                        key={slide.id}
                        className={indexing === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <h1>Popular Destinations</h1>
                        <br />
                        <>
                            <img
                                src={slide.photo}
                                alt="slide"
                                style={{ cursor: "pointer" }}
                            />
                            <div className="content">
                                <h2>{slide.tourName}</h2>
                                <p>{slide.price}</p>
                                <a href={"http://localhost:3000/Tour/" + slide.id}
                                    className="cardButton">
                                    View More
                                </a>
                                <a />
                            </div>
                        </>
                    </div>
                );
            })}

            <BtnSlider moveSlide={right} direction={"next"} />
            <BtnSlider moveSlide={left} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: sl.length }).map((item, index) => (
                    <div
                        onClick={() => dotMoving(index + 1)}
                        className={indexing === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
        // </>
    );
}
