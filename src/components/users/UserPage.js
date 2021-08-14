import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const UserPage = ({ user }) => {
  /* Completes a new search based on the individual username to return data specific to each individual user*/
  const [userInfo, setUserInfo] = useState({})

  const getUser = async(login) => {
    const res = await axios.get(`https://api.github.com/users/${login}`)
    setUserInfo(res.data)
  }

  useEffect(() => {
    getUser(user.login)
    // eslint-disable-next-line
  }, [])

  return (
    
    <div>

      <div className="container">
        <ul>
          <li>{userInfo.name}</li>
          <li>{userInfo.location}</li>
        </ul>
      </div>

      <div className="container">
        <span>{userInfo.bio}</span>
      </div>
      
      <div className="container">
        <ul>
          <li><span style={{color: '#FFAB40'}}>Followers:</span> {userInfo.followers}</li>
          <li><span style={{color: '#FFAB40'}}>Following:</span> {userInfo.following}</li>
          <li><span style={{color: '#FFAB40'}}>Public Repos:</span> {userInfo.public_repos}</li>
        </ul>
      </div>

    </div>
  )
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserPage