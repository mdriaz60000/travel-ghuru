/* eslint-disable react/prop-types */

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Maps = () => {

    const defaultProps = {
        center: {
          lat: 21.4285,
          lng: 91.9702
        },
        zoom: 14
      };
    return (
         // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>

    );
};

export default Maps;