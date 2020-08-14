import React, {useCallback, useEffect, useState} from 'react';
import './Loader.scss';
import * as classnames from "classnames";
import {loaderComponentClassName} from "./constants/selectors";
import {LOADER_IMAGE_URL} from "../../constants/imagesUrls";
import {loadSong} from "../../helpers/songHelper";
import LOADING_SONG_URL from "../../static/loading.mp3";
import {VideoItem} from "../video-item/VideoItem";

export const Loader = props => {
  const { onStart, onEnd } = props;

  const [loadingSong, setLoadingSong] = useState();

  useEffect(() => {
    if (!loadingSong) {
      loadSong(LOADING_SONG_URL).then((song) => {
        setLoadingSong(song);
      });
    }

    if (loadingSong) {
      loadingSong.on('end', () => {
        onEnd();
      });
    }
  }, [loadingSong, onEnd]);

  const onTransitionEnd = useCallback(() => {
    loadingSong.stop();
  }, [loadingSong]);

  const onHeadClick = useCallback(() => {
    if (!loadingSong) {
      return;
    }

    loadingSong.play();

    onStart();
  }, [loadingSong, onStart]);

  return <div
    className={classnames(loaderComponentClassName, {
    [`${loaderComponentClassName}--hide`]: props.isHide,
      [`${loaderComponentClassName}--loading`]: props.isLoading,
  })}
    onTransitionEnd={onTransitionEnd}
  >
    <div className={classnames(`${loaderComponentClassName}__text`, `${loaderComponentClassName}__text--centered`)}>
      Для полного погружения рекомендуется:
    </div>

{/*    <img
      src={LOADER_IMAGE_URL}
      className={`${loaderComponentClassName}__logo`}
      alt="head"
      onClick={onHeadClick}
    />*/}

    <VideoItem
      className={`${loaderComponentClassName}__logo`}
      src={LOADER_IMAGE_URL}
      isPlaying={props.isLoading}
      onClick={onHeadClick}
    />

    <div className={`${loaderComponentClassName}__text`}>
      1. Разрешить звук
      <br/>
      2. Кликнуть по лысине
      <br/>
      3. Налить бокал пива
      <br/>
      4. Уютно сесть в кресло
    </div>
  </div>;
};