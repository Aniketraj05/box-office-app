import { useParams } from "react-router-dom";
import { useShowInfo } from "../custom/useShowInfo";

const ShowPage = () => {
  const { showId } = useParams();

  const { showIdData, showIdDataError } = useShowInfo(showId);

  if (showIdDataError) {
    return <div>Error occured: {showIdDataError.message}</div>;
  }
  if (showIdData) {
    return <div>Data loaded for {showIdData.name}</div>;
  }

  return <div>Loading</div>;
};

export default ShowPage;
