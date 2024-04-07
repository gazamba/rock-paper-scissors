import {useState} from 'react';
import '../index.css';
import Home from '../components/Home';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ScoreBoard from '../components/ScoreBoard';

const RockPaperScissors = () => {

    const [playerWin, setPayerWin] = useState(null);
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);

    return(
        <Layout>
            <Header/>
            <div className="flex justify-center items-center h-screenr">
                <ScoreBoard scorePlayer1={scorePlayer1} scorePlayer2={scorePlayer2} />
            </div>
        </Layout>
    );
};

export default RockPaperScissors;


