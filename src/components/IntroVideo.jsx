import React from 'react';
import "../styles/Intro.scss";
import video from "../assets/MBA Chai Wala.mp4";
const IntroVideo = () => {
  return (
    <div className='intro'>
        <video src={video} muted autoPlay loop controlsList='nodownload' ></video>
        <div className="div"></div>
    </div>
  );
}

export default IntroVideo;