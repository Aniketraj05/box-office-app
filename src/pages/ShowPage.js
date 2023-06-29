import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import { useShowInfo } from "../custom/useShowInfo";
import { searchShowIdData } from "../api/tvMaze";
import ShowIdData from "../components/shows/ShowIdData";
import ShowIdDetial from "../components/shows/ShowIdDetial";

const ShowPage = () => {
  const { showId } = useParams();

  // const { showIdData, showIdDataError } = useShowInfo(showId);

  const { data: showIdData, error: showIdDataError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => searchShowIdData(showId),
    refetchOnWindowFocus: false,
  });

  console.log(showIdData);

  if (showIdDataError) {
    return <div>Error occured: {showIdDataError.message}</div>;
  }
  if (showIdData) {
    return (
      <div>
        <ShowIdData
          name={showIdData.name}
          image={
            showIdData.image ? showIdData.image.original : "/not-found.png"
          }
          genres={showIdData.genres}
          summary={showIdData.summary}
          rating={showIdData.rating}
        />

        <div>
          <h2>Details</h2>
          <ShowIdDetial
            status={showIdData.status}
            premiered={showIdData.premiered}
            network={showIdData.network}
          />
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
};

export default ShowPage;
