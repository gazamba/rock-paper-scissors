import { useState, useEffect } from 'react';

type PopUpWinner = {
    winnerChoice?: string,
    loserChoice?: string,
    isDraw: boolean
}
const PopupWinner = ({ winnerChoice, loserChoice, isDraw }: PopUpWinner) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isVisible && (
                <div style={popupStyle}>
                    {!isDraw
                        ?
                        <p>{winnerChoice + " beats " + loserChoice}</p>
                        :
                        <p>Draw!</p>
                    }

                </div>
            )}
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

export default PopupWinner;
