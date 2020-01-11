import React from 'react';
import HorizontalMenu from "../../../components/HorizontalMenu";
import { Route } from 'react-router-dom';

const navProps = [
    {
        label: 'Playlists',
        path: '/library/music/playlists'
    },
    {
        label: 'Albums',
        path: '/library/music/albums'
    }
];

const Music = () => {

    return (
        <div>
            <HorizontalMenu navProps={navProps} />
            <Route
                path="/library/music/playlists"
                render={props => (
                    <div style={{ padding: '16px', display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: '75px', borderRadius: '5px' }} alt="add" src={require('../../../assets/img/add.png')} />
                        <div style={{ fontSize: '14px', marginLeft: '24px' }}>Add playlist</div>
                    </div>
                )}
            />
            <Route
                path="/library/music/albums"
                render={props => (
                    <div style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: `${window.innerHeight - 126}px`, width: '100vw' }}>
                        <div style={{ fontSize: '24px', textAlign: 'center' }}>Your albums recommendation will appear here</div>
                    </div>
                )}
            />
        </div>
    );
};

export default Music;