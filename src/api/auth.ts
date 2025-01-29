import { auth, db } from '../config/firebase';

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    return result.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const createAccount = async (email: string, password: string) => {
  try {
    const result = await auth.createUserWithEmailAndPassword(email, password);
    return result.user;
  } catch (error) {
    console.error('Error creating account:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export const onAuthStateChange = (callback: (user: any) => void) => {
  return auth.onAuthStateChanged(callback);
};
