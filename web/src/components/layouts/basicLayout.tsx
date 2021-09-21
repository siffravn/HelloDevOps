import { Box, Container } from '@chakra-ui/layout';
import {FC} from 'react';
import Header from '../header/header';

const BasicLayout: FC =  ({children}) => {
    return (
        <Container maxW="container.lg" p={0}>
            <Header />
            <Box p={10}>
                <main>
                    {children}
                </main>
            </Box>
        </Container>
    );
}

export default BasicLayout;