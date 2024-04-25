import { GameProvider } from './contexts/GameContext';
import './index.css'
import Router from './router';

function App() {
  
  return (
    <GameProvider>
      <Router/>
    </GameProvider>
  )
}

export default App
