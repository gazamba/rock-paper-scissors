import { createContext, useCallback, useReducer, useState } from 'react';
import { GameAction, GameState } from '../types/GameAction';
import { GameOption } from '../types/GameOption';

type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  setPlayerChoice: (playerChoice: GameOption) => void;
};

export const GameContext = createContext({} as GameContextType);

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'INCREMENT_PLAYER_SCORE':
      return {
        ...state,
        playerScore: state.playerScore + 1,
      };

    case 'INCREMENT_MACHINE_SCORE':
      return {
        ...state,
        machineScore: state.machineScore + 1,
      };

    case 'SET_WINNER':
      return {
        ...state,
        winner: action.winner,
      };

    case 'TRY_AGAIN':
      return {
        ...state,
        winner: null,
        machineChoice: null,
        playerChoice: null,
      };

    case 'TRY_AGAIN_GAME_OVER':
      return {
        ...state,
        winner: null,
        machineChoice: null,
        playerChoice: null,
        playerScore: 0,
        machineScore: 0,
        winnerGameOver: null
      };

    case 'SET_MACHINE_CHOICE':
      return {
        ...state,
        machineChoice: action.option ?? null,
      };

    case 'SET_PLAYER_CHOICE':
      return {
        ...state,
        playerChoice: action.option ?? null,
      };

     case 'SET_WINNER_GAME_OVER':
      return {
        ...state,
        winnerGameOver: action.winnerGameOver
      }; 

    default:
      return state;
  }
}

const initialGameState: GameState = {
  playerScore: 0,
  machineScore: 0,
  playerChoice: null,
  machineChoice: null,
  winner: null,
  winnerGameOver: null
};

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialGameState);


  const setPlayerChoice = useCallback((playerChoice: GameOption) => {
    dispatch({ type: 'SET_PLAYER_CHOICE', option: playerChoice });
  }, []);

  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
        setPlayerChoice,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
