import { useEffect, useState } from 'react';
import { getTodo } from '../../api/index';
import LogoutBtn from './components/LogoutBtn';
import TodoProducer from './components/TodoProducer';
import TodoList from './components/TodoList';
import { Container } from '../../styles/global';

function TodoPage() {
  const [Todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo().then((res) => {
      setTodo(res.data);
    });
  }, []);

  return (
    <Container>
      <LogoutBtn />
      <TodoProducer Todo={Todo} setTodo={setTodo} />
      <TodoList Todo={Todo} setTodo={setTodo} />
    </Container>
  );
}
export default TodoPage;
