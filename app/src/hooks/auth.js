import React, { createContext, useCallback, useContext, useState } from 'react';

import {
  cleanLocalStorage,
  updateLocalStorage,
} from '../service/localSrogaService';

import AuthService from '../service/AuthService';
const AuthContext = createContext({});
const authService = new AuthService();
const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const jwt = localStorage.getItem('@MvpprojectJ:jwt');
    const email = localStorage.getItem('@Mvpproject:email');

    if (jwt && email) {
      return { jwt, email: JSON.parse(email) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await authService.autheticate(formData);
    const { jwt } = response;

    updateLocalStorage(response);
    localStorage.setItem('@Mvpproject:email', JSON.stringify(email));
    setData({ jwt, email });
  }, []);

  const signOut = useCallback(() => {
    cleanLocalStorage();
    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
