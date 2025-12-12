"use client";

import { useState } from "react";
import { Feedback, FeedbackStatus } from "../types/feedback";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Feedback) => void;
}


export default function FeedbackModal({ isOpen, onClose, onSubmit }: FeedbackModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<FeedbackStatus>("open");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title and Description are required");
      return;
    }

    onSubmit({ title, description, status });
    onClose();
    setTitle("");
    setDescription("");
    setStatus("open");
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-40">
      <div className="bg-gray-600 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Create New Feedback</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

         
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          
          <div>
            <label className="block font-medium mb-1">Status</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={status}
              onChange={(e) => setStatus(e.target.value as FeedbackStatus)}
            >
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          
          <button
            type="submit"
            className="w-full font-bold bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Create Feedback
          </button>
        </form>

      
        <button
          className="mt-4 w-full font-bold bg-red-400 py-2 rounded hover:bg-gray-400"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
