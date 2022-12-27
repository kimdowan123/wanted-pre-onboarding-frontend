import axios from 'axios';
import getData from './getData';

export default function addData(myText, setTodo) {
  const accessToken = localStorage.getItem('access_token');

  axios({
    method: 'post',
    url: 'https://pre-onboarding-selection-task.shop/todos',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    data: { todo: myText },
  })
    .then((response) => {
      getData(setTodo);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
}
