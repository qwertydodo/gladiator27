import React from 'react';
import './Loader.scss';
import * as classnames from "classnames";
import {loaderComponentClassName} from "./constants/selectors";
import {LOADER_IMAGE_URL} from "../../constants/imagesUrls";

export const Loader = props => {
  return <div className={classnames(loaderComponentClassName, {
    [`${loaderComponentClassName}--hide`]: props.isHide,
  })}>
    <img src={LOADER_IMAGE_URL} className={`${loaderComponentClassName}__logo`} alt="head"/>
  </div>;
};