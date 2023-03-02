import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { State } from '../contexts/ContextProvider';

function AdminRoute({ children }) {
  const { state } = useContext(State);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/login" />;
}

export default AdminRoute;
