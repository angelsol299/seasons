import React from "react";

const Spinner = props => {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="massive ui indeterminate text loader">{props.message}</div>
      </div>
      <p />
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading"
};

export default Spinner;
