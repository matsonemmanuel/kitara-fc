
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Twitter,
} from 'lucide-react'
import logo from '../assets/kitara-logo.jpg'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubscribe(event) {
    event.preventDefault()

    // Connect this form to a newsletter service or backend later.
    setMessage(
      'Thank you for your interest in Kitara FC updates!'
    )
    setEmail('')
  }

  return (
    <footer className="site-footer">
      <section className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <span className="eyebrow light">
              STAND WITH THE ROYALS
            </span>

            <h2>
              Be part of the <em>Kitara story.</em>
            </h2>
          </div>

          <Link to="/get-involved" className="btn btn-white">
            GET INVOLVED
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <div className="container footer-main">
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand">
            <img src={logo} alt="Kitara FC crest" />

            <span>
              <strong>KITARA FC</strong>
              <small>BUNYORO'S PRIDE</small>
            </span>
          </Link>

          <p>
            A club with a proud identity, a passionate community,
            and an ambition that keeps growing.
          </p>

          <div className="socials">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>

            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
            </a>

            <a
              href="https://x.com/"
              aria-label="X"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>EXPLORE</h3>
          <Link to="/">Home</Link>
          <Link to="/news">Latest News</Link>
          <Link to="/club">Our Club</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/fixtures">Fixtures & Results</Link>
          <Link to="/community">Community</Link>
        </div>

        <div className="footer-links">
          <h3>GET INVOLVED</h3>
          <Link to="/get-involved">Support the Club</Link>
          <Link to="/get-involved#partnerships">Partnerships</Link>
          <Link to="/get-involved#membership">Membership</Link>
          <Link to="/teams#academy">Youth Academy</Link>
          <Link to="/get-involved#contact">Contact Us</Link>
        </div>

        <div className="footer-newsletter">
          <h3>THE KITARA UPDATE</h3>

          <p>
            Club news, match updates, and stories from the Royals.
          </p>

          <form onSubmit={handleSubscribe}>
            <label htmlFor="footer-email" className="sr-only">
              Your email address
            </label>

            <input
              id="footer-email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit" aria-label="Subscribe">
              <ArrowRight />
            </button>
          </form>

          {message && (
            <p className="subscribe-success" role="status">
              {message}
            </p>
          )}

          <span className="footer-contact">
            <Mail size={14} />
            Official club email to be confirmed
          </span>

          <span className="footer-contact">
            <MapPin size={14} />
            Hoima, Uganda
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} KITARA FOOTBALL CLUB.
            ALL RIGHTS RESERVED.
          </span>

          <span>
            EST. 2010 <i /> BUNYORO'S PRIDE
          </span>

          <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
