import React from "react";
import { useStarredShowReducer } from "../components/shows/starred/useStarredShowReducer";

const StarredPage = () => {
  const [state] = useStarredShowReducer();
  return <div>starred shows : {state?.length}</div>;
};

export default StarredPage;
