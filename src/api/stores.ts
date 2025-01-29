// Local store management
interface Store {
  id: string;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

// In-memory store for development
const stores = new Map<string, Store>();

export const createStore = async (storeData: Omit<Store, 'id' | 'createdAt' | 'updatedAt'>): Promise<Store> => {
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

export const updateStore = async (id: string, updates: Partial<Store>): Promise<Store> => {
  const existingStore = stores.get(id);
  if (!existingStore) {
    throw new Error('Store not found');
  }

  const updatedStore = {
    ...existingStore,
    ...updates,
    updatedAt: new Date().toISOString()
  };
  stores.set(id, updatedStore);
  return updatedStore;
};

export const getStore = async (id: string): Promise<Store> => {
  const store = stores.get(id);
  if (!store) {
    throw new Error('Store not found');
  }
  return store;
};

export const getAllStores = async (): Promise<Store[]> => {
  return Array.from(stores.values());
};
