import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useColors } from '../../hooks/useColors';
import Answer from "../../model/answer";

interface optionProps {
    indexString?: string,
    answer: Answer
}

const Option: FC<optionProps> = ({indexString, answer}) => {

    const { optionBg } = useColors();

    return (
        <HStack bg={optionBg} p={2} rounded="md">
            <Text>{answer.text}</Text>
        </HStack>
    )
}

export default Option;
