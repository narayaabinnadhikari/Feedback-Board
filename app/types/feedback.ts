export type FeedbackStatus = "open" | "in-progress" | "done";

export interface Feedback {
  title: string;
  description: string;
  status: FeedbackStatus;
}
