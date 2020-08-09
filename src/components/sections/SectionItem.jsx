import React, {memo} from 'react';
import './SectionItem.scss'
import {sectionItemComponentClassName} from "./constants/selectors";
import * as classnames from "classnames";

export const SectionItem = memo(props => {
  return <section className={classnames(sectionItemComponentClassName, props.className)}>
    { props.title && <h2 className="SectionItem__title">{props.title}</h2> }

    <div className="SectionItem__content">{props.children}</div>
  </section>;
});