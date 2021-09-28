import { useColorModeValue } from "@chakra-ui/react";

export const useColors = () => {
  const headerBg = useColorModeValue("gray.200", "gray.700");
  const optionBg = useColorModeValue("gray.200", "gray.700");
  const optionBgHover = useColorModeValue("gray.300", "gray.800");
  const optionCorrect = useColorModeValue("green.400", "green.600");

  return {
    headerBg,
    optionBg,
    optionBgHover,
    optionCorrect,
  };
};
