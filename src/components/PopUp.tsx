import React from "react";

type PopUpInstructions = {
  isOpen:boolean,
  onClose:()=> void;
}

const PopUp = ({ isOpen, onClose } :PopUpInstructions) => {
    return (
      <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-dusty-rose p-8 rounded-lg">
          <h2 className="azamba text-2xl font-bold mb-4 text-dark-red">Instructions</h2>
          <ul className="ul-instructions text-lg">
            <li>The player chooses one of three options: Rock, Paper, or Scissors.</li>
            <li>The machine makes its choice.</li>
            <li>The winner is determined by the classic winning conditions:
              <ul>
                <li>Rock crushes Scissors (Rock wins over Scissors).</li>
                <li>Scissors cut Paper (Scissors win over Paper).</li>
                <li>Paper covers Rock (Paper wins over Rock).</li>
              </ul>
            </li>
            <li>The first to score 3 wins the game.</li>
          </ul>
          <h3 className="mt-2 text-md ">Good luck!</h3>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-dark-red text-dusty-rose rounded hover:bg-blue-600">Close</button>
        </div>
      </div>
    );
  };

  export default PopUp;