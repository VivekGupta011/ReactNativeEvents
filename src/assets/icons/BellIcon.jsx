import React from 'react';
import Svg, { Circle, Path, G, ClipPath, Defs } from 'react-native-svg';

const BellIcon = ({
  width = 44,
  height = 44,
  fillColor = '#c8001b',
  strokeColor = '#fff',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24" // Adjusting the view box to match the original SVG dimensions
    overflow="hidden" // Ensures no overflow
  >
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="path543"
          d="M0-682.665H26.032v26.032H0Z"
          transform="translate(0 682.665)"
          fill="#fff"
        />
      </ClipPath>
    </Defs>
    <G id="Group_154" data-name="Group 154" transform="translate(-370 -20)">
      <Circle
        id="Ellipse_4"
        data-name="Ellipse 4"
        cx="12"
        cy="12"
        r="12"
        transform="translate(370 20)"
        fill={fillColor} // Use the passed fill color
      />
      <G id="g537" transform="translate(2 4)">
        <G id="g539">
          <G id="g541" clipPath="url(#clip-path)">
            <G id="g547" transform="translate(1.017 1.017)">
              <Path
                id="path549"
                d="M-413.331-403A1.672,1.672,0,0,1-415-401.331h-10A1.672,1.672,0,0,1-426.666-403a1.671,1.671,0,0,1,.893-1.475,1.564,1.564,0,0,0,.773-1.4V-411a5,5,0,0,1,5-5,5,5,0,0,1,5,5v5.124a1.564,1.564,0,0,0,.773,1.4A1.671,1.671,0,0,1-413.331-403Z"
                transform="translate(426.666 415.999)"
                fill="none"
                stroke={strokeColor} // Use the passed stroke color
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </G>
            <G id="g551" transform="translate(5 7)">
              <Path
                id="path553"
                d="M0,0H3.334"
                fill="none"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </G>
            <G id="g555" transform="translate(6 1)">
              <Path
                id="path557"
                d="M0,0V1.667"
                fill="none"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default BellIcon;
