import {FC, useState} from "react";
import {QuizStoreImpl} from "../stores/quizStore";
import { observer } from "mobx-react-lite";
import QuestionComponent from "./questionComponent";

interface Props {
    quizStore: QuizStoreImpl
}

const QuizComponent: FC<Props> = observer(({ quizStore }) => {
    const [quiz, setQuiz] = useState(quizStore.getQuiz(1))
    const [question, setQuestion] = useState(quiz?.questions[0])

    return (
        <>
        {
            quiz && (
            <div>
                <h1>{quiz.title}</h1>
                {
                    question && <QuestionComponent question={question}></QuestionComponent>
                }
            </div>
            )
        }
        </>
    );
});

export default QuizComponent;