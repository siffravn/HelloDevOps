import './App.css';
import BasicLayout from './components/layouts/basicLayout';
import QuizComponent from './components/quiz/quizComponent';
import QuizSelection from './components/quiz/quizSelection';
import { QuizStore } from './stores/quizStore';

function App() {

  return (
    <BasicLayout>
      {/* router output here. For now, render quizView below */}
      <QuizSelection quizStore={QuizStore} />
      <QuizComponent />
    </BasicLayout>
  );
}

export default App;
