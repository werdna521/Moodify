import React from 'react';
import './HorizontalScroll.css';

const HorizontalScroll = (props) => {
    return (
        <div className="horizontal-scroll">
            {props.children}
        </div>
    );
};

export default HorizontalScroll;