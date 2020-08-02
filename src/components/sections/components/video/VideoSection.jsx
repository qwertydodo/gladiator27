import React from 'react';
import './VideoSection.scss';
import {SectionItem} from "../../SectionItem";
import {VideoSlider} from "./VideoSlider";

export const VideoSection = props => {
  return <SectionItem className="VideoSection">
    <h2 className="VideoSection__title">Поздравления от наших друзей</h2>

    <VideoSlider />
  </SectionItem>;
};