
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Users,
  GraduationCap,
  Handshake,
  Heart,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const initiatives = [
  {
    number: '01',
    title: 'Community Outreach',
    description:
      'Create opportunities for the club to connect with local communities, listen to their needs and contribute through meaningful activities.',
    icon: HeartHandshake,
  },
  {
    number: '02',
    title: 'Youth Development',
    description:
      'Inspire young people through football, teamwork, discipline and opportunities to develop their talents.',
    icon: GraduationCap,
  },
  {
    number: '03',
    title: 'Supporter Community',
    description:
      'Bring Royals supporters together and celebrate the shared identity, energy and pride that make matchdays special.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Partnerships',
    description:
      'Work with organizations, businesses and community leaders to explore initiatives that create lasting value.',
    icon: Handshake,
  },
]

function Community() {
  return (
    <main className="community-page">
      {/* HERO */}
      <section className="community-hero">
        <div className="community-hero-background" />

        <div className="community-container community-hero-content">
          <p className="community-eyebrow">
            KITARA FC / OUR COMMUNITY
          </p>

          <h1>
            MORE THAN
            <br />
            <span>FOOTBALL.</span>
          </h1>

          <p className="community-hero-description">
            One club. One community. A shared pride that brings
            people together beyond the ninety minutes on the pitch.
          </p>

          <a href="#our-community" className="community-button-red">
            DISCOVER OUR COMMUNITY
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="community-hero-strip">
          <span>THE ROYALS</span>
          <span>THE PRIDE OF BUNYORO</span>
          <span>UNITED BY FOOTBALL</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="community-intro" id="our-community">
        <div className="community-container community-intro-grid">
          <div className="community-intro-heading">
            <p className="community-eyebrow community-red-text">
              OUR PEOPLE. OUR PRIDE.
            </p>

            <h2>
              ROOTED IN
              <br />
              <span>COMMUNITY.</span>
            </h2>
          </div>

          <div className="community-intro-copy">
            <p>
              Football has the power to bring people together.
              For Kitara FC, the community is an important part
              of the club's identity, its supporters and its
              journey forward.
            </p>

            <p>
              We want the Royals to be a source of connection,
              inspiration and shared pride for people across
              Bunyoro and beyond.
            </p>

            <a href="#community-initiatives" className="community-inline-link">
              EXPLORE OUR COMMITMENT
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="community-feature">
        <div className="community-feature-image" />

        <div className="community-container community-feature-content">
          <p className="community-eyebrow">A CLUB WITH PURPOSE</p>

          <h2>
            UNITED BY
            <br />
            <span>THE ROYAL SPIRIT.</span>
          </h2>

          <p>
            Every supporter has a place in the Kitara FC story.
            Together, we can build a club culture that values
            belonging, respect, opportunity and local pride.
          </p>

          <Link to="/get-involved" className="community-button-white">
            BE PART OF THE JOURNEY
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* INITIATIVES */}
      <section
        className="community-initiatives"
        id="community-initiatives"
      >
        <div className="community-container">
          <div className="community-section-heading">
            <div>
              <p className="community-eyebrow community-red-text">
                MAKING A DIFFERENCE
              </p>
              <h2>OUR COMMUNITY FOCUS</h2>
            </div>

            <p>
              Football can create connections and opportunities
              that reach far beyond the pitch.
            </p>
          </div>

          <div className="community-initiative-grid">
            {initiatives.map((initiative) => {
              const Icon = initiative.icon

              return (
                <article
                  className="community-initiative-card"
                  key={initiative.number}
                >
                  <div className="community-initiative-top">
                    <span>{initiative.number}</span>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3>{initiative.title}</h3>

                  <p>{initiative.description}</p>

                  <span className="community-card-bottom">
                    THE ROYALS <ArrowUpRight size={16} />
                  </span>
                </article>
              )
            })}
          </div>

          <p className="community-disclaimer">
            These are community focus areas for the website.
            Specific programmes, dates and achievements can be
            added when confirmed by the club.
          </p>
        </div>
      </section>

      {/* SUPPORTERS */}
      <section className="community-supporters">
        <div className="community-container community-supporters-grid">
          <div className="community-supporters-content">
            <p className="community-eyebrow community-red-text">
              TOGETHER WE ARE STRONGER
            </p>

            <h2>
              THIS CLUB
              <br />
              <span>IS OURS.</span>
            </h2>

            <p>
              The voice of the supporters is part of the spirit
              of football. Whether you are cheering from the
              stands, following from home or representing the
              Royals in your community, your support matters.
            </p>

            <Link to="/get-involved" className="community-button-red">
              GET INVOLVED
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="community-supporters-image">
            <img
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85"
              alt="Football stadium and supporters"
              loading="lazy"
            />

            <div className="community-image-caption">
              <Heart size={17} />
              <span>ONE CLUB. ONE ROYAL FAMILY.</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="community-partnership">
        <div className="community-container community-partnership-inner">
          <div>
            <p className="community-eyebrow">
              LET'S BUILD SOMETHING TOGETHER
            </p>

            <h2>
              YOUR COMMUNITY.
              <br />
              <span>OUR SHARED FUTURE.</span>
            </h2>

            <p>
              Interested in supporting community initiatives,
              working with the club or exploring a partnership?
              Let's start a conversation.
            </p>
          </div>

          <Link to="/get-involved" className="community-button-white">
            WORK WITH US
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Community
