import './css/HomePage.css';
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonSlide,
  IonSlides
} from '@ionic/react';
import MoodyCard from "../components/MoodyCard";
import MoodySheet from "../components/MoodySheet";
import Swiper from 'react-id-swiper';
import { settings } from 'ionicons/icons';
import React from 'react';

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

const slideOpts = {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 8
};

const params = {
    slidesPerView: 2
};

class HomePage extends React.Component {

    componentDidMount() {

    }

    render() {
        const albums = albumProps.map(({albumArt, albumTitle}) => (
            <IonSlide key={albumTitle}>
                <MoodyCard style={{margin: '8px 0'}} src={albumArt} text={albumTitle}/>
            </IonSlide>
        ));

        const coolAlbums = albumProps.map(({albumArt, albumTitle}) => (
            <MoodySheet key={albumTitle} style={{margin: '8px 0'}} src={albumArt} text={albumTitle}/>
        ));

        return (
            <IonPage>
                <IonContent>
                    <IonIcon className="moodify-settings-icon icon-right" icon={settings}/>
                    <div style={{marginTop: '24px'}} className="moodify-content">
                        <IonLabel style={{marginTop: '24px'}} className="moodify-headline">Played Recently</IonLabel>
                        <Swiper {...params}>
                            {coolAlbums}
                        </Swiper>
                        <IonLabel className="moodify-headline">Made For YOU</IonLabel>
                        <IonSlides pager={false} options={slideOpts}>
                            {albums}
                        </IonSlides>
                        <IonLabel className="moodify-headline">Popular Near You</IonLabel>
                        <IonSlides pager={false} options={slideOpts}>
                            {albums}
                        </IonSlides>
                    </div>
                </IonContent>
            </IonPage>
        );
    }
}

export default HomePage;
