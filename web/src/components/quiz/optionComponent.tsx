import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useColors } from "../../hooks/useColors";
import Answer from "../../model/answer";

interface optionProps {
  indexString?: string;
  answer: Answer;
  disabled: boolean;
  onClick: (answer: Answer) => void;
}

const Option: FC<optionProps> = ({
  indexString,
  answer,
  disabled,
  onClick,
}) => {
  const { optionBg, optionBgHover } = useColors();

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
      bg={optionBg}
      disabled={disabled}
      _hover={{ backgroundColor: optionBgHover }}
      fontWeight="normal"
      justifyContent="start"
      onClick={(e) => onClick(answer)}
    >
      {answer.text}
    </Button>
  );
};

export default Option;
