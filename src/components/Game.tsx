import React from "react";

type Game = {
    player1: string;
    player2: string;
    playerWin: any;
    scorePlayer1: number;
    scorePlayer2: number;
    setPlayer1: React.Dispatch<React.SetStateAction<string>>;
    setPlayer2: React.Dispatch<React.SetStateAction<string>>;
    setPlayerWin: React.Dispatch<React.SetStateAction<any>>;
    setScorePlayer1: React.Dispatch<React.SetStateAction<number>>;
    setScorePlayer2: React.Dispatch<React.SetStateAction<number>>;
    options:string[];
    onResetGame: () => void;
}

const Game: React.FC<Game> = ({ player1, setPlayer1, player2, setPlayer2, playerWin, setPlayerWin, setScorePlayer1, setScorePlayer2, scorePlayer1, scorePlayer2, options, onResetGame }) => {

    const computerChoice = () => {
        const randomIndex: number = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }
    const onClickChoice = (player1Choice:string) => {
        let computerChoiceRandom = computerChoice();
        setPlayer1(player1Choice);
        console.log("player 1: " + player1Choice)
        console.log("computer: " + computerChoiceRandom);

        if(computerChoiceRandom === player1Choice){
            setPlayerWin("");
            setPlayer1("");
            setPlayer2("");
            console.log("Draw")
        } else if (player1Choice === "rock" && computerChoiceRandom === "scissors"){
            setPlayerWin("Player 1");
            setScorePlayer1(scorePlayer1 + 1);
        } else if (player1Choice === "rock" && computerChoiceRandom === "paper"){
            setPlayerWin("player 2")
            setScorePlayer2(scorePlayer2 + 1);
        } else if (player1Choice === "paper" && computerChoiceRandom === "rock"){
            setPlayerWin("Player 1");
            setScorePlayer1(scorePlayer1 + 1);
        }  else if (player1Choice === "paper" && computerChoiceRandom === "scissors"){
            setPlayerWin("player 2")
            setScorePlayer2(scorePlayer2 + 1);
        } else if (player1Choice === "scissors" && computerChoiceRandom === "paper"){
            setPlayerWin("Player 1");
            setScorePlayer1(scorePlayer1 + 1);
        } else if (player1Choice === "scissors" && computerChoiceRandom === "rock"){
            setPlayerWin("player 2")
            setScorePlayer2(scorePlayer2 + 1);
        }
    }

    if (scorePlayer1 === 3 || scorePlayer2 === 3) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-dusty-rose p-8 rounded-lg">
              <h2 className="text-6xl font-bold mb-4 text-dark-red">{playerWin} won!</h2>
              <button onClick={onResetGame} className="mt-4 px-4 py-2 bg-dark-red text-dusty-rose rounded hover:bg-white hover:text-dark-red hover:border-dark-red cursor-pointer">Reset Game</button>
            </div>
          </div>
        );
    }
    return(
        <div className="flex flex-col justify-center items-center h-1/2">
            <h2 className="font-semibold text-center text-white mx-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl p-4">Make your choice!</h2>
            <div className="flex justify-center items-center space-x-6 mt-4">
                <div id="rock" className="w-16 md:w-24 lg:w-32 xl:w-40 2xl:w-48 cursor-pointer" onClick={() => onClickChoice("rock")}>
                    <img className="max-w-full h-auto" src="src/assets/rock.svg" alt="Rock"/>
                </div>
                <div id="paper" className="w-16 md:w-24 lg:w-32 xl:w-40 2xl:w-48 cursor-pointer" onClick={() => onClickChoice("paper")}>
                    <img className="max-w-full h-auto" src="src/assets/paper.svg" alt="Paper"/>
                </div>
                <div id="scissors" className="w-16 md:w-24 lg:w-32 xl:w-40 2xl:w-48 cursor-pointer" onClick={() => onClickChoice("scissors")}>
                    <img className="max-w-full h-auto" src="src/assets/scissors.svg" alt="Scissors"/>
                </div>
            </div>
        </div>
    );
};

export default Game;