import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let email = ''
  if (token) {
    const decoded: {email: string} = jwtDecode(token)
    email = decoded.email
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <strong>EventHub</strong>
          </li>
        </ul>
        <ul>
          {isMobile && (
            <li>
              <button
                aria-label="open mobile menu"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                ☰
              </button>
            </li>
          )}
          {!isMobile && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </>
          )}

          {/* Account/Profile Menu */}
          <li>
            <details
              className="dropdown"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <summary>{token ? email : 'Account'}</summary>
              <ul>
                {token ? (
                  <>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/account">My account</Link>
                    </li>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </details>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <aside>
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" onClick={() => setMobileOpen(false)}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMobileOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setMobileOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </header>
  )
}

export default Header
