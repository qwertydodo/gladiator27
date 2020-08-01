import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {DanceSection} from "./components/dance/DanceSection";
import {VideoSection} from "./components/video/VideoSection";
import {CardSection} from "./components/card/CardSection";
import {sectionItemComponentClassName} from "./constants/selectors";
import {loaderComponentClassName} from "../loader/constants/selectors";

export const SectionsList = props => {
  return <ReactFullpage
      navigation
      sectionSelector={`.${sectionItemComponentClassName}`}
      normalScrollElements={`.${loaderComponentClassName}`}
      render={() => (
        <div className="SectionsContainer">
          <DanceSection/>

          <VideoSection/>

          <CardSection/>
        </div>
      )}
    />;
};