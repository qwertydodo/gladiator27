import React from 'react';
import './Loader.scss';
import head from "../../static/head.png";
import * as classnames from "classnames";
import {loaderComponentClassName} from "./constants/selectors";

export const Loader = props => {
  return <div className={classnames(loaderComponentClassName, {
    [`${loaderComponentClassName}--hide`]: props.isHide,
  })}>
    <img src={head} className={`${loaderComponentClassName}__logo`} alt="head"/>
  </div>;
};