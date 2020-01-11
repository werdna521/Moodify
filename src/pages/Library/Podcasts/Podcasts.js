import React from 'react';
import HorizontalMenu from "../../../components/HorizontalMenu";
import { Route } from 'react-router-dom';
import Button from "../../../components/Button";

const navProps = [
    {
        label: 'Episodes',
        path: '/library/podcasts/episodes'
    },
    {
        label: 'Downloads',
        path: '/library/podcasts/downloads'
    }
];

const Podcasts = () => {

    return (
        <div>
            <HorizontalMenu navProps={navProps} />
            <Route
                path="/library/podcasts/episodes"
                render={props => (
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: `${window.innerHeight - 126}px`, width: '100vw' }}>
                        <div style={{ fontSize: '24px', textAlign: 'center' }}>Looking for some knowledge or motivations?</div>
                        <Button style={{ marginTop: '16px' }} label="Search for Podcasts" />
                    </div>
                )}
            />
            <Route
                path="/library/podcasts/downloads"
                render={props => (
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: `${window.innerHeight - 126}px`, width: '100vw' }}>
                        <div style={{ fontSize: '24px', textAlign: 'center' }}>No downloaded Podcasts</div>
                        <Button style={{ marginTop: '16px' }} label="Search for Podcasts" />
                    </div>
                )}
            />
        </div>
    );
};

export default Podcasts;