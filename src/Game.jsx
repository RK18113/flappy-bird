import React, { useEffect, useState } from 'react';
import Bird from './Bird.jsx';
import Pipe from './Pipe.jsx';
import ScoreBoard from './ScoreBoard.jsx';

function Game() {
  const [birdPosition, setBirdPosition] = useState({ x: 100, y: 200 });
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(1);

  function jump(event){
    if (event.code === 'Space'){
      setBirdPosition((prev) => ({...prev, y: Math.max(0, prev.y - 60)}))
    }
  }

  useEffect(() => {
    const generatePipes = setInterval(() => {
      const heightArray = [400, 150, 300, 250, 200, 350];
      const randomIndex = Math.floor(Math.random() * (heightArray.length / 2)) * 2;
      const upperPipeHeight = heightArray[randomIndex];
      const lowerPipeHeight = heightArray[randomIndex + 1];
      
      setPipes(prev => [
        ...prev,
        {x: window.innerWidth, y: 0, height: upperPipeHeight, isBottom: false},
        {x: window.innerWidth, y: window.innerHeight - lowerPipeHeight, height: lowerPipeHeight, isBottom: true}  
      ]);
    }, 1000);
  
    return () => clearInterval(generatePipes);
  }, []);

  useEffect(() => {
    const movePipes = setInterval(() => {
      setPipes(prevPipes => prevPipes.map(pipe => ({ ...pipe, x: pipe.x - 5 }))
                                     .filter(pipe => pipe.x > -50));
    }, 10);

    return () => clearInterval(movePipes);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', jump);  
    return () => window.removeEventListener('keydown', jump);
  }, []);

  useEffect(() => {
    const gravityInterval = setInterval(() => {
      setBirdPosition((prev) => ({
        ...prev,
        y: Math.min(window.innerHeight - 110, prev.y + 10)
      }));
    }, 100);
  
    return () => clearInterval(gravityInterval);
  }, []);

  // for tesing the score board
  // useEffect(() => {
  //   const scoreInterval = setInterval(() => {
  //     setScore((prev) => prev + 1);
  //   }, 100);
    
  //   return () => clearInterval(scoreInterval);
  // }, []);
  
  
  return (
    <>
      <Bird birdPosition={birdPosition} />
      {pipes.map((pipe, index) => (
        <Pipe key={index} pipePosition={pipe}/>
      ))}
      <ScoreBoard score={score} />
    </>
  );
}

export default Game;