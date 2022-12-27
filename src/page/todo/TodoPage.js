import './TodoPage.scss';
import { useEffect, useState } from 'react';
import { getTodo } from '../../api/index';
import LogoutBtn from './components/LogoutBtn';
import TodoProducer from './components/TodoProducer';
import TodoList from './components/TodoList';

function TodoPage() {
  const [Todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo(setTodo);
  }, []);

  return (
    <div className="TodoPage">
      <LogoutBtn />

      <TodoProducer Todo={Todo} setTodo={setTodo} />

      <TodoList Todo={Todo} setTodo={setTodo} />
    </div>
  );
}
export default TodoPage;
