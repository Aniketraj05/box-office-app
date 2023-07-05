import React from "react";
import ShowCard from "./ShowCard";
import { star, unStar } from "./starred/actionTypes";
import { useStarredShowReducer } from "./starred/useStarredShowReducer";

const ShowGrid = ({ showData }) => {
  const [starredState, dispatchStarAction] = useStarredShowReducer();

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
          isStarred={starredState.includes(item.show.id)}
        />
      </div>
    ));
  };
  return <div>{renderShows()}</div>;
};

export default ShowGrid;
