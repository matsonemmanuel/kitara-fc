
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Search,
  Newspaper,
  X,
} from 'lucide-react'

import newsHero from '../images/news/arena.jpg'

const categories = [
  'All News',
  'Match Reports',
  'Club Updates',
  'Team News',
  'Community',
]

const newsArticles = [
  {
    id: 1,
    category: 'Club Updates',
    title: 'Kitara FC: More Than Football',
    excerpt:
      "Discover the passion, identity and ambition that make Kitara Football Club a source of pride for Bunyoro.",
    date: 'Club Feature',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85',
    featured: true,
  },
  {
    id: 2,
    category: 'Match Reports',
    title: 'Inside the Matchday Experience',
    excerpt:
      'Explore the atmosphere, preparation and moments that make football matchdays special for players and supporters.',
    date: 'Matchday',
    image:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    category: 'Team News',
    title: 'Preparing for the Next Challenge',
    excerpt:
      'A closer look at the preparation, teamwork and determination that drive the squad forward.',
    date: 'Team Focus',
    image:
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    category: 'Community',
    title: 'Football Bringing Communities Together',
    excerpt:
      'Celebrating the supporters and communities whose passion gives football its lasting meaning.',
    date: 'Community',
    image:
      'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    category: 'Club Updates',
    title: 'The Pride of Bunyoro',
    excerpt:
      'Discover the identity and values behind a club representing its community through football.',
    date: 'Club Feature',
    image:
      'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    category: 'Match Reports',
    title: 'The Moments That Define Football',
    excerpt:
      'From the opening whistle to the final moments, every match creates stories worth remembering.',
    date: 'Matchday',
    image:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    category: 'Team News',
    title: 'Building Team Spirit',
    excerpt:
      'Football is built on discipline, commitment and the collective effort of every member of the team.',
    date: 'Team Focus',
    image:
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    category: 'Community',
    title: 'A Club With Community at Heart',
    excerpt:
      'Football creates opportunities for connection, inspiration and a shared sense of belonging.',
    date: 'Community',
    image:
      'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80',
  },
]

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All News')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  const featuredArticle = newsArticles[0]

  const filteredArticles = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesCategory =
        activeCategory === 'All News' ||
        article.category === activeCategory

      const query = searchQuery.trim().toLowerCase()

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const displayedArticles = filteredArticles
    .filter((article) => article.id !== featuredArticle.id)
    .slice(0, visibleCount)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setVisibleCount(6)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    setVisibleCount(6)
  }

  return (
    <main className="news-page">
      {/* NEWS PAGE HERO */}
      <section className="news-hero">
        <div
          className="news-hero-image"
          style={{ backgroundImage: `url("${newsHero}")` }}
        />

        <div className="container news-hero-content">
          <div className="news-eyebrow">
            <span />
            KITARA FOOTBALL CLUB
          </div>

          <h1>
            THE LATEST
            <br />
            <span>FROM KITARA.</span>
          </h1>

          <p>
            Club news, match reports, team updates and stories
            from the heart of Bunyoro.
          </p>

          <a href="#latest-news" className="news-hero-link">
            EXPLORE THE LATEST
            <ArrowRight size={19} />
          </a>
        </div>

        <div className="news-hero-bottom">
          <span>THE PRIDE OF BUNYORO</span>
          <span>NEWS &amp; STORIES</span>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="featured-news-section">
        <div className="container">
          <div className="news-section-heading">
            <div>
              <span className="news-label">IN THE SPOTLIGHT</span>
              <h2>FEATURED STORY<span>.</span></h2>
            </div>
          </div>

          <article className="featured-news-card">
            <div className="featured-news-image">
              <img
                src={featuredArticle.image}
                alt="Football stadium and match atmosphere"
              />

              <span className="featured-image-label">
                {featuredArticle.category}
              </span>
            </div>

            <div className="featured-news-content">
              <span className="featured-overline">
                LATEST FROM THE CLUB
              </span>

              <h3>{featuredArticle.title}</h3>

              <p>{featuredArticle.excerpt}</p>

              <div className="featured-news-meta">
                <span>
                  <CalendarDays size={15} />
                  {featuredArticle.date}
                </span>
                <span>FEATURE STORY</span>
              </div>

              <Link
                to="/news"
                className="news-read-link"
                aria-label={`Read more about ${featuredArticle.title}`}
              >
                DISCOVER THE STORY
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section
        className="latest-news-section"
        id="latest-news"
      >
        <div className="container">
          <div className="news-section-heading latest-heading">
            <div>
              <span className="news-label">STAY IN THE KNOW</span>
              <h2>
                LATEST NEWS<span>.</span>
              </h2>
              <p>
                All the stories, updates and moments from Kitara FC.
              </p>
            </div>

            <div className="news-total">
              <Newspaper size={20} />
              <span>NEWSROOM</span>
            </div>
          </div>

          {/* Search */}
          <div className="news-toolbar">
            <div className="news-search">
              <Search size={19} />

              <input
                type="search"
                placeholder="Search news and stories..."
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="Search news articles"
              />

              {searchQuery && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Category filters */}
            <div className="news-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? 'news-filter active'
                      : 'news-filter'
                  }
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Article cards */}
          {displayedArticles.length > 0 ? (
            <>
              <div className="news-articles-grid">
                {displayedArticles.map((article) => (
                  <article
                    className="news-article-card"
                    key={article.id}
                  >
                    <Link
                      to="/news"
                      className="news-card-image"
                      aria-label={`View ${article.title}`}
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                      />

                      <span className="news-card-category">
                        {article.category}
                      </span>

                      <span className="news-card-arrow">
                        <ArrowUpRight size={20} />
                      </span>
                    </Link>

                    <div className="news-card-content">
                      <div className="news-card-meta">
                        <CalendarDays size={14} />
                        <span>{article.date}</span>
                      </div>

                      <h3>
                        <Link to="/news">
                          {article.title}
                        </Link>
                      </h3>

                      <p>{article.excerpt}</p>

                      <Link
                        to="/news"
                        className="news-card-read"
                      >
                        READ STORY
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {displayedArticles.length < filteredArticles.filter(
                (article) => article.id !== featuredArticle.id
              ).length && (
                <div className="news-load-more">
                  <button
                    type="button"
                    className="news-load-button"
                    onClick={() =>
                      setVisibleCount((count) => count + 3)
                    }
                  >
                    LOAD MORE STORIES
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="news-empty">
              <Search size={36} />

              <h3>NO STORIES FOUND</h3>

              <p>
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                className="news-reset-button"
                onClick={() => {
                  setActiveCategory('All News')
                  setSearchQuery('')
                  setVisibleCount(6)
                }}
              >
                SHOW ALL NEWS
              </button>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER / FOLLOW CTA */}
      <section className="news-follow-section">
        <div className="container news-follow-inner">
          <div>
            <span className="news-label">NEVER MISS A STORY</span>

            <h2>
              FOLLOW THE
              <br />
              <span>KITARA JOURNEY.</span>
            </h2>

            <p>
              Stay connected with the latest stories and updates
              from the Pride of Bunyoro.
            </p>
          </div>

          <Link to="/get-involved" className="news-follow-button">
            JOIN THE KITARA FAMILY
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  )
}
