import React from 'react';
import HorizontalMenu from "../../../components/HorizontalMenu";
import { Route } from 'react-router-dom';
import Button from "../../../components/Button";

const navProps = [
    {
        label: 'Playlists',
        path: '/library/cmm/playlists'
    },
    {
        label: 'Downloads',
        path: '/library/cmm/downloads'
    }
];

const MeditationMix = () => {

    return (
        <div>
            <HorizontalMenu navProps={navProps} />
            <Route
                path="/library/cmm/playlists"
                render={props => (
                    <div style={{ padding: '24px', display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: '75px', borderRadius: '5px' }} alt="add" src={require('../../../assets/img/add.png')} />
                        <div style={{ fontSize: '14px', marginLeft: '24px' }}>Add playlist</div>
                    </div>
                )}
            />
            <Route
                path="/library/cmm/downloads"
                render={props => (
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: `${window.innerHeight - 126}px`, width: '100vw' }}>
                        <div style={{ fontSize: '24px', textAlign: 'center' }}>No downloaded Meditation Mix</div>
                        <Button style={{ marginTop: '16px' }} label="Search for Meditation Mix" />
                    </div>
                )}
            />
        </div>
    );
};

export default MeditationMix;