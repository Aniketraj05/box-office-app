import { useEffect, useReducer } from "react";

export const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (initialState) => {
      const returnState = localStorage.getItem(localStorageKey);
      return returnState ? JSON.parse(returnState) : initialState;
    }
  );
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};
