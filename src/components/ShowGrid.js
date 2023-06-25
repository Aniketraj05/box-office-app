import React from "react";
import ShowCard from "./ShowCard";

const ShowGrid = ({ showData }) => {
  const renderShows = () => {
    return showData.map((item) => (
      <div key={item.show.id}>
        <ShowCard
          id={item.show.id}
          name={item.show.name}
          imgUrl={item.show.image ? item.show.image.medium : "/not-found.png"}
          summary={item.show.summary}
        />
      </div>
    ));
  };
  return <div>{renderShows()}</div>;
};

export default ShowGrid;
