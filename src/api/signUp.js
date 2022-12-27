import axios from 'axios';

export default function signUp(signUpId, signUpPw, setModal) {
  axios({
    method: 'post',
    url: 'https://pre-onboarding-selection-task.shop/auth/signup',
    headers: { 'Content-Type': 'application/json' },
    data: {
      email: signUpId,
      password: signUpPw,
    },
  })
    .then((response) => {
      alert('회원가입을 완료하셧습니다.');
      setModal(false);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
}
