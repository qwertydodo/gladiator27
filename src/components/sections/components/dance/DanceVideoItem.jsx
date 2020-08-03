import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './DanceSection.scss';
import ReactFreezeframe from 'react-freezeframe';

export const DanceVideoItem = props => {
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

  return <div className="DanceVideoItem">
    <ReactFreezeframe ref={onRefChange} src={props.src} options={options} />
  </div>
};