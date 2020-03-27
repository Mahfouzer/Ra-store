import React, { Component, useState } from "react";
import GoogleMapReact from "google-map-react";
import pin from "../assets/images/pin.png";

function Store({ imgSrc }) {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <div className="map-icon" onClick={() => setToggled(!toggled)}>
        <img src={imgSrc} alt="" />
      </div>
      {toggled && (
        <div className="about-store-on-map">
          <img src={pin} alt="" />
          <p>Tahrir Branch</p>
          <button> Let's shopping</button>
        </div>
      )}
    </>
  );
}

export default class StoreMap extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 4
  };

  render() {
    return (
      <div className="maps" style={{ width: "100%", height: "80vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCMo5_1hIHWRSQplmVftzOB3bi3d6SKwxM" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Store lat={59.955413} lng={30.337844} imgSrc={this.props.imgSrc} />

          <Store lat={54.955413} lng={35.337844} imgSrc={this.props.imgSrc} />
          <Store lat={51.955413} lng={38.337844} imgSrc={this.props.imgSrc} />
          <Store lat={59.955413} lng={30.347844} imgSrc={this.props.imgSrc} />
        </GoogleMapReact>
      </div>
    );
  }
}
