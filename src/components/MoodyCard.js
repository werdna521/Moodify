import React from 'react';
import './MoodyCard.css';

const MoodyCard = (props) => {
    return (
        <div style={props.style} className="moody-card">
            <img className="moody-card-img" alt='jay chou' src={props.src} />
            <div className="moody-card-text">{props.text}</div>
        </div>
    );
};

export default MoodyCard;