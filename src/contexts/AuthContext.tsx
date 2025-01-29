import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isEmailLink: (link: string) => boolean;
  completeSignInWithLink: (email: string, link: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithEmail: async () => {},
  signInWithGoogle: async () => {},
  signOut: async () => {},
  isEmailLink: () => false,
  completeSignInWithLink: async () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    // Implement your email sign-in logic here
    const mockUser = { id: '1', email, name: 'Test User' };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signInWithGoogle = async () => {
    // Implement your Google sign-in logic here
    const mockUser = { id: '2', email: 'google@test.com', name: 'Google User' };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isEmailLink = (link: string) => {
    // Implement your email link verification logic
    return false;
  };

  const completeSignInWithLink = async (email: string, link: string) => {
    // Implement your email link sign-in completion logic
    const mockUser = { id: '3', email, name: 'Email Link User' };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading,
        signInWithEmail,
        signInWithGoogle,
        signOut,
        isEmailLink,
        completeSignInWithLink
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
