import React from 'react';
import Svg, { Path, G, ClipPath, Defs, Rect, Line } from 'react-native-svg';

const AgendaIcon = ({
  width = 42,
  height = 42,
  strokeColor = '#c8001b',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 42 42"
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_158"
          width="42"
          height="42"
          transform="translate(38 607)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
      </ClipPath>
    </Defs>
    <G
      id="Mask_Group_20"
      transform="translate(-38 -607)"
      clipPath="url(#clip-path)"
    >
      <G id="Calendar" transform="translate(26 580.932)">
        <Path
          id="Path_221"
          d="M182.31,244.413H178.1a2.1,2.1,0,0,1-2.1-2.1V238.1a2.1,2.1,0,0,1,2.1-2.1h4.206a2.1,2.1,0,0,1,2.1,2.1v4.206A2.1,2.1,0,0,1,182.31,244.413Z"
          transform="translate(-147.797 -189.484)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_43"
          y2="2.068"
          transform="translate(32.409 46.534)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Path
          id="Path_222"
          d="M36.616,76h4a4.206,4.206,0,0,1,4.206,4.206V92.826a4.206,4.206,0,0,1-4.206,4.206H24.206A4.206,4.206,0,0,1,20,92.826V80.206A4.206,4.206,0,0,1,24.206,76h4"
          transform="translate(0 -37.897)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_44"
          y2="4.921"
          transform="translate(25.5 35.643)"
          fill="none"
          stroke="#c8001a"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_45"
          y2="4.921"
          transform="translate(32.409 35.643)"
          fill="none"
          stroke="#c8001a"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_46"
          y2="4.921"
          transform="translate(39.409 35.643)"
          fill="none"
          stroke="#c8001a"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
      </G>
    </G>
  </Svg>
);

export default AgendaIcon;
