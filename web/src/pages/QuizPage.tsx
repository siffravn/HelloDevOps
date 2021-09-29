import { FC } from 'react';
import { useParams } from 'react-router';
import BasicLayout from '../components/layouts/basicLayout';
import QuizComponent from '../components/quiz/quizComponent';
import QuizSelection from '../components/quiz/quizSelection';

type QuizPageProps = {
  quizId: string
}

const QuizPage: FC = () => {

  // get URL param 
  // Component should handle what happens based on the given parameter
  // If no parameter is given in the URL quizId will be undefined
  const { quizId } = useParams<QuizPageProps>();
  console.log("quizId", quizId)

  return (
    <BasicLayout>
      <QuizSelection />
      <QuizComponent />
    </BasicLayout>
   
  );
}

export default QuizPage;
