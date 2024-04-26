import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('userEmail');
    setIsLoggedIn(loggedIn === 'true');
    setEmail(userEmail || '');
  }, []);

  const login = (email) => {
    setIsLoggedIn(true);
    setEmail(email);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setEmail('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, email }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
