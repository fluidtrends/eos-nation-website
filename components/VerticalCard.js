import React from 'react';
import './style.css';

class VerticalCard extends React.Component {

  render() {
    const { image, title, description, btnText, btnLink } = this.props;
    return (
      <div className="card-container">
        <div className="card-image-wrapper align-center">
          {typeof image === 'string' ? <img src={image} /> : image()}
        </div>
        <div className="margin-top-large sub-header">{title}</div>
        <p className="paragraph card-description">{description}</p>
        <a className="btn btn-primary btn-link align-center" href={btnLink}>{btnText}</a>
      </div>
    );
  }
}

export default VerticalCard;
