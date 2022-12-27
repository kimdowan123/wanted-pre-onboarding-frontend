import './TodoList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { getTodo, deleteTodo, reviseTodo } from '../../../api/index';

function TodoList({ Todo, setTodo }) {
  const [userNumber, setUserNumber] = useState();
  const [reviseTextBox, setReviseText] = useState('');

  const reviseClick = (list) => {
    const box = { ...list };
    box.todo = reviseTextBox;
    reviseTodo(box).then(() => {
      getTodo().then((res) => {
        setTodo(res.data);
      });
    });
  };
  return (
    <div className="Todo-Container">
      {Todo.map((list, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div className="Todo-list" key={index}>
            {userNumber === list.id ? (
              <span>
                <input
                  className="revise-input"
                  defaultValue={list.todo}
                  onInput={(e) => {
                    setReviseText(e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="revise-BTN"
                  onClick={() => {
                    setUserNumber(0);
                  }}
                >
                  취소
                </button>

                <button
                  type="button"
                  className="revise-BTN"
                  onClick={() => {
                    setUserNumber(0);
                    const box = { ...list };
                    box.todo = reviseTextBox;
                    reviseTodo(box).then(() => {
                      getTodo().then((res) => {
                        setTodo(res.data);
                      });
                    });
                  }}
                >
                  확인
                </button>
              </span>
            ) : (
              <>
                {/* 완료 체크버튼 */}
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkIcon"
                  onClick={() => {
                    const box = { ...list };
                    box.isCompleted = !box.isCompleted;
                    reviseTodo(box).then(() => {
                      getTodo().then((res) => {
                        setTodo(res.data);
                      });
                    });
                  }}
                />
                <p className={list.isCompleted === false ? null : 'line-on'}>
                  {list.todo}
                </p>
                {/* 수정버튼 */}
                <FontAwesomeIcon
                  icon={faPencil}
                  className="pencilIcon"
                  onClick={() => {
                    setUserNumber(list.id);
                  }}
                />
                {/* 삭제버튼 */}
                <FontAwesomeIcon
                  icon={faTrash}
                  className="trashIcon"
                  onClick={() => {
                    const todoID = list.id;
                    deleteTodo(todoID).then(() => {
                      getTodo().then((res) => {
                        setTodo(res.data);
                      });
                    });
                  }}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default TodoList;
