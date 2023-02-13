import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextProvider } from '../contexts/ContextProvider';

function UserRoute({ children }) {
  const { state } = useContext(ContextProvider);
  const { userInfo } = state;
  return userInfo ? children : <Navigate to="/login" />;
}

export default UserRoute;
