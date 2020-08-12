import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './VideoItem.scss';
import ReactFreezeframe from 'react-freezeframe';
import * as classnames from "classnames";

export const VideoItem = props => {
  const [ref, setRef] = useState();

  const onRefChange = useCallback(newRef => {
    if (newRef) {
      setRef(newRef);
    }
  }, []);

  useEffect(() => {
    if (!ref) {
      return;
    }

    if (props.isPlaying) {
        ref.start();
    } else {
      ref.stop();
    }
  }, [ref, props.isPlaying]);

  const options = useMemo(() => ({
    trigger: true,
    overlay: false
  }), []);

  return <div className={classnames('VideoItem', props.className)} onClick={props.onClick}>
    <ReactFreezeframe ref={onRefChange} src={props.src} options={options} />
  </div>
};