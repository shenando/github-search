import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'
import React, { useState } from 'react'
import Pagination from './components/users/Pagination';

const App = () => {
  const [users, setUsers] = useState([])
  const [totalResults, setTotalResults] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)

  // Search users
  const searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&per_page=100&page=1`)

    setUsers(res.data.items)
    setTotalResults(res.data.total_count)
    console.log(totalResults)
  }

  // Get first page of users for pagination
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser)

  // Click on to next page for pagination
  const paginate = (pages) => {
    setCurrentPage(pages)
  }

  return (
      <div className='App'>
        <Navbar />
          <div className="container">
            <Search searchUsers={searchUsers}/>
            <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>
            <Users users={currentUser} />
          </div>
      </div>
  );
}

export default App