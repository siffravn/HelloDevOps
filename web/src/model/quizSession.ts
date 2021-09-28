import { Answer } from "./answer";
import { Question } from "./question";
import { Quiz } from "./quiz";

export type QuizSession = {
  userId: number;
  quiz: Quiz;
  answers: Map<Question, Answer>;
};
