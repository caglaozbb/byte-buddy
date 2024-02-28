import React, { useState, useEffect } from 'react';

import './popup.css';
import petImage from './assets/white_idle_8fps.gif';
import { MdEdit } from "react-icons/md";


function Popup() {
    const [name, setName] = useState(localStorage.getItem('petName') || 'balim');
    const [editable, setEditable] = useState(false);
    const [hunger, setHunger] = useState(100);
    const [game, setGame] = useState(100);
    const [sleep, setSleep] = useState(100);


    useEffect(() => {
        localStorage.setItem('petName', name);
    }, [name]);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleEditClick = () => {
        setEditable(true);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setEditable(false);
            localStorage.setItem('petName', name);
            console.log('Name saved:', name);
        }
    }

    function handleFoodClick() {
        setHunger(Math.min(hunger + 10, 100));
        console.log('Food button clicked');
    }

    function handlePlayClick() {
        setGame(Math.min(game + 10, 100));
        console.log('Play button clicked');
    }

    function handleSleepClick() {
        setSleep(Math.min(sleep + 10, 100));
        console.log('Sleep button clicked');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setHunger(prevHunger => Math.max(prevHunger - 5, 0));
        }, 15 * 60 * 1000); //15 dk (15dk * 60 sn * 1000 msa)

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setGame(prevGame => Math.max(prevGame - 5, 0));
        }, 5 * 60 * 1000); //5 dk 

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSleep(prevSleep => Math.max(prevSleep - 10, 0));
        }, 60 * 60 * 1000); //1 saat

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <img src={petImage} alt="Petim" style={{ width: '50px', height: 'auto', justifyContent: 'center' }} />
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
                        <div className="food-bar bar" style={{ height: `${hunger}%`, backgroundColor: hunger > 50 ? '#FDA7DF' : '#f73c7a' }}></div>
                    </div>
                    <button id="foodButton" onClick={handleFoodClick}>Food</button>
                </div>

                <div>
                    <div className="bar-container">
                        <div className="play-bar bar" style={{ height: `${game}%`, backgroundColor: game > 50 ? '#48dbfb' : '#4848fb' }}></div>
                    </div>
                    <button id="playButton" onClick={handlePlayClick}>Play</button>
                </div>

                <div>
                    <div className="bar-container">
                        <div className="sleep-bar bar" style={{ height: `${sleep}%`, backgroundColor: sleep > 50 ? '#1dd1a1' : '#1bbb2b' }}></div>
                    </div>
                    <button id="sleepButton" onClick={handleSleepClick}>Sleep</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
