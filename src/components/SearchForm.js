import React from "react";
import { useState } from "react";

const SearchForm = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchTypeState, setSearchTypeState] = useState("shows");

  const { handleFormSubmit } = props;

  const handleRadioChange = (ev) => {
    setSearchTypeState(ev.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    handleFormSubmit({ searchValue, searchTypeState });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
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
    </div>
  );
};

export default SearchForm;
