
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Ticket,
} from 'lucide-react'
import logo from '../assets/kitara-logo.jpg'

const navigation = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'News',
    path: '/news',
    children: [
      { label: 'Latest News', path: '/news' },
      { label: 'Match Reports', path: '/news?category=match-reports' },
      { label: 'Club Updates', path: '/news?category=club-updates' },
    ],
  },
  {
    label: 'The Club',
    path: '/club',
    children: [
      { label: 'Our Story', path: '/club' },
      { label: 'Our Values', path: '/club#values' },
      { label: 'Club History', path: '/club#history' },
    ],
  },
  {
    label: 'Teams',
    path: '/teams',
    children: [
      { label: 'First Team', path: '/teams' },
      { label: 'Technical Staff', path: '/teams#staff' },
      { label: 'Academy', path: '/teams#academy' },
    ],
  },
  {
    label: 'Fixtures',
    path: '/fixtures',
  },
  {
    label: 'Community',
    path: '/community',
  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  const closeMenus = () => {
    setMenuOpen(false)
    setDropdownOpen(null)
  }

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>
            <span className="live-dot" />
            THE PRIDE OF BUNYORO
          </span>

          <span className="top-right">
            EST. 2010 <span className="top-divider">/</span> HOIMA, UGANDA
          </span>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container nav-inner">
          <Link
            to="/"
            className="brand"
            onClick={closeMenus}
            aria-label="Kitara FC homepage"
          >
            <img src={logo} alt="Kitara Football Club crest" />

            <span className="brand-words">
              <strong>
                KITARA <b>FC</b>
              </strong>
              <small>BUNYORO'S PRIDE</small>
            </span>
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav
            className={menuOpen ? 'main-nav is-open' : 'main-nav'}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <div className="nav-item" key={item.label}>
                <div className="nav-item-inner">
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    onClick={() => {
                      if (!item.children) closeMenus()
                      else if (window.innerWidth <= 850) {
                        setDropdownOpen(
                          dropdownOpen === item.label ? null : item.label
                        )
                      }
                    }}
                  >
                    {item.label}

                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={
                          dropdownOpen === item.label ? 'chevron-open' : ''
                        }
                      />
                    )}
                  </NavLink>

                  {item.children && (
                    <button
                      type="button"
                      className="dropdown-toggle"
                      aria-label={`Toggle ${item.label} menu`}
                      aria-expanded={dropdownOpen === item.label}
                      onClick={() =>
                        setDropdownOpen(
                          dropdownOpen === item.label ? null : item.label
                        )
                      }
                    >
                      <ChevronDown size={14} />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div
                    className={
                      dropdownOpen === item.label
                        ? 'dropdown dropdown-open'
                        : 'dropdown'
                    }
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        onClick={closeMenus}
                      >
                        {child.label}
                        <ArrowUpRight size={13} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/get-involved"
              className="nav-cta"
              onClick={closeMenus}
            >
              <Ticket size={16} />
              GET INVOLVED
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
