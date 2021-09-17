import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  // Menu bar state
  const [click, setClick] = useState(false)
  // Toggle menue bar
  const handleClick = () => setClick(!click)


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className='nav-links' onClick={closeMobileMenu}> </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )     

}

export default NavBar
