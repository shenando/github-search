import React from 'react'

const Search = () => {

  return (
    /* START MATERIALIZE SEARCH COMPONENT: https://materializecss.com/text-inputs.html */
    <div style={{paddingTop:'50px'}} className="row">
      <form>
      <div className="input-field col s9 offset-s1">
        <input id="search" type="text" placeholder="Search Users..."></input>
        {/* END MATERIALIZE SEARCH COMPONENT */}
        <button type="submit" value="Search" className="myBtn" style={{marginTop:'15px'}}>Search</button>
      </div>

      </form>

    </div>

  )
}

export default Search