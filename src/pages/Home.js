import React, { useState } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchValue}`
    );

    const body = await response.json();
    console.log(body);
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
    </div>
  );
};

export default Home;
