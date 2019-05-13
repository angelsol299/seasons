import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null, errorMessage: "" };
  }

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
      return (
        <div>
          <div>latitude: {this.state.lat}</div>
          <div>Longitude: {this.state.long}</div>
        </div>
      );
    }

    return <p>Loading</p>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
