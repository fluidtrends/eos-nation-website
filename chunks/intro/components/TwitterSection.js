import React from 'react'
import { Component } from 'react-dom-chunky'
import TwitterCard from './TwitterCard'

class TwitterSection extends Component {
  constructor(props) {
    super(props)
    this._done = this.done.bind(this)
    this.state = { ...super.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  done() {
  }

  renderComponent() {
    const { users, title } = this.props

    return <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
      {users.map((user) => (
            <TwitterCard
              link={user.link} userURL={user.userURL} name={user.name} time={user.time} date={user.date}
              author={user.author} kudos={user.kudos} description={user.description}
            />))}
      </div>
    return (
      <div style={{ padding: '40px 0' }}>
        <h2 className="section-header text-align-center">Twitter Feed</h2>
        <div className="cards-wrapper">
          {users.map((user) => (
            <TwitterCard
              link={user.link} userURL={user.userURL} name={user.name} time={user.time} date={user.date}
              author={user.author} kudos={user.kudos} description={user.description}
            />))}
        </div>
      </div>
    );
  }
}

export default TwitterSection
