import React, { useState } from "react";
import { searchForShow, searchForPeople } from "../api/tvMaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/ShowGrid";
import ActorGrid from "../components/ActorGrid";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [filter, setFilter] = useState(null);
  const { data: apiData, error: apiErrorState } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchTypeState === "shows"
        ? searchForShow(filter.searchValue)
        : searchForPeople(filter.searchValue),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const handleFormSubmit = async (obj) => {
    setFilter(obj);
  };

  const renderApiData = () => {
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
      {renderApiData()}
    </div>
  );
};

export default Home;
