import React from 'react'
import PropTypes from 'prop-types'

const User = ({ user: { login, avatar_url, html_url, repos_url } }) => {
    return (
      <div className="row center-align" style={{marginLeft: "10px", marginRight: "20px"}}>
        {/* MATERIALIZE CARD START: https://materializecss.com/cards.html*/}
        <div className="col s12" >
          <div className="card deep-purple lighten-1">
            <div className="card-content white-text">
              <img src={avatar_url} style={{width: '90px', borderRadius: '50%'}} alt={login} ></img>
              <span className="card-title">{login}</span>
              {/* <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p> */}
            </div>
            <div className="card-action">
              <a href={html_url}>Profile</a>
              <a href={repos_url}>Repos</a>
            </div>
          </div>
        </div>
        {/* MATERIALIZE END */}
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User
