import React from 'react';
import { Route } from 'react-router-dom';
import { IonPage, IonContent } from '@ionic/react';
import SliderMenu from "../components/SliderMenu";
import Music from "./Library/Music/Music";
import Podcasts from "./Library/Podcasts/Podcasts";
import MeditationMix from "./Library/MeditationMix/MeditationMix";

// Music -> Playlists, Albums
// Podcasts -> Episodes, Downloads
// Calm Meditation Mix -> Playlists, Downloads

const menuProps = [
    {
        label: 'Music',
        path: '/music/playlists'
    },
    {
        label: 'Podcasts',
        path: '/podcasts/episodes'
    },
    {
        label: 'Meditation Mix',
        path: '/cmm/playlists'
    }
];

const LibraryPage = (props) => {
    return (
        <IonPage>
            <IonContent>
                <SliderMenu menuProps={menuProps} history={props.history} />
                <Route path="/library/music" component={Music} />
                <Route path="/library/podcasts" component={Podcasts} />
                <Route path="/library/cmm" component={MeditationMix} />
            </IonContent>
        </IonPage>
    );
};

export default LibraryPage;
