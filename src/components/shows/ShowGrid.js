import React from "react";
import ShowCard from "./ShowCard";
import { star, unStar } from "./starred/actionTypes";
import { useStarredShowReducer } from "./starred/useStarredShowReducer";
import { FlexGrid } from "../common/FlexGrid";
import notFoundImg from "../common/not-found.png";

const ShowGrid = (props) => {
  const { showData } = props;
  const [starredState, dispatchStarAction] = useStarredShowReducer();

  const onStarClick = (showId) => {
    if (starredState.includes(showId)) {
      dispatchStarAction({ type: unStar, showId: showId });
    } else {
      dispatchStarAction({ type: star, showId: showId });
    }
  };

  const renderShows = () => {
    return showData.map((item) => (
      <div key={item.show.id}>
        <ShowCard
          id={item.show.id}
          name={item.show.name}
          imgUrl={item.show.image ? item.show.image.medium : notFoundImg}
          summary={item.show.summary}
          onStarClick={onStarClick}
          isStarred={starredState.includes(item.show.id)}
        />
      </div>
    ));
  };
  return <FlexGrid>{renderShows()}</FlexGrid>;
};

export default ShowGrid;
