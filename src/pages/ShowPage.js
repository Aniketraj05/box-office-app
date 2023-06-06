import React from "react";
import { useParams } from "react-router-dom";

const ShowPage = () => {
  const { showId } = useParams();
  return <div>Show page for show: {showId}</div>;
};

export default ShowPage;
