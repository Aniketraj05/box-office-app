import { usePersistedReducer } from "../../../custom/usePersistedReducer";
import { starredReducer } from "./starredReducer";

const initialState = [];

export const useStarredShowReducer = () => {
  return usePersistedReducer(starredReducer, initialState, "starredshows");
};
