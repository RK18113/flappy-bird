import React from "react";
import pipeImg from './assets/images/pipe.png';

const Pipes = ({ pipePosition }) => {
	return (
		<img
			src={pipeImg}
			alt="pipe"
			className="pipe"
			style={{
				position: 'absolute',
				left: pipePosition.x,
				top: pipePosition.isBottom ? 'auto' : pipePosition.y,
				bottom: pipePosition.isBottom ? 0 : 'auto',
				height: pipePosition.height,
				transform: pipePosition.isBottom ? 'rotate(0deg)' : 'rotate(180deg)',
				width: '200px',
			}}
			draggable={false}
		/>
	);
};

export default Pipes;