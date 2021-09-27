import { Heading, List, ListItem, Stack } from '@chakra-ui/layout';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { QuizStoreImpl } from '../stores/quizStore';

interface Props {
    quizStore: QuizStoreImpl
}

const QuizView: FC<Props> = observer(({ quizStore }) => {

    return (
        <>
            {quizStore.quizes.map(quiz => (
                <Stack spacing={5} key={quiz.id}>
                <Heading>{quiz.title}</Heading>
                <section>
                    <List>
                        <ListItem>Category: {quiz.category}</ListItem>
                        <ListItem>Description: {quiz.description}</ListItem>
                    </List>
                </section>
                </Stack>
            ))}
        </>
    );
});

export default QuizView;