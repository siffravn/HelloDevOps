import { IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { FC } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ColorModeBtn: FC = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<BiMoon />, <BiSun />);

  return (
    <IconButton
      aria-label="Switch color mode"
      size="sm"
      icon={icon}
      onClick={toggleColorMode}
      rounded="full"
    />
  );
};

export default ColorModeBtn;
