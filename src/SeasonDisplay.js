import React from "react";

const getSeason = (lat, long, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, props.long, new Date().getMonth());
  return <div>{season}</div>;
};

export default SeasonDisplay;
