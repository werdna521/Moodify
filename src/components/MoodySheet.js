import React from 'react';
import './MoodySheet.css';

const MoodySheet = (props) => {
    return (
        <div style={props.style} className="moody-sheet">
            <img className="moody-sheet-img" alt='jay chou' src={props.src} />
            {/*<div className="moody-sheet-text">{props.text}</div>*/}
        </div>
    );
};

export default MoodySheet;