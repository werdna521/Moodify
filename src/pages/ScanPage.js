import './css/ScanPage.css';
import React from 'react';
import {IonContent, IonPage } from '@ionic/react';
import SpinningButton from "../components/SpinningButton";
import SearchBar from "../components/SearchBar";

class ScanPage extends React.Component {

    handlePicture = () => {
        const mood = ['happy', 'sad', 'surprised', 'afraid', 'disgusted', 'angry', 'contempt'];
        const random = Math.floor(Math.random() * mood.length);
        this.props.history.push(`/moodlist/${mood[random]}`);
    };

    render() {

        return (
            <IonPage>
                <IonContent>
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />
                    <SearchBar />
                    <SpinningButton handlePicture={this.handlePicture} marginTop="40px" />
                </IonContent>
            </IonPage>
        );
    }
}

export default ScanPage;