import React from 'react';
import './popup.css'; // CSS dosyasının yolu proje yapınıza bağlı olarak değişebilir
import petImage from './assets/white_idle_8fps.gif'; // Doğru yolu kullanın

function Popup() {
    function handleFoodClick() {
        console.log('Food button clicked');
        // Burada besleme ile ilgili işlemleri yapabilirsiniz
    }
    return (
        <div className="container">
            <img src={petImage} alt="Petim" style={{ width: '50px', height: 'auto' }} />
            <h3>balim</h3>

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
