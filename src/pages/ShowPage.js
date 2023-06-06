import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchShowIdData } from "../api/tvMaze";

const ShowPage = () => {
  const { showId } = useParams();
  const [showIdData, setShowIdData] = useState(null);
  const [showIdDataError, setShowIdDataError] = useState(null);
  useEffect(() => {
    try {
      async function fetchData() {
        const data = await searchShowIdData(showId);
        setShowIdData(data);
      }
      fetchData();
    } catch (error) {
      setShowIdDataError(error);
    }
  }, [showId]);

  if (showIdDataError) {
    return <div>Error occured: {showIdDataError.message}</div>;
  }
  if (showIdData) {
    return <div>Data loaded for {showIdData.name}</div>;
  }

  return <div>Loading</div>;
};

export default ShowPage;
