import React, {useCallback, useContext, useState} from 'react';
import './DanceSection.scss';
import {SectionItem} from "../../SectionItem";
import {AppContext} from "../../../../AppContext";
import {DanceVideoItem} from "./DanceVideoItem";
import {DANCE_IMAGES_URLS} from "../../../../constants/imagesUrls";

export const DanceSection = props => {
  const { danceSong } = useContext(AppContext);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPartyRun = useCallback(() => {
    danceSong.play();
    setIsPlaying(true);
  }, [danceSong]);

  return <SectionItem className="DanceSection">
    <div className="DanceSection__dances">
      <DanceVideoItem src={DANCE_IMAGES_URLS.pavel} isPlaying={isPlaying}/>

      <DanceVideoItem src={DANCE_IMAGES_URLS.igor} isPlaying={isPlaying}/>
    </div>

    <div className="DanceSection__run">
      <button type="button" onClick={onPartyRun}>Нажми Меня Нежно</button>
    </div>

    <div className="DanceSection__dances">
      <DanceVideoItem src={DANCE_IMAGES_URLS.alexander} isPlaying={isPlaying}/>

      <DanceVideoItem src={DANCE_IMAGES_URLS.yaroslav} isPlaying={isPlaying}/>
    </div>
  </SectionItem>
};