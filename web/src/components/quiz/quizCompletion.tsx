import {Box, HStack, Text, VStack, Button, Stack, Center} from '@chakra-ui/react';
import {FC} from 'react';

interface completionProp {
    correctAnswers: number,
    questionAmount: number
}

const QuizCompletion: FC<completionProp> = ({correctAnswers, questionAmount}) => {
    return (
        <Box>
            <Text align={"center"}>10 gode spørgsmål om DevOps</Text>
            <Text mt={75} align={"center"}>Tillykke du er færdig</Text>
            <Text mt={100} align={"center"}>{correctAnswers}/{questionAmount} korrekte svar</Text>
            <Center mt={150}>
                <Button>Afslut Quiz</Button>
            </Center>
        </Box>
    )
}

export default QuizCompletion;
