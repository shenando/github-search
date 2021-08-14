import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchUsers }) => {
  const [text, setText] = useState('')

  /* When form is submitted, as long as text is not nothing, search user takes text and completes the searchUser call, then clears the search input */
  const onSubmit = e => {
    e.preventDefault()
    if(text === '') {
      alert('Please enter a search term')
    } else {
      searchUsers(text)
      setText('')
    }
  }

  /* Tracks the change in search input and sets it to the text state*/
  const onChange = (e) => setText(e.target.value)

  return (
    /* START MATERIALIZE SEARCH COMPONENT: https://materializecss.com/text-inputs.html */
    <div style={{paddingTop:'50px'}} className="row">
      
      <div className="input-field col s9 offset-s1">

      <form onSubmit={onSubmit} className="form">
        <input id="search" type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}></input>
        {/* END MATERIALIZE SEARCH COMPONENT */}
        <button type="submit" value="Search" className="myBtn" style={{marginTop:'15px'}}>Search</button>
      </form>

      </div>

    </div>

  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
}

export default Search