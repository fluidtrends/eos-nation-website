import React from 'react';
import { Grid, GridCell, GridInner } from 'rmwc';
import { Body2, Icon, UserProfileSmall } from './StyledComponents';

class TwitterCard extends React.PureComponent {
  render() {
    const { link, userURL, author, time, name, date, kudos, description } = this.props;
    return (
      <div className="margin-right-large margin-bottom-large twitter-card-container">
        <Grid>
          <GridCell span="2">
            <UserProfileSmall src={userURL} />
          </GridCell>
          <GridCell span="10">
            <GridInner>
              <GridCell span="9">
                <Body2 bold primary>{name}</Body2>
                <Body2 bold primary>{author}</Body2>
              </GridCell>
              <GridCell span="3">
                <Icon className="fab fab fa-twitter no-text-shadow" />
              </GridCell>
            </GridInner>
          </GridCell>
          <GridCell span="12">
            <a href={link} style={{ textDecoration: 'none' }}>
              <Body2 primary>{description}</Body2>
            </a>
          </GridCell>
          <GridCell span="12">
            <Body2 primary>{time}</Body2> - <Body2 primary>{date}</Body2>
            <Body2 primary>{kudos}</Body2>
          </GridCell>
        </Grid>
      </div>
    );
  }
}

export default TwitterCard;
