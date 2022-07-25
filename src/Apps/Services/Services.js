import React from "react";
import "./Services.css"
import { AiOutlineSafetyCertificate } from "react-icons/ai"
import { GiPriceTag } from "react-icons/gi"
import { FaPlane } from "react-icons/fa"
import { MdSecurity } from "react-icons/md"

export default function Services() {
    const data = [
        {
            icon: <GiPriceTag />,
            title: "Best Prices",
            subTitle:
                "Many offers and the lowest prices.",
        },
        {
            icon: <AiOutlineSafetyCertificate />,
            title: "Safety",
            subTitle:
                "We have all the curated hotels that have all the precaution for a covid safe environment.",
        },
        {
            icon: <MdSecurity />,
            title: "Travel Insurance",
            subTitle:
                "Financial protection while you face certain problems when you're travelling or on holiday.",
        },
        {
            icon: <FaPlane />,
            title: "Tours Around The World",
            subTitle:
                "Find the best places around the world.",
        },
    ];
    return (
        <div className="services">
            {
                data.map((service, index) => {
                    return (
                        <div className="service">
                            <h2> {service.icon} {service.title}</h2>
                            <p>{service.subTitle}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}