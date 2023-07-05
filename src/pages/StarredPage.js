import React from "react";
import { useStarredShowReducer } from "../components/shows/starred/useStarredShowReducer";
import { useQuery } from "@tanstack/react-query";
import { searchShowsByIds } from "../api/tvMaze";
import ShowGrid from "../components/shows/ShowGrid";

const StarredPage = () => {
  const [starredShowIds] = useStarredShowReducer();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ["starredShow", starredShowIds],
    queryFn: () =>
      searchShowsByIds(starredShowIds).then((result) =>
        result.map((show) => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (!!starredShowsError) {
    return <div>Error occured: {starredShowsError.message}</div>;
  }
  if (starredShowIds.length === 0) {
    return <div>No Show Starred Yet</div>;
  }
  if (!!starredShows && starredShows.length > 0) {
    return <ShowGrid showData={starredShows} />;
  }

  return <div>Loading...</div>;
};

export default StarredPage;
