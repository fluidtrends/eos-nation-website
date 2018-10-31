import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, date, withKnobs } from '@storybook/addon-knobs';
import './style.css';

import VerticalCard from '../components/VerticalCard';
import CarouselCard from '../components/CarouselCard';

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('Vertical Card', () => {
    const title = text("Title", "Community");
    const description = text("Description", "We're dedicated to fostering the EOS platform through reliable and efficient block production and community engagement.");
    const btnText = text("Button text", "Learn more");
    const btnLink = text("Button link", "https://reactjs.org/");
    const imageUrl = text("Image Url", "");

    return (
      <div className="storybook-container">
        <VerticalCard
          title={title} description={description} image={() => {
          return <i className="fas fa-users card-image-icon" />;
        }}
          btnText={btnText} btnLink={btnLink}
        />
        <VerticalCard
          title={title} description={description} image={imageUrl}
          btnText={btnText} btnLink={btnLink}
        />
        <VerticalCard
          title={title} description={description} image={imageUrl}
          btnText={btnText} btnLink={btnLink}
        />
      </div>
    );
  })

  .add('EOS Nation Section', () => {
    return (
      <div>
        <h2 className="section-header text-align-center">Why vote for us?</h2>
        <div className="storybook-container">
          <VerticalCard
            title={"Community"}
            description={"We're dedicated to fostering the EOS platform through reliable and efficient block production and community engagement."}
            image={() => {
              return <i className="fas fa-users card-image-icon" />;
            }}
            btnText={"Learn more"} btnLink={"www.google.com"}
          />
          <VerticalCard
            title={"Ambassadors"}
            description={"An EOS Nation Ambassador is an individual that is passionate about EOS projects and wants to play a part in that ecosystem."}
            image={() => {
              return <i className="fas fa-globe-americas card-image-icon" />;
            }}
            btnText={"Learn more"} btnLink={"www.google.com"}
          />
          <VerticalCard
            title={"Tools"}
            description={"If EOS Nation is \"elected\" as Block Producer, two Elastic Compute Cloud (EC2) instances will be running as full EOS nodes."}
            image={() => {
              return <i className="fas fa-server card-image-icon" />;
            }}
            btnText={"Learn more"} btnLink={"www.google.com"}
          />
        </div>
      </div>
    );
  })

  .add ('Carousel Card', () => {
    const image = text("Image", "https://storage.googleapis.com/multiply-react/public/images/carousel-card-img.png");
    const title = text("Title", "EOS Meeting");
    const label = 'Event Date';
    const defaultValue = new Date('Jan 20 2017');
    // const groupId = 'GROUP-ID1';
    // const eventDate = date(label, defaultValue, groupId);
    const eventDate = (name, defaultValue) => {
      const stringTimestamp = date(name, defaultValue)
      return new Date(stringTimestamp).toString()
    };
    const btnText = text("Button text", "Read more");
    const btnLink = text("Button link", "https://github.com/grigio/eosfilestore-web");
    return (
      <CarouselCard
      image={image}
      title={title}
      date={eventDate(label,defaultValue)}
      btnText={btnText} btnLink={btnLink}
      />
    )
  });

