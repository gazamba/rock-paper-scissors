import { useState } from "react";
import ModalInstructions from "./modals/ModalInstructons";

const InstructionsButton = () => {

  const [shouldModalRender, setShouldModalRender] = useState(false);

  // const handleModalRender = () => {
  //   setShouldModalRender(!shouldModalRender);
  // };

  return(
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex items-center">
        <button onClick={() => setShouldModalRender(true)} className="text-dusty-rose px-8 py-5 rounded-lg text-2xl shadow-lg hover:bg-dusty-rose hover:text-dark-red">Instructions</button>
      </div>
      <ModalInstructions shouldModalRender={shouldModalRender} handleClose={()=>{}}/>
    </div>
  );
};

export default InstructionsButton;