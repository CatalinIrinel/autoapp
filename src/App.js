import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// aos for animations
import Aos from 'aos';
import 'aos/dist/aos.css';

// Toast alerts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer, Navbar, Sidebar } from './components';
// Pages
import {
  GdprPage,
  HomePage,
  TncPage,
  TouPage,
  PricesPage,
  Functionality,
  Guides,
  Contact,
  About,
} from './pages';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
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

          {/* Nav pages */}

          <Route path={'/functionalitati'} element={<Functionality />} />
          <Route path={'/preturi'} element={<PricesPage />} />
          <Route path={'/ghiduri'} element={<Guides />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/despre'} element={<About />} />
          {/* End of Nav Pages */}

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
