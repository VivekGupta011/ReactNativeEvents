import React from 'react';
import Svg, { Circle, Path, G } from 'react-native-svg';

const GetTicket = ({
  width = 44,
  height = 44,
  fillColor = '#c8001b',
  strokeColor = '#fff',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 44 44"
    overflow="hidden"
  >
    <G id="Group_156" data-name="Group 156">
      <Circle
        id="Ellipse_6"
        data-name="Ellipse 6"
        cx="22"
        cy="22"
        r="22"
        fill={fillColor}
      />
      <G id="ticket" transform="translate(11.115 15.241)">
        <Path
          id="Path_187"
          data-name="Path 187"
          d="M21.845,96A1.845,1.845,0,0,0,20,97.845c0,3.636,1.845,2.856,1.845,5.535,0,2.656-1.845,1.9-1.845,5.535a1.845,1.845,0,0,0,1.845,1.845h18.08a1.845,1.845,0,0,0,1.845-1.845c0-3.636-1.845-2.856-1.845-5.535,0-2.656,1.845-1.9,1.845-5.535A1.845,1.845,0,0,0,39.925,96Z"
          transform="translate(-20 -96)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Path
          id="Path_188"
          data-name="Path 188"
          d="M223.424,176l1.084,2.2,2.425.352-1.755,1.71.414,2.415-2.169-1.14-2.169,1.14.414-2.415-1.755-1.71,2.425-.352Z"
          transform="translate(-210.695 -172.31)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Path
          id="Line_31"
          data-name="Line 31"
          d="M0,1.644"
          transform="translate(5.535 0.201)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Path
          id="Line_32"
          data-name="Line 32"
          d="M0,3.489"
          transform="translate(5.535 5.735)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Path
          id="Line_33"
          data-name="Line 33"
          d="M0,1.644"
          transform="translate(5.535 13.115)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </G>
    </G>
  </Svg>
);

export default GetTicket;
