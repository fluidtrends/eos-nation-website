import React from 'react';
import './style.css';

class CarouselCard extends React.Component {
    render() {
        const {image, title, date, btnLink, btnText} = this.props;
        console.log("date is:", date)
        return (
            <div className='carousel-card-container'>
                <div className='carousel-card-img'><img src={image}/></div>
                <div className='sub-header'>{title}</div>
                <div>
                    <span className='carousel-card-date'>{date}</span>
                    <span className='btn btn-link'><a href={btnLink}>{btnText}</a></span>
                </div>
            </div>
        );
    }
}

export default CarouselCard;