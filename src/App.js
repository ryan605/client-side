// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Signup from './components/SignUp';
import Todo from './components/Todo';
import TodoItems from './components/TodoItems';


function App() {
  return (
    <div>
      <Todo/>
      <Signup/>
      <TodoItems/>
      <Login/>
    </div>
  )
}

export default App;
