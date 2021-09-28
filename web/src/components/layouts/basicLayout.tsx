import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";
import Header from "../header/header";

const BasicLayout: FC = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container maxW="container.lg" p={0}>
        <Box p={[2, 5, 10]}>
          <main>{children}</main>
        </Box>
      </Container>
    </Box>
  );
};

export default BasicLayout;
