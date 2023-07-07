import React from "react";
import { SearchCard, SearchImgWrapper } from "../common/SearchCard";

const ActorCard = (props) => {
  const { name, gender, birthDay, deathDay, imgUrl, countryObj } = props;
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={imgUrl} alt={name} />
      </SearchImgWrapper>
      <h2>
        {name} {!!gender && `(${gender})`}
      </h2>
      <p>{countryObj ? `Comes from ${countryObj.name}` : "No Country Known"}</p>
      <p>{birthDay ? `Born on: ${birthDay}` : "No birthday info"}</p>
      <p>{deathDay ? `Died on : ${deathDay}` : "Is Alive"}</p>
    </SearchCard>
  );
};

export default ActorCard;
