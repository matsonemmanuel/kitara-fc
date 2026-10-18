
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Users,
  Target,
  Heart,
  Trophy,
  CalendarDays,
} from 'lucide-react'

const clubValues = [
  {
    number: '01',
    title: 'PRIDE',
    description:
      'Representing Bunyoro with honour, identity and a strong sense of belonging.',
    icon: Shield,
  },
  {
    number: '02',
    title: 'TEAMWORK',
    description:
      'Building success through unity, discipline and collective effort.',
    icon: Users,
  },
  {
    number: '03',
    title: 'AMBITION',
    description:
      'Continuously striving to compete, improve and achieve more.',
    icon: Target,
  },
  {
    number: '04',
    title: 'COMMUNITY',
    description:
      'Celebrating the supporters and communities who give the club its identity.',
    icon: Heart,
  },
]

const milestones = [
  {
    year: '2010',
    title: 'THE BEGINNING',
    description:
      'Kitara FC was founded, beginning its journey in Ugandan football.',
  },
  {
    year: '2020',
    title: 'A PREMIER LEAGUE MILESTONE',
    description:
      'The club earned promotion to the Uganda Premier League for the 2020/21 season.',
  },
  {
    year: '2023',
    title: 'BACK TO THE TOP FLIGHT',
    description:
      'Kitara secured promotion again after winning the FUFA Big League.',
  },
  {
    year: '2024',
    title: 'UGANDA CUP CHAMPIONS',
    description:
      'The Royals won their first Uganda Cup, defeating NEC FC 1–0 in the final.',
  },
  {
    year: '2026',
    title: 'ANOTHER CUP TRIUMPH',
    description:
      'Kitara won the Uganda Cup again, defeating SC Villa 2–1 in the final.',
  },
]

export default function Club() {
  return (
    <main className="club-page">
      {/* HERO */}
      <section className="club-hero">
        <div className="club-hero-bg" />

        <div className="container club-hero-content">
          <div className="club-eyebrow">
            <span />
            THE PRIDE OF BUNYORO
          </div>

          <h1>
            MORE THAN
            <br />
            <span>A CLUB.</span>
          </h1>

          <p>
            Rooted in identity. Driven by ambition.
            United by the love of football.
          </p>

          <a href="#our-story" className="club-hero-button">
            DISCOVER OUR STORY
            <ArrowRight size={19} />
          </a>
        </div>

        <div className="club-hero-footer">
          <span>KITARA FOOTBALL CLUB</span>
          <span>ESTABLISHED 2010</span>
          <span>THE ROYALS</span>
        </div>
      </section>

      {/* CLUB INTRODUCTION */}
      <section className="club-intro" id="our-story">
        <div className="container club-intro-grid">
          <div className="club-intro-heading">
            <span className="club-label">WHO WE ARE</span>

            <h2>
              OUR
              <br />
              <span>STORY.</span>
            </h2>

            <div className="club-red-line" />
          </div>

          <div className="club-intro-content">
            <h3>
              A CLUB WITH ITS ROOTS IN BUNYORO
            </h3>

            <p>
              Founded in 2010, Kitara Football Club is a
              Ugandan football club associated with Hoima
              and the wider Bunyoro region. Known as
              The Royals, the club represents more than
              the action on the pitch: it carries the
              hopes, passion and identity of its supporters.
            </p>

            <p>
              From its journey through Ugandan football
              to competing at the highest domestic level,
              Kitara continues to build its place in the
              country's football story.
            </p>

            <p>
              Our ambition is to keep growing, compete
              with determination and honour the people
              who stand behind the badge.
            </p>

            <Link to="/news" className="club-text-link">
              EXPLORE CLUB NEWS
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* IDENTITY BANNER */}
      <section className="club-identity">
        <div className="club-identity-image" />

        <div className="container club-identity-content">
          <span className="club-label">
            OUR IDENTITY
          </span>

          <h2>
            ONE REGION.
            <br />
            ONE PASSION.
            <br />
            <span>ONE ROYAL FAMILY.</span>
          </h2>

          <p>
            The badge brings us together. The supporters
            give us strength. The journey continues with
            Bunyoro at heart.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="club-values" id="values">
        <div className="container">
          <div className="club-section-heading">
            <div>
              <span className="club-label">
                WHAT DEFINES US
              </span>

              <h2>
                OUR VALUES<span>.</span>
              </h2>
            </div>

            <p>
              The principles that shape our identity
              on and off the pitch.
            </p>
          </div>

          <div className="club-values-grid">
            {clubValues.map((value) => {
              const Icon = value.icon

              return (
                <article
                  className="club-value-card"
                  key={value.number}
                >
                  <div className="club-value-top">
                    <span>{value.number}</span>
                    <Icon size={27} strokeWidth={1.6} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>

                  <div className="club-value-bottom">
                    KITARA FC
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CLUB HISTORY */}
      <section className="club-history" id="history">
        <div className="container">
          <div className="club-section-heading club-history-heading">
            <div>
              <span className="club-label">
                OUR JOURNEY
              </span>

              <h2>
                HISTORY IN
                <br />
                THE MAKING<span>.</span>
              </h2>
            </div>

            <div className="club-history-icon">
              <CalendarDays size={34} />
            </div>
          </div>

          <div className="club-timeline">
            {milestones.map((milestone, index) => (
              <article
                className="club-timeline-item"
                key={milestone.year}
              >
                <div className="club-timeline-marker">
                  <span />
                </div>

                <div className="club-timeline-year">
                  {milestone.year}
                </div>

                <div className="club-timeline-content">
                  <span className="club-timeline-number">
                    MILESTONE 0{index + 1}
                  </span>

                  <h3>{milestone.title}</h3>

                  <p>{milestone.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="club-history-note">
            Club milestones are presented as a starting
            timeline and can be expanded with official
            records, photographs and further achievements.
          </p>
        </div>
      </section>

      {/* TROPHY FEATURE */}
      <section className="club-trophy">
        <div className="club-trophy-image" />

        <div className="container club-trophy-content">
          <div className="club-trophy-icon">
            <Trophy size={36} />
          </div>

          <span className="club-label">
            A MOMENT TO REMEMBER
          </span>

          <h2>
            THE ROYALS
            <br />
            <span>MAKE HISTORY.</span>
          </h2>

          <p>
            In May 2024, Kitara lifted its first Uganda
            Cup after defeating NEC FC 1–0 in the final.
            In May 2026, the club won the competition
            again with a 2–1 victory over SC Villa.
          </p>

          <Link to="/news" className="club-trophy-link">
            READ CLUB NEWS
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CLOSING CALL TO ACTION */}
      <section className="club-cta">
        <div className="container club-cta-inner">
          <div>
            <span className="club-label">
              THE JOURNEY CONTINUES
            </span>

            <h2>
              BE PART OF
              <br />
              <span>THE ROYAL STORY.</span>
            </h2>

            <p>
              Celebrate the club, follow the journey
              and stand with the Pride of Bunyoro.
            </p>
          </div>

          <Link
            to="/get-involved"
            className="club-cta-button"
          >
            GET INVOLVED
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  )
}
