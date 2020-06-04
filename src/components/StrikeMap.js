import React from 'react';
import { useStore } from 'store';
import styled, { css } from 'styled-components';
import { Map, CircleMarker, GeoJSON } from 'react-leaflet';
import geo from '../assets/continents.json';

const thanksMapContainer = css`
  width: 100%;
  height: 500px;
  background-color: rgba(0, 0, 0, 0);
`;
const homeMapContainer = css`
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0);
  margin-top: -23px;
`;
const MapContainer = styled(Map)`
  ${p => p.thanks && thanksMapContainer}
  ${p => p.home && homeMapContainer}
`;

const StyledGeo = styled(GeoJSON)`
  stroke-width: 0.5;
  stroke: rgba(0, 0, 0, 0);
  fill: #00625b;
  fill-opacity: 1;
`;

const StrikeMap = props => {
  const { state } = useStore();
  const setRadius = tweetsPercent => {
    const radius = props.thanks
      ? 60 * (tweetsPercent / 100)
      : 30 * (tweetsPercent / 100);
    const minRadius = props.thanks ? 4 : 2;

    if (radius < minRadius) {
      return minRadius;
    } else {
      return radius;
    }
  };

  return (
    <MapContainer
      thanks={props.thanks}
      home={props.home}
      maxZoom={props.home ? 0.5 : 1.6}
      zoom={props.home ? 0.5 : 1.6}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={false}
      touchZoom={false}
      doubleClickZoom={false}
      bounceAtZoomLimits={false}
      center={props.home ? [40.866667, 0] : [44.866667, 0]}
      dragging={false}
    >
      <StyledGeo smoothFactor={0.4} data={geo} maxBoundsViscosity={1.0} />
      {state.countries.list &&
        state.countries.list.map((country, index) => {
          return (
            country.count > 0 && (
              <CircleMarker
                key={index}
                center={[country.lat, country.long]}
                radius={setRadius(country.percent)}
                fillOpacity={0.6}
                stroke={false}
                color={'rgba(255, 225, 122)'}
              />
            )
          );
        })}
    </MapContainer>
  );
};

export default StrikeMap;
