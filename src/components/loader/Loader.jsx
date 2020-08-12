import React, {useCallback, useEffect, useState} from 'react';
import './Loader.scss';
import * as classnames from "classnames";
import {loaderComponentClassName} from "./constants/selectors";
import {LOADER_IMAGE_URL} from "../../constants/imagesUrls";
import {loadSong} from "../../helpers/songHelper";
import LOADING_SONG_URL from "../../static/loading.mp3";

export const Loader = props => {
  const [loadingSong, setLoadingSong] = useState();

  useEffect(() => {
    loadSong(LOADING_SONG_URL).then((song) => setLoadingSong(song));
  }, []);

  useEffect(() => {
    if (!loadingSong) {
      return;
    }

    loadingSong.play();
  }, [loadingSong]);

  const onTransitionEnd = useCallback(() => {
    loadingSong.stop();
  }, [loadingSong]);

  return <div className={classnames(loaderComponentClassName, {
    [`${loaderComponentClassName}--hide`]: props.isHide,
  })} onTransitionEnd={onTransitionEnd}>
    <div className={`${loaderComponentClassName}__text`}>Для полного погружения рекомендуется: </div>

    <img src={LOADER_IMAGE_URL} className={`${loaderComponentClassName}__logo`} alt="head"/>

    <div className={`${loaderComponentClassName}__text`}>
      1. Налить бокал пива
      <br/>
      2. Уютно сесть в кресло
      <br/>
      3. Включить звук
    </div>
  </div>;
};