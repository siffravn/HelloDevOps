import { Button } from "@chakra-ui/button";
import { Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import { observer } from "mobx-react-lite";
import { FC, useCallback, useMemo, useState } from "react";
import { QuizStore } from "../../stores/quizStore";
import QuestionComponent from "./questionComponent";
import { QuizSession } from "../../model/quizSession";
import { Question } from "../../model/question";
import { Answer } from "../../model/answer";

const QuizComponent: FC = observer(() => {
  const quiz = QuizStore.getQuiz(1); //TODO: quiz id should be read from route

  if (!quiz) return <></>;

  const [quizSession, setQuizSession] = useState<QuizSession>({
    quiz: quiz,
    userId: 1,
    answers: new Map<Question, Answer>(),
  });

  const [question, setQuestion] = useState(quiz?.questions[0]);

  const currentQuestionIndex = useMemo(
    () => quiz?.questions.findIndex((q) => q === question) ?? 0,
    [quiz, question]
  );

  const changeQuestion = useCallback(
    (index: number) => {
      quiz?.questions[index] && setQuestion(quiz.questions[index]);
    },
    [quiz, setQuestion]
  );

  //useEffect(() => console.log(question), [question]);

  return (
    <>
      {quiz && question && (
        <Stack>
          <Heading size="md">{quiz.title}</Heading>
          <QuestionComponent question={question} />
          <Text>{`Question ${currentQuestionIndex + 1}/${
            quiz.questions.length
          }`}</Text>
          <HStack>
            <Button onClick={() => changeQuestion(currentQuestionIndex - 1)}>
              Previous
            </Button>
            <Button onClick={() => changeQuestion(currentQuestionIndex + 1)}>
              Next
            </Button>
          </HStack>
        </Stack>
      )}
    </>
  );
});

export default QuizComponent;
