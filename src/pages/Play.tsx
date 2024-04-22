import React from "react";
import PlayButton from "../components/PlayButton";
import Instructions from "../components/Instructions";
import { HandRock } from "../components/icons/HandRock";
import { HandPaper } from "../components/icons/HandPaper";
import { HandScissors } from "../components/icons/HandScissors";


const Play: React.FC = () => {
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
                <PlayButton/>
                <Instructions/>
            </div>
        </div>
    );
}

export default Play;
