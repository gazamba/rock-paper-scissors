import { useState, useEffect } from 'react';

type PopUpWinnerProps = {
    winnerChoice: string, 
    loserChoice: string, 
    isDraw: boolean,
    onClose: () => void;
}

const ModalWinner = ({ winnerChoice, loserChoice, isDraw, onClose }: PopUpWinnerProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div style={popupStyle}>
            {!isDraw
                ? <p>{`${winnerChoice} beats ${loserChoice}`}</p>
                : <p>Draw!</p>
            }
        </div>
    );
};

const popupStyle = {
    position: 'fixed' as 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

export default ModalWinner;
