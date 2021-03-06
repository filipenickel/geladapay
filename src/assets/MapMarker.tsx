import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapMarker: React.FC = () => (
  <Svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <Path
      d="M22 40.3334C32.1252 40.3334 40.3333 32.1252 40.3333 22C40.3333 11.8748 32.1252 3.66669 22 3.66669C11.8748 3.66669 3.66667 11.8748 3.66667 22C3.66667 32.1252 11.8748 40.3334 22 40.3334Z"
      stroke="#FF6A13"
      stroke-opacity="0.3"
      stroke-width="6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M22.165 27.33C25.0176 27.33 27.33 25.0176 27.33 22.165C27.33 19.3124 25.0176 17 22.165 17C19.3124 17 17 19.3124 17 22.165C17 25.0176 19.3124 27.33 22.165 27.33Z"
      fill="#FF6A13"
    />
  </Svg>
);

export default MapMarker;
