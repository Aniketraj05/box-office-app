import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import { useShowInfo } from "../custom/useShowInfo";
import { searchShowIdData } from "../api/tvMaze";
import ShowIdData from "../components/shows/ShowIdData";
import ShowIdDetial from "../components/shows/ShowIdDetial";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";
import { Link } from "react-router-dom";
const ShowPage = () => {
  const { showId } = useParams();

  // const { showIdData, showIdDataError } = useShowInfo(showId);

  const { data: showIdData, error: showIdDataError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => searchShowIdData(showId),
    refetchOnWindowFocus: false,
  });

  // console.log(showIdData);

  if (showIdDataError) {
    return <div>Error occured: {showIdDataError.message}</div>;
  }
  if (showIdData) {
    return (
      <div>
        <Link to="/">Home</Link>
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
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showIdData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showIdData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
};

export default ShowPage;
