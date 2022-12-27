import './TodoList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { deleteTodo, reviseTodo } from '../../../api/index';

function TodoList({ Todo, setTodo }) {
  const [userNumber, setUserNumber] = useState();
  const [reviseTextBox, setReviseText] = useState('');

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
                    reviseTodo(list);
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
                    reviseTodo(list);
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
                    deleteTodo(todoID);
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
