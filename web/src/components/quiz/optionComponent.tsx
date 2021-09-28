import { Button } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { useColors } from "../../hooks/useColors";
import { Answer } from "../../model/answer";

interface optionProps {
  indexString?: string;
  answer: Answer;
  userAnswer: Answer | null;
  isAnswered?: boolean;
  onClick: (answer: Answer) => void;
}

const Option: FC<optionProps> = ({
  indexString,
  userAnswer,
  answer,
  isAnswered,
  onClick,
}) => {
  const { optionBg, optionBgHover, optionCorrect, optionIncorrect } =
    useColors();

  const bgColor = useMemo(
    () =>
      !userAnswer
        ? optionBg
        : answer.isCorrect
        ? optionCorrect
        : userAnswer === answer
        ? optionIncorrect
        : optionBg,
    [userAnswer, answer, optionBg, optionCorrect, optionIncorrect]
  );

  return (
    <Button
      bg={bgColor}
      _hover={!userAnswer ? { backgroundColor: optionBgHover } : {}}
      fontWeight="normal"
      justifyContent="start"
      onClick={(e) => onClick(answer)}
    >
      {answer.text}
    </Button>
  );
};

export default Option;
