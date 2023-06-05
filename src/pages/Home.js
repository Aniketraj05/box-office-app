import React, { useState } from "react";
import { searchForShow, searchForPeople } from "../api/tvMaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/ShowGrid";
import ActorGrid from "../components/ActorGrid";

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiErrorState, setApiErrorState] = useState(null);

  const handleFormSubmit = async (obj) => {
    const { searchValue, searchTypeState } = obj;

    try {
      const result =
        searchTypeState === "shows"
          ? await searchForShow(searchValue)
          : await searchForPeople(searchValue);
      setApiData(result);
    } catch (error) {
      setApiErrorState(error);
    }
  };

  const renderApiDate = () => {
    if (apiErrorState) {
      return <div>Error occured!{apiErrorState.message}</div>;
    }

    if (apiData?.length === 0) return <div>No results</div>;

    if (apiData)
      return apiData[0].show ? (
        <ShowGrid showData={apiData} />
      ) : (
        <ActorGrid actorData={apiData} />
      );

    return null;
  };
  return (
    <div>
      <p>Home page</p>
      <SearchForm handleFormSubmit={handleFormSubmit} />
      {renderApiDate()}
    </div>
  );
};

export default Home;
