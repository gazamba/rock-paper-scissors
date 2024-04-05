import React from "react";
import PlayButton from "./PlayButton";
import Instructions from "./Instructions";

const Home = () => {

    return(
        <div className="bg-dark-red h-screen p-10 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <h1 className="font-bold text-dusty-rose mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Rock-Paper-Scissors</h1>
                </div>
                <div className="mt-10">
                    <img className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl h-auto" src="src/assets/rock-paper-scissors-home.svg" alt="logo"/>
                </div>    
            </div>
            <PlayButton/>
            <Instructions/>
        </div>
    );
}

export default Home;