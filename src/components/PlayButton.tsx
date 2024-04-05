import React from "react";

const PlayButton = () => {
    
    const playButtonAction = () => {
        console.log('test button;')
    };
    return(
        <div className="flex flex-col justify-center items-center mt-10">
            <button onClick={playButtonAction} className="text-dusty-rose px-8 py-5 rounded-lg text-2xl shadow-lg border-4 border-dusty-rose hover:bg-dusty-rose hover:text-dark-red">Play Game</button>
        </div>
    );
}

export default PlayButton;