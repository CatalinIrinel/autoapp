import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextProvider } from '../contexts/ContextProvider';

function AdminRoute({ children }) {
  const { state } = useContext(ContextProvider);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/login" />;
}

export default AdminRoute;
