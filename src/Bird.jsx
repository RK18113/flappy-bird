import React from "react";
import birdImg from './assets/images/bird.png';

const Bird = ({ birdPosition }) => {

	return (
		<img
			src={birdImg}
			alt="bird"
			className="bird"
			style={{
				position: 'absolute',
						left: birdPosition.x,
						top: birdPosition.y,
				height: '50px',
				width: '50px',
				zIndex: 1000,
			}}
		/>
	);
};

export default Bird;
