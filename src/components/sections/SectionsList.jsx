import React, {useCallback, useContext} from 'react';
import './SectionsList.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import {DanceSection} from "./components/dance/DanceSection";
import {VideoSection} from "./components/video/VideoSection";
import {CardSection} from "./components/card/CardSection";
import {sectionItemComponentClassName} from "./constants/selectors";
import {loaderComponentClassName} from "../loader/constants/selectors";
import {AppContext} from "../../AppContext";
import {CARD_SECTION_INDEX, DANCE_SECTION_INDEX, VIDEO_SECTION_INDEX} from "../../constants/slides";


export const SectionsList = props => {
  const { isActiveSlide, onSlideChange } = useContext(AppContext);

  const onLeave = useCallback((prev, current) => {
    onSlideChange(current.index);
  }, [onSlideChange]);

  return <ReactFullpage
    navigation
    sectionSelector={`.${sectionItemComponentClassName}`}
    normalScrollElements={`.${loaderComponentClassName}`}
    onLeave={onLeave}
    render={({ state, fullpageApi }) => {
      return(
        <div className="SectionsContainer">
          <DanceSection isActive={isActiveSlide(DANCE_SECTION_INDEX)} />

          <VideoSection isActive={isActiveSlide(VIDEO_SECTION_INDEX)} />

          <CardSection isActive={isActiveSlide(CARD_SECTION_INDEX)} />
        </div>
    )}}
    />;
};