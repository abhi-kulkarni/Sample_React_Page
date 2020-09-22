import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import top_pick_1 from '../static/img/TopPick1.jpg'
import top_pick_2 from '../static/img/TopPick2.jpg'
import top_pick_3 from '../static/img/TopPick3.jpg'
import '../App.css';

export default function Carousel(props) {
    return (
        <OwlCarousel
            options={props.options}
            className="owl-theme owl-carousel"
        >
            <div className="item">
                <img style={{borderRadius: '10px', width: '90%'}}  alt="top_picks" src={top_pick_1}/>
            </div>
            <div className="item">
                <img style={{borderRadius: '10px', width: '90%'}} alt="top_picks" src={top_pick_2}/>
            </div>
            <div className="item">
                <img style={{borderRadius: '10px', width: '90%'}} alt="top_picks" src={top_pick_3}/>
            </div>
        </OwlCarousel>
    )
}
