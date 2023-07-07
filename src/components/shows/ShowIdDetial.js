import React from "react";
import { styled } from "styled-components";

const ShowIdDetial = (props) => {
  const { network, premiered, status } = props;

  return (
    <DetailsWrapper>
      <p>Status : {status}</p>
      <p>
        premiered : {premiered} {!!network && `on ${network.name}`}
      </p>
    </DetailsWrapper>
  );
};

export default ShowIdDetial;
const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
