// import './TodoProducer.scss';
import { useState } from 'react';
import { TodoLogo, ProducerSection } from '../styled';
import { addTodo, getTodo } from '../../../api/index';

function TodoProducer({ Todo, setTodo }) {
  const [myText, setMyText] = useState('');
  const onReset = () => {
    setMyText('');
  };
  const updateData = () => {
    if (myText === '') {
      alert('값을 입력해주세요.');
    } else if (Todo.length < 6) {
      addTodo(myText).then(() => {
        getTodo().then((res) => {
          setTodo(res.data);
        });
      });
      onReset();
    } else {
      alert('7개 이하의 list가 입력가능합니다.');
    }
  };
  return (
    <>
      <TodoLogo>
        <h1>To-Do List</h1>
      </TodoLogo>
      <ProducerSection>
        <input
          type="text"
          value={myText}
          placeholder="+ Add New Todo..."
          onInput={(e) => {
            setMyText(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            updateData();
          }}
        >
          Add
        </button>
      </ProducerSection>
    </>
  );
}
export default TodoProducer;
