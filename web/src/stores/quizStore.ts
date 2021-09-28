import { makeObservable, observable, action } from "mobx";
import Quiz from "../model/quiz";

export class QuizStoreImpl {

    quizes: Quiz[] = [];

    constructor() {
        makeObservable(this, {
            quizes: observable,
            addQuiz: action,
            getQuiz: action,
        });
    }

    addQuiz(quiz: Quiz) {
        this.quizes.push(quiz);
    }

    getQuiz(id: number) {
        return this.quizes.find(quiz => quiz.id === id)
    }
}

export const QuizStore = new QuizStoreImpl();

 //Create a test quiz. Only temporary for mock data.
 const testQuiz1: Quiz = {
    id: 1,
    title: "DevOps quizzen",
    category: "DevOps",
    description: "En quiz om DevOps",
    createdBy: 1,
    questions: [
      {
        description: "Hvilket problem forsøger DevOps at løse?",
        answers: [
          {
            text: "Lange deployment cycles",
            isCorrect: false
          },
          {
            text: "Skrøbelig infrastruktur og applikationskode",
            isCorrect: false
          },
          {
            text: "Ineffektive eller uddaterede applikationer",
            isCorrect: false
          },
          {
            text: "Alle ovenstående",
            isCorrect: true
          }
        ]
      },
      {
          description: "nyt spørgsmål",
          answers: [
              {
                  text: "test",
                  isCorrect: false
              },
              {
                  text: "test2",
                  isCorrect: true
              }
          ]
      }
    ]
  }

  //Add test quiz to store. Only temporary for mock data.
  QuizStore.addQuiz(testQuiz1);