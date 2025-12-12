import React from "react";
import { notFound } from "next/navigation";

export default async function FeedbackDetails ({params}: {
    params: Promise< {feedbackID: string}>
}) {
    const feedbackID = (await params).feedbackID;
    if(parseInt(feedbackID)> 200){
        notFound();
    }
  return (

      <>
        Details Page for No. {feedbackID} feedback.
      </>
    )
};


