import React from "react";

const ShowIdData = (props) => {
  const { name, rating, image, genres, summary } = props;

  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <h2>{rating.average || "N/A"}</h2>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Genres:
          {genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowIdData;
