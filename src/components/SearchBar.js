import React from 'react';
import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <input className="sbar-input" type="text" placeholder="Search lyrics, songs, and more" />
                <IonIcon className="sbar-icon" icon={search}/>
            </div>
        </div>
    );
};

export default SearchBar;