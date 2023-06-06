import { useState, useEffect } from "react";
import { searchShowIdData } from "../api/tvMaze";

export const useShowInfo = (showId) => {
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

  return { showIdData, showIdDataError };
};
