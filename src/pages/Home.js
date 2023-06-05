import React, { useState } from "react";
import { searchForShow, searchForPeople } from "../api/tvMaze";
import SearchForm from "../components/SearchForm";

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

    if (apiData)
      return apiData[0].show
        ? apiData.map((data) => {
            return <div key={data.show.id}>{data.show.name}</div>;
          })
        : apiData.map((data) => {
            return <div key={data.person.id}>{data.person.name}</div>;
          });

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
