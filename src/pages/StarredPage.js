import React from "react";
import { useStarredShowReducer } from "../components/shows/starred/useStarredShowReducer";
import { useQuery } from "@tanstack/react-query";
import { searchShowsByIds } from "../api/tvMaze";
import ShowGrid from "../components/shows/ShowGrid";
import { TextCenter } from "../components/common/TextCenter";

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
    return <TextCenter>Error occured: {starredShowsError.message}</TextCenter>;
  }
  if (starredShowIds.length === 0) {
    return <TextCenter>No Shows Starred Yet</TextCenter>;
  }
  if (!!starredShows && starredShows.length > 0) {
    return <ShowGrid showData={starredShows} />;
  }

  return <TextCenter>Loading...</TextCenter>;
};

export default StarredPage;
