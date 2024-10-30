import React from 'react';
import Svg, { Path, G, ClipPath, Defs, Rect } from 'react-native-svg';

const FloorPlanIcon = ({
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
          id="Rectangle_159"
          width="42"
          height="42"
          transform="translate(38 701)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
      </ClipPath>
    </Defs>
    <G
      id="Mask_Group_19"
      transform="translate(-38 -701)"
      clipPath="url(#clip-path)"
    >
      <G id="g1041" transform="translate(45.177 1392.433)">
        <G id="g1043" transform="translate(0 -682.665)">
          <G id="Group_130">
            <G id="g1051" transform="translate(1.034 1.029)">
              <Path
                id="path1053"
                d="M-604.936-358.97v-8.4a4.652,4.652,0,0,0-2.9-4.309l-3.326-1.353a5.685,5.685,0,0,0-3.15-.329l-7.267,1.512-3.27-1.359a3.256,3.256,0,0,0-4.483,3.016v15.06a4.652,4.652,0,0,0,2.9,4.309l3.326,1.353a5.686,5.686,0,0,0,3.15.329l4.58-.956"
                transform="translate(629.332 373.447)"
                fill="none"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </G>
            <G id="g1055" transform="translate(15.248 15.248)">
              <Path
                id="path1057"
                d="M-232.589-232.589h0a2.739,2.739,0,0,1-3.874,0l-3.159-3.159a6.442,6.442,0,0,1-1.762-3.293l-.585-2.929,2.929.585a6.443,6.443,0,0,1,3.293,1.762l3.159,3.159A2.739,2.739,0,0,1-232.589-232.589Z"
                transform="translate(241.969 241.969)"
                fill="none"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </G>
            <G id="g1059" transform="translate(17.47 5.169)">
              <Path
                id="path1061"
                d="M0,0V6.513"
                fill="none"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </G>
            <G id="g1063" transform="translate(8.994 6.663)">
              <Path
                id="path1065"
                d="M0-362.705v-14.627"
                transform="translate(0 377.332)"
                fill="none"
                stroke={strokeColor}
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

export default FloorPlanIcon;
