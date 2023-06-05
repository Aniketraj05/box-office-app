import React from "react";

const ActorCard = (props) => {
  const { name, gender, birthDay, deathDay, imgUrl, countryObj } = props;
  return (
    <div>
      <img src={imgUrl} alt={name} />
      <h2>
        {name} {!!gender && `(${gender})`}
      </h2>
      <p>{countryObj ? `Comes from ${countryObj.name}` : "No Country Known"}</p>
      <p>{birthDay ? `Born on: ${birthDay}` : "No birthday info"}</p>
      <p>{deathDay ? `Died on : ${deathDay}` : "Is Alive"}</p>
    </div>
  );
};

export default ActorCard;
