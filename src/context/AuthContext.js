import React, { createContext, useContext, useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('codingNinjasUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simulate API call - in real app, this would be an actual API request
      if (email && password) {
        const userData = {
          email,
          name: email.split('@')[0],
          avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=f97316&color=fff&size=40`,
          loginTime: new Date().toISOString()
        };
        
        setUser(userData);
        localStorage.setItem('codingNinjasUser', JSON.stringify(userData));
        return { success: true, user: userData };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('codingNinjasUser');
  };

  const signup = async (email, password, name) => {
    try {
      // Simulate API call
      if (email && password && name) {
        const userData = {
          email,
          name,
          avatar: `https://ui-avatars.com/api/?name=${name}&background=f97316&color=fff&size=40`,
          loginTime: new Date().toISOString()
        };
        
        setUser(userData);
        localStorage.setItem('codingNinjasUser', JSON.stringify(userData));
        return { success: true, user: userData };
      } else {
        throw new Error('All fields are required');
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const googleLogin = async (credentialResponse) => {
    try {
      let userInfo;
      
      // Check if it's a demo credential (base64 encoded JSON) or real JWT
      try {
        // Try to decode as demo credential first
        userInfo = JSON.parse(atob(credentialResponse.credential));
      } catch {
        // If that fails, decode as JWT token
        const token = credentialResponse.credential;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        
        userInfo = JSON.parse(jsonPayload);
      }
      
      const userData = {
        email: userInfo.email,
        name: userInfo.name,
        avatar: userInfo.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(userInfo.name)}&background=f97316&color=fff&size=40`,
        loginTime: new Date().toISOString(),
        provider: 'google'
      };
      
      setUser(userData);
      localStorage.setItem('codingNinjasUser', JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (error) {
      console.error('Google login error:', error);
      return { success: false, error: 'Google login failed' };
    }
  };

  const value = {
    user,
    login,
    logout,
    signup,
    googleLogin,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
