import './App.css';
import './main.css';
import React from 'react';
import {NavLink, Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, barcode } from 'ionicons/icons';
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import LibraryPage from './pages/LibrayPage';
import MoodList from "./pages/MoodList";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  return (
      <IonApp className="app">
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={HomePage}/>
              <Route path="/scan" component={ScanPage}/>
              <Route path="/library" component={LibraryPage}/>
              <Route path="/moodlist/:mood" component={MoodList}/>
              <Route path="/" render={() => <Redirect to="/scan"/>} exact={true}/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton selected={false} tab="home" href="/home">
                <IonIcon icon={home}/>
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton selected={false} tab="library" href="/library/music/playlists">
                <IonIcon icon={barcode}/>
                <IonLabel>Your Library</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <NavLink
                to="/scan"
                className="moodify-fab">
              <img alt="moodify" className="moodify-icon" src={require('./assets/img/moodify-icon.jpg')}/>
            </NavLink>
          </div>
        </IonReactRouter>
      </IonApp>
  );
};

export default App;
