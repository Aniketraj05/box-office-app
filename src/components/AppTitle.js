import React from "react";

const AppTitle = (props) => {
  const { title = "Box-Office", subtitle = "Are you looking for movie?" } =
    props;
  return (
    <div>
      {title}
      {subtitle}
    </div>
  );
};

export default AppTitle;
