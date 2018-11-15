import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from '@rmwc/typography'
import moment from 'moment'

import 'antd/dist/antd.css';

const socialMediaLinks = {
  facebook: 'https://www.facebook.com/carmelio-347131802460343/',
  medium: 'http://medium.com/carmelplatform',
  instagram: 'https://www.instagram.com/carmel.io/',
  github: 'https://github.com/fluidtrends/carmel',
  youtube: 'https://www.youtube.com/channel/UCjiQXohOk0pBmJ6PFElQL-g',
  twitter: 'https://twitter.com/carmelplatform',
  linkedin: 'https://www.linkedin.com/company/carmel-platform/'
}

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
    const video = `assets/background.mp4`

    return <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      position: "relative",
      alignItems: "center",
      backgroundImage: 'url(../../../assets/cover.r.png)',
      backgroundSize: 'cover',
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <div style={{
        position: "absolute",
        background: "rgba(0,0,0,0.7)",
        backgroundImage: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(231, 231, 231, 0.1), rgba(207, 207, 207, 0.1), rgba(184, 184, 184, 0.1), rgba(161, 161, 161, 0.1))',
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
        width: "80vw",
        flex: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
      }}>
        {this.title()}
        {this.subtitle()}
        </div>
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
        <Typography use='headline5' style={{
          textAlign: 'center',
          color: '#fafafa'
        }}>
        Carmel is the leading <strong> Tech Education Blockchain Platform</strong>,
        with a powerful <strong> Working Product</strong>, a unique <strong> Educational Model </strong>
        and a growing <strong> User Community </strong> of <strong> 50,000+ </strong>
      </Typography>
        <h3 key='4' style={{ color: '#602f15', marginTop: "20px", textAlign: 'center' }}>
          <Button
            raised
            theme='secondary-bg text-primary-on-secondary'
            style={{ marginTop: '30px' }}
            onClick={this.props.onStart}>
            <ButtonIcon icon='check_circle' />
              Become An Early Adopter
          </Button>
        </h3>
        <Typography use='headline7' style={{
          textAlign: 'center',
          color: '#fafafa'
        }}>
      </Typography>
      </div>
  }

  icons() {
    return [<div style={{ opacity: 1.2, display: 'flex', justifyContent: 'flex-end', paddingRight: 100, paddingBottom: 30 }}>
      <Components.SocialIcons iconColor={'#B2EBF2'} iconColorHover={'#00ACC1'} isSmallScreen={this.props.isSmallScreen} socialMediaLinks={socialMediaLinks}/>
    </div>]
  }

  render () {
    return [
      ...this.main()
    ]
  }
}