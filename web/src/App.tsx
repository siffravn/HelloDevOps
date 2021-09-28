import BasicLayout from './components/layouts/basicLayout';
import QuizComponent from './components/quiz/quizComponent';
import QuizSelection from './components/quiz/quizSelection';

function App() {

  return (
    <BasicLayout>
      {/* router output here. For now, render quizView below */}
      <QuizSelection />
      <QuizComponent />
    </BasicLayout>
  );
}

export default App;
