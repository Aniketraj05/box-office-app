import { star, unStar } from "./actionTypes";
import { initialState } from "../ShowGrid";
export const starredReducer = (state = initialState, action) => {
  switch (action.type) {
    case star:
      return [...state, action.showId];
    case unStar:
      return state.filter((showNo) => showNo !== action.showId);
    default:
      return state;
  }
};
