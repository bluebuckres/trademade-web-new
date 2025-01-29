import { db } from '../config/firebase';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';

interface StoreData {
  name: string;
  userId: string; // mobile number
  createdAt?: any;
  updatedAt?: any;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export const createStore = async (storeData: Omit<Store, 'id' | 'createdAt' | 'updatedAt'>): Promise<Store> => {
  const store: Store = {
    id: Math.random().toString(36).substr(2, 9),
    ...storeData,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  return store;
};

export const updateStore = async (id: string, updates: Partial<Store>): Promise<Store> => {
  const store: Store = {
    id,
    name: updates.name || '',
    address: updates.address || '',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  return store;
};
