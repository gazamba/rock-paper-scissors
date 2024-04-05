import React, { useState } from "react";
import PopUp from "./PopUp";

const Instructions = () => {

  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

  const instructionsPopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return(
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex items-center">
        <button onClick={instructionsPopUp} className="text-dusty-rose px-8 py-5 rounded-lg text-2xl shadow-lg hover:bg-dusty-rose hover:text-dark-red">Instructions</button>
      </div>
      <PopUp isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} />
    </div>
  );
};

export default Instructions;