import React from 'react';
import { AuthProvider } from './auth';

const AppProvider = ({ childer }) => {
  return <AuthProvider>{childer}</AuthProvider>;
};

export default AppProvider;
