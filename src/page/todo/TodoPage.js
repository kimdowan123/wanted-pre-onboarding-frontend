import '../todo/TodoPage.scss';
import { useEffect, useState } from 'react';
import getData from '../../api/getData'
import LogoutBtn from './components/LogoutBtn'
import TodoProducer from './components/TodoProducer'
import TodoList from './components/TodoList'

function TodoPage() {
   
    const [Todo, setTodo] = useState([]);

    useEffect(() => {
        getData(setTodo);
    }, []);

    return (
        <div className='TodoPage'>
            <div style={{ height: '1px' }}></div>

            <LogoutBtn />

            <TodoProducer Todo={Todo} setTodo={setTodo} />
           
            <TodoList Todo={Todo} setTodo={setTodo}></TodoList>
        </div>
    )
} export default TodoPage;


