import './App.css';
import BasicLayout from './components/layouts/basicLayout';
import QuizComponent from './components/quiz/quizComponent';
import QuizSelection from './components/quiz/quizSelection';
import QuizCompletion from './components/quiz/quizCompletion';
import {QuizStore} from './stores/quizStore';

function App() {

    return (
        <BasicLayout>
            {/* router output here. For now, render quizView below */}
            <QuizCompletion correctAnswers={3} questionAmount={10}/>
            <QuizSelection quizStore={QuizStore}/>
            <QuizComponent/>
        </BasicLayout>
    );
}

export default App;
