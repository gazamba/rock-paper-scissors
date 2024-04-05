import React from 'react';
import {useState} from 'react';
import '../index.css';
import Home from '../components/Home';

const RockPaperScissors = () => {

    const [playerWin, setPayerWin] = useState(null);
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [scorePLayer1, setScorePlayer1] = useState(null);
    const [scorePLayer2, setScorePlayer2] = useState(null);

    return(
        <>
        <Home></Home>
        </>
    );
};

export default RockPaperScissors;


