import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="title">Wave</p>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
