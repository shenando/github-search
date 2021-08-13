import React, { Component } from 'react'

class User extends Component {
  constructor() {
    super()
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
      repos_url: 'https://github.com/mojombo?tab=repositories'
    }
  }

  render() {
    return (
      <div class="row">
        {/* MATERIALIZE CART START: https://materializecss.com/cards.html*/}
        <div class="col s12 m4" style={{margin: "10px"}}>
          <div class="card deep-purple lighten-1">
            <div class="card-content white-text">
              <img src={this.state.avatar_url} style={{width: '90px', borderRadius: '50%'}} alt={this.state.login} ></img>
              <span class="card-title">{this.state.login}</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href={this.state.html_url}>Github Profile</a>
              <a href={this.state.repos_url}>User Repos</a>
            </div>
          </div>
        </div>
        {/* MATERIALIZE END */}
    </div>
    )
  }
}

export default User
