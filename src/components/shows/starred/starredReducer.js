import { star, unStar } from "./actionTypes";
export const starredReducer = (state, action) => {
  switch (action.type) {
    case star:
      return [...state, action.showId];
    case unStar:
      return state.filter((showNo) => showNo !== action.showId);
    default:
      return state;
  }
};
