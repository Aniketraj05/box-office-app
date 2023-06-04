import React, { useState } from "react";
import { searchForShow } from "../api/tvMaze";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiErrorState, setApiErrorState] = useState(null);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setApiErrorState(null);
      const result = await searchForShow(searchValue);
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
      return apiData.map((item) => {
        return <div key={item.show.id}>{item.show.name}</div>;
      });

    return null;
  };
  return (
    <div>
      <p>Home page</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {renderApiDate()}
    </div>
  );
};

export default Home;
