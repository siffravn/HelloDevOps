import { Stack, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import Question from "../../model/question";
import Option from "./optionComponent";

interface questionProp {
    question: Question
}

const QuestionComponent: FC<questionProp> =  ({question}) => {
    return (
        <div>
            <Heading size="md">{question.description}</Heading>
            <Stack spacing={2}>
                {
                    question.answers.map((answer, i) => (
                        <Option
                            answer={answer}
                            key={i}
                        />
                    ))
                }
            </Stack>
        </div>
    );
}

export default QuestionComponent;