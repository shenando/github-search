import React from 'react'

const Pagination = ({ usersPerPage, totalResults}) =>{
  const pages = []

  for(let i = 1; i <= Math.ceil(totalResults/usersPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className="center-align">
      <span>Your search returned {totalResults} results</span>
        <ul className="pagination">
          {pages.map(num => (
            <li key={num} className="waves-effect">
              <a href="!#">{num}</a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Pagination
