import React from "react";
import Create_feedback_button from "../create_feedback/page";

const Feedback = () => {
  return (
    <>
      <div className="flex gap-4 items-center justify-evenly"> 
        <div>
          <h1 className="underline text-3xl">Feedback List:</h1>
        </div>
        <Create_feedback_button />
      </div>
    </>
  );
};

export default Feedback;
