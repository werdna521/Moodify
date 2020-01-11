import './css/MoodList.css';
import React from 'react';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonSlide,
    IonLabel
} from "@ionic/react";
import MoodyCard from "../components/MoodyCard";

const albumProps = [
    {
        albumArt: require('../assets/img/jaychou.jpg'),
        albumTitle: 'Bedtime Stories'
    },
    {
        albumArt: require('../assets/img/edsheeran.png'),
        albumTitle: 'Divide'
    },
    {
        albumArt: require('../assets/img/1d.jpg'),
        albumTitle: 'Midnight Memories'
    },
    {
        albumArt: require('../assets/img/thevamps.png'),
        albumTitle: 'Meet The Vamps'
    },
    {
        albumArt: require('../assets/img/5sos.png'),
        albumTitle: 'Young Blood'
    },
    {
        albumArt: require('../assets/img/bruno.png'),
        albumTitle: '24K Magic'
    },
    {
        albumArt: require('../assets/img/westlife.jpg'),
        albumTitle: 'Spectrum'
    }
];

class MoodList extends React.Component {

    render() {
        const margin = (window.innerWidth - 250) / 4;

        const albums = albumProps.map(({albumArt, albumTitle}) => (
            <IonSlide>
                <MoodyCard style={{margin: '8px 0'}} src={albumArt} text={albumTitle}/>
            </IonSlide>
        ));

        return (
            <IonPage>

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton />
                        </IonButtons>
                        <IonTitle>{`You are ${this.props.match.params.mood}`}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonLabel style={{ marginTop: '32px', marginLeft: `${margin}px`, marginBottom: '16px' }} className="moodify-mood-list-headline">Here are some Playlists for YOU</IonLabel>
                    <div className="moodify-grid">
                        {albums}
                    </div>
                </IonContent>
            </IonPage>
        );
    }
}

export default MoodList;