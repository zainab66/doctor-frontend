import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AgentPrivateRoute = () => {
  const { user } = useSelector((state) => state.auth);
  return user && user.isCustomer === 'Assistant' ? (
    <Navigate to="/denied" />
  ) : (
    <Navigate to="/login" />
  );
};
export default AgentPrivateRoute;
