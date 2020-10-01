import React from 'react';
import Draggable from 'react-draggable';

import icon from '../../../images/logo/icon-alt.png';

export function Main() {
  const nodeRef = React.useRef(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="absolute rounded h-12 w-12 bg-gray-300 shadow-lg"
      >
        <img src={icon} alt="menu" className="h-auto w-auto" />
      </div>
    </Draggable>
  );
}
