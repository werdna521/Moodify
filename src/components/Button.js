import React from 'react';
import './Button.css';

const Button = ({ label, style }) => {

    return (
        <div style={style} className="moodify-button">
            {label}
        </div>
    );
};

export default Button;