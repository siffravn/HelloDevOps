import { Button } from "@chakra-ui/react";
import { FC } from "react";
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
  const { optionBg, optionBgHover, optionCorrect } = useColors();

  return (
    // <HStack
    //   bg={optionBg}
    //   _hover={{ backgroundColor: optionBgHover, cursor: "pointer" }}
    //   p={2}
    //   rounded="md"
    // >
    //   <Text>{answer.text}</Text>
    // </HStack>
    <Button
      bg={!isAnswered ? optionBg : answer.isCorrect ? optionCorrect : optionBg}
      _hover={{ backgroundColor: optionBgHover }}
      fontWeight="normal"
      justifyContent="start"
      onClick={(e) => !isAnswered && onClick(answer)}
    >
      {answer.text}
    </Button>
  );
};

export default Option;
