import React from "react";

const ShowIdDetial = (props) => {
  const { network, premiered, status } = props;

  return (
    <div>
      <p>Status : {status}</p>
      <p>
        premiered : {premiered} {!!network && `on ${network.name}`}
      </p>
    </div>
  );
};

export default ShowIdDetial;
