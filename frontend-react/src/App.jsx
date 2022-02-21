import React, { Suspense, lazy } from 'react'
import { ThemeProvider } from 'styled-components'
import { Route } from 'wouter'
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
      <GlobalStyle />
      {/* <ScrollToTop /> */}
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Route path='/' component={Home} />
        <Route path='/restaurants' component={RestaurantsPage} />
        <Route path='/categories' component={CategoriesPage} />
        <Route path='/restaurant-view/:id' component={Menu} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/about-us' component={AboutUs} />
      </Suspense>
      <Footer />
    </ThemeProvider>
  )
}

export default App
