import React from "react";
import pipeImg from './assets/images/pipe.png';

const Pipes = ({ pipePosition }) => {
  return (
    <img
      src={pipeImg}
      alt="pipe"
      className={`
        absolute
        w-[200px]
        mb-[60px]
        ${pipePosition.isBottom ? '' : 'rotate-180'}
      `}
      style={{
        left: pipePosition.x,
        top: pipePosition.isBottom ? 'auto' : `${pipePosition.y - 10}px`,
        bottom: pipePosition.isBottom ? 0 : 'auto',
        height: pipePosition.height,
      }}
      draggable={false}
    />
  );
};

export default Pipes;