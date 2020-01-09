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
import { settings } from 'ionicons/icons';
import React from 'react';

const slideOpts = {
    slidesPerView: 3,
    freeMode: true
};

const HomePage = () => {
  return (
    <IonPage>
      <IonContent>
          <IonIcon className="moodify-settings-icon icon-right" icon={settings} />
          <div style={{ marginTop: '24px' }} className="moodify-content">
              <IonLabel style={{ marginTop: '24px' }} className="moodify-headline">Played Recently</IonLabel>
              <IonSlides pager={true} options={slideOpts}>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/jaychou.jpg')} text="Bedtime Stories" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/edsheeran.png')} text="Divide" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/1d.jpg')} text="Midnight Memories" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/thevamps.png')} text="Meet The Vamps" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/5sos.png')} text="Young Blood" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/bruno.png')} text="24K Magic" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/westlife.jpg')} text="Spectrum" />
                  </IonSlide>
              </IonSlides>
              <IonLabel className="moodify-headline">Made For YOU</IonLabel>
              <IonSlides pager={true} options={slideOpts}>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/jaychou.jpg')} text="Bedtime Stories" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/edsheeran.png')} text="Divide" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/1d.jpg')} text="Midnight Memories" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/thevamps.png')} text="Meet The Vamps" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/5sos.png')} text="Young Blood" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/bruno.png')} text="24K Magic" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/westlife.jpg')} text="Spectrum" />
                  </IonSlide>
              </IonSlides>
              <IonLabel className="moodify-headline">Popular Near You</IonLabel>
              <IonSlides pager={true} options={slideOpts}>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/jaychou.jpg')} text="Bedtime Stories" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/edsheeran.png')} text="Divide" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/1d.jpg')} text="Midnight Memories" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/thevamps.png')} text="Meet The Vamps" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/5sos.png')} text="Young Blood" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/bruno.png')} text="24K Magic" />
                  </IonSlide>
                  <IonSlide>
                      <MoodyCard style={{ margin: '8px 0' }} src={require('../assets/img/westlife.jpg')} text="Spectrum" />
                  </IonSlide>
              </IonSlides>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
