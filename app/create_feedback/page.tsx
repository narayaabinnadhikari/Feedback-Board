"use client";

import React, { useState } from 'react'
import { Feedback } from '../types/feedback';
import FeedbackModal from '../components/FeedbackModel'


const Create_feedback_button = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    const handleAddFeedback = (newFeedback: Feedback) => {
      setFeedbacks([...feedbacks, newFeedback]);
    };
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 rounded cursor-pointer hover:bg-red-400 "
      >
        Create New Feedback
      </button>

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddFeedback}
      />

      <div className="mt-8 space-y-3">
        {feedbacks.map((f, i) => (
          <div key={i} className="border p-4 rounded">
            <h3 className="font-semibold">{f.title}</h3>
            <p>{f.description}</p>
            <span className="text-sm text-gray-500">Status: {f.status}</span>
          </div>
        ))}
        </div>
    </>
  );
}

export default Create_feedback_button