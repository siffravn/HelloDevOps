import { Box, Flex, Heading, List, ListItem, Stack } from '@chakra-ui/layout';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useColors } from '../../../hooks/useColors';
import Quiz from '../../../model/quiz';
import { QuizStoreImpl } from '../../../stores/quizStore';

interface Props {
    quiz: Quiz
}

const QuizSelectionItem: FC<Props> = observer(({ quiz }) => {
  const { headerBg } = useColors();


    return (
        <Flex w="sm" bgColor={headerBg} m={5} p={2} borderRadius="lg" borderWidth={2} boxShadow="lg" borderColor="black">
            <Stack borderRadius={5} borderColor="black" spacing={5} key={quiz.id}>
                <Heading>{quiz.title}</Heading>
                <List>
                    <ListItem>Category: {quiz.category}</ListItem>
                    <ListItem>Description: {quiz.description}</ListItem>
                </List>
            </Stack>
        </Flex>
    );
});

export default QuizSelectionItem;