import React, {useCallback, useContext, useState} from 'react';
import './DanceSection.scss';
import {SectionItem} from "../../SectionItem";
import {AppContext} from "../../../../AppContext";
import pavelDance from '../../../../static/dance/pavel.gif';
import igorDance from '../../../../static/dance/igor.gif';
import yaroslavDance from '../../../../static/dance/yaroslav.gif';
import alexanderDance from '../../../../static/dance/alexander.gif';
import {DanceVideoItem} from "./DanceVideoItem";

export const DanceSection = props => {
  const { danceSong } = useContext(AppContext);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPartyRun = useCallback(() => {
    danceSong.play();
    setIsPlaying(true);
  }, [danceSong]);

  return <SectionItem className="DanceSection">
    <div className="DanceSection__dances">
      <DanceVideoItem src={pavelDance} isPlaying={isPlaying}/>

      <DanceVideoItem src={igorDance} isPlaying={isPlaying}/>
    </div>

    <div className="DanceSection__run">
      <button type="button" onClick={onPartyRun}>Click me</button>
    </div>

    <div className="DanceSection__dances">
      <DanceVideoItem src={alexanderDance} isPlaying={isPlaying}/>

      <DanceVideoItem src={yaroslavDance} isPlaying={isPlaying}/>
    </div>
  </SectionItem>
};