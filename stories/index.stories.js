import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, date, withKnobs } from '@storybook/addon-knobs';
import './style.css';
import '../assets/style.css';
import moment from 'moment';


import CarouselCard from '../components/CarouselCard';
import CarouselWrapper from '../components/CarouselWrapper';
import CarouselSlider from '../components/CarouselSlider';
import VerticalCard from '../chunks/intro/components/VerticalCard';
import Calendar from '../chunks/intro/components/Calendar';

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
    const stringTimestamp = date(label, defaultValue)
    const btnText = text("Button text", "Read more");
    const btnLink = text("Button link", "https://github.com/grigio/eosfilestore-web");
    return (
      <CarouselCard
      image={image}
      title={title}
      date={moment(stringTimestamp).format('DD MM YYYY')}
      btnText={btnText} btnLink={btnLink}
      />
    )
  })

  .add ('Carousel', () => {
    const title = text("Title", "Community");
    const description = text("Description","To explore and help the eccosystem grow, tools need be developed.  EOS Nation helps users with the need tools")
    const btnText = text("Button text", "Explore more");
    const btnLink = text("Button link", "https://github.com/grigio/eosfilestore-web");
    return (
      <CarouselWrapper
      carouselTitle={title}
      carouselDescription={description}
      carouselBtnText={btnText} carouselBtnLink={btnLink}
      />
    )
  })

  .add ('CarouselSlider', () => {
    return (
      <CarouselSlider/>
    )
  })

const slug = text("Event slug", "582 EOS");
const name = text("Name", "Blockchain Hub in Nigeria");
const location = text("Location", "London, UK");
const timeInterval = text("Time Interval", "10-12 pm");
const dateData = new Date(date("Date", new Date('Jan 20 2017')));
const extraInfoLink = text("ExtraInfoLink", "extraInfoLink");
const facebookLink = text("FacebookLink", "facebookLink");
const twitterLink = text("TwitterLink", "twitterLink");
const meetupLink = text("MeetupLin", "meetupLink");

const dateMock = new Date('Apr 5 2018');
const calendarItemData1 = {
  slug,
  date: dateData,
  name,
  timeInterval,
  location,
  extraInfoLink,
  facebookLink,
  twitterLink,
  meetupLink
};
const calendarItemData2 = {
  slug: "197 EOS",
  date: dateMock,
  name: "Eos Ignite",
  location: "Leeds, UK",
  timeInterval: "10-12pm",
  extraInfoLink,
  facebookLink,
  twitterLink,
  meetupLink
};
const calendarItemData3 = {
  slug,
  date: dateMock,
  name,
  timeInterval,
  extraInfoLink,
  facebookLink,
  twitterLink,
  meetupLink
};
const calendarItemData4 = { slug, date: dateMock, name, facebookLink, twitterLink, meetupLink };
const calendarEvents = [calendarItemData1, calendarItemData2, calendarItemData3, calendarItemData4];

storiesOf('Calendar', module)
  .addDecorator(withKnobs)
  .add('Calendar', () => {

    return (
      <div className="storybook-container">
        <Calendar events={calendarEvents} />
      </div>
    );
  })
  .add('EOS Nation Events Section', () => {
    return (
      <div className="margin-top-large margin-bottom-large">
        <h2 className="section-header text-align-center margin-bottom-large">EOS Nation Sponsored Projects & Events</h2>
        <Calendar events={calendarEvents} />
      </div>
    );
  });