import React from "react";
import { Link } from "react-router-dom";

const ShowCard = (props) => {
  const { name, imgUrl, id, summary, onStarClick } = props;
  const summarStripped = summary
    ? summary.replace(/<.+?>/g, "").split(" ").slice(0, 10).join(" ")
    : "No information available";

  return (
    <div>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <p>{summarStripped}</p>

      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button" onClick={() => onStarClick(id)}>
          Star Mark
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
