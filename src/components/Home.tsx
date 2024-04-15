import React from "react";
import PlayButton from "./PlayButton";
import Instructions from "./Instructions";
import { HandRock } from "./icons/HandRock";
import { HandPaper } from "./icons/HandPaper";
import { HandScissors } from "./icons/HandScissors";
import { CountDown } from "./CountDown";

type HomeProps = {
    isGameOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<HomeProps> = ({ isGameOver, setIsGameOver }) => {
    return (
        <div className="flex flex-col justify-center items-center p-10">
            <div className="text-center mb-10">
                <h1 className="font-bold text-dusty-rose text-4xl md:text-6xl lg:text-7xl xl:text-8xl">Rock-Paper-Scissors</h1>
            <div className="mt-10 flex justify-center items-center">
                <HandRock/>
                <HandPaper/>
                <HandScissors/>
            </div>
            </div>
            <div className="flex flex-col items-center gap-5">
                <PlayButton isGameOver={isGameOver} setIsGameOver={setIsGameOver}/>
                <Instructions/>
            </div>
        </div>
    );
}

export default Home;
