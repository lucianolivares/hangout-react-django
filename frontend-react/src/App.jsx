import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyles'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const Menu = lazy(() => import('./pages/Menu'))
const RestaurantsPage = lazy(() => import('./pages/RestaurantsPage'))
const SignUp = lazy(() => import('./pages/SignUp'))
const AboutUs = lazy(() => import('./pages/AboutUsPage'))
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'))
// import ScrollToTop from './pages/ScrollToTop';

const theme = {
  colors: {
    primary: '#20CE65',
    secondary: '#ff5b04',
    bg_color: '#001E2C',
    dark: '#001824',
    black: '#000f16'
  },
  media: {
    medium: '768px'
  }
}

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router>

        <GlobalStyle />
        {/* <ScrollToTop /> */}

        <Navbar />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='restaurants' element={<RestaurantsPage />} />
            <Route path='categories' element={<CategoriesPage />} />
            <Route path='restaurant-view/:id' element={<Menu />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='about-us' element={<AboutUs />} />
          </Routes>

        </Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
