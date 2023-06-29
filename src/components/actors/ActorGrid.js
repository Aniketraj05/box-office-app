import React from "react";
import ActorCard from "./ActorCard";

const ActorGrid = ({ actorData }) => {
  console.log(actorData);
  const renderActors = () => {
    return actorData.map((item) => {
      return (
        <div key={item.person.id}>
          <ActorCard
            name={item.person.name}
            gender={item.person.gender}
            imgUrl={
              item.person.image ? item.person.image.medium : "/not-found.png"
            }
            birthDay={item.person.birthday}
            deathDay={item.person.deathday}
            countryObj={item.person.country}
          />
        </div>
      );
    });
  };
  return <>{renderActors()}</>;
};

export default ActorGrid;
