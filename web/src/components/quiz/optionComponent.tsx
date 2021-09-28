import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import Answer from "../../model/answer";

interface optionProps {
    answer: Answer
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

export default Option;
