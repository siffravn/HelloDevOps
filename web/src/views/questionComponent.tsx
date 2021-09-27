import { Heading, Stack } from '@chakra-ui/layout';
import {Box, HStack, VStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Question from "../model/question";
import Answer from "../model/answer";

interface optionProps {
    answer: Answer
}

interface questionProp {
    question: Question
}

const Option: FC<optionProps> = ({answer}) => {
    return (
        <Box>
            <HStack>
                <h3>{answer.text}</h3>
                <Text>{answer.text}</Text>
            </HStack>
        </Box>
    )
}

const QuestionComponent: FC<questionProp> =  ({question}) => {
    return (
        <div>
            <h1>{question.description}</h1>
            <VStack spacing={5}>
                {
                    question.answers.map(answer => (
                        <Option
                            answer={answer}
                        />
                    ))
                }
            </VStack>
        </div>
    );
}

export default QuestionComponent;