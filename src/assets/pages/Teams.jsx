
import { ArrowRight, ArrowUpRight, Shield, Users, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

const teams = [
  {
    number: '01',
    title: 'First Team',
    description:
      'Meet the players representing Kitara FC in competitive football.',
    href: '#first-team',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '02',
    title: 'Technical Staff',
    description:
      'Discover the coaching and support team behind the Royals.',
    href: '#technical-staff',
    image:
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '03',
    title: 'Academy',
    description:
      'Developing young talent and inspiring the next generation.',
    href: '#academy',
    image:
      'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=85',
  },
]

const squadGroups = [
  {
    title: 'Goalkeepers',
    description: 'The last line of defence.',
    icon: Shield,
  },
  {
    title: 'Defenders',
    description: 'Strength, discipline and resilience.',
    icon: Users,
  },
  {
    title: 'Midfielders',
    description: 'Creativity, control and vision.',
    icon: Users,
  },
  {
    title: 'Forwards',
    description: 'Pace, precision and goals.',
    icon: Trophy,
  },
]

function Teams() {
  return (
    <main className="teams-page">
      {/* HERO */}
      <section className="teams-hero">
        <div className="teams-hero-image" />

        <div className="teams-container teams-hero-content">
          <p className="teams-eyebrow">
            KITARA FOOTBALL CLUB / THE ROYALS
          </p>

          <h1>
            MEET THE
            <br />
            <span>ROYALS.</span>
          </h1>

          <p className="teams-hero-description">
            The players, coaches and future stars who carry the
            pride of Bunyoro onto the football pitch.
          </p>

          <a className="teams-button teams-button-red" href="#first-team">
            EXPLORE OUR TEAMS <ArrowRight size={18} />
          </a>
        </div>

        <div className="teams-hero-bottom">
          <span>ONE CLUB.</span>
          <span>ONE COMMUNITY.</span>
          <span>ONE ROYAL PRIDE.</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="teams-intro">
        <div className="teams-container teams-intro-grid">
          <div>
            <p className="teams-eyebrow teams-red-text">
              MORE THAN ELEVEN PLAYERS
            </p>

            <h2>
              BUILT ON
              <br />
              <span>ROYAL PRIDE.</span>
            </h2>
          </div>

          <div className="teams-intro-copy">
            <p>
              Kitara FC represents the ambition, passion and
              footballing spirit of Bunyoro. From the first team
              to the next generation of players, every team member
              contributes to the club's journey.
            </p>

            <p>
              Explore the different areas of our football family
              and discover the people who make the Royals special.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM DIRECTORY */}
      <section className="teams-directory">
        <div className="teams-container">
          <div className="teams-section-heading">
            <div>
              <p className="teams-eyebrow">THE KITARA FAMILY</p>
              <h2>OUR TEAMS</h2>
            </div>

            <span className="teams-heading-number">01 — 03</span>
          </div>

          <div className="teams-directory-grid">
            {teams.map((team) => (
              <a
                href={team.href}
                className="teams-directory-card"
                key={team.number}
              >
                <div className="teams-directory-image">
                  <img src={team.image} alt={team.title} />
                  <span className="teams-card-number">
                    {team.number}
                  </span>
                  <span className="teams-card-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </div>

                <div className="teams-directory-card-content">
                  <h3>{team.title}</h3>
                  <p>{team.description}</p>
                  <span className="teams-text-link">
                    EXPLORE SECTION <ArrowRight size={15} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST TEAM */}
      <section className="teams-first-team" id="first-team">
        <div className="teams-container">
          <div className="teams-section-heading teams-light-heading">
            <div>
              <p className="teams-eyebrow">THE MEN IN RED</p>
              <h2>FIRST TEAM</h2>
            </div>

            <p className="teams-section-description">
              The squad representing the Royals in competitive
              football.
            </p>
          </div>

          <div className="teams-squad-banner">
            <div className="teams-squad-banner-image" />

            <div className="teams-squad-banner-content">
              <span className="teams-squad-label">THE ROYALS</span>
              <h3>READY FOR THE CHALLENGE.</h3>
              <p>
                Meet the players who bring determination,
                teamwork and pride to every match.
              </p>
            </div>
          </div>

          <div className="teams-position-grid">
            {squadGroups.map((group, index) => {
              const Icon = group.icon

              return (
                <div className="teams-position-card" key={group.title}>
                  <span className="teams-position-number">
                    0{index + 1}
                  </span>

                  <Icon size={27} strokeWidth={1.5} />

                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              )
            })}
          </div>

          <p className="teams-data-note">
            Official player names, shirt numbers and portraits can
            be added once the current squad list is confirmed.
          </p>
        </div>
      </section>

      {/* TECHNICAL STAFF */}
      <section
        className="teams-staff-section"
        id="technical-staff"
      >
        <div className="teams-container teams-staff-grid">
          <div className="teams-staff-image">
            <img
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=85"
              alt="Football coaching session"
              loading="lazy"
            />

            <span className="teams-staff-image-caption">
              LEADERSHIP / PREPARATION / TEAMWORK
            </span>
          </div>

          <div className="teams-staff-content">
            <p className="teams-eyebrow teams-red-text">
              BEHIND THE TEAM
            </p>

            <h2>
              THE PEOPLE
              <br />
              BEHIND THE
              <br />
              <span>PERFORMANCE.</span>
            </h2>

            <p>
              Every team needs leadership, preparation and a
              shared vision. The technical staff help prepare
              players, develop tactics and build a strong team
              culture.
            </p>

            <div className="teams-staff-roles">
              <div>
                <span>01</span>
                <strong>Head Coach</strong>
              </div>
              <div>
                <span>02</span>
                <strong>Assistant Coaches</strong>
              </div>
              <div>
                <span>03</span>
                <strong>Performance & Support Staff</strong>
              </div>
            </div>

            <p className="teams-data-note">
              Staff names and roles should be updated with the
              club's confirmed information.
            </p>
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section className="teams-academy" id="academy">
        <div className="teams-academy-image" />

        <div className="teams-container teams-academy-content">
          <p className="teams-eyebrow">THE FUTURE STARTS HERE</p>

          <h2>
            TOMORROW'S
            <br />
            <span>ROYALS.</span>
          </h2>

          <p>
            Young talent. Big dreams. A love for the game.
            Investing in the next generation helps build the
            future of football and the future of Kitara FC.
          </p>

          <Link to="/get-involved" className="teams-button teams-button-white">
            GET INVOLVED <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="teams-closing-cta">
        <div className="teams-container teams-closing-inner">
          <div>
            <p className="teams-eyebrow">STAND WITH THE ROYALS</p>
            <h2>
              THIS IS OUR CLUB.
              <br />
              <span>THIS IS OUR PRIDE.</span>
            </h2>
          </div>

          <Link to="/community" className="teams-button teams-button-white">
            JOIN THE ROYAL FAMILY <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Teams
