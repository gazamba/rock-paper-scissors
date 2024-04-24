import React from "react";
import { GameState } from "./types/GameAction";
import { useGameContext } from "./hooks/useGameContext";

const HeaderGame = () => {

    const { state } = useGameContext();

    return (
        <>
            <header className="w-full flex items-center justify-between bg-dusty-rose">
                <h1 className="text-xl font-bold text-dark-red md:text-2xl lg:text-4xl ml-20">Rock-Paper-Scissors</h1>
                <div className="flex justify-end mr-20 p-3">
                    <div className="border- border-white bg-dark-red px-3 rounded-lg shadow-lg">
                        <h2 className="text-center text-lg font-semibold text-white border-b-2">Score</h2>
                        <div className="block justify-center px-auto py-3 text-white">
                            <div className="flex justify-between">
                                <h2 className="font-semibold text-whiter">Player:</h2>
                                {/* <span className="text-white">{state.playerScore}</span> */}
                                <span className="text-white font-bold">2</span>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="font-semibold text-white mr-2">Computer:</h2>
                                {/* <span className="text-white">{state.playerScore}</span> */}
                                <span className="text-white font-bold">2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderGame;