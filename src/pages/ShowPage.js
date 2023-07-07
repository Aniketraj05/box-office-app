import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchShowIdData } from "../api/tvMaze";
import ShowIdData from "../components/shows/ShowIdData";
import ShowIdDetial from "../components/shows/ShowIdDetial";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { TextCenter } from "../components/common/TextCenter";
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
    return <TextCenter>Error occured: {showIdDataError.message}</TextCenter>;
  }
  if (showIdData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go Back To Home</Link>
        </BackHomeWrapper>
        <ShowIdData
          name={showIdData.name}
          image={
            showIdData.image ? showIdData.image.original : "/not-found.png"
          }
          genres={showIdData.genres}
          summary={showIdData.summary}
          rating={showIdData.rating}
        />

        <InfoBlock>
          <h2>Details</h2>
          <ShowIdDetial
            status={showIdData.status}
            premiered={showIdData.premiered}
            network={showIdData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showIdData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showIdData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Loading</TextCenter>;
};

export default ShowPage;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
