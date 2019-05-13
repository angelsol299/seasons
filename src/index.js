import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, long: null, errMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && this.state.long) {
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }

    return <p>Loading</p>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
