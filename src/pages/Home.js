import React, { useRef, useState } from "react";
import Typist from "react-typist";
const Home = (props) => {
  return (
    <div className='main-bg scroll-section' ref={props.refProp}>
      <div className='hero'>
        <div className='heroInfo'>
          <Typist cursor={{ show: false }} avgTypingDelay={55}>
            <Typist.Delay ms={300} />
            <span className='typespan firstbodytag'>&lt;body&gt;</span>
          </Typist>
          <div className='description'>
            <Typist cursor={{ show: false }} avgTypingDelay={55}>
              <Typist.Delay ms={1000} />
              <span className='typespan'>&lt;h1&gt;</span>
              <h2 className='typespan-h2'>
                Hi ! <br />
                I'm Oliver, <br /> a MERN web developer.
              </h2>
              <span className='typespan'>&lt;/h1&gt;</span>
            </Typist>
          </div>
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={55}
            className='lastTypist'
          >
            <Typist.Delay ms={4100} />
            <span className='typespan lastspan'>&lt;/body&gt;</span>
          </Typist>
        </div>
      </div>
    </div>
  );
};

export default Home;
