import React from 'react';
import './VideoSection.scss';
import {SectionItem} from "../../SectionItem";
import {VideoSlider} from "./VideoSlider";

export const VideoSection = props => {
  return <SectionItem className="VideoSection" title="Поздравления от наших друзей">
    <VideoSlider />
  </SectionItem>;
};