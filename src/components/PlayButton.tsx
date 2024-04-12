import React from "react";

type PlayButtonProps = {
    isGameOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayButton : React.FC<PlayButtonProps> = ({ isGameOver, setIsGameOver }) => {
    
    const playButtonAction = () => {
        setIsGameOver(!isGameOver);
    };
    return(
        <div className="flex flex-col justify-center items-center mt-10">
            <button onClick={playButtonAction} className="text-dusty-rose px-8 py-5 rounded-lg text-2xl shadow-lg border-4 border-dusty-rose hover:bg-dusty-rose hover:text-dark-red">Play Game</button>
        </div>
    );
}

export default PlayButton;