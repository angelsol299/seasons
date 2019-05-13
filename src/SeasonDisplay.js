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
  const summerOrWinter =
    season === "Winter" ? "Buu, its chilly" : "Hooo, lets hit the beach";

  return (
    <div>
      <h1>{summerOrWinter}</h1>
    </div>
  );
};

export default SeasonDisplay;
