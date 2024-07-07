import React, { useEffect, useState } from 'react';
import Bird from './Bird.jsx';
import Pipe from './Pipe.jsx';
import './App.css';

function App() {
  const [birdPosition, setBirdPosition] = useState({ x: 100, y: 200 });
  const [pipes, setPipes] = useState([]);

  function jump(event){
    if (event.code === 'Space'){
      setBirdPosition((prev) => ({...prev, y: Math.max(0, prev.y - 60)}))
    }
  }

  useEffect(() => {
    const generatePipes = setInterval(() => {
      const randomHeight = Math.random() * 100 + 200;
      setPipes(prev => [
        ...prev,
        {x: window.innerWidth, y: 0, height: randomHeight, isBottom: false},
        {x: window.innerWidth, y: window.innerHeight - randomHeight - 150, height: randomHeight, isBottom: true}
      ]);
    }, 3000);

    return () => clearInterval(generatePipes);
  }, []);

  useEffect(() => {
    const movePipes = setInterval(() => {
      setPipes(prevPipes => prevPipes.map(pipe => ({ ...pipe, x: pipe.x - 5 }))
                                     .filter(pipe => pipe.x > -50));
    }, 20);

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
        y: Math.min(window.innerHeight - 50, prev.y + 5)
      }));
    }, 100);
  
    return () => clearInterval(gravityInterval);
  }, []);

  return (
    <>
      <Bird birdPosition={birdPosition} />
      {pipes.map((pipe, index) => (
        <Pipe key={index} pipePosition={pipe}/>
      ))}
    </>
  );
}

export default App;