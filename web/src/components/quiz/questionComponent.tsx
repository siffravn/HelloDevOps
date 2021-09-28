import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import Option from "./optionComponent";
import Question from "../../model/question";

interface questionProp {
    question: Question
}

const QuestionComponent: FC<questionProp> =  ({question}) => {
    return (
        <div>
            <h1>{question.description}</h1>
            <VStack spacing={5}>
                {
                    question.answers.map((answer, i) => (
                        <Option
                            answer={answer}
                            key={i}
                        />
                    ))
                }
            </VStack>
        </div>
    );
}

export default QuestionComponent;