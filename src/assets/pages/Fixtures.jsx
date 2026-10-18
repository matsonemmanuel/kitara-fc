
import { useState } from 'react'
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Clock3,
  Trophy,
} from 'lucide-react'

const matches = [
  {
    id: 1,
    status: 'upcoming',
    competition: 'Competition to be confirmed',
    date: 'DATE TBC',
    time: 'TIME TBC',
    opponent: 'Opponent to be confirmed',
    venue: 'Venue to be confirmed',
    home: true,
  },
  {
    id: 2,
    status: 'upcoming',
    competition: 'Competition to be confirmed',
    date: 'DATE TBC',
    time: 'TIME TBC',
    opponent: 'Opponent to be confirmed',
    venue: 'Venue to be confirmed',
    home: false,
  },
  {
    id: 3,
    status: 'result',
    competition: 'Recent result',
    date: 'DATE TBC',
    time: 'FULL TIME',
    opponent: 'Opponent to be confirmed',
    venue: 'Venue to be confirmed',
    home: true,
    homeScore: null,
    awayScore: null,
  },
]

const filters = [
  { label: 'All Matches', value: 'all' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Results', value: 'result' },
]

function Fixtures() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredMatches = matches.filter((match) => {
    return activeFilter === 'all' || match.status === activeFilter
  })

  return (
    <main className="fixtures-page">
      {/* HERO */}
      <section className="fixtures-hero">
        <div className="fixtures-hero-background" />

        <div className="fixtures-container fixtures-hero-content">
          <p className="fixtures-eyebrow">
            KITARA FOOTBALL CLUB / MATCH CENTRE
          </p>

          <h1>
            FIXTURES
            <br />
            <span>& RESULTS.</span>
          </h1>

          <p className="fixtures-hero-description">
            Every match is another opportunity to represent
            Bunyoro, compete with pride and write the next
            chapter of the Royals' story.
          </p>

          <a href="#match-centre" className="fixtures-button-red">
            EXPLORE MATCHES
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="fixtures-hero-strip">
          <span>THE ROYALS</span>
          <span>EVERY MATCH MATTERS</span>
          <span>EST. 2010</span>
        </div>
      </section>

      {/* MATCH CENTRE */}
      <section className="fixtures-match-centre" id="match-centre">
        <div className="fixtures-container">
          <div className="fixtures-heading">
            <div>
              <p className="fixtures-eyebrow fixtures-red-text">
                FOLLOW THE ROYALS
              </p>
              <h2>MATCH CENTRE</h2>
              <p className="fixtures-heading-description">
                Upcoming games and recent results in one place.
              </p>
            </div>

            <div className="fixtures-heading-icon">
              <CalendarDays size={28} />
            </div>
          </div>

          {/* FILTERS */}
          <div className="fixtures-filters" role="group" aria-label="Filter matches">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={
                  activeFilter === filter.value
                    ? 'fixtures-filter active'
                    : 'fixtures-filter'
                }
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={activeFilter === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* MATCH LIST */}
          <div className="fixtures-list">
            {filteredMatches.map((match) => (
              <article className="fixtures-match-card" key={match.id}>
                <div className="fixtures-match-date">
                  <span className="fixtures-date-label">
                    {match.status === 'result' ? 'MATCH RESULT' : 'MATCH DATE'}
                  </span>
                  <strong>{match.date}</strong>
                  <span className="fixtures-match-time">
                    <Clock3 size={14} />
                    {match.time}
                  </span>
                </div>

                <div className="fixtures-match-main">
                  <div className="fixtures-competition">
                    <Trophy size={14} />
                    {match.competition}
                  </div>

                  <div className="fixtures-teams">
                    <div className="fixtures-team">
                      <div className="fixtures-team-crest">K</div>
                      <div>
                        <strong>Kitara FC</strong>
                        <span>{match.home ? 'HOME' : 'AWAY'}</span>
                      </div>
                    </div>

                    <div className="fixtures-score">
                      {match.status === 'result' &&
                      match.homeScore !== null &&
                      match.awayScore !== null ? (
                        <strong>
                          {match.home
                            ? `${match.homeScore} - ${match.awayScore}`
                            : `${match.awayScore} - ${match.homeScore}`}
                        </strong>
                      ) : (
                        <span>VS</span>
                      )}
                    </div>

                    <div className="fixtures-team fixtures-opponent">
                      <div>
                        <strong>{match.opponent}</strong>
                        <span>{match.home ? 'AWAY' : 'HOME'}</span>
                      </div>
                      <div className="fixtures-opponent-crest">?</div>
                    </div>
                  </div>

                  <div className="fixtures-venue">
                    <MapPin size={14} />
                    {match.venue}
                  </div>
                </div>

                <div className="fixtures-match-status">
                  <span
                    className={
                      match.status === 'result'
                        ? 'fixtures-status-badge result'
                        : 'fixtures-status-badge upcoming'
                    }
                  >
                    {match.status === 'result' ? 'COMPLETED' : 'UPCOMING'}
                  </span>
                </div>
              </article>
            ))}

            {filteredMatches.length === 0 && (
              <div className="fixtures-empty">
                <CalendarDays size={32} />
                <h3>No matches to display</h3>
                <p>Check back for the next Kitara FC fixture update.</p>
              </div>
            )}
          </div>

          <p className="fixtures-data-note">
            Fixture dates, opponents, venues, kickoff times and scores
            must be updated with confirmed club information before
            publication.
          </p>
        </div>
      </section>

      {/* MATCHDAY BANNER */}
      <section className="fixtures-matchday">
        <div className="fixtures-matchday-background" />

        <div className="fixtures-container fixtures-matchday-content">
          <p className="fixtures-eyebrow">ONE CLUB. ONE PRIDE.</p>

          <h2>
            EVERY MATCH.
            <br />
            <span>WE STAND TOGETHER.</span>
          </h2>

          <p>
            Support the Royals from the stands, follow the results
            and be part of the Kitara FC community.
          </p>

          <a href="/community" className="fixtures-button-white">
            JOIN THE ROYAL FAMILY
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}

export default Fixtures
