import React, { useState } from "react";
import { searchForShow, searchForPeople } from "../api/tvMaze";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiErrorState, setApiErrorState] = useState(null);
  const [searchTypeState, setSearchTypeState] = useState("shows");
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (searchTypeState === "shows") {
        setApiErrorState(null);
        const result = await searchForShow(searchValue);
        setApiData(result);
      } else {
        setApiErrorState(null);
        const result = await searchForPeople(searchValue);
        setApiData(result);
      }
    } catch (error) {
      setApiErrorState(error);
    }
  };
  const handleRadioChange = (ev) => {
    setSearchTypeState(ev.target.value);
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
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <label>
          <input
            type="radio"
            value="shows"
            name="search-option"
            checked={searchTypeState === "shows"}
            onChange={handleRadioChange}
          />
          shows
        </label>
        <label>
          <input
            type="radio"
            value="actors"
            name="search-option"
            checked={searchTypeState === "actors"}
            onChange={handleRadioChange}
          />
          actors
        </label>

        <button type="submit">Search</button>
      </form>
      {renderApiDate()}
    </div>
  );
};

export default Home;
