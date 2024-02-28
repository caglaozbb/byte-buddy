import React, { useState, useEffect } from 'react';

import './popup.css';
import petImage from './assets/white_idle_8fps.gif';
import { MdEdit } from "react-icons/md";


function Popup() {
    const [name, setName] = useState(localStorage.getItem('petName') || 'balim');
    const [editable, setEditable] = useState(false);


    useEffect(() => {
        localStorage.setItem('petName', name);
    }, [name]);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleEditClick = () => {
        setEditable(true);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setEditable(false);
            localStorage.setItem('petName', name);
            console.log('Name saved:', name);
        }
    };

    function handleFoodClick() {
        console.log('Food button clicked');
        // food
    }


    return (
        <div className="container">
            <img src={petImage} alt="Petim" style={{ width: '50px', height: 'auto' }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    {editable ? (
                        <input type="text" value={name} onChange={handleChange} onKeyDown={handleKeyPress} />
                    ) : (
                        <div style={{ textAlign: 'center' }}>{name}</div>
                    )}
                </div>
                <MdEdit onClick={handleEditClick} style={{ cursor: 'pointer' }} />
            </div>
            <div className="bars-container" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <div>
                    <div className="bar-container">
                        <div className="food-bar bar"></div>
                    </div>
                    <button id="foodButton" onClick={handleFoodClick}>Food</button>
                </div>

                <div>
                    <div className="bar-container">
                        <div className="play-bar bar"></div>
                    </div>
                    <button id="playButton">Play</button>
                </div>

                <div>
                    <div className="bar-container">
                        <div className="sleep-bar bar"></div>
                    </div>
                    <button id="sleepButton">Sleep</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
