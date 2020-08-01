import React from 'react';
import './Loader.scss';
import head from "../static/head.png";
import * as classnames from "classnames";

export const Loader = props => {
  return <div className={classnames('Loader', {
    'Loader--hide': props.isHide,
  })}>
    <img src={head} className="Loader__logo" alt="head"/>
  </div>;
};