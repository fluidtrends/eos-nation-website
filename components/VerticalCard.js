import React from 'react';

class VerticalCard extends React.Component {
  render() {
    const { imageUrl, title, description, btnText, btnLink } = this.props;
    return (
      <div>
        <span>{imageUrl}</span>
        <span>{title}</span>
        <span>{description}</span>
        <a href={btnLink}>{btnText}</a>
      </div>
    );
  }
}

export default VerticalCard;
