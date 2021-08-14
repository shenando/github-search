import React from 'react'
import User from './User'

const Users = (props) => {
  /*Grid to display all search results*/
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '0.5 rem'}}>
      {props.users.map(user => (
        <User key={user.id} user={user}/>
      ))}
    </div>
  )
}

export default Users
