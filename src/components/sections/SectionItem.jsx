import React from 'react';
import './SectionItem.scss'
import {sectionItemComponentClassName} from "./constants/selectors";
import * as classnames from "classnames";

export const SectionItem = props => {
  return <section className={classnames(sectionItemComponentClassName, props.className)}>{props.children}</section>;
};