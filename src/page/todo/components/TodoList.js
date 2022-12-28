/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { ListContainer, MyList, Pencil, Trash, Check } from '../styled';
import { getTodo, deleteTodo, reviseTodo } from '../../../api/index';

function TodoList({ Todo, setTodo }) {
  const [reviseTextBox, setReviseText] = useState('');
  const [userNumber, setUserNumber] = useState();

  const reviseFun = (list) => {
    const box = { ...list };
    box.todo = reviseTextBox;
    reviseTodo(box).then(() => {
      getTodo().then((res) => {
        setTodo(res.data);
      });
    });
  };
  const checkFun = (list) => {
    const box = { ...list };
    box.isCompleted = !box.isCompleted;
    reviseTodo(box).then(() => {
      getTodo().then((res) => {
        setTodo(res.data);
      });
    });
  };
  const deleteFun = (list) => {
    const todoID = list.id;
    deleteTodo(todoID).then(() => {
      getTodo().then((res) => {
        setTodo(res.data);
      });
    });
  };
  return (
    <ListContainer>
      {Todo.map((list, index) => {
        return (
          <MyList key={index}>
            {userNumber === list.id ? (
              <>
                <input
                  defaultValue={list.todo}
                  onInput={(e) => {
                    setReviseText(e.target.value);
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    setUserNumber(0);
                  }}
                >
                  취소
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUserNumber(0);
                    reviseFun(list);
                  }}
                >
                  확인
                </button>
              </>
            ) : (
              <>
                {/* 완료 체크버튼 */}
                <Check
                  isCompleted={list.isCompleted}
                  onClick={() => {
                    checkFun(list);
                  }}
                />
                <p>{list.todo}</p>

                {/* 수정버튼 */}
                <Pencil
                  onClick={() => {
                    setUserNumber(list.id);
                  }}
                />

                {/* 삭제버튼 */}
                <Trash
                  onClick={() => {
                    deleteFun(list);
                  }}
                />
              </>
            )}
          </MyList>
        );
      })}
    </ListContainer>
  );
}
export default TodoList;
