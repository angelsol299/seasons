import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  Summer: {
    text: "lets hit the beach",
    iconName: "sun"
  },
  Winter: {
    text: "Boo, it is cold",
    iconName: "snowflake"
  }
};

const getSeason = (lat, long, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, props.long, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
