import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ usersPerPage, totalUsers, paginate }) =>{
  const [currentPage, setCurrentPage] = useState(0)
  const pages = []

  // loop through all of the pages of search results and push results to pages array
  for(let i = 1; i <= Math.ceil(totalUsers/usersPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className="center-align">
      {/* Conditional so pagination and search total only shows after search */}
      {totalUsers > 0 && (
      <h6>Your search returned {totalUsers} result(s)</h6> )}
        {/* PAGINATION class from materialize */}
        <ul className="pagination">
          {/* Arrow only shows up if not on first page, then when clicked removes one item from pages array */}
          {pages.includes(currentPage -1) && <li><a onClick={() => {
            setCurrentPage(currentPage - 1)
            paginate(currentPage - 1)
          }} href="#!"><i className="material-icons">chevron_left</i></a></li>}
          {/* Pagination numbers mapped from pages array */}
          {pages.map(num => (
            <li key={num} className="waves-effect">
              <a onClick={() => paginate(num)} href="!#">{num}</a>
            </li>
          ))}
          {/* Arrow only shows up if not on last page, then when clicked removes adds item to pages array */}
          {pages.includes(currentPage + 1) && <li className="waves-effect"><a onClick={ () => {
            setCurrentPage(currentPage + 1)
            paginate(currentPage + 1)
          }} href="#!"><i className="material-icons">chevron_right</i></a></li>}
        </ul>
        
    </div>
  )
}

Pagination.propTypes = {
  usersPerPage: PropTypes.number,
  totalUsers: PropTypes.number,
  paginate: PropTypes.func,
}

export default Pagination
