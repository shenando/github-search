import React from 'react'

const Navbar = () => {
  return (
    /* Start component from Materialize: https://materializecss.com/navbar.html */
      <nav>
        <div style={{paddingLeft: '20px', paddingRight: '20px'}} className="nav-wrapper deep-purple lighten-1">
          <a href="https://github.com/" className="brand-logo"><i class="fab fa-github fa-lg"></i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="https://github.com/shenando">My Github</a></li>
            <li><a href="https://shenandoahgrace.netlify.app">Portfolio</a></li>
            <li><a href="https://twitter.com/ShenandoahGrace">Twitter</a></li>
          </ul>
        </div>
      </nav>
    /* End component from Materialize */
  )
}

export default Navbar