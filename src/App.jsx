
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './assets/pages/Home.jsx'
import News from './assets/pages/News.jsx'
import Club from './assets/pages/Club.jsx'
import Teams from './assets/pages/Teams.jsx'
import Fixtures from './assets/pages/Fixtures.jsx'
import Community from './assets/pages/Community.jsx'
import GetInvolved from './assets/pages/GetInvolved.jsx'

// --------------------------------------------------
// COMING SOON / NOT FOUND PAGE
// --------------------------------------------------

function ComingSoon({ title, description }) {
  return (
    <main className="coming-soon">
      <div className="container">
        <span className="eyebrow">
          KITARA FC · BUNYORO'S PRIDE
        </span>

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

// --------------------------------------------------
// APPLICATION ROUTES
// --------------------------------------------------

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Club news */}
        <Route
          path="/news"
          element={<News />}
        />

        {/* About the club */}
        <Route
          path="/club"
          element={<Club />}
        />

        {/* Teams */}
        <Route
          path="/teams"
          element={<Teams />}
        />

        {/* Fixtures and results */}
        <Route
          path="/fixtures"
          element={<Fixtures />}
        />

        {/* Community */}
        <Route
          path="/community"
          element={<Community />}
        />

        {/* Get involved and partnerships */}
        <Route
          path="/get-involved"
          element={<GetInvolved />}
        />

        {/* Unknown routes */}
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
    </BrowserRouter>
  )
}

export default App
