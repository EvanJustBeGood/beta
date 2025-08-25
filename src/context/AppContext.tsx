import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { PcBuild } from '../data/builds';
import { STORAGE_KEYS, loadFromStorage, saveToStorage } from '../utils/storage';

interface AppState {
  favorites: number[];
  cart: number[];
  selectedBuild: PcBuild | null;
}

type AppAction =
  | { type: 'TOGGLE_FAVORITE'; payload: number }
  | { type: 'ADD_TO_CART'; payload: number }
  | { type: 'SET_SELECTED_BUILD'; payload: PcBuild | null }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_STORED_DATA'; payload: { favorites: number[]; cart: number[] } };

const initialState: AppState = {
  favorites: [],
  cart: [],
  selectedBuild: null,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const newFavorites = state.favorites.includes(action.payload)
        ? state.favorites.filter(id => id !== action.payload)
        : [...state.favorites, action.payload];
      
      saveToStorage(STORAGE_KEYS.FAVORITES, newFavorites);
      
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    
    case 'ADD_TO_CART': {
      const newCart = [...state.cart, action.payload];
      saveToStorage(STORAGE_KEYS.CART, newCart);
      
      return {
        ...state,
        cart: newCart,
      };
    }
    
    case 'REMOVE_FROM_CART': {
      const newCart = state.cart.filter(id => id !== action.payload);
      saveToStorage(STORAGE_KEYS.CART, newCart);
      
      return {
        ...state,
        cart: newCart,
      };
    }
    
    case 'CLEAR_CART': {
      saveToStorage(STORAGE_KEYS.CART, []);
      
      return {
        ...state,
        cart: [],
      };
    }
    
    case 'SET_SELECTED_BUILD':
      return {
        ...state,
        selectedBuild: action.payload,
      };
    
    case 'LOAD_STORED_DATA':
      return {
        ...state,
        favorites: action.payload.favorites,
        cart: action.payload.cart,
      };
    
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Загружаем данные из localStorage при инициализации
  useEffect(() => {
    const storedFavorites = loadFromStorage<number[]>(STORAGE_KEYS.FAVORITES, []);
    const storedCart = loadFromStorage<number[]>(STORAGE_KEYS.CART, []);
    
    dispatch({
      type: 'LOAD_STORED_DATA',
      payload: { favorites: storedFavorites, cart: storedCart }
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
