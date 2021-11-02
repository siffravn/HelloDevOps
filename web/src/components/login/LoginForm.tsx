import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { FC } from "react";
import { PasswordField } from "./PasswordField";

const LoginForm: FC = () => {
  return (
    // this should be wrapped in some sort of form element and login should be
    // handled in the onSubmit method
    <Stack spacing="6">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Sign in
      </Button>
    </Stack>
  );
};

export default LoginForm;
