import { useReducer, createContext, useContext } from 'react';
import { itemsArray } from '../data/data';

export function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

const initialState = {
  columns: 4,
  isDarkMode: true,
  gap: 0.5,
  items: sliceIntoChunks(itemsArray, Math.ceil(itemsArray.length / 4)),
};

const AppContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'SET_COLUMNS':
      return { ...state, columns: action.payload };
    case 'SET_GAP':
      return { ...state, gap: action.payload };
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

export const useAppContext = () => useContext(AppContext);
