import './App.css';
import BasicLayout from './components/layouts/basicLayout';
import { QuizStore } from './stores/quizStore';
import QuizView from './views/quizView';

function App() {

  return (
    <BasicLayout>
      {/* router output here. For now, render quizView below */}
      <QuizView quizStore={QuizStore} />
    </BasicLayout>
  );
}

export default App;
