// Local authentication configuration
interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

interface Auth {
  currentUser: User | null;
  onAuthStateChanged: (callback: (user: User | null) => void) => () => void;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<{ user: User | null }>;
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<{ user: User | null }>;
  signOut: () => Promise<void>;
}

interface DB {
  collection: (name: string) => any;
  doc: (path: string) => any;
}

const localAuth = {
  currentUser: null,
  onAuthStateChanged: (callback: (user: User | null) => void) => {
    callback(null);
    return () => {};
  },
  signInWithEmailAndPassword: async () => ({ user: null }),
  createUserWithEmailAndPassword: async () => ({ user: null }),
  signOut: async () => {}
} as Auth;

const localDb = {
  collection: () => ({}),
  doc: () => ({})
} as DB;

export const auth = localAuth;
export const db = localDb;
