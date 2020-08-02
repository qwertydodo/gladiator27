import React from 'react';
import './VideoSection.scss';
import ReactPlayer from "react-player";

export const VideoPlayer = props => {
  return <ReactPlayer
    className='VideoPlayer'
    url={props.url}
    controls
    width='100%'
    height='100%'
  />;
};