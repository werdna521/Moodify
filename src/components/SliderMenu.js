import './SliderMenu.css';
import React from 'react';
import { IonSlides, IonSlide } from "@ionic/react";

const slideOpts = {
    slidesPerView: 1,
    loop: true,
    freeMode: false
};

class SliderMenu extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        const interval = setInterval(() => hook(), 1000);
        const hook = () => {
            if (this.ref.current && this.ref.current.swiper) {
                this.ref.current.swiper.on('slideChange', () => {
                    const { path } = this.props.menuProps[this.ref.current.swiper.realIndex];
                    this.props.history.push(`/library${path}`);
                });
                clearInterval(interval);
            }
        };
    }

    render() {

        const slides = this.props.menuProps.map(({ label }) => (
            <IonSlide key={label}>
                <div className="moodify-slider-menu-item">
                    {label}
                </div>
            </IonSlide>
        ));

        return (
            <IonSlides ref={this.ref} className="moodify-slider-menu" pager={false} options={slideOpts}>
                {slides}
            </IonSlides>
        );
    }
}

export default SliderMenu;