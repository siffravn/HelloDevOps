import { Heading, Stack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Answer } from "../../model/answer";
import { Question } from "../../model/question";
import Option from "./optionComponent";

interface questionProp {
  question: Question;
}

const QuestionComponent: FC<questionProp> = ({ question }) => {
  //const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState<Answer | null>(null);

  return (
    <div>
      <Heading size="md">{question.description}</Heading>
      <Stack spacing={2}>
        {question.answers.map((answer, i) => (
          <Option
            answer={answer}
            userAnswer={userAnswer}
            onClick={(answer) => !userAnswer && setUserAnswer(answer)}
            key={i}
          />
        ))}
      </Stack>
    </div>
  );
};

export default QuestionComponent;
