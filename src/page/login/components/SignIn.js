import { useState } from 'react';
import signIn from '../../../api/signIn';
import './SignIn.scss';

function SignIn(props) {
  const [Id, setId] = useState('');
  const [Pw, setPw] = useState('');

  const loginFun = () => {
    if (Id === '') {
      alert('Id를 입력해주세요.');
    } else if (Id.includes('@') === false) {
      alert('@을 포함한 이메일 형식으로 입력해주세요.');
    } else if (Id.includes('@') === true) {
      if (Pw.length === 0) {
        alert('비밀번호를 입력해주세요.');
      } else if (Pw.length < 8) {
        alert('비밀번호는 8자리이상입니다.');
      } else if (Pw.length >= 8) {
        signIn(Id, Pw);
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
            setId(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onInput={(e) => {
            setPw(e.target.value);
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
