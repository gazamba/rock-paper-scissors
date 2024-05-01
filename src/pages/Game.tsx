import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Option } from "../components/Option";
import { Tooltip } from "../components/Tooltip";
import { useGameContext } from "../hooks/useGameContext";
import HeaderGame from "../components/HeaderGame";
import ModalWinner from "../components/modals/ModalWinner";

export default function Game() {
  const { dispatch, state } = useGameContext();
  const { machineChoice, playerChoice } = state;
  const resultAlreadyCalculated = useRef(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const getResult = useCallback(() => {
    if (resultAlreadyCalculated.current) return;

    resultAlreadyCalculated.current = true;

    if (playerChoice === "paper" && machineChoice === "paper") {
      dispatch({ type: "SET_WINNER", winner: "draw" });
    } else if (playerChoice === "paper" && machineChoice === "rock") {
      dispatch({ type: "INCREMENT_PLAYER_SCORE" });
      dispatch({ type: "SET_WINNER", winner: "player" });
    } else if (playerChoice === "paper" && machineChoice === "scissors") {
      dispatch({ type: "INCREMENT_MACHINE_SCORE" });
      dispatch({ type: "SET_WINNER", winner: "machine" });
    } else if (playerChoice === "rock" && machineChoice === "rock") {
      dispatch({ type: "SET_WINNER", winner: "draw" });
    } else if (playerChoice === "rock" && machineChoice === "paper") {
      dispatch({ type: "INCREMENT_MACHINE_SCORE" });
      dispatch({ type: "SET_WINNER", winner: "machine" });
    } else if (playerChoice === "rock" && machineChoice === "scissors") {
      dispatch({ type: "INCREMENT_PLAYER_SCORE" });
      dispatch({ type: "SET_WINNER", winner: "player" });
    } else if (playerChoice === "scissors" && machineChoice === "scissors") {
      dispatch({ type: "SET_WINNER", winner: "draw" });
    } else if (playerChoice === "scissors" && machineChoice === "rock") {
      dispatch({ type: "INCREMENT_MACHINE_SCORE" });
      dispatch({ type: "SET_WINNER", winner: "machine" });
    } else if (playerChoice === "scissors" && machineChoice === "paper") {
      dispatch({ type: "INCREMENT_PLAYER_SCORE" });
      dispatch({ type: "SET_WINNER", winner: "player" });
    } else {
      dispatch({ type: "SET_WINNER", winner: "draw" });
    }
  }, [dispatch, playerChoice, machineChoice]);

  useEffect(() => {
    if (!playerChoice || !machineChoice) navigate("/play", { replace: true });

    getResult();
  }, [getResult, navigate, playerChoice, machineChoice]);

  useEffect(() => {
    if (state.playerScore === 3) {
      dispatch({ type: "SET_WINNER_GAME_OVER", winnerGameOver: "player" });
      setShowModal(true);
    } else if (state.machineScore === 3) {
      dispatch({ type: "SET_WINNER_GAME_OVER", winnerGameOver: "machine" });
      setShowModal(true);
    }
  }, [dispatch, state.playerScore, state.machineScore]);

  return (
    <>
      <HeaderGame />
      <div className="mt-3 text-center">
        <div className="mb-10 flex items-center justify-center gap-10">
          <div className="animate-show-content-right space-x-2 space-y-2">
            <span className="text-xl text-white">Player</span>
            {playerChoice && (
              <Tooltip content={playerChoice}>
                <Option className="pointer-events-none" value={playerChoice} />
              </Tooltip>
            )}
          </div>

          <span className="text-4xl font-bold">X</span>

          <div className="animate-show-content-left space-x-2 space-y-2">
            <span className="text-xl text-white">Machine</span>
            {machineChoice && (
              <Tooltip content={machineChoice}>
                <Option className="pointer-events-none" value={machineChoice} />
              </Tooltip>
            )}
          </div>
        </div>

        <p className="font-semibold text-white">
          {state.winner &&
            (state.winner === "draw"
              ? "Draw!"
              : `${state.winner === "player" ? "Player" : "Machine"} wins!`)}
        </p>
        <ModalWinner shouldModalRender={showModal} />
        <button
          onClick={() => {
            dispatch({ type: "TRY_AGAIN" });
            navigate("/play");
          }}
          className="mt-4 rounded-md bg-gray-200 px-4 py-2 font-bold text-dark-red transition-colors duration-200 ease-in-out hover:bg-dusty-rose"
        >
          Try again
        </button>
      </div>
    </>
  );
}
