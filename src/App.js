import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// aos for animations
import Aos from 'aos';
import 'aos/dist/aos.css';

// Toast alerts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import AdminRoute from './components/AdminRoute';
import { Footer, Navbar, Sidebar, UserRoute } from './components';
// Pages
import {
  GdprPage,
  HomePage,
  LoginPage,
  RegisterPage,
  TncPage,
  TouPage,
  PricesPage,
  Dashboard,
  Functionality,
  Guides,
  Contact,
  About,
} from './pages';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

//appId="1239358320322409"

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <ScrollToTop />
      <ToastContainer position="top-right" limit={1} />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        w={'full'}
        minH={'calc(100vh - 100px - 200px)'}
        px={['2rem', null, '6rem']}
      >
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/logare'} element={<LoginPage />} />
          <Route path={'/inregistrare'} element={<RegisterPage />} />

          {/* Nav pages */}

          <Route path={'/functionalitati'} element={<Functionality />} />
          <Route path={'/preturi'} element={<PricesPage />} />
          <Route path={'/ghiduri'} element={<Guides />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/despre'} element={<About />} />
          {/* End of Nav Pages */}

          {/* User routes pages */}
          <Route
            path={'/dashboard'}
            element={
              <UserRoute>
                <Dashboard />
              </UserRoute>
            }
          />

          {/* policy */}
          <Route path={'/termeni-conditii'} element={<TncPage />} />
          <Route path={'/termeni-utilizare'} element={<TouPage />} />
          <Route path={'/gdpr'} element={<GdprPage />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
