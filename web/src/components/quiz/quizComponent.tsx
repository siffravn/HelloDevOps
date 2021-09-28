import {FC, useCallback, useMemo, useState} from "react";
import { observer } from "mobx-react-lite";
import QuestionComponent from "./questionComponent";
import { QuizStore } from "../../stores/quizStore";
import { Button } from "@chakra-ui/button";
import { Heading, HStack, Stack, Text } from "@chakra-ui/layout";

const QuizComponent: FC = observer(() => {

    const quiz = QuizStore.getQuiz(1); //TODO: quiz id should be read from route
    const [question, setQuestion] = useState(quiz?.questions[0])
    
    const currentQuestionIndex = useMemo(() => quiz?.questions.findIndex(q => q === question) ?? 0, [quiz, question]);

    const changeQuestion = useCallback((index: number) => {
        quiz?.questions[index] && setQuestion(quiz.questions[index]);
    }, [quiz, setQuestion]);

    return (
        <>
        {
            quiz && question && (
            <Stack>
                <Heading size="md">{quiz.title}</Heading>
                <QuestionComponent question={question}></QuestionComponent>
                <Text>{`Question ${currentQuestionIndex + 1}/${quiz.questions.length}`}</Text>
                <HStack>
                    <Button onClick={() => changeQuestion(currentQuestionIndex - 1)}>Previous</Button>
                    <Button onClick={() => changeQuestion(currentQuestionIndex + 1)}>Next</Button>
                </HStack>
            </Stack>
            )
        }
        </>
    );
});

export default QuizComponent;