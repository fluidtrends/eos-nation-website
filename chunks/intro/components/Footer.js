import React from 'react';
import { Grid, GridCell, GridInner } from 'rmwc';
import { Body2, FooterWrapper, Icon } from './StyledComponents';
import footerLogo from '../../../assets/eosnation_footer_logo.png';

// import '@material/layout-grid/dist/mdc.layout-grid.css';

class Footer extends React.PureComponent {
  render() {
    const { links } = this.props;
    return (
      <FooterWrapper>
        <Grid>
          <GridCell span="2" phone="12" tablet="3">
            <img src={footerLogo} />
          </GridCell>
          <GridCell span="5" phone="12" tablet="5">
            <GridInner>
              {links.map(({ url, text }) => (
                <GridCell span="6">
                  <a href={url} target="_blank" className="footer-link"><Body2>{text}</Body2></a>
                </GridCell>
              ))}
              <GridCell span="12" style={
                { display: "flex", justifyContent: "space-between", width: '75%', paddingTop: "20px" }
              }>
                <a href={""} target="_blank">
                  <Icon className="fab fa-facebook-f facebook-custom-icon" /></a>
                <a href={""} target="_blank">
                  <Icon className="fab fab fa-twitter" /></a>
                <a href={""} target="_blank">
                  <Icon className="fab fa-meetup" /></a>
                <a href={""} target="_blank">
                  <Icon className="fab fa-youtube" /></a>
                <a href={""} target="_blank">
                  <Icon className="fab fa-telegram" /></a>
                <a href={""} target="_blank">
                  <Icon className="fab fa-medium" /></a>
                <a href={""} target="_blank">
                  <Icon className="fab fa-youtube" /></a>
              </GridCell>
            </GridInner>
          </GridCell>
          <GridCell span="5" phone="12" tablet="12">
            <label><Body2 bold>Get the latest updates</Body2></label>
            <div className="margin-top-medium">
              <input type="text" placeholder="Your email" className="input footer-email-input" />
              <span className="btn btn-primary text-uppercase footer-subscribe-btn">Subscribe</span>
            </div>
          </GridCell>
        </Grid>
      </FooterWrapper>
    );
  }
}

export default Footer;
