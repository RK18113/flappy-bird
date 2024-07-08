import React from "react";
import birdImg from './assets/images/bird.png';

const Bird = ({ birdPosition }) => {
  return (
    <img
      src={birdImg}
      alt="bird"
      className="absolute h-[50px] w-[50px]"
      style={{
        left: `${birdPosition.x}px`,
        top: `${birdPosition.y}px`,
      }}
    />
  );
};

export default Bird;