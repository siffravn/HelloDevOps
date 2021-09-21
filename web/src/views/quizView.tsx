import { Box, Heading, Stack } from '@chakra-ui/layout';
import { FC } from 'react';

const QuizView: FC =  () => {
    return (
        <Stack spacing={5}>
            <Heading>Vælg en quiz</Heading>
            <section>
                <Box>Indhold her...</Box>
            </section>
        </Stack>
    );
}

export default QuizView;