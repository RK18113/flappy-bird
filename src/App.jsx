import React from "react";
import Game from "./Game.jsx";
import bgImg from "./assets/images/bg.jpg"

function App(){

  return(
    <div className="w-screen h-screen overflow-hidden bg-no-repeat bg-center"
         style={{
           backgroundImage: `url(${bgImg})`,
           backgroundSize: '100% 100vh'
         }}>
    <Game></Game>
    </div>
    
  );
}

export default App;