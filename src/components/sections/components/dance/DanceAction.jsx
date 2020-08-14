import React from 'react';
import './DanceAction.scss';
import {SectionItem} from "../../SectionItem";
import {VideoItem} from "../../../video-item/VideoItem";
import {DANCE_IMAGES_URLS} from "../../../../constants/imagesUrls";
import * as classnames from "classnames";

export const DanceAction = props => {
  const { isPlaying } = props;

  return <SectionItem className={classnames('DanceAction', {
    'DanceAction--playing': isPlaying,
  })}>
      <div className="DanceSection__dances">
        <VideoItem src={DANCE_IMAGES_URLS.pavel} isPlaying={isPlaying}/>

        <VideoItem src={DANCE_IMAGES_URLS.igor} isPlaying={isPlaying}/>
      </div>

      <div className="DanceSection__dances">
        <VideoItem src={DANCE_IMAGES_URLS.alexander} isPlaying={isPlaying}/>

        <VideoItem src={DANCE_IMAGES_URLS.yaroslav} isPlaying={isPlaying}/>
      </div>
  </SectionItem>
};