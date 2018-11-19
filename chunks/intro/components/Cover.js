import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from '@rmwc/typography'
import moment from 'moment'

import 'antd/dist/antd.css';

export default class Intro extends Component {
  constructor(props) {
    super(props)

    this._onStart = this.onStart.bind(this)
  }

  onStart() {
    this.props.onStart()
  }

  componentDidMount () {
    super.componentDidMount()

  }

  main() {
    return <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      position: "relative",
      alignItems: "center",
      background: "rgba(0,0,0,0.7)",
      backgroundImage: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(231, 231, 231, 0.1), rgba(207, 207, 207, 0.1), rgba(184, 184, 184, 0.1), rgba(161, 161, 161, 0.1))',
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <div style={{
        position: "absolute",
        backgroundSize: 'cover',
        backgroundImage: 'url(../../../assets/cover.r.png)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
      }}>
      <div style={{
        width: '90vw',
        height: "100%",
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "start"
      }}>
        {this.title()}
        {this.subtitle()}
        </div>
      {this.icons()}
      </div>
    </div>
  }

  title() {
    return <Typography use='headline4' className="title" style={{
      textAlign: 'center',
      color: '#fafafa',
      padding: "20px"
    }}>
    The Fastest Way To Become A Coder.
    </Typography>

  }

  subtitle() {
    const color = '#FAFAFA'
    const fontSize = this.props.isSmallScreen? 15: 26
    const days = moment('17 Dec 2018').diff(moment(), 'days')

    return <div >
        <div>
          <Button raised style={{background: '#D66C44', cursor: 'pointer', height: 60, width: 180, marginRight: 20}}>Learn More</Button>
          <Button raised style={{background: '#2c4858', cursor: 'pointer', height: 60, width: 180}}>Vote</Button>
        </div>
    </div>
  }

  icons() {
    const socialMediaLinks = this.props.footer.socialMediaLinks
    return [<div style={{ display: 'flex', position: 'absolute', right: '-60px', paddingRight: 100, paddingBottom: 30 }}>
      <Components.SocialIcons iconColor={'#ffffff'} vertical iconColorHover={'#2c4858'} size={24} isSmallScreen={this.props.isSmallScreen} socialMediaLinks={socialMediaLinks}/>
    </div>]
  }

  render () {
    return [
      ...this.main()
    ]
  }
}