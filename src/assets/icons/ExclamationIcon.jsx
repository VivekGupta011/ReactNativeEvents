import React from 'react';
import Svg, {Path, G, ClipPath, Defs, Rect} from 'react-native-svg';

const ExclamationIcon = ({width = 24, height = 24, strokeColor = '#fff'}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_83"
          width="24"
          height="24"
          transform="translate(43 79)"
          fill="none"
          stroke="#707070"
          strokeWidth="1"
        />
      </ClipPath>
    </Defs>
    <G
      id="Mask_Group_17"
      transform="translate(-43 -79)"
      clipPath="url(#clip-path)">
      <Path
        id="information"
        d="M20,29.017a9.017,9.017,0,1,1,9.017,9.017A9.017,9.017,0,0,1,20,29.017Zm9.017,4.776V28.75a1.528,1.528,0,0,0-1.528-1.528h-.382m0,6.61h3.821m-1.91-9.438h0"
        transform="translate(25.983 61.983)"
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </G>
  </Svg>
);

export default ExclamationIcon;
