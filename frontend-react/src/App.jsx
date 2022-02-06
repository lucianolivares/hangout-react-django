import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import Home from './pages/Home';
import RestaurantsPage from './pages/RestaurantsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUsPage';
// import ScrollToTop from './pages/ScrollToTop';

const theme = {
  colors: {
    primary: '#20CE65',
    secondary: '#ff5b04',
    bg_color: '#001E2C',
    dark: '#001824',
    black: '#000f16',
  },
  media: {
    medium: '768px',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        {/* <ScrollToTop /> */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="restaurants" element={<RestaurantsPage />} />
          <Route path="restaurant-view/:id" element={<Menu />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
