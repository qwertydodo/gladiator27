import React from 'react';
import './VideoSlider.scss';
import {VideoPlayer} from "./VideoPlayer";
import {VIDEO_URLS} from "./constants/videoUrls";
import AwesomeSlider from 'react-awesome-slider';

export const VideoSlider = props => {
    return <AwesomeSlider className="VideoSlider" infinite bullets={false}>
      <div>
        <VideoPlayer url={VIDEO_URLS.pavel} />
      </div>

      <div>
        <VideoPlayer url={VIDEO_URLS.igor} />
      </div>

      <div>
        <VideoPlayer url={VIDEO_URLS.alexander} />
      </div>

      <div>
        <VideoPlayer url={VIDEO_URLS.yaroslav} />
      </div>
    </AwesomeSlider>
};