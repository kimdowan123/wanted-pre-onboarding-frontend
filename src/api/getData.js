import axios from 'axios';

export default function getData(setTodo) {
  const accessToken = localStorage.getItem('access_token');
  axios({
    method: 'get',
    url: 'https://pre-onboarding-selection-task.shop/todos',
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((response) => {
      setTodo(response.data);
    })
    .catch((error) => {
      console.log(error.response.data.message);
    });
}
