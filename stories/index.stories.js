import React from 'react';
import { storiesOf } from '@storybook/react';
import { date, text, withKnobs } from '@storybook/addon-knobs';
import '../assets/style.css';
import '../assets/sanfrancisco-font.css';

import VerticalCard from '../chunks/intro/components/VerticalCard';
import UserCard from '../chunks/intro/components/UserCard';
import TwitterCard from '../chunks/intro/components/TwitterCard';
import Calendar from '../chunks/intro/components/Calendar';
import Footer from '../chunks/intro/components/Footer';
import { Heading4 } from '../chunks/intro/components/StyledComponents';

const TwitterSectionStory = () => {
  const name = text("@Name", "@einarinau");
  const author = text("Name", "Eninari Naukkarien");
  const date = text("Date", "Aug 8, 2018");
  const time = text("Time", "4:05 PM");
  const kudos = text("Kudos", "5");
  const description = text("Time", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.");
  const userURL = text("User Image", "https://uploads-ssl.webflow.com/5b654eb2884ddb35daa17709/5b67a4f75fc94c6da74899bf_DenisCarriere.jpg");
  const link = text("Read more link", "http://google.com");

  return (
    <div className="storybook-container">
      <Heading4 center primary className="section-header padding-top-large margin-top-large margin-bottom-large">
        Why we love EOSNation
      </Heading4>
      <div className="align-center">
        <div className="twitter-wrapper">
          <TwitterCard
            link={link} userURL={userURL} name={name} time={time} date={date}
            author={author} kudos={kudos} description={description}
          />
          <TwitterCard
            link={link} userURL={userURL} name={name} time={time} date={date}
            author={author} kudos={kudos} description={description}
          />
          <TwitterCard
            link={link} userURL={userURL} name={name} time={time} date={date}
            author={author} kudos={kudos} description={description}
          />
          <TwitterCard
            link={link} userURL={userURL} name={name} time={time} date={date}
            author={author} kudos={kudos} description={description}
          />
          <TwitterCard
            link={link} userURL={userURL} name={name} time={time} date={date}
            author={author} kudos={kudos} description={description}
          />
          <TwitterCard
            link={link} userURL={userURL} name={name} time={time} date={date}
            author={author} kudos={kudos} description={description}
          />
        </div>
      </div>
    </div>
  );
};

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('Vertical Card', () => {
    const title = text("Title", "Community");
    const description = text("Description", "We're dedicated to fostering the EOS platform through reliable and efficient block production and community engagement.");
    const btnText = text("Button text", "Learn more");
    const btnLink = text("Button link", "https://reactjs.org/");
    const imageUrl = text("Image Url", "");

    return (
      <div className="storybook-container" style={{ display: "flex" }}>
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
        <h2 className="section-header text-align-center margin-bottom-large">Why vote for us?</h2>
        <div className="storybook-container values-wrapper" style={{ display: "flex" }}>
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
  .add('User card', () => {
    const name = text("Name", "Denis Carriere");
    const role = text("Role", "cto");
    const imageURL = text("User Image", "https://uploads-ssl.webflow.com/5b654eb2884ddb35daa17709/5b67a4f75fc94c6da74899bf_DenisCarriere.jpg");
    const link = text("Read more link", "http://google.com");

    return (
      <div className="storybook-container team-section padding-top-large">
        <Heading4 center className="section-header padding-top-large margin-top-large margin-bottom-large">
          Meet the Team
        </Heading4>
        <div className="user-card-wrapper align-center">
          <UserCard name={name} role={role} imageURL={imageURL} link={link} />
          <UserCard name={name} role={role} imageURL={imageURL} link={link} />
          <UserCard name={name} role={role} imageURL={imageURL} link={link} />
          <UserCard name={name} role={role} imageURL={imageURL} link={link} />
          <UserCard name={name} role={role} imageURL={imageURL} link={link} />
          <UserCard name={name} role={role} imageURL={imageURL} link={link} />
          <UserCard name={name} role={role} imageURL={imageURL} link={link} />
        </div>
      </div>);
  })
  .add('Twitter Card Section', TwitterSectionStory);


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

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('Footer Component', () => {
    const links = [
      { url: 'http://google.com', text: "Privacy Policy" },
      { url: 'http://google.com', text: "BP.json" },
      { url: 'http://google.com', text: "Ownership Disclosure" },
      { url: 'http://google.com', text: "Code of Conduct" },
      { url: 'http://google.com', text: "BP Agreement Compliance Rating" },
    ];
    return (
      <div className="">
        <Footer links={links} />
      </div>
    );
  });


storiesOf('Demo page', module)
  .add('Demo page', () => {

    const name = text("Name", "Denis Carriere");
    const role = text("Role", "cto");
    const imageURL = text("User Image", "https://uploads-ssl.webflow.com/5b654eb2884ddb35daa17709/5b67a4f75fc94c6da74899bf_DenisCarriere.jpg");
    const link = text("Read more link", "http://google.com");
    const links = [
      { url: 'http://google.com', text: "Privacy Policy" },
      { url: 'http://google.com', text: "BP.json" },
      { url: 'http://google.com', text: "Ownership Disclosure" },
      { url: 'http://google.com', text: "Code of Conduct" },
      { url: 'http://google.com', text: "BP Agreement Compliance Rating" },
    ];

    return (
      <div className="storybook-container padding-top-large">
        <h2 className="section-header text-align-center margin-bottom-large">Why vote for us?</h2>
        <div className="padding-bottom-large align-center values-wrapper"
             style={{ display: "flex", maxWidth: "1400px" }}>
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

        <div className="margin-top-large margin-bottom-large">
          <h2 className="section-header text-align-center margin-bottom-large">EOS Nation Sponsored Projects &
            Events</h2>
          <Calendar events={calendarEvents} />
        </div>

        <div className="team-section padding-top-large">
          <Heading4 center className="section-header padding-top-large margin-bottom-large">
            Meet the Team
          </Heading4>
          <div className="user-card-wrapper align-center">
            <UserCard name={name} role={role} imageURL={imageURL} link={link} />
            <UserCard name={name} role={role} imageURL={imageURL} link={link} />
            <UserCard name={name} role={role} imageURL={imageURL} link={link} />
            <UserCard name={name} role={role} imageURL={imageURL} link={link} />
            <UserCard name={name} role={role} imageURL={imageURL} link={link} />
            <UserCard name={name} role={role} imageURL={imageURL} link={link} />
            <UserCard name={name} role={role} imageURL={imageURL} link={link} />
          </div>
        </div>

        {TwitterSectionStory()}

        <Footer links={links} />

      </div>
    );
  });
