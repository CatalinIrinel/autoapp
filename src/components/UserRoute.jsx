import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { State } from '../contexts/ContextProvider';

function UserRoute({ children }) {
  const { state } = useContext(State);
  const { userInfo } = state;
  return userInfo ? children : <Navigate to="/logare" />;
}

export default UserRoute;
