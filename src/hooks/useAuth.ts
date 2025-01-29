import { useState, useEffect } from 'react';
import type { User } from '../types/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth state check
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    // Implement your own auth logic here
    return null;
  };

  const signOut = async () => {
    // Implement your own signout logic here
    setUser(null);
  };

  return {
    user,
    loading,
    signIn,
    signOut
  };
};
