import { useState } from 'react';
import { handleSignin } from '../../../api/index';
import './SignIn.scss';

function SignIn(props) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const loginFun = () => {
    if (userInfo.email === '') {
      alert('Id를 입력해주세요.');
    } else if (userInfo.email.includes('@') === false) {
      alert('@을 포함한 이메일 형식으로 입력해주세요.');
    } else if (userInfo.email.includes('@') === true) {
      if (userInfo.password.length === 0) {
        alert('비밀번호를 입력해주세요.');
      } else if (userInfo.password.length < 8) {
        alert('비밀번호는 8자리이상입니다.');
      } else if (userInfo.password.length >= 8) {
        handleSignin(userInfo);
      }
    }
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1>CI/CD 테스트 임닙다</h1>
        <input
          type="text"
          placeholder="UserID"
          onInput={(e) => {
            const box = { ...userInfo };
            box.email = e.target.value;
            setUserInfo(box);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onInput={(e) => {
            const box = { ...userInfo };
            box.password = e.target.value;
            setUserInfo(box);
          }}
        />
        <button
          type="button"
          className="loginBtn"
          onClick={() => {
            loginFun();
          }}
        >
          Login
        </button>

        <div className="loginAccount">
          Not a member?{' '}
          <button
            type="button"
            className="loginAccountBtn"
            onClick={() => {
              // eslint-disable-next-line react/destructuring-assignment
              props.setModal(true);
            }}
          >
            {' '}
            Creat Account
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
