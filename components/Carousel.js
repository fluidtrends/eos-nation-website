import React from 'react';
import './style.css'
import CarouselCard from './CarouselCard';
let image = '../assets/carousel-card-img.png';
let title = 'EOS Meetup';
let date = new Date().now;
let btnlink = 'https://github.com/grigio/eosfilestore-web';
let btnText = 'Learn more';

class Carousel extends React.Component {
    render (){
        const {carousel-title, carousel-description, link} = this.props;
        return (
            <div className='carousel-container'>
                <div className='carousel-title'>{carousel-title}</div>
                <div className='carousel-description'>{carousel-description}</div>
                <div className='btn btn-link'>{link}</div>
                <CarouselCard image={image} title={title} date={date} btnLink={btnLink} btnText={btnText}/>
                <CarouselCard />
            </div>
        )
    }
}

export default Carousel;