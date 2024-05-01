import { useGameContext } from "../../hooks/useGameContext";
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";

type ModalInstructionsProps = {
  shouldModalRender: boolean;
};

const ModalWinner = ({ shouldModalRender }: ModalInstructionsProps) => {
  const { dispatch, state } = useGameContext();
  const navigate = useNavigate();

  const tryAgain = () => {
    dispatch({ type: "TRY_AGAIN_GAME_OVER" });
    navigate("/");
  };

  return (
    <Modal shouldModalRender={shouldModalRender}>
      <p className="text-white text-center">
        {state.winnerGameOver === "player" && "You won!"}
        {state.winnerGameOver === "machine" && "You lost!"}
      </p>
      <button
        onClick={tryAgain}
        className="mt-4 rounded-md bg-gray-200 px-4 py-2 font-bold text-dark-red transition-colors duration-200 ease-in-out hover:bg-dusty-rose"
      >
        Try again
      </button>
    </Modal>
  );
};

export default ModalWinner;
