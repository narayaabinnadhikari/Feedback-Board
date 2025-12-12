import React from "react";
import Create_feedback_button from "../create_feedback/page";

const Feedback = () => {
  return (
    <>
      <h1 className="text-4xl">This is the feedback page.</h1>
      <div className="flex gap-4 items-center">
        <div>
          <h1 className="underline text-3xl">Feedback List:</h1>
        </div>
        <Create_feedback_button />
      </div>
    </>
  );
};

export default Feedback;
