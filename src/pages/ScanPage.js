import './css/ScanPage.css';
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SpinningButton from "../components/SpinningButton";
import SearchBar from "../components/SearchBar";

const ScanPage = () => {
  return (
    <IonPage>
        <IonContent>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <SearchBar />
            <SpinningButton marginTop="40px" />
        </IonContent>
    </IonPage>
  );
};

export default ScanPage;