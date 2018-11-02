import React from 'react';
import './style.css'
import CarouselCard from './CarouselCard';
import moment from 'moment';
import CarouselSlider from './CarouselSlider';

let image = 'https://storage.googleapis.com/multiply-react/public/images/carousel-card-img.png';
let title = 'EOS Meetup';
let eventDate = new Date().now;
let btnLink = 'https://github.com/grigio/eosfilestore-web';
let btnText = 'Learn more';

class CarouselWrapper extends React.Component {
    render (){
        const {carouselTitle, carouselDescription, carouselBtnText, carouselBtnLink} = this.props;
        return (
            <div className='carousel-container flex-row-space-between'>
                <div className ='carousel-info flex-col'>
                    <p className='carousel-title sub-header text-white align-center'>{carouselTitle}</p>
                    <p className='carousel-description text-white section-text align-center'>{carouselDescription}</p>
                    <a className="btn btn-primary btn-link flex-center margin-top-medium width-1-1 text-uppercase" href={carouselBtnLink}>{carouselBtnText}</a>
                    </div>
                <div className='carousel-cards flex-row-start'>
                    {/* <CarouselCard
                    image={image}
                    title={title}
                    date={moment(eventDate).format('DD MM YYYY')}
                    btnLink={btnLink}
                    btnText={btnText}/>
                    <CarouselCard
                    image={image}
                    title={title}
                    date={moment(eventDate).format('DD MM YYYY')}
                    btnLink={btnLink}
                    btnText={btnText}/> */}
                    <CarouselSlider/>
                </div>
            </div>
        )
    }
}

export default CarouselWrapper;