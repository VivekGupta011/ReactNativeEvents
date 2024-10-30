import React from 'react';
import Svg, { Circle, Path, G, ClipPath, Defs } from 'react-native-svg';

const Home = ({
  width = 44,
  height = 44,
  fillColor = '#c8001b',
  strokeColor = '#fff',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 64 64"
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
    <G id="Group_154" data-name="Group 154" transform="translate(-175 -808)">
      <Circle
        id="Ellipse_4"
        data-name="Ellipse 4"
        cx="32"
        cy="32"
        r="32"
        transform="translate(175 808)"
        fill="#0d1335"
      />
      <G id="g537" transform="translate(193.984 825.996)">
        <G id="g539" transform="translate(0 0)">
          <G id="g541" clipPath="url(#clip-path)">
            <G id="g547" transform="translate(1.017 1.017)">
              <Path
                id="path549"
                d="M-555.316-159.028a5.089,5.089,0,0,1,1.983,4.054v8.556a5.084,5.084,0,0,1-5.084,5.084h-13.83a5.084,5.084,0,0,1-5.084-5.084v-8.556a5.084,5.084,0,0,1,2-4.043l6.915-5.274a5.084,5.084,0,0,1,6.167,0l3.831,2.92v-3.351"
                transform="translate(577.332 165.333)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </G>
            <G id="g551" transform="translate(9.711 11.745)">
              <Path
                id="path553"
                d="M-32.062,0a1.271,1.271,0,0,0-1.271,1.271,1.271,1.271,0,0,0,1.271,1.271,1.271,1.271,0,0,0,1.271-1.271A1.271,1.271,0,0,0-32.062,0"
                transform="translate(33.333)"
                fill="#fff"
              />
            </G>
            <G id="g555" transform="translate(13.779 11.745)">
              <Path
                id="path557"
                d="M-32.062,0a1.271,1.271,0,0,0-1.271,1.271,1.271,1.271,0,0,0,1.271,1.271,1.271,1.271,0,0,0,1.271-1.271A1.271,1.271,0,0,0-32.062,0"
                transform="translate(33.333)"
                fill="#fff"
              />
            </G>
            <G id="g559" transform="translate(9.711 15.813)">
              <Path
                id="path561"
                d="M-32.062,0a1.271,1.271,0,0,0-1.271,1.271,1.271,1.271,0,0,0,1.271,1.271,1.271,1.271,0,0,0,1.271-1.271A1.271,1.271,0,0,0-32.062,0"
                transform="translate(33.333)"
                fill="#fff"
              />
            </G>
            <G id="g563" transform="translate(13.779 15.813)">
              <Path
                id="path565"
                d="M-32.062,0a1.271,1.271,0,0,0-1.271,1.271,1.271,1.271,0,0,0,1.271,1.271,1.271,1.271,0,0,0,1.271-1.271A1.271,1.271,0,0,0-32.062,0"
                transform="translate(33.333)"
                fill="#fff"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default Home;
