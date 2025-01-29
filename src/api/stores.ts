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

// Local store (in production, use a proper database)
const stores = new Map();

export const createStore = async (storeData: any) => {
  const id = Math.random().toString(36).substr(2, 9);
  const store = {
    ...storeData,
    id,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  stores.set(id, store);
  return store;
};

export const updateStore = async (storeId: string, updateData: any) => {
  const store = stores.get(storeId);
  if (!store) {
    throw new Error('Store not found');
  }

  const updatedStore = {
    ...store,
    ...updateData,
    updatedAt: new Date().toISOString()
  };
  stores.set(storeId, updatedStore);
  return updatedStore;
};

export const getStore = async (storeId: string) => {
  const store = stores.get(storeId);
  if (!store) {
    throw new Error('Store not found');
  }
  return store;
};

export const getAllStores = async () => {
  return Array.from(stores.values());
};
