import {useState} from 'react';
import '../index.css';

const RockPaperScissors = () => {

    const [playerWin, setPLayerWin] = useState(null);
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [scorePLayer1, setScorePlayer1] = useState(null);
    const [scorePLayer2, setScorePlayer2] = useState(null);

    return(
        <>
        <p className='bg-red-300'>Hello World!</p>
        </>
    )
};

export default RockPaperScissors;


