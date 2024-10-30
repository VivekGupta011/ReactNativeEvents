import React from 'react';
import Svg, { Circle, Path, G } from 'react-native-svg';

const BookStand = ({
  width = 44,
  height = 44,
  fillColor = '#c8001b',
  strokeColor = '#fff',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 44 44" // Updated viewBox to match the original SVG
    overflow="hidden"
  >
    <G id="Group_155" data-name="Group 155">
      <Circle
        id="Ellipse_5"
        data-name="Ellipse 5"
        cx="22"
        cy="22"
        r="22"
        fill={fillColor}
      />
      <G id="Food_Stand_1_" transform="translate(13.289 12.904)">
        <G id="Food_Stand" transform="translate(0 6.112)">
          <Path
            id="Path_183"
            data-name="Path 183"
            d="M36.861,332h-15.3A1.566,1.566,0,0,0,20,333.561v3.122a1.566,1.566,0,0,0,1.561,1.561h15.3a1.566,1.566,0,0,0,1.561-1.561v-3.122A1.566,1.566,0,0,0,36.861,332Z"
            transform="translate(-20 -325.935)"
            fill="none"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <Path
            id="Line_28"
            data-name="Line 28"
            d="M0,2.943"
            transform="translate(1.561)"
            fill="none"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <Path
            id="Line_29"
            data-name="Line 29"
            d="M0,2.943"
            transform="translate(16.861)"
            fill="none"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <Path
            id="Line_30"
            data-name="Line 30"
            d="M3.385,0"
            transform="translate(7.616 9.023)"
            fill="none"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </G>
        <Path
          id="Path_184"
          data-name="Path 184"
          d="M24.684,23.9a2.342,2.342,0,1,1-4.216-1.4l1.405-1.874A1.559,1.559,0,0,1,23.122,20H35.3a1.559,1.559,0,0,1,1.25.625L37.955,22.5a2.342,2.342,0,1,1-4.216,1.4"
          transform="translate(-20 -20)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Path
          id="Path_185"
          data-name="Path 185"
          d="M144.527,120a2.339,2.339,0,0,1-2.342,2.342A2.211,2.211,0,0,1,140,120"
          transform="translate(-135.316 -116.097)"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Path
          id="Path_186"
          data-name="Path 186"
          d="M260.527,120a2.211,2.211,0,0,1-2.186,2.342A2.339,2.339,0,0,1,256,120"
          transform="translate(-246.789 -116.097)"
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

export default BookStand;
