import { useEffect, useState } from "react";

const usePersistedSearch = (sessionSearchKey) => {
  const initialState = sessionStorage.getItem(sessionSearchKey)
    ? sessionStorage.getItem(sessionSearchKey)
    : "";

  const [state, setState] = useState(initialState);
  useEffect(() => {
    if (!!state) sessionStorage.setItem(sessionSearchKey, state);
  }, [state, sessionSearchKey]);

  return [state, setState];
};

export const useSearchString = () => {
  return usePersistedSearch("searchkey");
};
