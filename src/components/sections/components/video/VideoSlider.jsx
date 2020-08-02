import React from 'react';
import './VideoSlider.scss';
import {VideoPlayer} from "./VideoPlayer";
import {VIDEO_URLS} from "./constants/videoUrls";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export const VideoSlider = props => {
    return <Carousel className="VideoSlider" plugins={['arrows', 'infinite']} >
      <VideoPlayer url={VIDEO_URLS.pavel} />

      <VideoPlayer url={VIDEO_URLS.igor} />

      <VideoPlayer url={VIDEO_URLS.alexander} />

      <VideoPlayer url={VIDEO_URLS.yaroslav} />
    </Carousel>
};