import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  me-auto" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active text-decoration-none" aria-current="page" href="#" to="/">CreateUser</NavLink>
        </li>
          <NavLink className="nav-link active text-decoration-none" aria-current="page" href="#" to="/View">view</NavLink>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header