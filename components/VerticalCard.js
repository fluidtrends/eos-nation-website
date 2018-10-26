import React from 'react';

class VerticalCard extends React.Component {
  render() {
    const { imageUrl, title, description, btnText, btnLink } = this.props;
    return (
      <div>
        <div>{imageUrl}</div>
        <div>{title}</div>
        <div>{description}</div>
        <a href={btnLink}>{btnText}</a>
      </div>
    );
  }
}

export default VerticalCard;
