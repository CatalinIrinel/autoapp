import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/dashboard/Home';

const Dashboard = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
