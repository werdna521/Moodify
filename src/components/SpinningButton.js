import React from 'react';
import './SpinningButton.css';
import { Camera } from '@ionic-native/camera'

const SpinningButton = (props) => {
    const handleClick = async () => {
        try {
            await Camera.getPicture({
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                encodingType: Camera.EncodingType.JPEG,
                cameraDirection: Camera.Direction.FRONT
            });
        } catch (e) {
        } finally {
            props.handlePicture();
        }
    };

    return (
        <div onClick={handleClick} style={{ marginTop: props.marginTop }} className="spinning-button">
            <div className="spinning-button-circle">
                <img className="spinning-button-img" alt="spinning button" src={require('../assets/img/moodify-icon-dark.png')} />
            </div>
        </div>
    );
};

export default SpinningButton;