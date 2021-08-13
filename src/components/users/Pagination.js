import React, { useState } from 'react'

const Pagination = ({ usersPerPage, totalUsers, paginate }) =>{
  const [currentPage, setCurrentPage] = useState(0)
  const pages = []

  for(let i = 1; i <= Math.ceil(totalUsers/usersPerPage); i++) {
    pages.push(i)
  }

  

  return (
    <div className="center-align">
      {totalUsers > 0 && (
      <h6>Your search returned {totalUsers} result(s)</h6> )}
        <ul className="pagination">
          {pages.includes(currentPage -1) && <li><a onClick={() => {
            setCurrentPage(currentPage - 1)
            paginate(currentPage - 1)
          }} href="#!"><i className="material-icons">chevron_left</i></a></li>}
          {pages.map(num => (
            <li key={num} className="waves-effect">
              <a onClick={() => paginate(num)} href="!#">{num}</a>
            </li>
          ))}
          {pages.includes(currentPage + 1) && <li className="waves-effect"><a onClick={ () => {
            setCurrentPage(currentPage + 1)
            paginate(currentPage + 1)
          }} href="#!"><i className="material-icons">chevron_right</i></a></li>}
        </ul>
        
    </div>
  )
}

export default Pagination
