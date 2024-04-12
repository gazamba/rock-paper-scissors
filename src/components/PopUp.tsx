import React from "react";

type PopUpProps = {
  isOpen:boolean,
  onClose:()=> void;
}

const PopUp = ({ isOpen, onClose } :PopUpProps) => {
    return (
      <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-dark-red p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Instructions</h2>
          <ul className="ul-instructions text-lg text-dusty-rose">
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
          <h3 className="mt-2 text-lg text-dusty-rose">Good luck!</h3>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-dusty-rose text-dark-red rounded hover:bg-white hover:text-dark-red shadow-lg">Close</button>
        </div>
      </div>
    );
  };

  export default PopUp;