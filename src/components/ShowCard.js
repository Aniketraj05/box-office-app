import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ name, imgUrl, id, summary }) => {
  const summarStripped = summary
    ? summary.replace(/<.+?>/g, "").split(" ").slice(0, 10).join(" ")
    : "No information available";
  return (
    <div>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <p>{summarStripped}</p>

      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star Mark</button>
      </div>
    </div>
  );
};

export default ShowCard;
