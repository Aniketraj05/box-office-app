import React from "react";
import ActorCard from "./ActorCard";
import { FlexGrid } from "../common/FlexGrid";
import notFoundImg from "../common/not-found.png";

const ActorGrid = ({ actorData }) => {
  console.log(actorData);
  const renderActors = () => {
    return actorData.map((item) => {
      return (
        <div key={item.person.id}>
          <ActorCard
            name={item.person.name}
            gender={item.person.gender}
            imgUrl={item.person.image ? item.person.image.medium : notFoundImg}
            birthDay={item.person.birthday}
            deathDay={item.person.deathday}
            countryObj={item.person.country}
          />
        </div>
      );
    });
  };
  return <FlexGrid>{renderActors()}</FlexGrid>;
};

export default ActorGrid;
