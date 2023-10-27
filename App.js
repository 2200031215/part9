import TodoList from './components/TodoList';
import React from 'react';
const todosData = [
{title: 'Learn React', completed: false},
{title: 'Build a Todo App', completed: true}, 
{title: 'Read a Book', completed: false}, 
]
  function App() {
  return (
    <div>
      <h1>Todo App</h1>
    <TodoList todos={todosData}/>
    </div>
  );
}
export default App;
