import React, {useCallback, useState} from 'react';
import './VideoSlider.scss';
import {VideoPlayer} from "./VideoPlayer";
import {VIDEO_URLS} from "./constants/videoUrls";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplayAwesomeSliderSlider = withAutoplay(AwesomeSlider);

const SLIDES_URLS = Object.values(VIDEO_URLS);

export const VideoSlider = props => {
    const [play, setIsPlay] = useState(true);

    const onPlay = useCallback(() => setIsPlay(false), []);

    return <AutoplayAwesomeSliderSlider
      className="VideoSlider"
      infinite
      bullets={false}
      cancelOnInteraction={false}
      interval={5000}
      play={play}
    >
      {SLIDES_URLS.map(url =>
        <div className="VideoSlider__slide" key={url}>
          <VideoPlayer url={url} onPlay={onPlay}/>
        </div>
      )}
    </AutoplayAwesomeSliderSlider>
};