import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Aos from 'aos';
import 'aos/dist/aos.css';
// Toast alerts
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import AdminRoute from './components/AdminRoute';
import { Footer, Navbar, Sidebar } from './components';
// Pages
import {
  FbPostPage,
  GdprPage,
  HomePage,
  InstagramPostPage,
  LoginPage,
  RegisterPage,
  TncPage,
  TouPage,
} from './pages';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

// facebook sdk

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <ScrollToTop />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        w={'full'}
        minH={'calc(100vh - 120px)'}
        px={['2rem', null, '6rem']}
      >
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/logare'} element={<LoginPage />} />
          <Route path={'/inregistrare'} element={<RegisterPage />} />

          <Route path={'/facebook-post'} element={<FbPostPage />} />
          <Route path={'/instagram-post'} element={<InstagramPostPage />} />

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
