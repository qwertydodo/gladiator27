import React, {useCallback, useContext, useEffect, useState} from 'react';
import './DanceSection.scss';
import {SectionItem} from "../../SectionItem";
import {AppContext} from "../../../../AppContext";
import * as classnames from "classnames";
import {DanceVideoItem} from "./DanceVideoItem";
import {DANCE_IMAGES_URLS, HEAD_IMAGE_URL} from "../../../../constants/imagesUrls";
import {useWindowSize} from "react-use";
import ReactConfetti from "react-confetti";

export const DanceSection = props => {
  const { danceSong } = useContext(AppContext);
  const [isPlaying, setIsPlaying] = useState(false);

  const { width, height } = useWindowSize();

  const onPartyRun = useCallback(() => {
    danceSong.play();
    setIsPlaying(true);
  }, [danceSong]);

  useEffect(() => {
    if (!danceSong) {
      return;
    }

    danceSong.on('end', () => {
      setIsPlaying(false);
    });
  }, [danceSong]);

  useEffect(() => {
    if (!props.isActive && danceSong) {
      danceSong.stop();
      setIsPlaying(false);
    }
  }, [danceSong, props.isActive]);

  return <SectionItem className={classnames('DanceSection')}>
    <div className={classnames('DanceSection__content', {
      'DanceSection__content--playing': isPlaying,
    })}>
      {isPlaying && <ReactConfetti
        width={width}
        height={height}
        numberOfPieces={500}
      />}

      <div className="DanceSection__top">
        <div className="DanceSection__rowAdditional">
          <DanceVideoItem className="DanceSection__ext1" src={DANCE_IMAGES_URLS.ext1} isPlaying={isPlaying}/>

          <DanceVideoItem className="DanceSection__ext2" src={DANCE_IMAGES_URLS.ext2} isPlaying={isPlaying}/>

          <DanceVideoItem className="DanceSection__ext3" src={DANCE_IMAGES_URLS.ext3} isPlaying={isPlaying}/>
        </div>

        <div className="DanceSection__rowFriends">
          <DanceVideoItem src={DANCE_IMAGES_URLS.pavel} isPlaying={isPlaying}/>

          <DanceVideoItem src={DANCE_IMAGES_URLS.igor} isPlaying={isPlaying}/>
        </div>
      </div>

      <div className="DanceSection__rowMain">
       <div className="DanceSection__text">С Днем</div>

       <img className="DanceSection__head" src={HEAD_IMAGE_URL} alt="Head"/>

       <div className="DanceSection__text">Рождения!</div>
      </div>

      <div className="DanceSection__bottom">
        <div className="DanceSection__rowFriends">
          <DanceVideoItem src={DANCE_IMAGES_URLS.alexander} isPlaying={isPlaying}/>

          <DanceVideoItem src={DANCE_IMAGES_URLS.yaroslav} isPlaying={isPlaying}/>
        </div>

        <div className="DanceSection__rowAdditional">
          <DanceVideoItem className="DanceSection__ext4" src={DANCE_IMAGES_URLS.ext4} isPlaying={isPlaying}/>

          <DanceVideoItem className="DanceSection__ext5" src={DANCE_IMAGES_URLS.ext5} isPlaying={isPlaying}/>

          <DanceVideoItem className="DanceSection__ext6" src={DANCE_IMAGES_URLS.ext6} isPlaying={isPlaying}/>
        </div>
      </div>

      <button className="DanceSection__run" type="button" onClick={onPartyRun}>Нажми Меня Нежно</button>
    </div>
  </SectionItem>
};