import { ThemeProvider } from 'styled-components'
import { Route } from 'wouter'
import { GlobalStyle } from './globalStyles'
import Home from './pages/Home'
import RestaurantsPage from './pages/RestaurantsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Menu from './pages/Menu'
import SignUp from './pages/SignUp'
import AboutUs from './pages/AboutUsPage'
import CategoriesPage from './pages/CategoriesPage'
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

      <Route path='/' component={Home} />
      <Route path='/restaurants' component={RestaurantsPage} />
      <Route path='/categories' component={CategoriesPage} />
      <Route path='/restaurant-view/:id' component={Menu} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/about-us' component={AboutUs} />

      <Footer />
    </ThemeProvider>
  )
}

export default App
