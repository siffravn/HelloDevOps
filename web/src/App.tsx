import './App.css';
import BasicLayout from './components/layouts/basicLayout';
import { QuizStore } from './stores/quizStore';
import QuizSelection from './views/quizSelection';

function App() {

  return (
    <BasicLayout>
      {/* router output here. For now, render quizView below */}
      <QuizSelection quizStore={QuizStore} />
    </BasicLayout>
  );
}

export default App;
