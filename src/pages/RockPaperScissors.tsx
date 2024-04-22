import { useState } from 'react';
import '../index.css';
import Play from './Play';
import HeaderGame from '../components/HeaderGame';
import Layout from '../router/Layout';
import ScoreBoard from '../components/ScoreBoard';
import Game from '../components/Game';

const RockPaperScissors = () => {

    const [playerWin, setPlayerWin] = useState("");
    const [choiceWinner, setChoiceWinner] = useState("");
    const [choiceLoser, setChoiceLoser] = useState("");
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);
    const [isGameOver, setIsGameOver] = useState(true);

    const handleResetGame = () => {
        setPlayerWin("");
        setChoiceWinner("");
        setChoiceLoser("");
        setPlayer1("");
        setPlayer2("");
        setScorePlayer1(0);
        setScorePlayer2(0);
    };

    return (
        <Layout>
            <div>
                {isGameOver ? (
                    <>
                        <Play/>
                    </>
                ) : (
                    <>
                        <HeaderGame />
                        <Game
                            isGameOver={isGameOver}
                            setIsGameOver={setIsGameOver}
                            options={options}
                            player1={player1}
                            setPlayer1={setPlayer1}
                            player2={player2}
                            setPlayer2={setPlayer2}
                            playerWin={playerWin}
                            setPlayerWin={setPlayerWin}
                            choiceWinner={choiceWinner}
                            setChoiceWinner={setChoiceWinner}
                            choiceLoser={choiceLoser}
                            setChoiceLoser={setChoiceLoser}
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
