import React, { useState, useEffect } from 'react';

import './popup.css';
import petImage from './assets/white_idle_8fps.gif';
import { MdEdit } from "react-icons/md";
import {
    GAME_COOLDOWN,
    HUNGER_COOLDOWN,
    SLEEP_COOLDOWN,
    DEFAULT_STAT,
    DEFAULT_INCREMENT_VALUE,
} from "./config"

import Avatar from './components/Avatar';

function Popup() {
    const [name, setName] = useState(localStorage.getItem('petName') || 'balim');
    const [editable, setEditable] = useState(false);
    const [hunger, setHunger] = useState(localStorage.getItem('hungerStat') || DEFAULT_STAT);
    const [game, setGame] = useState(localStorage.getItem('gameStat') || DEFAULT_STAT);
    const [sleep, setSleep] = useState(localStorage.getItem('sleepStat') || DEFAULT_STAT);

    useEffect(() => {
        localStorage.setItem('petName', name);
        localStorage.setItem('hungerStat', hunger)
        localStorage.setItem('gameStat', game)
        localStorage.setItem('sleepStat', sleep)


    }, [name, hunger, game, sleep]);



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
        setHunger(Math.min(hunger + DEFAULT_INCREMENT_VALUE, 100));
        console.log('Food button clicked');
    }

    function handlePlayClick() {
        setGame(Math.min(game + DEFAULT_INCREMENT_VALUE, 100));
        console.log('Play button clicked');
    }

    function handleSleepClick() {
        setSleep(Math.min(sleep + DEFAULT_INCREMENT_VALUE, 100));
        console.log('Sleep button clicked');
    }


    useEffect(() => {
        const hungerInterval = setInterval(() => {
            setHunger(prevHunger => Math.max(prevHunger - 5, 0));
        }, HUNGER_COOLDOWN);

        const gameInterval = setInterval(() => {
            setGame(prevGame => Math.max(prevGame - 5, 0));
        }, GAME_COOLDOWN);

        const sleepInterval = setInterval(() => {
            setSleep(prevSleep => Math.max(prevSleep - 10, 0));
        }, SLEEP_COOLDOWN);

        return () => {
            clearInterval(hungerInterval);
            clearInterval(gameInterval);
            clearInterval(sleepInterval);

        }
    }, []);


    return (
        <div className="container">
            <Avatar image={petImage} />
            <div className="pet-name-container" >
                <div className="input-container">
                    {editable ? (
                        <input type="text" value={name} onChange={handleChange} onKeyDown={handleKeyPress} />
                    ) : (
                        <div className="name-text">{name}</div>
                    )}
                </div>
                <MdEdit className="edit-icon" onClick={handleEditClick} />
            </div>

            <div className="bars-container" >
                <div>
                    <div className="bar-container">
                        <div className="food-bar bar" style={{ height: `${hunger}%`, backgroundColor: hunger > 50 ? '#FDA7DF' : '#f73c7a' }}></div>
                    </div>
                    <button className="button-food" id="foodButton" onClick={handleFoodClick}>Food</button>
                </div>

                <div>
                    <div className="bar-container">
                        <div className="play-bar bar" style={{ height: `${game}%`, backgroundColor: game > 50 ? '#48dbfb' : '#4848fb' }}></div>
                    </div>
                    <button className="button-play" id="playButton" onClick={handlePlayClick}>Play</button>
                </div>

                <div>
                    <div className="bar-container">
                        <div className="sleep-bar bar" style={{ height: `${sleep}%`, backgroundColor: sleep > 50 ? '#1dd1a1' : '#1bbb2b' }}></div>
                    </div>
                    <button className="button-sleep" id="sleepButton" onClick={handleSleepClick}>Sleep</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
