import { useState } from 'react';
import styled from 'styled-components';
import { handleSignin } from '../../../api/index';
// import './SignIn.scss';

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
    <SignInContainer>
      <h1>로그인</h1>
      <Input
        type="text"
        placeholder="UserID"
        onInput={(e) => {
          const box = { ...userInfo };
          box.email = e.target.value;
          setUserInfo(box);
        }}
      />
      <Input
        type="password"
        placeholder="Password"
        onInput={(e) => {
          const box = { ...userInfo };
          box.password = e.target.value;
          setUserInfo(box);
        }}
      />
      <LoginBtn
        type="button"
        onClick={() => {
          loginFun();
        }}
      >
        Login
      </LoginBtn>

      <SignUpBtn>
        Not a member?
        <button
          type="button"
          className="loginAccountBtn"
          onClick={() => {
            // eslint-disable-next-line react/destructuring-assignment
            props.setModal(true);
          }}
        >
          Creat Account
        </button>
      </SignUpBtn>
    </SignInContainer>
  );
}
export default SignIn;

const SignInContainer = styled.div`
  background-color: white;
  text-align: center;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10%;
  padding-top: 20px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  h1 {
    padding: 15px;
    color: #666666;
  }
`;

const Input = styled.input`
  border: 1px solid #e9e9e9;
  background-color: #e9e9e9;
  width: 350px;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const LoginBtn = styled.button`
  width: 350px;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 0 auto;
  padding: 15px;
  background-color: orange;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: orangered;
  }
`;

const SignUpBtn = styled.div`
  margin-top: 20px;
  padding: 10px;
  color: #666666;

  button {
    background-color: white;
    font-weight: bold;
    font-size: 15px;
    border: none;
    margin-left: 10px;
    color: orange;
    cursor: pointer;
    &:hover {
      color: orangered;
    }
  }
`;
