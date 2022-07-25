import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import "./FAQ.css"

const FAQs = () => {
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState();

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch('Bases.json')
        const d = await response.json()
        setData(d)
    }


    return (
        <IconContext.Provider value={{ color: '#254e58', size: '25px' }}>
            <div className='FAQSection'>
                <div className='FAQContainer'>
                    <h1 className='headerFAQ'>Frequently asked Questions</h1>
                    {data && data.map(record => {
                        return (
                            <>
                                <div className='Wrap' onClick={() => toggle(record.id)} key={record.id}>
                                    <h1>{record.question}</h1>
                                    <span>{clicked === record.id ? <FiMinus style={{ color: 'red' }} /> : <FiPlus />}</span>
                                </div>
                                {clicked === record.id ? (
                                    <div className='DropdownFAQ'>
                                        <p>{record.answer}</p>
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

export default FAQs;