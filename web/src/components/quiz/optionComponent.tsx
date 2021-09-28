import { Button } from "@chakra-ui/react";
import {FC, useCallback, useMemo, useState} from "react";
import { useColors } from "../../hooks/useColors";
import Answer from "../../model/answer";

interface optionProps {
  indexString?: string;
  answer: Answer;
  isAnswered: boolean;
  onClick: (answer: Answer) => void;
}

const Option: FC<optionProps> = ({
  indexString,
  answer,
  isAnswered,
  onClick,
}) => {
  const { optionBg, optionBgHover, optionCorrect, optionIncorrect } = useColors();
  const [selected, setSelected] = useState(false);

  const click = useCallback(() => {
    !isAnswered && onClick(answer);
    !isAnswered && setSelected(true);
  }, [setSelected])

  const color = useMemo(() =>
    !isAnswered ? optionBg : answer.isCorrect ? optionCorrect : selected ? optionIncorrect : optionBg,
      [isAnswered, selected]
)

  return (
    <Button
      bg={ color }
      _hover={!isAnswered ? { backgroundColor: optionBgHover } : {}}
      fontWeight="normal"
      justifyContent="start"
      onClick={(e) => click()}
    >
      {answer.text}
    </Button>
  );
};

export default Option;
