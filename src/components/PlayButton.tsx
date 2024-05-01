import React from "react";
import { useNavigate } from 'react-router-dom';

const PlayButton = () => {
    
    const navigate = useNavigate();

    const playButtonAction = () => {
        navigate("/play");
    };
    return(
        <div className="flex flex-col justify-center items-center mt-10">
            <button onClick={playButtonAction} className="text-dusty-rose px-7 py-4 rounded-lg text-2xl shadow-lg border-4 border-dusty-rose hover:bg-dusty-rose hover:text-dark-red">Play Game</button>
        </div>
    );
}

export default PlayButton;

