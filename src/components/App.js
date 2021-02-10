import React from "react";
import FlatList from "./FlatList";
import GoogleMapReact from "google-map-react";
import flats from "../data/flats";
import "./App.scss";
import Marker from "./Marker";

class App extends React.Component {
  state = {
    lat: 48.884211,
    lng: 2.34689,
    flats,
  };

  getLatAndLong = (lat, lng) => {
    this.setState({ lat, lng });
  };

  center() {
    return {
      lat: this.state.lat,
      lng: this.state.lng,
    };
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div className="ui grid" style={{ marginBottom: "0" }}>
          <div className="row">
            <div className="nine wide column">
              <FlatList
                onClick={(lat, lng) => this.getLatAndLong(lat, lng)}
                flats={this.state.flats}
              />
            </div>
            <div className="seven wide column">
              <div className="map-container">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: process.env.REACT_APP_API_KEY,
                  }}
                  center={this.center()}
                  defaultZoom={15}
                >
                  <Marker
                    lat={this.state.lat}
                    lng={this.state.lng}
                    name="My Marker"
                    color="blue"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
