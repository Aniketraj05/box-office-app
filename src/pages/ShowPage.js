import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import { useShowInfo } from "../custom/useShowInfo";
import { searchShowIdData } from "../api/tvMaze";

const ShowPage = () => {
  const { showId } = useParams();

  // const { showIdData, showIdDataError } = useShowInfo(showId);

  const { data: showIdData, error: showIdDataError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => searchShowIdData(showId),
  });

  if (showIdDataError) {
    return <div>Error occured: {showIdDataError.message}</div>;
  }
  if (showIdData) {
    return <div>Data loaded for {showIdData.name}</div>;
  }

  return <div>Loading</div>;
};

export default ShowPage;
