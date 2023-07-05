import React from "react";
import ShowCard from "./ShowCard";
import { starredReducer } from "./starred/starredReducer";
import { star, unStar } from "./starred/actionTypes";
import { usePersistedReducer } from "../../custom/usePersistedReducer";
export const initialState = [];

const ShowGrid = ({ showData }) => {
  const [starredState, dispatchStarAction] = usePersistedReducer(
    starredReducer,
    initialState,
    "starredShows"
  );

  const onStarClick = (showId) => {
    if (starredState.includes(showId)) {
      dispatchStarAction({ type: unStar, showId: showId });
    } else {
      dispatchStarAction({ type: star, showId: showId });
    }
  };

  console.log(starredState);
  console.log(localStorage);
  const renderShows = () => {
    return showData.map((item) => (
      <div key={item.show.id}>
        <ShowCard
          id={item.show.id}
          name={item.show.name}
          imgUrl={item.show.image ? item.show.image.medium : "/not-found.png"}
          summary={item.show.summary}
          onStarClick={onStarClick}
        />
      </div>
    ));
  };
  return <div>{renderShows()}</div>;
};

export default ShowGrid;
