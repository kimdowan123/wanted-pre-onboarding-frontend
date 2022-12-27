/** eslint-disable-next-line consistent-return */
import { instance } from '../utils/instance';
import { getToken } from '../utils/token';

export const getTodo = async () => {
  try {
    const response = await instance.get('/todos', {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  } catch (err) {
    // alert(err);
  }
};

export const addTodo = async (myText) => {
  const body = { todo: myText };
  try {
    const response = await instance.post('/todos', body, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  } catch (err) {
    // alert('s');
  }
};

export const deleteTodo = async (todoID) => {
  try {
    const response = await instance.delete(`/todos/${todoID}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  } catch (err) {
    // alert('err')
  }
};

export const reviseTodo = async (list) => {
  const body = { todo: list.todo, isCompleted: !list.isCompleted };
  try {
    const response = await instance.put(`/todos/${list.id}`, body, {
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (err) {
    //  alert('err')
  }
};
