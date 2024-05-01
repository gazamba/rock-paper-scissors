import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountDown } from "../components/Countdown";
import { Option } from "../components/Option";
import { Tooltip } from "../components/Tooltip";
import { useGameContext } from "../hooks/useGameContext";
import { GameOption } from "../types/GameOption";
import { sleep } from "../utils/sleep";
import HeaderGame from "../components/HeaderGame";

export function Play() {
  const { dispatch, setPlayerChoice } = useGameContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handlePlayerChoice(playerOption: GameOption) {
    setIsLoading(true);
    await sleep(3000);
    setIsLoading(false);

    if (playerOption) {
      const options: GameOption[] = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * options.length);
      const selectedMachineChoice = options[randomIndex];
      setPlayerChoice(playerOption);

      dispatch({
        type: "SET_MACHINE_CHOICE",
        option: selectedMachineChoice,
      });
    }

    navigate("/game");
  }

  return (
    <div>
      <HeaderGame />
      <div className="mb-6 mt-2 text-center text-2xl text-white">
        <h2>Choose one:</h2>
      </div>

      <div
        className={`flex items-center justify-center gap-4 ${
          isLoading && "pointer-events-none"
        }`}
      >
        <Tooltip content="Rock">
          <Option
            value="rock"
            disabled={isLoading}
            onPlayerChoice={handlePlayerChoice}
          />
        </Tooltip>

        <Tooltip content="Paper">
          <Option
            value="paper"
            disabled={isLoading}
            onPlayerChoice={handlePlayerChoice}
          />
        </Tooltip>

        <Tooltip content="Scissors">
          <Option
            value="scissors"
            disabled={isLoading}
            onPlayerChoice={handlePlayerChoice}
          />
        </Tooltip>
      </div>

      {isLoading && <CountDown />}
    </div>
  );
}
