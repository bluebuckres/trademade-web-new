import type { User } from '../types/auth';

export const signInWithEmail = async (email: string, password: string) => {
  try {
    // TODO: Implement your own auth logic
    return null;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const createAccount = async (email: string, password: string) => {
  try {
    // TODO: Implement your own account creation logic
    return null;
  } catch (error) {
    console.error('Error creating account:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    // TODO: Implement your own signout logic
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUser = (): User | null => {
  return null;
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  callback(null);
  return () => {};
};
