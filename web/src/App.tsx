import './App.css';
import BasicLayout from './components/layouts/basicLayout';
import QuizComponent from './components/quiz/quizComponent';
import QuizSelection from './components/quiz/QuizSelection/quizSelection';
import { QuizStore } from './stores/quizStore';
import { FC } from 'react';
import  QuizPage from './pages/QuizPage'
import  NotFoundPage from './pages/NotFoundPage'
import  HomePage from './pages/HomePage'
import { Route, Switch } from "react-router-dom";

const App: FC = () => {
  document.title = "YouQuiz"
  return (
    <Switch>
     <Route exact path="/" component={HomePage} />
     <Route exact path="/quiz" component={QuizPage} />
     <Route exact path="/quiz/:quizId" component={QuizPage} />
     <Route exact component={NotFoundPage}></Route>
    </Switch>
  );
}

export default App;