import React from 'react';
import Svg, {Rect, Path, G, ClipPath, Defs} from 'react-native-svg';

const Exhibitors = ({
  width = 42,
  height = 42,
  fillColor = '#c8001b',
  strokeColor = '#707070',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 42 42"
    overflow="hidden" // Ensures no overflow
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_156"
          width="42"
          height="42"
          transform="translate(38 420)"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
        />
      </ClipPath>
    </Defs>
    <G
      id="Mask_Group_22"
      data-name="Mask Group 22"
      transform="translate(-38 -420)"
      clipPath="url(#clip-path)">
      <G id="g1803" transform="translate(45.222 427.222)">
        <G id="g1805" transform="translate(0.778 0.778)">
          <G id="Group_16" data-name="Group 16">
            <G id="g1813">
              <Path
                id="path1815"
                d="M-603.167-227.662a2.853,2.853,0,0,0-2.45-2.488l-3.864-.556a2.881,2.881,0,0,1-2.171-1.563l-1.728-3.47a2.9,2.9,0,0,0-5.171,0l-1.728,3.47a2.881,2.881,0,0,1-2.171,1.563l-3.864.556a2.851,2.851,0,0,0-1.6,4.874l2.8,2.7a2.841,2.841,0,0,1,.829,2.529l-.66,3.814a2.878,2.878,0,0,0,4.183,3.012l3.456-1.8a2.94,2.94,0,0,1,1.449-.364,2.978,2.978,0,0,1,.55.111"
                transform="translate(628.786 237.332)"
                fill="none"
                stroke={fillColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </G>
            <G id="g1817" transform="translate(18.579 12.44)">
              <Path
                id="path1819"
                d="M0-66.508a2.825,2.825,0,0,1,2.825-2.825A2.825,2.825,0,0,1,5.65-66.508a2.825,2.825,0,0,1-2.825,2.825A2.825,2.825,0,0,1,0-66.508Z"
                transform="translate(0 69.333)"
                fill="none"
                stroke={fillColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </G>
            <G id="g1821" transform="translate(16.949 21.681)">
              <Path
                id="path1823"
                d="M0-93.225H0a3.976,3.976,0,0,1,3.978-3.96h.737a3.976,3.976,0,0,1,3.978,3.96"
                transform="translate(0 97.185)"
                fill="none"
                stroke={fillColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default Exhibitors;
