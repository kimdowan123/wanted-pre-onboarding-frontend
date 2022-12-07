import './TodoList.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import deleteData from '../../../api/deleteData';
import reviseCheck from '../../../api/reviseCheck';
import reviseText from '../../../api/reviseText';



function TodoList({ Todo, setTodo }) {

    const [userNumber, setUserNumber] = useState();
    const [reviseTextBox, setReviseText] = useState('');

    return (
        <div className='Todo-Container'>
            <div style={{ height: "1px" }}></div>
            {
                Todo.map((list, index) => {
                    return (
                        <div className='Todo-list' key={index}>
                            {
                                userNumber === list.id ? <span><input className='revise-input' defaultValue={list.todo} onInput={(e) => {
                                    setReviseText(e.target.value)
                                }} /> 
                                    <button className='revise-BTN' onClick={() => {
                                        setUserNumber(0)
                                    }}>취소</button>

                                    <button className='revise-BTN' onClick={() => {
                                        const listBox = list
                                        reviseText(listBox, reviseTextBox, setTodo, setUserNumber)
                                    }}>확인</button></span> :
                                    <>
                                        {/* 완료 체크버튼 */}
                                        <FontAwesomeIcon icon={faCheck} className='checkIcon' onClick={() => {
                                            const listBox = list
                                            reviseCheck(setTodo, listBox)
                                        }} />
                                        <p className={list.isCompleted === false ? null : "line-on"}>{list.todo}</p>
                                        {/* 수정버튼 */}
                                        <FontAwesomeIcon icon={faPencil} className="pencilIcon" onClick={() => {
                                            setUserNumber(list.id)
                                        }} />
                                        {/* 삭제버튼 */}
                                        <FontAwesomeIcon icon={faTrash} className="trashIcon" onClick={() => {
                                            const listId = list.id
                                            deleteData(setTodo, listId)
                                        }} />
                                    </>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
} export default TodoList;