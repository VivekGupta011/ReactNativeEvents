import React from 'react';
import Svg, { Path, G, ClipPath, Defs, Rect, Line } from 'react-native-svg';

const Speakers = ({
  width = 42,
  height = 42,
  fillColor = '#c8001b',
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
          id="Rectangle_157"
          width="42"
          height="42"
          transform="translate(38 514)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
      </ClipPath>
    </Defs>
    <G
      id="Mask_Group_21"
      transform="translate(-38 -514)"
      clipPath="url(#clip-path)"
    >
      <G id="microphone" transform="translate(51 519)">
        <Path
          id="Path_29"
          d="M145.7,359.222a11.956,11.956,0,0,1-16.927,0"
          transform="translate(-128.778 -336.656)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Path
          id="Path_30"
          d="M162.652,40.755A6.652,6.652,0,0,1,156,34.1V26.652a6.652,6.652,0,0,1,13.3,0V34.1A6.652,6.652,0,0,1,162.652,40.755Z"
          transform="translate(-154.189 -20)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_14"
          y2="5.322"
          transform="translate(8.463 26.077)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_15"
          x2="13.305"
          transform="translate(1.811 31.399)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_16"
          x2="2.528"
          transform="translate(1.944 7.717)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_17"
          x2="2.661"
          transform="translate(1.811 13.039)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_18"
          x2="2.528"
          transform="translate(12.455 7.717)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <Line
          id="Line_19"
          x2="2.661"
          transform="translate(12.455 13.039)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
      </G>
    </G>
  </Svg>
);

export default Speakers;
