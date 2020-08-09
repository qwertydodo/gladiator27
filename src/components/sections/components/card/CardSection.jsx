import React, {useContext, useEffect} from 'react';
import './CardSection.scss';
import {SectionItem} from "../../SectionItem";
import {AppContext} from "../../../../AppContext";

export const CardSection = props => {
  const { cardSong } = useContext(AppContext);

  useEffect(() => {
    if (!cardSong) {
      return;
    }

    if (props.isActive) {
      cardSong.play();
    } else {
      cardSong.stop();
    }
  }, [cardSong, props.isActive]);

  return <SectionItem className="CardSection" />;
};