import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Clock3,
  Play,
  Shield,
  Trophy,
  Users,
  Heart,
} from 'lucide-react'
import logo from "../kitara-logo.jpg";

import hero1 from '../images/home/real.jpg'
import hero2 from '../images/home/players.jpg'
import hero3 from '../images/home/over.jpg'

import news1 from '../images/news/muze.jpg'
import news2 from '../images/news/won.jpg'
import news3 from '../images/news/fans.jpg'

const heroSlides = [
  {
    kicker: "BUNYORO'S PRIDE",
    firstLine: 'MORE THAN',
    secondLine: 'FOOTBALL.',
    copy: 'A club built on pride, passion and the unbreakable spirit of our people.',
    image: hero1,
  },
  {
    kicker: 'OUR PEOPLE. OUR GAME.',
    firstLine: 'ONE CLUB.',
    secondLine: 'ONE PRIDE.',
    copy: 'Together with our supporters, we carry the colours of Bunyoro with ambition.',
    image: hero2,
  },
  {
    kicker: 'THE JOURNEY CONTINUES',
    firstLine: 'THE FUTURE',
    secondLine: 'IS OURS.',
    copy: 'Every training session, every match, every moment moves our story forward.',
    image: hero3,
  },
]


const newsItems = [
  {
    category: 'CLUB NEWS',
    date: 'CLUB UPDATE',
    title: 'The pride of Bunyoro keeps moving forward',
    description:
      'Discover the ambition, identity, and community spirit that define Kitara FC.',
    image: news1,
  },
  {
    category: 'MATCHDAY',
    date: 'MATCH CENTRE',
    title: 'Every match is a chance to make history',
    description:
      'Follow the action with match updates, results, and stories from the pitch.',
    image: news2,
  },
  {
    category: 'OUR FANS',
    date: 'OUR PEOPLE',
    title: 'One club. One community. One pride.',
    description:
      'Meet the supporters whose passion gives Kitara FC its unmistakable spirit.',
    image: news3,
  },
]


function SectionTitle({ eyebrow, title, link, href }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>

      {link && (
        <Link className="text-link" to={href}>
          {link}
          <ArrowUpRight size={17} />
        </Link>
      )}
    </div>
  )
}


function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(10,10,12,.92) 0%, rgba(10,10,12,.72) 42%, rgba(10,10,12,.12) 100%), url("${slide.image}")`,
      }}
    >
      <div className="hero-grain" />

      <div className="container hero-inner">
        <div className="hero-copy" key={activeSlide}>
          <div className="hero-kicker">
            <span />
            {slide.kicker}
          </div>

          <h1>
            {slide.firstLine}
            <br />
            <em>{slide.secondLine}</em>
          </h1>

          <p>{slide.copy}</p>

          <div className="hero-actions">
            <Link to="/club" className="btn btn-red">
              DISCOVER THE CLUB
              <ArrowRight size={18} />
            </Link>

            <Link to="/fixtures" className="btn btn-outline">
              <Play size={16} />
              MATCH CENTRE
            </Link>
          </div>
        </div>

        <div className="hero-side-note">
          <span>HOIMA · UGANDA</span>
          <b>0{activeSlide + 1} / 03</b>
        </div>

        <div className="hero-controls">
          {heroSlides.map((item, index) => (
            <button
              key={item.kicker}
              className={
                activeSlide === index
                  ? 'hero-dot selected'
                  : 'hero-dot'
              }
              onClick={() => setActiveSlide(index)}
              aria-label={`Show hero slide ${index + 1}`}
              aria-pressed={activeSlide === index}
            >
              <span>0{index + 1}</span>
              <i />
            </button>
          ))}
        </div>

        <Link to="/club" className="scroll-cue">
          <span />
          SCROLL TO EXPLORE
        </Link>
      </div>

      <div className="hero-bottom">
        <div className="container hero-bottom-inner">
          <span>ESTABLISHED 2010</span>

          <span className="hero-bottom-center">
            <Shield size={15} />
            KITARA FOOTBALL CLUB
          </span>

          <span>BUILT ON PRIDE</span>
        </div>
      </div>
    </section>
  )
}


function MatchCard() {
  return (
    <section className="match-section" id="fixtures">
      <div className="container">
        <div className="match-panel">
          <div className="match-label">
            <span className="live-dot" />
            NEXT MATCH
            <span className="match-label-line" />
          </div>

          <div className="match-main">
            <div className="team-block home-team">
              <img src={logo} alt="Kitara FC crest" />
              <span>KITARA FC</span>
              <small>BUNYORO'S PRIDE</small>
            </div>

            <div className="match-info">
              <span className="competition">UPL · FIXTURE</span>
              <strong>VS</strong>

              <span className="match-date">
                <CalendarDays size={15} />
                UPCOMING FIXTURE
              </span>

              <span className="match-venue">
                <MapPin size={14} />
                VENUE TO BE CONFIRMED
              </span>
            </div>

            <div className="team-block away-team">
              <div className="opponent-crest">
                <Trophy size={32} />
              </div>
              <span>OPPOSITION</span>
              <small>UPCOMING OPPONENT</small>
            </div>
          </div>

          <div className="match-footer">
            <span>
              <Clock3 size={15} />
              Match date and kick-off time to be announced
            </span>

            <Link to="/fixtures">
              ALL FIXTURES & RESULTS
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsSection() {
  return (
    <section className="section news-section" id="news">
      <div className="container">
        <SectionTitle
          eyebrow="THE LATEST"
          title="Inside Kitara"
          link="VIEW ALL NEWS"
          href="/news"
        />

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article
              className={`news-card ${
                index === 0 ? 'featured-news' : ''
              }`}
              key={item.title}
            >
              <Link to="/news" className="news-image">
                <img src={item.image} alt="" loading="lazy" />

                <span className="image-arrow">
                  <ArrowUpRight size={19} />
                </span>

                <span className="image-tag">
                  {item.category}
                </span>
              </Link>

              <div className="news-content">
                <span className="news-date">{item.date}</span>

                <h3>
                  <Link to="/news">{item.title}</Link>
                </h3>

                <p>{item.description}</p>

                <Link to="/news" className="read-more">
                  READ STORY
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClubSection() {
  return (
    <section className="club-section" id="club">
      <div className="club-image">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=85"
          alt="Football pitch"
          loading="lazy"
        />

        <div className="club-image-stamp">
          <span>EST.</span>
          <strong>2010</strong>
          <small>BUNYORO'S PRIDE</small>
        </div>
      </div>

      <div className="club-copy">
        <span className="eyebrow">OUR IDENTITY</span>

        <h2>
          Rooted in <em>pride.</em>
          <br />
          Driven by ambition.
        </h2>

        <p>
          Kitara Football Club represents the passion, resilience,
          and identity of Bunyoro. Our badge is more than a symbol:
          it represents our connection to the community and our
          ambition for the future.
        </p>

        <p>
          From the stands to the pitch, every supporter is part of
          our story. The journey continues, and the best chapters
          are still ahead.
        </p>

        <Link to="/club" className="btn btn-dark">
          OUR CLUB STORY
          <ArrowRight size={17} />
        </Link>

        <div className="club-stats">
          <div>
            <strong>2010</strong>
            <span>YEAR ESTABLISHED</span>
          </div>

          <div>
            <strong>01</strong>
            <span>UNITED COMMUNITY</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>PRIDE & PASSION</span>
          </div>
        </div>
      </div>
    </section>
  )
}


function PartnersSection() {
  const partners = [
    { name: 'OFFICIAL PARTNER', type: 'PARTNER' },
    { name: 'COMMUNITY PARTNER', type: 'COMMUNITY' },
    { name: 'OFFICIAL SPONSOR', type: 'SPONSOR' },
    { name: 'MEDIA PARTNER', type: 'MEDIA' },
    { name: 'TECHNICAL PARTNER', type: 'TECHNICAL' },
  ]

  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <div className="partners-heading">
          <div>
            <span className="eyebrow">STRONGER TOGETHER</span>
            <h2>
              OUR <em>PARTNERS.</em>
            </h2>
          </div>

          <p>
            The relationships that help move Kitara FC forward.
            We value the organizations and businesses that share
            our ambition and commitment to the game.
          </p>
        </div>

        <div className="partners-rule">
          <span />
          <small>UNITED BY AMBITION</small>
          <span />
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-item" key={partner.name}>
              <span className="partner-number">
                0{index + 1}
              </span>

              <div className="partner-logo-placeholder">
                <span className="partner-mark">K</span>
                <span className="partner-logo-text">
                  {partner.name}
                </span>
              </div>

              <span className="partner-type">
                {partner.type}
              </span>
            </div>
          ))}
        </div>

        <div className="partners-footer">
          <p>
            Interested in becoming part of the Kitara FC journey?
          </p>

          <Link to="/get-involved" className="partners-cta">
            EXPLORE PARTNERSHIPS
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}


function CommunitySection() {
  return (
    <section className="community-section" id="community">
      <div className="community-bg" />

      <div className="container community-inner">
        <span className="eyebrow light">MORE THAN A CLUB</span>

        <h2>
          Our badge. Our people.
          <br />
          <em>Our responsibility.</em>
        </h2>

        <p>
          Football has the power to bring people together. We are
          proud to stand alongside the communities that give
          Kitara FC its heart.
        </p>

        <div className="community-actions">
          <Link to="/get-involved" className="btn btn-red">
            BE PART OF THE JOURNEY
            <ArrowRight size={17} />
          </Link>

          <Link to="/club" className="btn btn-outline">
            OUR VALUES
          </Link>
        </div>

        <div className="community-pillars">
          <div>
            <Users />
            <strong>COMMUNITY</strong>
            <span>United by the game</span>
          </div>

          <div>
            <Trophy />
            <strong>AMBITION</strong>
            <span>Always moving forward</span>
          </div>

          <div>
            <Heart />
            <strong>PRIDE</strong>
            <span>Our colours, our home</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <MatchCard />
      <NewsSection />
      <ClubSection />
      <CommunitySection />
      <PartnersSection />
    </main>
  )
}