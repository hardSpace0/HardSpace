import React, { useState } from 'react';
import { Data } from './Data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import "./FAQ.css"

const FAQ = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };

    return (
        <IconContext.Provider value={{ color: '#254e58', size: '25px' }}>
            <div className="aboutBackground" style={{ color: 'white' }}>
                <h1 className="AboutcoverH1">Frequently Asked Questions</h1>
                <br></br>
            </div>
            <div className='FAQSection'>
                <div className='FAQContainer'>
                    <h1 className='headerFAQ'>Frequently asked Questions</h1>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <div className='Wrap' onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <FiMinus style={{ color: 'red' }} /> : <FiPlus />}</span>
                                </div>
                                {clicked === index ? (
                                    <div className='DropdownFAQ'>
                                        <p>{item.answer}</p>
                                    </div>
                                ) : null}
                            </>
                        );
                    })}
                </div>
            </div>
        </IconContext.Provider>
    );
};

export default FAQ;