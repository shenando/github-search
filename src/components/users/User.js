import React from 'react'
import UserPage from './UserPage'
import PropTypes from 'prop-types'

const User = ({ user }) => {

    return (
      <div className="row center-align" style={{marginLeft: "10px", marginRight: "20px"}}>
        {/* MATERIALIZE CARD START: https://materializecss.com/cards.html*/}
        <div className="col s12" >
          <div className="card deep-purple lighten-1">
            <div className="card-content white-text">
              <img src={user.avatar_url} style={{width: '90px', borderRadius: '50%'}} alt={user.login} ></img>
              <span className="card-title">{user.login}</span>
              <UserPage user={user}/>
            </div>
            <div className="card-action">
              <a href={user.html_url}>Profile </a>
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
