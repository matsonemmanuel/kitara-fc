
import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Handshake,
  Users,
  Megaphone,
  Ticket,
  CheckCircle2,
  Send,
} from 'lucide-react'

const opportunities = [
  {
    number: '01',
    title: 'Support the Royals',
    tag: 'FOR SUPPORTERS',
    description:
      'Stand behind Kitara FC, attend matches, follow the team and help create an unforgettable atmosphere wherever the Royals play.',
    icon: Heart,
    action: 'SHOW YOUR SUPPORT',
    href: '#supporters',
  },
  {
    number: '02',
    title: 'Partner With Us',
    tag: 'FOR BUSINESSES',
    description:
      'Explore sponsorships, business collaborations and opportunities to connect your brand with the Kitara FC community.',
    icon: Handshake,
    action: 'EXPLORE PARTNERSHIPS',
    href: '#contact',
  },
  {
    number: '03',
    title: 'Volunteer Your Skills',
    tag: 'FOR VOLUNTEERS',
    description:
      'Bring your time, experience and ideas to help with suitable club and community activities when opportunities are available.',
    icon: Users,
    action: 'EXPRESS YOUR INTEREST',
    href: '#contact',
  },
  {
    number: '04',
    title: 'Spread the Word',
    tag: 'FOR EVERYONE',
    description:
      'Share club news, celebrate the team and help more people discover the pride, passion and ambition of the Royals.',
    icon: Megaphone,
    action: 'GET CONNECTED',
    href: '#supporters',
  },
]

const interestOptions = [
  'Supporting the club',
  'Sponsorship or business partnership',
  'Volunteering',
  'Community collaboration',
  'Media or communications',
  'Other enquiry',
]

function GetInvolved() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.reportValidity()) return

    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const interest = String(formData.get('interest') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const subject = encodeURIComponent(
      `Kitara FC Get Involved enquiry: ${interest}`
    )

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nArea of interest: ${interest}\n\nMessage:\n${message}`
    )

    /*
      Replace this placeholder with Kitara FC's verified
      official contact email before publishing.
    */
    const recipient = 'REPLACE-WITH-OFFICIAL-CLUB-EMAIL'

    if (
      recipient === 'REPLACE-WITH-OFFICIAL-CLUB-EMAIL' ||
      !recipient.includes('@')
    ) {
      setSubmitted(true)
      return
    }

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <main className="involved-page">
      {/* HERO */}
      <section className="involved-hero">
        <div className="involved-hero-image" />

        <div className="involved-container involved-hero-content">
          <p className="involved-eyebrow">
            KITARA FOOTBALL CLUB / GET INVOLVED
          </p>

          <h1>
            BE PART OF
            <br />
            <span>THE ROYALS.</span>
          </h1>

          <p className="involved-hero-description">
            Every supporter. Every partner. Every helping hand.
            There is a place for you in the Kitara FC story.
          </p>

          <a href="#opportunities" className="involved-button-red">
            FIND YOUR PLACE <ArrowRight size={18} />
          </a>
        </div>

        <div className="involved-hero-strip">
          <span>ONE CLUB</span>
          <span>ONE COMMUNITY</span>
          <span>ONE ROYAL PRIDE</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="involved-intro">
        <div className="involved-container involved-intro-grid">
          <div>
            <p className="involved-eyebrow involved-red-text">
              YOUR CLUB. YOUR CONTRIBUTION.
            </p>

            <h2>
              THE FUTURE
              <br />
              IS <span>OURS TO BUILD.</span>
            </h2>
          </div>

          <div className="involved-intro-copy">
            <p>
              Kitara FC is more than the team on the pitch.
              It is the people who stand behind the badge, the
              businesses that believe in the journey and the
              community that shares in the club's ambitions.
            </p>

            <p>
              Whether you want to support the team, explore a
              partnership or contribute your skills, we invite
              you to take the next step with the Royals.
            </p>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section
        className="involved-opportunities"
        id="opportunities"
      >
        <div className="involved-container">
          <div className="involved-section-heading">
            <div>
              <p className="involved-eyebrow involved-red-text">
                MAKE YOUR MOVE
              </p>
              <h2>HOW WILL YOU GET INVOLVED?</h2>
            </div>

            <p>
              Choose the path that fits you. Every contribution
              starts with a conversation.
            </p>
          </div>

          <div className="involved-opportunity-grid">
            {opportunities.map((item) => {
              const Icon = item.icon

              return (
                <article
                  className="involved-opportunity-card"
                  key={item.number}
                >
                  <div className="involved-card-top">
                    <span>{item.number}</span>
                    <Icon size={29} strokeWidth={1.6} />
                  </div>

                  <p className="involved-card-tag">{item.tag}</p>

                  <h3>{item.title}</h3>

                  <p className="involved-card-description">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="involved-card-link"
                  >
                    {item.action}
                    <ArrowUpRight size={17} />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SUPPORTERS FEATURE */}
      <section className="involved-supporters" id="supporters">
        <div className="involved-supporters-image" />

        <div className="involved-container involved-supporters-content">
          <p className="involved-eyebrow">
            THE PEOPLE MAKE THE CLUB
          </p>

          <h2>
            STAND WITH
            <br />
            <span>THE ROYALS.</span>
          </h2>

          <p>
            Football is better when we experience it together.
            Follow the club, show up for matchday and help build
            a proud, welcoming supporter community.
          </p>

          <a href="#contact" className="involved-button-white">
            CONNECT WITH THE CLUB
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* PARTNERSHIP FEATURE */}
      <section className="involved-partnership">
        <div className="involved-container involved-partnership-grid">
          <div className="involved-partnership-content">
            <p className="involved-eyebrow involved-red-text">
              LET'S CREATE VALUE TOGETHER
            </p>

            <h2>
              GOOD PARTNERSHIPS.
              <br />
              <span>STRONGER FUTURES.</span>
            </h2>

            <p>
              We welcome conversations with businesses, institutions
              and organizations interested in exploring how they
              could work with Kitara FC.
            </p>

            <a
              href="#contact"
              className="involved-button-red"
            >
              DISCUSS A PARTNERSHIP
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="involved-partnership-panel">
            <div>
              <Handshake size={25} />
              <span>01</span>
              <h3>Sponsorship</h3>
              <p>Explore potential brand and club collaborations.</p>
            </div>

            <div>
              <Users size={25} />
              <span>02</span>
              <h3>Community</h3>
              <p>Discuss opportunities to work together locally.</p>
            </div>

            <div>
              <Megaphone size={25} />
              <span>03</span>
              <h3>Engagement</h3>
              <p>Explore communications and supporter initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="involved-contact" id="contact">
        <div className="involved-container involved-contact-grid">
          <div className="involved-contact-copy">
            <p className="involved-eyebrow involved-red-text">
              START A CONVERSATION
            </p>

            <h2>
              LET'S MAKE
              <br />
              <span>IT HAPPEN.</span>
            </h2>

            <p>
              Tell us a little about yourself and how you would
              like to get involved. The club can use your enquiry
              to understand your interests and determine the
              appropriate next steps.
            </p>

            <div className="involved-contact-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Supporter enquiries</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Partnership proposals</span>
              </div>
              <div>
                <CheckCircle2 size={19} />
                <span>Volunteer and community interest</span>
              </div>
            </div>
          </div>

          <form
            className="involved-form"
            onSubmit={handleSubmit}
          >
            <div className="involved-form-heading">
              <span>YOUR NEXT STEP</span>
              <Send size={21} />
            </div>

            <h3>Tell us how you'd like to get involved.</h3>

            <label htmlFor="involved-name">Full name</label>
            <input
              id="involved-name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />

            <label htmlFor="involved-email">Email address</label>
            <input
              id="involved-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <label htmlFor="involved-interest">
              Area of interest
            </label>
            <select
              id="involved-interest"
              name="interest"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an option
              </option>

              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <label htmlFor="involved-message">
              Your message
            </label>
            <textarea
              id="involved-message"
              name="message"
              rows="4"
              placeholder="Tell us a little about your idea or interest..."
              required
            />

            <button
              className="involved-submit"
              type="submit"
            >
              SEND YOUR ENQUIRY
              <ArrowRight size={18} />
            </button>

            {submitted && (
              <p className="involved-form-notice" role="status">
                The form is ready, but the club's verified email
                address has not been configured yet. Please contact
                the site administrator before using this form live.
              </p>
            )}

            <p className="involved-form-note">
              Your details should only be used to respond to your
              enquiry. Connect this form to the club's approved
              email or backend service before launch.
            </p>
          </form>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="involved-closing">
        <div className="involved-container involved-closing-inner">
          <div>
            <p className="involved-eyebrow">
              THE PRIDE OF BUNYORO
            </p>

            <h2>
              THIS IS YOUR
              <br />
              <span>INVITATION.</span>
            </h2>
          </div>

          <a href="#opportunities" className="involved-button-white">
            FIND YOUR PLACE <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}

export default GetInvolved
