import React, {useCallback, useContext} from 'react';
import './DanceSection.scss';
import {SectionItem} from "../../SectionItem";
import {AppContext} from "../../../../AppContext";

export const DanceSection = props => {
  const { danceSong } = useContext(AppContext);

  const onPartyRun = useCallback(() => {
    danceSong.play();
  }, [danceSong]);

  return <SectionItem className="DanceSection">
    <button type="button" onClick={onPartyRun}>Click me</button>
  </SectionItem>;
};