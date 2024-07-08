import React from "react";
import ScoreBoardImg from './assets/images/ScoreBoard.png';

function ScoreBoard({ score }) {
    const formattedScore = isNaN(score) ? '0' : Math.floor(score).toString();

    return (
        <div className="absolute top-0 right-0 w-[150px] h-[150px] flex justify-center items-center">
            <img src={ScoreBoardImg} alt="Score Board" className="h-[150px] w-[150px]" />
            <div className="absolute text-[45px] font-bold text-center text-white w-full pb-[35px] font-['Stick_No_Bills']">
                {formattedScore}
            </div>
        </div>
    );
}

export default ScoreBoard;