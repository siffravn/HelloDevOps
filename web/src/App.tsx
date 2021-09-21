import './App.css';
import BasicLayout from './components/layouts/basicLayout';
import QuizView from './views/quizView';

function App() {
  return (
    <BasicLayout>
      {/* router output here. For now, render quizView below */}
      <QuizView />
    </BasicLayout>
  );
}

export default App;
