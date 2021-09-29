import { Heading, List, ListItem, Stack } from '@chakra-ui/layout';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { QuizStore, QuizStoreImpl } from '../../../stores/quizStore';
import QuizSelectionItem from './quizSelectionItem';


const QuizSelection: FC = observer( () => {

    return (
        <>
            {QuizStore.quizes.map(quiz => (
                <QuizSelectionItem key={quiz.id} quiz={quiz}/>
            ))}
            
        </>
    );
});

export default QuizSelection;