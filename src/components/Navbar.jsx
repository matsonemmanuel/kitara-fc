
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Ticket,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from 'lucide-react'
import logo from '../assets/kitara-logo.jpg'

const navigation = [
  { label: 'Home', path: '/' },
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
  { label: 'Fixtures', path: '/fixtures' },
  { label: 'Community', path: '/community' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: Youtube },
  { label: 'X', href: 'https://x.com/', Icon: Twitter },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const closeTimer = useRef(null)
  const location = useLocation()

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const closeMenus = () => {
    cancelClose()
    setMenuOpen(false)
    setDropdownOpen(null)
  }

  const scheduleDropdownClose = () => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => {
      setDropdownOpen(null)
    }, 180)
  }

  const toggleDropdown = (label) => {
    cancelClose()
    setDropdownOpen((current) => (current === label ? null : label))
  }

  useEffect(() => {
    closeMenus()
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    return () => cancelClose()
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenus()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className="site-header" id="top">
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
            type="button"
            className="mobile-toggle"
            onClick={() => {
              if (menuOpen) closeMenus()
              else setMenuOpen(true)
            }}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>

          {menuOpen && (
            <button
              type="button"
              className="mobile-drawer-backdrop"
              aria-label="Close navigation menu"
              onClick={closeMenus}
            />
          )}

          <nav
            id="primary-navigation"
            className={menuOpen ? 'main-nav is-open' : 'main-nav'}
            aria-label="Main navigation"
          >
            <div className="mobile-drawer-heading">
              <Link
                to="/"
                className="mobile-drawer-brand"
                onClick={closeMenus}
              >
                <img src={logo} alt="Kitara FC crest" />
                <span className="mobile-drawer-brand-words">
                  <strong>
                    KITARA <b>FC</b>
                  </strong>
                  <small>BUNYORO'S PRIDE</small>
                </span>
              </Link>
            </div>

            {navigation.map((item) => (
              <div
                className={`nav-item${dropdownOpen === item.label ? ' dropdown-active' : ''}`}
                key={item.label}
                onMouseEnter={() => {
                  if (window.innerWidth > 850 && item.children) {
                    cancelClose()
                    setDropdownOpen(item.label)
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 850 && item.children) {
                    scheduleDropdownClose()
                  }
                }}
                onFocus={() => {
                  if (window.innerWidth > 850 && item.children) {
                    cancelClose()
                    setDropdownOpen(item.label)
                  }
                }}
                onBlur={(event) => {
                  if (
                    window.innerWidth > 850 &&
                    item.children &&
                    !event.currentTarget.contains(event.relatedTarget)
                  ) {
                    scheduleDropdownClose()
                  }
                }}
              >
                <div className="nav-item-inner">
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                    onClick={(event) => {
                      if (item.children && window.innerWidth <= 850) {
                        event.preventDefault()
                        toggleDropdown(item.label)
                      } else {
                        closeMenus()
                      }
                    }}
                  >
                    {item.label}
                  </NavLink>

                  {item.children && (
                    <button
                      type="button"
                      className="dropdown-toggle"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={dropdownOpen === item.label}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <ChevronDown
                        size={15}
                        className={
                          dropdownOpen === item.label ? 'chevron-open' : ''
                        }
                      />
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
              <Ticket size={17} />
              GET INVOLVED
            </Link>

            <div className="mobile-drawer-footer">
              <div className="mobile-drawer-footer-divider" />

              <Link
                to="/"
                className="mobile-drawer-footer-brand"
                onClick={closeMenus}
              >
                <img src={logo} alt="" />
                <span>
                  <strong>KITARA FC</strong>
                  <small>BUNYORO'S PRIDE</small>
                </span>
              </Link>

              <div className="mobile-drawer-socials">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`Visit Kitara FC on ${label}`}
                    title={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>

              <p className="mobile-drawer-tagline">FOLLOW THE ROYALS</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
