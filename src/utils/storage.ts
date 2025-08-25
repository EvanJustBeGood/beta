export const STORAGE_KEYS = {
  FAVORITES: 'lunapc_favorites',
  CART: 'lunapc_cart',
  USER_PREFERENCES: 'lunapc_user_preferences'
} as const;

export function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save to localStorage: ${key}`, error);
  }
}

export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Failed to load from localStorage: ${key}`, error);
    return defaultValue;
  }
}

export function removeFromStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Failed to remove from localStorage: ${key}`, error);
  }
}

export function clearStorage(): void {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Failed to clear localStorage', error);
  }
}
