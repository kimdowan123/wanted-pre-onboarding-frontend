import axios from 'axios';

export default function signIn(Id, Pw) {
  axios({
    method: 'post',
    url: 'https://pre-onboarding-selection-task.shop/auth/signin',
    headers: { 'Content-Type': 'application/json' },
    data: {
      email: Id,
      password: Pw,
    },
  })
    .then((response) => {
      localStorage.setItem('access_token', response.data.access_token);
      window.location.reload();
      console.log('로그인성공');
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
}
