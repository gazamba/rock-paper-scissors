import { useState } from 'react';
import '../index.css';
import Home from '../components/Home';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ScoreBoard from '../components/ScoreBoard';
import GameProps from '../components/Game';
import Instructions from '../components/Instructions';
import PlayButton from '../components/PlayButton';
import Game from '../components/Game';

const RockPaperScissors = () => {

    const [playerWin, setPlayerWin] = useState("");
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);
    const [isGameOver, setIsGameOver] = useState(true);

    const options = ["rock", "paper", "scissors"];

    const handleResetGame = () => {
        setIsGameOver(true);
        setScorePlayer1(0);
        setScorePlayer2(0);
    };

    return (
        <Layout>
            <div>
                {isGameOver ? (
                    <>
                        <Home isGameOver={isGameOver} setIsGameOver={setIsGameOver}  />
                    </>
                ) : (
                    <>
                        <Header />
                        <Game
                            options={options}
                            player1={player1}
                            setPlayer1={setPlayer1}
                            player2={player2}
                            setPlayer2={setPlayer2}
                            playerWin={playerWin}
                            setPlayerWin={setPlayerWin}
                            scorePlayer1={scorePlayer1}
                            setScorePlayer1={setScorePlayer1}
                            scorePlayer2={scorePlayer2}
                            setScorePlayer2={setScorePlayer2}
                            onResetGame={handleResetGame}
                        />
                             <ScoreBoard scorePlayer1={scorePlayer1} scorePlayer2={scorePlayer2} />
                    </>
                )}
            </div>
        </Layout>
    );
};

export default RockPaperScissors;
