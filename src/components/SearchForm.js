import React from "react";
import { useState } from "react";
import { useSearchString } from "../custom/usePersistedSearch";
import CutomRadio from "./shows/CutomRadio";

const SearchForm = (props) => {
  const [searchValue, setSearchValue] = useSearchString();
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

        <CutomRadio
          label="shows"
          type="radio"
          value="shows"
          name="search-option"
          checked={searchTypeState === "shows"}
          onChange={handleRadioChange}
        />
        <CutomRadio
          label="Actors"
          type="radio"
          value="shows"
          name="search-option"
          checked={searchTypeState === "shows"}
          onChange={handleRadioChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
