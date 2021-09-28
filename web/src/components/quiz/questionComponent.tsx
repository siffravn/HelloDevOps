import { Stack, Heading } from "@chakra-ui/react";
import { FC, useState } from "react";
import Question from "../../model/question";
import Option from "./optionComponent";

interface questionProp {
  question: Question;
}

const QuestionComponent: FC<questionProp> = ({ question }) => {
  const [isAnswered, setIsAnswered] = useState(false);

  return (
    <div>
      <Heading size="md">{question.description}</Heading>
      <Stack spacing={2}>
        {question.answers.map((answer, i) => (
          <Option
            answer={answer}
            disabled={isAnswered}
            onClick={(answer) => setIsAnswered(true)}
            key={i}
          />
        ))}
      </Stack>
    </div>
  );
};

export default QuestionComponent;
