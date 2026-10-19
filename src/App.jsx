
import { useEffect, useRef, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './assets/pages/Home.jsx'
import News from './assets/pages/News.jsx'
import Club from './assets/pages/Club.jsx'
import Teams from './assets/pages/Teams.jsx'
import Fixtures from './assets/pages/Fixtures.jsx'
import Community from './assets/pages/Community.jsx'
import GetInvolved from './assets/pages/GetInvolved.jsx'
import logo from './assets/kitara-logo.jpg'

import entranceImage from './assets/images/transitions/entrace.jpg'
import tunnelImage from './assets/images/transitions/cele.jpg'
import sprintImage from './assets/images/transitions/omedi.jpg'
import celebrationImage from './assets/images/transitions/celebrate.jpg'
import fansImage from './assets/images/transitions/fann.jpg'


// Four scenes, played one at a time as visitors navigate.
const transitionScenes = [
  {
    number: '01',
    title: 'THE WALKING ENTRANCE',
    subtitle: 'Our home. Our moment. Our pride.',
    image: entranceImage,
  },
  {
    number: '02',
    title: 'THE TUNNEL',
    subtitle: 'A new chapter begins.',
    image: tunnelImage,
  },
  {
    number: '03',
    title: 'FULL SPEED',
    subtitle: 'Driven by ambition.',
    image: sprintImage,
  },
  {
    number: '04',
    title: 'THE MOMENT',
    subtitle: 'Every goal means everything.',
    image: celebrationImage,
  },
  {
    number: '05',
    title: 'OUR PRIDE',
    subtitle: "Together, we are Bunyoro's pride.",
    image: fansImage,
  }
]

function ComingSoon({ title, description }) {
  return (
    <main className="coming-soon">
      <div className="container">
        <span className="eyebrow">KITARA FC · BUNYORO'S PRIDE</span>
        <h1>{title}</h1>
        <p>
          {description ||
            'Discover the people, passion, and ambition behind Kitara Football Club. More content is coming soon.'}
        </p>
        <Link to="/" className="btn btn-red">
          BACK TO HOME
        </Link>
      </div>
    </main>
  )
}

function CinematicTransition({ scene }) {
  return (
    <motion.div
      className="cinematic-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="status"
      aria-label="Loading next Kitara FC page"
    >
      <motion.div
        className="transition-background"
        style={{ backgroundImage: `url("${scene.image}")` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.15, ease: 'easeOut' }}
      />

      <div className="transition-shade" />
      <div className="transition-red-glow" />

      <motion.div
        className="transition-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08 }}
      >
        <motion.img
          className="transition-crest"
          src={logo}
          alt="Kitara FC crest"
          animate={{ scale: [0.92, 1.04, 1], rotate: [0, -3, 0] }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        />

        <span className="transition-kicker">
          KITARA FOOTBALL CLUB <span>·</span> {scene.number}/04
        </span>

        <h2>{scene.title}</h2>
        <p>{scene.subtitle}</p>

        <div className="transition-progress">
          <motion.span
            key={scene.number}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.95, ease: 'linear' }}
          />
        </div>

        <span className="transition-tagline">THE PRIDE OF BUNYORO</span>
      </motion.div>

      <div className="transition-particles" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </motion.div>
  )
}

function AppContent() {
  const location = useLocation()
  const sceneIndex = useRef(0)
  const previousLocation = useRef(null)
  const [scene, setScene] = useState(transitionScenes[0])
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const currentLocation =
      location.pathname + location.search + location.hash

    // Don't play a transition on the visitor's first page load.
    if (previousLocation.current === null) {
      previousLocation.current = currentLocation
      return
    }

    if (previousLocation.current === currentLocation) return

    previousLocation.current = currentLocation

    // Advance exactly one scene per navigation.
    const nextScene = transitionScenes[sceneIndex.current]
    sceneIndex.current =
      (sceneIndex.current + 1) % transitionScenes.length

    setScene(nextScene)
    setTransitioning(true)

    const timer = window.setTimeout(() => {
      setTransitioning(false)
    }, 1150)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.search, location.hash])

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/club" element={<Club />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/community" element={<Community />} />
        <Route path="/get-involved" element={<GetInvolved />} />

        <Route
          path="*"
          element={
            <ComingSoon
              title="Page Not Found"
              description="The page you are looking for could not be found."
            />
          }
        />
      </Routes>

      <Footer />

      <AnimatePresence>
        {transitioning && (
          <CinematicTransition key={scene.number} scene={scene} />
        )}
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/kitara-fc">
      <AppContent />
    </BrowserRouter>
  )
}
