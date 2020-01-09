import React from 'react';
import './SpinningButton.css';

const SpinningButton = (props) => {
    return (
        <div style={{ marginTop: props.marginTop }} className="spinning-button">
            <div className="spinning-button-circle">
                <img className="spinning-moodify-dark" alt="spinning button" src={require('../assets/img/moodify-icon-dark.png')} />
            </div>
        </div>
    );
};

export default SpinningButton;