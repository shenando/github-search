import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserPage = ({ user }) => {
  const [userInfo, setUserInfo] = useState({})

  const getUser = async(login) => {
    const res = await axios.get(`https://api.github.com/users/${login}`)
    setUserInfo(res.data)
  }

  useEffect(() => {
    getUser(user.login)
    //eslint-disable-next-line
  }, [])

  return (
    
    <div>
      <ul>
        <li>{userInfo.name}</li>
        <li>{userInfo.location}</li>
        <li>{userInfo.bio}</li>
        <li>Followers: {userInfo.followers}</li>
        <li>Following: {userInfo.following}</li>
        <li>Public Repos: {userInfo.public_repos}</li>
      </ul>
    </div>
  )
}

export default UserPage
