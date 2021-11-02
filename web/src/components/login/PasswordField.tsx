import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const PasswordField: FC = () => {
  const [revealPassword, setRevealPassword] = useState(false);

  const onClickReveal = () => {
    setRevealPassword((revealPassword) => !revealPassword);
  };

  return (
    <FormControl id="password">
      <Flex justify="space-between">
        <FormLabel>Password</FormLabel>
        <Box
          as="a"
          color={mode("blue.600", "blue.200")}
          fontWeight="semibold"
          fontSize="sm"
        >
          Forgot Password?
        </Box>
      </Flex>
      <InputGroup>
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            variant="ghost"
            aria-label={revealPassword ? "Mask password" : "Reveal password"}
            icon={revealPassword ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          name="password"
          type={revealPassword ? "text" : "password"}
          autoComplete="current-password"
          required
        />
      </InputGroup>
    </FormControl>
  );
};

export default PasswordField;
