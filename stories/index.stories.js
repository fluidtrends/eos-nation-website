import React from 'react';
import { storiesOf } from '@storybook/react';
import { date, text, withKnobs } from '@storybook/addon-knobs';
import '../assets/style.css';

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
  });


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