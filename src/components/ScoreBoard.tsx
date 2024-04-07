import React from "react";

type ScoreBoardProps = {
    scorePlayer1: number;
    scorePlayer2: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scorePlayer1, scorePlayer2 }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg w-2/4">
            <h2 className="text-center text-lg font-semibold text-dark-red border-b-2">Score Board</h2>

            <div className="flex justify-center space-x-5 mt-4">
                <div className="p-2 bg-dusty-rose rounded-md">
                    <h2 className="font-semibold">Player 1: {scorePlayer1}</h2>
                </div>
                <div className="p-2 bg-dusty-rose rounded-md">
                    <h2 className="font-semibold">Player 2: {scorePlayer2}</h2>
                </div>
            </div>
        </div>
    );
}

export default ScoreBoard;
